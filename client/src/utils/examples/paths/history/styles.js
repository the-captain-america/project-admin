import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { ThemeUI, ThemeColors, Theme } from 'utils/common-ui';

export const Overlay = shades.div({
  width: '100%',
  height: '100%',
  [style.prop('isActive')]: {
    display: 'block'
  },
  display: 'none',
  background: 'rgba(0, 0, 0, 0.3)',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: ThemeUI.zIndex.overlay
});

const Calendar = shades.div({
  position: 'relative'
});

const rdtPicker = shades.div({
  display: 'none',
  position: 'absolute',
  width: '250px',
  padding: '4px',
  marginTop: '1px',
  zIndex: '99999 !important',
  background: '#fff',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  border: '1px solid #f9f9f9'
});
//   /*
//   .rdtOpen .rdtPicker {
//     display: 'block',
//   }
//   .rdtStatic .rdtPicker {
//     box-shadow: 'none',
//     position: static;
//   }

//   .rdtPicker .rdtTimeToggle {
//     textAlign: 'center',
//   }

//   .rdtPicker table {
//     width: '100%',
//     margin:0,
//   }
//   .rdtPicker td,
//   .rdtPicker th {
//     textAlign: 'center',
//     height: 28px;
//   }
//   .rdtPicker td {
//     cursor: 'pointer',
//   }
//   .rdtPicker td.rdtDay:hover,
//   .rdtPicker td.rdtHour:hover,
//   .rdtPicker td.rdtMinute:hover,
//   .rdtPicker td.rdtSecond:hover,
//   .rdtPicker .rdtTimeToggle:hover {
//     background: #eeeeee;
//     cursor: 'pointer',
//   }
//   .rdtPicker td.rdtOld,
//   .rdtPicker td.rdtNew {
//     color: #999999;
//   }
//   .rdtPicker td.rdtToday {
//     position: 'relative',
//   }
//   .rdtPicker td.rdtToday:before {
//     content: '';
//     display: 'inline-block';
//     borderLeft: '7px solid transparent';
//     borderBottom: '7px solid #428bca';
//     borderTopColor: 'rgba(0, 0, 0, 0.2)';
//     position: 'absolute',
//     bottom: '4px';
//     right: '4px';
//   }
//   .rdtPicker td.rdtActive,
//   .rdtPicker td.rdtActive:hover {
//     background: #428bca;
//     color: #fff;
//     text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
//   }
//   .rdtPicker td.rdtActive.rdtToday:before {
//     border-bottom-color: #fff;
//   }
//   .rdtPicker td.rdtDisabled,
//   .rdtPicker td.rdtDisabled:hover {
//     background: 'none',
//     color: #999999;
//     cursor: not-allowed;
//   }

//   .rdtPicker td span.rdtOld {
//     color: #999999;
//   }
//   .rdtPicker td span.rdtDisabled,
//   .rdtPicker td span.rdtDisabled:hover {
//     background: 'none',
//     color: #999999;
//     cursor: not-allowed;
//   }
//   .rdtPicker th {
//     borderBottom: 1px solid #f9f9f9;
//   }
//   .rdtPicker .dow {
//     width: 14.2857%;
//     borderBottom: 'none',
//   }
//   .rdtPicker th.rdtSwitch {
//     width: 100px;
//   }
//   .rdtPicker th.rdtNext,
//   .rdtPicker th.rdtPrev {
//     fontSize: 21px;
//     vertical-align: top;
//   }

//   .rdtPrev span,
//   .rdtNext span {
//     display: 'block',
//     -webkit-touch-callout: 'none', /* iOS Safari */
//   //   -webkit-user-select: 'none', /* Chrome/Safari/Opera */
//   //   -khtml-user-select: 'none', /* Konqueror */
//   //   -moz-user-select: 'none', /* Firefox */
//   //   -ms-user-select: 'none', /* Internet Explorer/Edge */
//   //   user-select: 'none',
//   // }

//   */

//   .rdtPicker th.rdtDisabled,
//   .rdtPicker th.rdtDisabled:hover {
//     background: 'none',
//     color: #999999;
//     cursor: not-allowed;
//   }
//   .rdtPicker thead tr:first-child th {
//     cursor: 'pointer',
//   }
//   .rdtPicker thead tr:first-child th:hover {
//     background: #eeeeee;
//   }

//   .rdtPicker tfoot {
//     border-top: 1px solid #f9f9f9;
//   }

//   .rdtPicker button {
//     border: 'none',
//     background: 'none',
//     cursor: 'pointer',
//   }
//   .rdtPicker button:hover {
//     background: #eee;
//   }

//   .rdtPicker thead button {
//     width: '100%',
//     height: '100%',
//   }

//   td.rdtMonth,
//   td.rdtYear {
//     height: 50px;
//     width: 25%;
//     cursor: 'pointer',
//   }
//   td.rdtMonth:hover,
//   td.rdtYear:hover {
//     background: #eee;
//   }

//   .rdtCounters {
//     display: inline-block;
//   }

//   .rdtCounters > div {
//     float: left;
//   }

//   .rdtCounter {
//     height: 100px;
//   }

//   .rdtCounter {
//     width: asRem(40),
//   }

//   .rdtCounterSeparator {
//     lineHeight: 100px;
//   }

