import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStateHandlers, lifecycle } from 'recompose';
import { updateStatus, fetchStatus } from './state/actions';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { Heading, Theme, asRem, Icon, ThemeColors } from 'utils/common-ui';

const panelItems = [
  {
    id: 0,
    title: 'Feeling',
    content: 'How are you feeling today?',
    range: 5
  },
  {
    id: 1,
    title: 'Sleep',
    content: 'How much sleep did you get last night?',
    range: 8
  },
  {
    id: 2,
    title: 'Nutrition',
    content: '',
    range: 0
  }
];

const PanelSliderControls = shades.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
});

const PanelContent = shades.p({
  color: ThemeColors.shadeDark,
  fontFamily: Theme.font.defaultFamily,
  lineHeight: asRem(24),
  fontSize: asRem(18)
});

const PanelSliderButton = shades.button({
  padding: asRem(14),
  background: ThemeColors.red,
  fontSize: asRem(16),
  borderRadius: Theme.border.defaultRadius,
  color: ThemeColors.white,
  border: 'none',
  cursor: 'pointer',
  [style.hover]: {
    background: ThemeColors.redDark
  },
  [style.focus]: {
    cursor: 'pointer'
  }
});

const PanelSlider = shades.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  background: ThemeColors.white,
  minHeight: asRem(300)
});

const StatusContainer = shades.div({
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  left: 0,
  display: 'none',
  width: '100%',
  height: '100%',
  background: ThemeColors.white,
  [style.prop('isActive')]: {
    display: 'block'
  }
});

const Container = shades.div({
  padding: asRem(24),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%'
});

const Controls = shades.div({
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  height: asRem(48),
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
});

const StatusButton = shades.button({
  borderRadius: '50%',
  verticalAlign: 'middle',
  marginLeft: 'auto',
  border: 0,
  padding: asRem(4),
  color: ThemeColors.shadeLight,
  background: ThemeColors.ghost,
  [style.hover]: {
    color: ThemeColors.shadeDark
  },
  [style.focus]: {
    cursor: 'pointer'
  }
});

const statusPanel = withStateHandlers(
  ({ currentPanel = 1 }) => ({
    currentPanel
  }),
  {
    setActivePanel: state => currentPanel => ({
      ...state,
      currentPanel
    })
  }
);

const StatusPanel = statusPanel(
  ({ currentPanel, setActivePanel, onClose, status, isActive }) => {
    const handleBack = () => {
      if (currentPanel <= 0) return;
      setActivePanel(currentPanel - 1);
    };
    const handleNext = () => {
      if (currentPanel >= currentPanel && currentPanel.length - 1) {
        onClose(true);
      }
      setActivePanel(currentPanel + 1);
    };
    const activePanel =
      panelItems && panelItems[currentPanel] ? panelItems[currentPanel] : {};
    return (
      <StatusContainer isActive={isActive}>
        <Container>
          <Controls>
            <StatusButton onClick={onClose}>
              <Icon name="close" />
            </StatusButton>
          </Controls>
          <PanelSlider>
            <Heading align="center">What's Your Status?</Heading>
            <Heading align="center">{activePanel.title}</Heading>
            <PanelContent>{activePanel.content}</PanelContent>
            <PanelSliderControls>
              <PanelSliderButton onClick={handleBack}>Back</PanelSliderButton>
              <PanelSliderButton onClick={handleNext}>Next</PanelSliderButton>
            </PanelSliderControls>
          </PanelSlider>
        </Container>
      </StatusContainer>
    );
  }
);

export const StatusLife = lifecycle({
  componentDidMount() {
    this.setState({
      isActive: this.props.isActive
    });
  },
  componentDidUpdate(prevProps) {
    if (this.props.status !== prevProps.status) {
      this.setState({
        status: this.props.status || {}
      });
    }
  }
})(StatusPanel);

const connectApp = {
  mapStateToProps: state => ({
    status: state.status
  }),
  mapDispatchToProps: dispatch => ({
    updateStatus: status => dispatch(updateStatus(status)),
    fetchStatus: () => dispatch(fetchStatus())
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(StatusLife);

export const StatusBar = withRouter(ConnectAppContainer);
