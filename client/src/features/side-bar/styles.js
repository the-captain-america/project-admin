import React from 'react';
import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import mq from '@bupa-digital/shades/utils.mq';
import { asRem, Icon, Theme, ThemeColors } from 'utils/common-ui';

const Complete = () => {
  const Container = shades.div({
    display: 'block',
    color: ThemeColors.grey,
    fontWeight: 300,
    [style.hover]: {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  });
  return (
    <Container>
      <span>Complete your profile</span>
    </Container>
  );
};

const Avatar = ({ src, user }) => {
  const Container = shades.div({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [style.hover]: {
      textDecoration: 'underline'
    }
  });
  const ImageBox = shades.span({
    borderRadius: '50%',
    padding: asRem(8),
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: asRem(40),
    height: asRem(40)
  });

  const ImageItem = shades.img({
    display: 'block',
    objectFit: 'cover',
    width: asRem(8),
    height: asRem(8)
  });

  const UserDetails = shades.span({
    display: 'block',
    color: ThemeColors.red,
    fontSize: asRem(14),
    fontFamily: Theme.font.defaultFamily,
    textAlign: 'left',
    marginleft: asRem(16),
    fontWeight: 700
  });

  const { displayName } = user;
  return (
    <Container>
      <ImageBox>
        <img alt="profile" src={src} />
      </ImageBox>
      <UserDetails>
        {displayName ? `Hi, ${displayName}!` : <Complete />}
      </UserDetails>
    </Container>
  );
};

const SideAvatar = ({
  src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/811583/shield-developer.png',
  isActive = false,
  user,
  onPress
}) => {
  const Container = shades.div({
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  });
  const ItemContainer = shades.div({
    padding: asRem(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'center'
  });
  return (
    <Container onClick={onPress}>
      {isActive ? (
        <Avatar src={src} user={user} />
      ) : (
        <ItemContainer>
          <Icon name="person" />
        </ItemContainer>
      )}
    </Container>
  );
};

const Close = shades.button({
  padding: asRem(8),
  border: 'none',
  position: 'absolute',
  background: 'none',
  display: 'block',
  right: 0,
  top: 0,
  verticalAlign: 'middle',
  color: ThemeColors.redDark
});

const Side = shades.div({
  width: asRem(332),
  right: asRem(-332),
  height: '100%',
  position: 'fixed',
  overflowY: 'scroll',
  top: 0,
  background: ThemeColors.white,
  borderLeft: `3px solid ${ThemeColors.redDark}`,
  zIndex: 9999,
  transition: '300ms ease all',
  padding: `${asRem(44)} ${asRem(16)} ${asRem(16)} ${asRem(16)}`,
  boxSizing: 'border-box',
  [style.prop('isActive')]: {
    width: '100%',
    right: 0
  },
  [mq()
    .screen()
    .from(Theme.mq.lg)]: {
    [style.prop('isActive')]: {
      width: asRem(332),
      right: asRem(0)
    }
  }
});

const Heading = shades.h2({
  color: ThemeColors.redDark,
  margin: 0,
  paddingTop: asRem(24),
  paddingBottom: asRem(16),
  fontSize: asRem(14),
  fontFamily: Theme.font.defaultFamily,
  borderBottom: `1px solid ${ThemeColors.redDark}`
});

const SideTopHeading = ({ user }) => {
  return <div>{user ? <Heading>Hi, {user.email}</Heading> : ''}</div>;
};

export { SideTopHeading, Side, Close, SideAvatar };
