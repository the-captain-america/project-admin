import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { asRem, ThemeColors, Theme } from 'utils/common-ui';

export const InputGroup = shades.div({
  padding: '10px 10px 10px 0',
  display: 'block',
  margin: 0,
  width: '100%',
  color: Theme.font.defaultColor,
  fontSize: asRem(18),
  fontFamily: Theme.font.defaultFamily,
  fontWeight: 300,
  marginTop: asRem(8),
  outline: 'none',
  appearance: 'none',
  transition: 'border 0.3s',
  boxShadow: 'none',
  border: 'none',
  borderRadius: Theme.border.defaultRadius,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  background: ThemeColors.white,
  borderBottom: `solid 2px ${ThemeColors.shadeLight}`,
  boxSizing: 'border-box'
});

const InputItem = shades.input({
  [style.prop('verticalPush')]: value => ({
    marginTop: asRem(value)
  }),
  [style.prop('verticalPull')]: value => ({
    marginBottom: asRem(value)
  }),
  [style.elementOf('placeholder')]: {
    color: '#d5d5d5',
    opacity: 1
  },
  [style.elementOf('ms-input-placeholder')]: {
    color: '#d5d5d5',
    fontWeight: 300
  },
  [style.elementOf('moz-placeholder')]: {
    color: '#d5d5d5',
    fontWeight: 300
  },
  [style.focus]: {
    outline: 'none'
  }
});

//   textarea {
//     display: 'block',
//     margin:0,
//     width: '100%',
//     fontFamily: Theme.font.defaultFamily,
//     fontSize: asRem(18),
//     border:0,
//     marginTop: asRem(8),
//     boxSizing: 'border-box',
//     borderRadius: Theme.border.defaultRadius,
//     borderBottomLeftRadius:0,
//     borderBottomRightRadius:0,
//     background: ThemeColors.white,
//     padding: asRem(8),
//     appearance: 'none',
//     box-shadow: 'none',
//     borderRadius: 'none',
//   }
//   textarea[type='password']:focus {
//     outline: 'none',
//   }
//   textarea[type='text']:focus {
//     outline: 'none',
//   }
//   textarea:-moz-placeholder {
//     color: #999;
//   }
//   textarea:-webkit-input-placeholder {
//     color: #999;
//   }
//   textarea {
//     borderBottom: 2px solid ${ThemeColors.digitalNavy};
//   }
// });

export default InputItem;
