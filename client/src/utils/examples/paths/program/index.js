import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import style from '@bupa-digital/shades/utils.style/compat';
import { programDelete, programSetDefault } from 'state/actions/ProgramActions';
import { FooterNav } from 'features';
import { Layout } from 'features';
import { Edit, Controls, Notes } from 'utils/components';
import { Label, asRem, Icon, Box, ThemeColors } from 'utils/common-ui';
import shades from '@bupa-digital/shades/react';

const ControlGroup = shades.div({
  position: 'absolute',
  right: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

const StyledCircle = shades.button({
  padding: asRem(8),
  background: ThemeColors.white,
  display: 'block',
  border: 'none',
  boxSizing: 'border-box',
  color: ThemeColors.greyBorder,
  [style.hover]: {
    cursor: 'pointer',
    opacity: '0.8'
  }
});

class ProgramPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: true
    };
    this.handleSetDefault = this.handleSetDefault.bind(this);
  }

  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/auth');
    }
  }

  handleSetDefault(id) {
    this.props.programSetDefault(id);
  }

  renderItem() {
    const itemObj = this.props.selectedProgram;
    return (
      <Box pull={48} push={24}>
        <ControlGroup>
          <StyledCircle onClick={() => this.handleSetDefault(itemObj)}>
            <Icon name="settings" />
          </StyledCircle>
        </ControlGroup>
        <span>Name: {itemObj.name ? itemObj.name : 'No name provided'}</span>
        <span>
          Duration:{' '}
          {itemObj.duration
            ? `${itemObj.duration} ${
                itemObj.duration.length > 1 ? 'weeks' : 'week'
              }`
            : 'No duration provided'}
        </span>
        <span>
          Days: {itemObj.days ? `${itemObj.days} days` : 'No days provided'}
        </span>
        <div style={{ marginTop: '24px' }}>
          <Label>Notes:</Label>
        </div>
        {itemObj.notes ? <Notes>{itemObj.notes}</Notes> : ''}
      </Box>
    );
  }

  render() {
    return (
      <Layout path="/programs" basic asTheme={ThemeColors.grey} title="Program">
        {this.renderItem()}
        <FooterNav
          isActive={true}
          items={1}
          primaryText={'Edit'}
          primaryIcon={'edit'}
          onPressPrimary={() => this.props.history.push('/program-add')}
        />
      </Layout>
    );
  }
}

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    selectedProgram: state.program.selectedProgram,
    defaultProgram: state.program.defaultProgram
  }),
  mapDispatchToProps: dispatch => ({
    programDelete: id => dispatch(programDelete(id)),
    programSetDefault: data => dispatch(programSetDefault(data))
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(ProgramPage);

export default withRouter(ConnectAppContainer);
