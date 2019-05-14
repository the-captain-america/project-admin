import React from 'react';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem, RangeButton, ThemeColors, Theme } from 'utils/common-ui';

const Input = shades.input({
  '-webkit-appearance': 'none',
  outline: 'none',
  background: ThemeColors.red,
  height: '6px',
  width: 'calc(100% - 8px)',
  borderRadius: Theme.border.defaultRadius,
  [style.elementOf('-webkit-slider-thumb')]: {
    position: 'relative',
    transition: 'all .3s ease-in-out',
    '-webkit-appearance': 'none',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: ThemeColors.red
  },
  [style.elementOf('-moz-range-thumb')]: {
    border: 'none',
    height: '14px',
    width: '14px',
    transition: 'all .3s ease-in-out',
    borderRadius: '50%',
    background: ThemeColors.red,
    cursor: 'pointer'
  },
  [style.elementOf('-moz-range-track')]: {
    width: '100%',
    height: '3px',
    transition: 'all .3s ease-in-out',
    cursor: 'pointer',
    background: ThemeColors.red,
    borderRadius: Theme.border.defaultRadius
  }
});

const Output = shades.span({
  display: 'inline-block',
  background: ThemeColors.red,
  color: ThemeColors.white,
  borderRadius: Theme.border.defaultRadius,
  padding: '3px 7px',
  margin: '0px 10px',
  textAlign: 'center',
  position: 'relative',
  [style.before]: {
    content: '',
    position: 'absolute',
    left: '-12px',
    top: '50%',
    transform: 'translateY(-50%)',
    height: 0,
    width: 0,
    border: 'solid 6px red',
    zIndex: -1,
    borderTopColor: ThemeColors.white,
    borderBottomColor: ThemeColors.white,
    borderLeftColor: ThemeColors.white
  },
  [style.prop('isHidden')]: {
    display: 'none'
  }
});

const RangeContainer = shades.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%'
});

const OptionContainer = shades.div({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'row',
  paddingTop: asRem(24)
});

const ButtonOptions = ({ onPress, activeItem, max }) => {
  const items = [...Array(parseInt(max)).keys()].map(i => {
    return {
      id: i + 1,
      isActive: parseInt(activeItem) === i + 1
    };
  });

  return items.map((item, index) => {
    return (
      <RangeButton
        isActive={item.isActive}
        key={index}
        onClick={() => onPress(index + 1)}
      >
        {item.id}
      </RangeButton>
    );
  });
};

export const Range = ({
  updateRange,
  showOutput = false,
  range,
  step = 1,
  min = 1,
  max = 5
}) => {
  const handleUpdate = value => {
    updateRange(value);
  };
  return (
    <RangeContainer>
      <Input
        id="range"
        type="range"
        value={range}
        min={min}
        max={max}
        step={step}
        onChange={e => handleUpdate(e.target.value)}
      />
      <Output isHidden={!showOutput}>{range}</Output>
      <OptionContainer>
        <ButtonOptions
          max={max}
          activeItem={range}
          onPress={id => updateRange(id)}
        />
      </OptionContainer>
    </RangeContainer>
  );
};
