import React from 'react';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { ThemeColors } from './theme';
import IconList from './svg';
import styled from 'styled-components';

// const IconBase = shades.generic({
//   display: 'inline-block',
//   stroke: ThemeColors.transparent,
//   fill: 'currentColor',
//   verticalAlign: 'middle',
//   pointerEvents: 'none',
//   cursor: 'default',
//   [style.prop('fill')]: fill => ({
//     fill
//   }),
//   [style.prop('stroke')]: stroke => ({
//     stroke
//   }),
//   [style.prop('cursor')]: cursor => ({
//     cursor
//   })
// });

const IconItem = styled.i`
  display: inline-block;
  stroke: ${ThemeColors.transparent};
  fill: currentColor;
  vertical-align: middle;
  pointer-events: none;
  cursor: default;
`;

export const IconSvg = IconItem(({ name, className }) => {
  const Icon = IconList[name];
  return <Icon className={className} />;
});

// export const IconSvg = IconBase(
//   ({ className, name, cursor, fill, size = 20, stroke, style }) => {
//     const Icon = IconList[name];
//     return (
//       <Icon
//         className={className}
//         width={size}
//         height={size}
//         fill={fill}
//         stroke={stroke}
//         cursor={cursor}
//         viewBox="0 0 24 24"
//         style={style}
//       />
//     );
//   }
// );