//   .rdtCounter .rdtBtn {
//     height: 40%;
//     lineHeight: asRem(40),
//     cursor: 'pointer',
//     display: 'block',

//     -webkit-touch-callout: 'none', /* iOS Safari */
//     -webkit-user-select: 'none', /* Chrome/Safari/Opera */
//     -khtml-user-select: 'none', /* Konqueror */
//     -moz-user-select: 'none', /* Firefox */
//     -ms-user-select: 'none', /* Internet Explorer/Edge */
//     user-select: 'none',
//   }
//   .rdtCounter .rdtBtn:hover {
//     background: #eee;
//   }
//   .rdtCounter .rdtCount {
//     height: 20%;
//     fontSize: 1.2em;
//   }

//   .rdtMilli {
//     verticalAlign: 'middle',
//     paddingLeft: asRem(8),
//     width: 48px;
//   }

//   .rdtMilli input {
//     width: '100%',
//     fontSize: 1.2em;
//     marginTop: 37px;
//   }
// });

// const List = shades.li({
//   margin:0,
//   marginBottom: asRem(8),
//   position: 'relative',
//   padding: 2asRem(4),
//   boxSizing: 'border-box',
//   width: '100%',
//   borderRadius: Theme.border.defaultRadius,
//   display: 'block',
//   background: #fafafa;
//   span {
//     fontFamily: Theme.font.defaultFamily,
//     color: #00335b;
//     display: 'block',
//     lineHeight: asRem(24),
//     paddingBottom:asRem(2),
//     paddingTop: asRem(8),
//     width: 200px;
//   }
//   &:nth-child(1) {
//     marginTop: 2asRem(4),
//   }
//   width: 350px;
//   marginleft: 'auto',
//   marginright: 'auto',
//   border: 1px solid #dbdbdb;
//   overflow: hidden;
// });

//   margin:0,
//   padding:0,
//   display: 'flex',
//   flexDirection: 'column',
//   boxSizing: 'border-box',
//   alignItems: 'center',
//   justifyContent: 'center',
// });

// const Controls = shades.div({
//   display: 'flex',
//   flexDirection: 'column',
//   boxSizing: 'border-box',
//   position: 'absolute',
//   display: 'flex',
//   right:0,
//   top:0,
//   height: '100%',
//   width: 100px;
//   margin:0,
//   padding:0,
// });

// const Timeline = shades.div({
//   position: 'relative',
//   padding: 2em0,
//   marginBottom: 2em;
//   width: '100%',
//   margin: 24px auto 0 'auto',
//   &:before {
//     content: '';
//     position: 'absolute',
//     top:0,
//     left: 49%;
//     height: '100%',
//     width: asRem(4),
//     background: #d7e4ed;
//   }
// });

// const TimelineBlock = shades.div({
//   position: 'relative',
//   marginTop: asRem(16),
//   .timeline-content {
//     position: 'relative',
//     marginleft: asRem(40),
//     width: 60px;
//     background: ThemeColors.white,
//     top: -10px;
//     borderRadius: 0.25em;
//     padding: 1em;
//     box-shadow: 0 3px 0 #d7e4ed;
//     &:after {
//       content: '';
//       display: table;
//       clear: both;
//     }
//     &:before {
//       content: '';
//       position: 'absolute',
//       right: '100%',
//       top: asRem(24),
//       left: '100%',
//       height:0,
//       width:0,
//       border: 7px solid transparent;
//       border-right: 7px solid ThemeColors.white,
//     }
//     h2 {
//       color: #303e49;
//     }
//   }
//   &:nth-child(even) {
//     .timeline-content {
//       float: right;
//     }
//     .timeline-content::before {
//       top: 20px;
//       left: 'auto',
//       right: '100%',
//       border-color: transparent;
//       border-right-color: ThemeColors.white,
//     }
//     .timeline-date {
//       left: 'auto',
//       right: 122%;
//       text-align: right;
//     }
//   }
// });

// const TimelineContent = shades.div({
//   /* position: 'relative',
//     marginLeft:50px;
//     width: 100px;
//     background: ThemeColors.white,
//     borderRadius: 0.25em;
//     padding: 1em;
//     box-shadow: 0 3px 0 #d7e4ed;
//     &:after {
//         content: "";
//         display: table;
//         clear: both;
//     }
//     &:before {
//         content: '';
//         position: 'absolute',
//         top: asRem(16),
//         right: '100%',
//         height:0,
//         width:0,
//         border: 7px solid transparent;
//         border-right: 7px solid ThemeColors.white,
//     }
//     h2 {
//         color: #303e49;
//     } */
// });

// const TimelineImage = shades.div({
//   position: 'absolute',
//   top:0,
//   left:0,
//   width: asRem(24),
//   height: asRem(24),
//   padding: asRem(4),
//   left: 45%;
//   background: ThemeColors.red};
//   borderRadius: '50%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
//   i {
//     color: ThemeColors.white,
//     verticalAlign: 'middle',
//   }
// });

// const TimelineDate = shades.span({
//   position: 'absolute',
//   width: '100%',
//   left: 122%;
//   top: 6px;
//   fontSize: asRem(16),
//   fontSize: 1rem;
// });

// export {
//   List,
//   Group,
//   Controls,
//   Calendar,
//   Overlay,
//   Timeline,
//   TimelineImage,
//   TimelineDate,
//   TimelineContent,
//   TimelineBlock
// };
