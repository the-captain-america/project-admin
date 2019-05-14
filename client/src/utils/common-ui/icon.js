import React from 'react';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem } from 'utils/common-ui';

export const Icon = ({ styles = {}, name, color = 'inherit', ...rest }) => {
  const Item = shades.i({
    [style.prop('verticalPush')]: value => ({
      marginTop: asRem(value)
    }),
    [style.prop('verticalPull')]: value => ({
      marginBottom: asRem(value)
    })
  });
  return (
    <Item
      style={{ ...style, color: color }}
      aria-hidden="false"
      className="material-icons"
      {...rest}
    >
      {name}
    </Item>
  );
};
