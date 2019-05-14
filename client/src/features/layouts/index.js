import React from 'react';
import { history } from 'state/store';
import { Controls } from 'utils/components';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import {
  asRem,
  Section,
  Heading,
  Icon,
  ThemeColors,
  GridContainer,
  Theme
} from 'utils/common-ui';

const Button = shades.button({
  border: 'none',
  background: 'none',
  display: 'block',
  fontFamily: Theme.font.defaultFamily,
  fontWeight: 400,
  lineHeight: asRem(24),
  float: 'right',
  fontSize: asRem(16),
  marginBottom: 0,
  paddingLeft: 0,
  verticalAlign: 'middle',
  color: ThemeColors.red,
  [style.hover]: {
    color: ThemeColors.redDark,
    cursor: 'pointer'
  }
});

export const Back = ({ path = '/home' }) => {
  const handleNavigate = () => {
    history.push(path);
  };
  return (
    <Controls>
      <Button push={0} onClick={handleNavigate}>
        <Icon name="arrow_back" /> Back
      </Button>
    </Controls>
  );
};

export const Layout = ({
  children,
  title,
  path,
  grid = false,
  basic = true,
  asTheme
}) => {
  const render = (
    <React.Fragment>
      <Back path={path} />
      {!basic && (
        <Section verticalPush={8}>
          {title && title.length > 0 && (
            <Heading color={asTheme ? asTheme : 'inherit'}>{title}</Heading>
          )}
          {children}
        </Section>
      )}
      {basic && (
        <React.Fragment>
          <Heading color={asTheme ? asTheme : 'inherit'}>{title}</Heading>
          {children}
        </React.Fragment>
      )}
    </React.Fragment>
  );
  return (
    <GridContainer>
      {grid && children}
      {!grid && render}
    </GridContainer>
  );
};
