import React from 'react';

// const Rotate = keyframes`
//     0% {
//         transform:rotate(0deg);
//     }
//     100% {
//       transform:rotate(360deg);
//     }
// });

//const Spinner = ({ loading = true }) => {
// const SpinnerItem = shades.div({
//     width: asRem(32),
//     height: asRem(32),
//     borderRadius: asRem(32),
//     boxSizing: 'border-box',
//     border: 3px soild white;
//     margin: -16px 0px 0px -asRem(16),
//     border-top-color: rgba(255, 255, 255, 1);
//     border-left-color: rgba(255, 255, 255, 0.2);
//     border-bottom-color: rgba(255, 255, 255, 0.2);
//     border-right-color: rgba(255, 255, 255, 0.2);
//     animation-name: ${Rotate};
//     background: ThemeColors.red,
//     display: ${props => (props.isActive ? 'block' : 'none')};
//     animationDuration: '0.3s',
//     animationFillMode: 'both',
//     animation-direction: 'forwards',
//     animation-iteration-count: 1,
//     animation-timing-function: 'ease-in-out',
//     position: 'absolute',
//     transform: 'translateZ(0px)',
//     [style.prop('isActive')]: {
//       position: 'fixed',
//       top: '50%',
//       left: '50%',
//       zIndex:  999,
//       transform: 'translate(-50%, -50%)'
//     }
//   });
//   return <SpinnerItem className="centered" loading={loading} />;
// };

const Spinner = () => <div style={{ display: 'none' }}>Spinner</div>;
export default Spinner;
