import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Overlay } from 'features';
import { SideBar, SearchBar } from 'features';
import { setSideMenu } from 'state/actions/ControlActions';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import mq from '@bupa-digital/shades/utils.mq';
import { Icon, asRem, Theme, ThemeUI, ThemeColors } from 'utils/common-ui';

const ContainerFixed = shades.div({
  position: 'fixed',
  width: '100%',
  top: 0,
  left: 0,
  zIndex: ThemeUI.zIndex.header,
  background: ThemeColors.red,
  borderBottom: `2px solid ${ThemeColors.redDark}`
});

const Header = shades.header({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: asRem(40),
  marginLeft: 'auto',
  zIndex: ThemeUI.zIndex.med,
  background: ThemeColors.red,
  [mq()
    .screen()
    .from(Theme.mq.md)]: {
    width: '100%'
  },
  [mq()
    .screen()
    .from(Theme.mq.lg)]: {
    width: asRem(980),
    margin: '0 auto'
  }
});

const ButtonMenu = shades.button({
  margin: 0,
  padding: 0,
  border: 'none',
  background: 'none',
  padding: asRem(8),
  color: 'white',
  display: 'none',
  [style.prop('isVisible')]: {
    display: 'block'
  },
  [style.hover]: {
    background: ThemeColors.redDark,
    cursor: 'pointer'
  },
  [style.focus]: {
    border: 'none'
  }
});

const LabelMenu = shades.button({
  position: 'relative',
  left: 0,
  margin: '0 auto',
  padding: `${asRem(4)} ${asRem(8)}`,
  color: ThemeColors.white,
  textAlign: 'center',
  lineHeight: asRem(24),
  fontSize: asRem(14),
  border: 'none',
  borderRadius: '4px',
  fontWeight: 700,
  textTransform: 'uppercase',
  background: ThemeColors.redDark,
  [style.prop('isActive')]: {
    left: asRem(2)
  }
});

const Left = shades.div({
  display: 'flex',
  justifycontent: 'space-between',
  alignItems: 'center'
});

const HeaderSection = shades.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'row',
  [style.prop('isOne')]: {
    justifycontent: 'center'
  }
});

class HeaderBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      search: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  toggleMenu() {
    this.props.setSideMenu();
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.setState({
        isVisible: true
      });
    } else {
      this.setState({
        isVisible: false
      });
    }
  }

  handleSearch() {
    this.setState({ search: !this.state.search });
  }

  render() {
    return (
      <ContainerFixed>
        <Header>
          <HeaderSection isOne={!this.props.loggedIn}>
            <ButtonMenu
              onClick={() => this.props.history.push('/home')}
              isVisible={this.props.loggedIn}
            >
              <Icon name="home" />
            </ButtonMenu>

            <LabelMenu isActive={this.props.loggedIn}>Do you even</LabelMenu>
            <Left>
              <ButtonMenu
                onClick={this.handleSearch}
                isVisible={this.props.loggedIn}
              >
                <Icon name="search" />
              </ButtonMenu>
              <ButtonMenu
                onClick={this.toggleMenu}
                isVisible={this.props.loggedIn}
              >
                <Icon name={this.props.sideMenu ? 'close' : 'menu'} />
              </ButtonMenu>
            </Left>
          </HeaderSection>
          <SearchBar
            onPressClose={this.handleSearch}
            isActive={this.state.search}
            data={this.props.programs}
          />
          <SideBar
            setSideMenu={() => this.props.setSideMenu()}
            onClose={this.toggleMenu}
            data={this.props.user}
            isActive={this.props.sideMenu}
          />
          <Overlay onClick={this.toggleMenu} isActive={this.props.sideMenu} />
        </Header>
      </ContainerFixed>
    );
  }
}

const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    user: state.auth,
    programs: state.program.items,
    sideMenu: state.controls.isExpanded
  }),
  mapDispatchToProps: dispatch => ({
    setSideMenu: () => dispatch(setSideMenu())
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(HeaderBarContainer);

export const HeaderBar = withRouter(ConnectAppContainer);
