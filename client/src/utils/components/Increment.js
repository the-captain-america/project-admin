import React from 'react';
import { asRem, Icon, Button, Theme, ThemeColors } from 'utils/common-ui';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';

const Container = shades.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%'
});

const TextItem = shades.div({
  padding: asRem(8),
  background: ThemeColors.white,
  borderRadius: Theme.border.defaultRadius,
  width: asRem(200),
  fontFamily: Theme.font.defaultFamily,
  lineHeight: asRem(24),
  color: ThemeColors.grey,
  textAlign: 'center',
  boxSizing: 'border-box',
  marginTop: asRem(16),
  marginLeft: asRem(10),
  marginRight: asRem(10),
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottom: `2px solid ${ThemeColors.red}`
});

const Increment = ({ onPressRemove, onPressAdd, value }) => {
  return (
    <Container>
      <Button clear={true} push={0} onPress={onPressRemove}>
        <Icon name="remove" />
      </Button>
      <TextItem>{value}</TextItem>
      <Button clear={true} push={0} onPress={onPressAdd}>
        <Icon name="add" />
      </Button>
    </Container>
  );
};

export default Increment;
