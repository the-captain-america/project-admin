const siteBaseFontSize = 16;

export const asRem = fontSize =>
  `${parseFloat(fontSize) / siteBaseFontSize}rem`;

export const asEm = (fontSize, baseSize = siteBaseFontSize) =>
  `${parseFloat(fontSize) / parseFloat(baseSize)}em`;

export const getSpacing = level => level * 16;

export const convertHex = (hex, opacity) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
};

// This output darker/lighten shade of a hex colour
// - hex: base colour in hex (with hash)
// - lum: precentage in dicimal formate. +ve for lighter shade and -ve for darker shade.
export const colorLuminance = (color, lum = 0) => {
  const luminanceCalculation = value => {
    const result = Math.round(
      Math.min(Math.max(0, value + value * lum), 255)
    ).toString(16);

    return result.length < 2 ? `0${result}` : result;
  };

  const getHexArray = value => {
    const hexArray = value.replace(/[^0-9a-f]/gi, '').split('');

    if (hexArray.length < 6) {
      return [
        hexArray[0],
        hexArray[0],
        hexArray[1],
        hexArray[1],
        hexArray[2],
        hexArray[2]
      ];
    } else {
      return hexArray;
    }
  };

  const hex = getHexArray(color);

  const getRgbLum = startIndex => {
    const rgb = parseInt(hex[startIndex] + hex[startIndex + 1], 16);
    const lumRgb = luminanceCalculation(rgb);

    return lumRgb;
  };

  return `#${getRgbLum(0)}${getRgbLum(2)}${getRgbLum(4)}`;
};

export const ThemeUI = {
  grid: {
    gutterWidth: 32,
    gridColumns: 12,
    breakpoints: [375, 768, 1024, 1440],
    containerWidths: ['100%', '100%', 984, 1224]
  },
  text: {
    align: {
      left: 'left',
      right: 'right',
      center: 'center'
    }
  },
  zIndex: {
    lg: 9999,
    med: 999,
    sm: 1050,
    xs: 100,
    header: 999,
    side: 9999,
    overlay: 9999
  },
  align: {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  },
  layout: {
    column: 'column',
    row: 'row',
    wrapperTopMargin: 72,
    wrapperHeight: 80
  },
  transition: {
    default: 'all 0.3s ease-in-out'
  },
  overlay: {
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed'
  },
  shadow: {
    default: `5px 15px 10px #00000024`,
    xs: '0px 0px 16px -1px rgba(0, 0, 0, 0.14)',
    sm: '-3px -1px 13px 3px rgba(0,0,0, .1)',
    md: '3px 0px 15px 3px rgba(0, 0, 0, 0.14)',
    lg: '1px 2px 10px 2px rgba(0, 0, 0, 0.2)',
    xl: '-4px -1px 18px 4px rgba(0,0,0, .3)'
  }
};

const ThemeFitness = {
  red: '#fe4d4d',
  redDark: '#bc3a3a'
};

export const ThemeColors = {
  ...ThemeFitness,
  shadeLight: '#f4f4f4',
  shadeDark: '#323439',
  grey: '#585858',
  greyWarm: '#a4a4a4',
  greyBorder: '#DBDBDB',
  darkGrey: '#9E9E9E',
  black: '#000',
  disabled: '#ddd',
  error: '#D90014',
  warning: '#FDD835',
  success: '#008A00',
  white: '#fff',
  ghost: 'transparent'
};

export const Theme = {
  prod: 'https://atlleaders-server.herokuapp.com',
  dev: 'http://localhost:1337',
  heading: {
    margin: 0,
    weight: 600,
    defaultHeading: 1,
    defaultColor: '#404040',
    sizeVariant: {
      h1: {
        xs: {
          fontSize: asRem(32),
          lineHeight: asRem(39)
        },
        lg: {
          fontSize: asRem(48),
          lineHeight: asRem(58)
        }
      },
      h2: {
        xs: {
          fontSize: asRem(28),
          lineHeight: asRem(34)
        },
        lg: {
          fontSize: asRem(40),
          lineHeight: asRem(48)
        }
      },
      h3: {
        xs: {
          fontSize: asRem(24),
          lineHeight: asRem(29)
        },
        lg: {
          fontSize: asRem(32),
          lineHeight: asRem(39)
        }
      },
      h4: {
        xs: {
          fontSize: asRem(20),
          lineHeight: asRem(24)
        },
        lg: {
          fontSize: asRem(24),
          lineHeight: asRem(29)
        }
      },
      h5: {
        xs: {
          fontSize: asRem(18),
          lineHeight: asRem(22)
        },
        lg: {
          fontSize: asRem(20),
          lineHeight: asRem(24)
        }
      },
      h6: {
        xs: {
          fontSize: asRem(16),
          lineHeight: asRem(20)
        },
        lg: {
          fontSize: asRem(16),
          lineHeight: asRem(20)
        }
      },
      h7: {
        xs: {
          fontSize: asRem(14),
          lineHeight: asRem(18)
        },
        lg: {
          fontSize: asRem(14),
          lineHeight: asRem(18)
        }
      },
      h8: {
        xs: {
          fontSize: asRem(12),
          lineHeight: asRem(14)
        },
        lg: {
          fontSize: asRem(12),
          lineHeight: asRem(14)
        }
      }
    }
  },
  font: {
    defaultFamily: 'Montserrat, sans-serif',
    defaultColor: '#404040',
    defaultLineHeight: asRem(24),
    defaultWeight: 300,
    weightRegular: 300,
    weightMedium: 400,
    weightHeavy: 600
  },
  border: {
    defaultRadius: '4px',
    basic: '1px solid #dbdbdb'
  },
  button: {
    weight: 600,
    defaultSize: 'xlarge',
    sizeVariant: {
      xsmall: {
        padding: `${asRem(4)} ${asRem(6)}`,
        fontSize: asRem(14),
        lineHeight: asRem(20),
        svgSize: 20,
        iconPadding: asRem(6)
      },
      small: {
        padding: `${asRem(6)} ${asRem(8)}`,
        fontSize: asRem(14),
        lineHeight: asRem(20),
        svgSize: 20,
        iconPadding: asRem(6)
      },
      medium: {
        padding: `${asRem(9)} ${asRem(14)}`,
        fontSize: asRem(14),
        lineHeight: asRem(24),
        svgSize: 24,
        iconPadding: asRem(8)
      },
      large: {
        padding: `${asRem(12)} ${asRem(22)}`,
        fontSize: asRem(16),
        lineHeight: asRem(24),
        svgSize: 22,
        iconPadding: asRem(10)
      },
      xlarge: {
        padding: `${asRem(18)} ${asRem(30)}`,
        fontSize: asRem(20),
        lineHeight: asRem(24),
        svgSize: 32,
        iconPadding: asRem(14)
      }
    }
  },
  mq: {
    sm: 376,
    md: 768,
    lg: 1024,
    xl: 1280
  }
};
