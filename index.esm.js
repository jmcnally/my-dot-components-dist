import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect, useRef, useMemo, useContext, createContext, forwardRef, Fragment, useCallback, createElement } from 'react';
import { Tooltip, Icon, Typography, Accordion, AccordionSummary, AccordionDetails, AccordionActions, InputAdornment, InputLabel, TextField, Toolbar, Alert, Fade, Avatar, Button, darken, Link, List, ListItem, CircularProgress, Popper, MenuList, MenuItem, Paper, ClickAwayListener, Drawer, IconButton, ListItemIcon, Collapse, ListSubheader, Divider, ListItemText, Badge, useMediaQuery, Autocomplete, Chip, AvatarGroup, Breadcrumbs, ToggleButtonGroup, ToggleButton, Card, CardContent, CardHeader, FormControlLabel, Checkbox, FormControl, FormGroup, FormLabel, FormHelperText, Dialog, DialogContent, DialogActions, useTheme as useTheme$1, RadioGroup, Radio, Switch, Skeleton, Snackbar, ButtonGroup, TablePagination, TableContainer, TableCell, TableRow, TableBody, TableSortLabel, TableHead, Table, Tabs, Tab, LinearProgress } from '@mui/material';
import '@digital-ai/dot-icons';
import styled, { css, createGlobalStyle, ThemeProvider as ThemeProvider$1, keyframes } from 'styled-components';
import { createTheme, ThemeProvider, alpha, useTheme } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import jwt_decode from 'jwt-decode';
import { useDropzone } from 'react-dropzone';
import GridLayout, { WidthProvider } from 'react-grid-layout';

function useStylesWithRootClass(name, className, ...args) {
  // combine the root classes into one string
  return [name, ...(className ? [className] : [])].concat(args).join(' ').trim();
}

const DotTooltip = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  leaveDelay,
  onClose,
  open,
  placement: _placement = 'bottom',
  title
}) => {
  const rootClasses = useStylesWithRootClass('dot-tooltip', className);
  return title ? jsx(Tooltip, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    leaveDelay: leaveDelay,
    onClose: onClose,
    open: open,
    placement: _placement,
    title: title
  }, {
    children: jsx("span", {
      children: children
    }, void 0)
  }), void 0) : children;
};

const rootClassName$12 = 'dot-icon';
const StyledIcon = styled(Icon).withConfig({
  displayName: "Iconstyles__StyledIcon",
  componentId: "st0ybo-0"
})(["", ""], () => css(["&.", "{font-size:20px;&.MuiIcon-fontSizeLarge{font-size:28px;height:35px;width:35px;i{height:28px;}}&.MuiIcon-fontSizeSmall{font-size:18px;i{height:18px;}}i{height:20px;}}"], rootClassName$12));

const DotIcon = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  fontSize: _fontSize = 'medium',
  iconId,
  tooltip
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$12, className);
  return jsx(DotTooltip, Object.assign({
    title: tooltip
  }, {
    children: jsx(StyledIcon, Object.assign({
      "aria-hidden": "false",
      "aria-label": ariaLabel,
      classes: {
        root: rootClasses
      },
      "data-testid": dataTestId,
      fontSize: _fontSize
    }, {
      children: jsx("i", {
        className: `icon-${iconId} dot-i`,
        "data-testid": dataTestId && `${dataTestId}-i`
      }, void 0)
    }), void 0)
  }), void 0);
};

const DotTypography = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  children,
  component,
  noMarginBottom,
  noWrap,
  variant
}) => {
  const rootClasses = useStylesWithRootClass('dot-typography', className);
  return jsx(Typography, Object.assign({
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    component: component,
    "data-testid": dataTestId,
    noWrap: noWrap,
    style: {
      marginBottom: noMarginBottom ? 0 : undefined
    },
    variant: variant
  }, {
    children: children
  }), void 0);
};

const rootClassName$11 = 'dot-accordion';
const summaryClassName = 'dot-accordion-summary';
const detailClassName = 'dot-accordion-details';
const StyledAccordion = styled(Accordion).withConfig({
  displayName: "Accordionstyles__StyledAccordion",
  componentId: "sc-1amx4r3-0"
})(["", ""], ({
  theme
}) => css(["&.", " .", "{align-items:center;display:flex;&.Mui-expanded{border-top:1px solid rgba(0,0,0,0.12);&:before{opacity:1;}}.MuiAccordionSummary-content{align-items:center;gap:", ";width:calc(100% - ", ");.dot-tooltip{overflow:hidden;}}.MuiAccordionSummary-expandIconWrapper{padding:", ";margin-right:", ";}.MuiTypography-root{margin-bottom:0;}.MuiTypography-body1{padding:2px 0;}}"], rootClassName$11, summaryClassName, theme.spacing(1), theme.spacing(5), theme.spacing(1.5), theme.spacing(-1.5)));

const DotAccordion = ({
  actions,
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId = 'dot-accordion',
  disabled: _disabled = false,
  expanded,
  hasElevation: _hasElevation = false,
  onChange,
  square: _square = false,
  startIcon: _startIcon = null,
  summary,
  noWrap: _noWrap = true
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$11, className);
  const [elevation, setElevation] = useState();
  useEffect(() => {
    if (onChange && expanded === undefined) {
      console.warn('The use of an `onChange` callback makes this a controlled component but no `expanded` state has been provided. In effect, this makes the component disabled.');
    }
  }, []);
  useEffect(() => {
    setElevation(_hasElevation ? 1 : 0);
  }, [_hasElevation]);
  return jsxs(StyledAccordion, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    disabled: _disabled,
    elevation: elevation,
    expanded: onChange ? expanded : undefined,
    onChange: onChange,
    square: _square
  }, {
    children: [jsxs(AccordionSummary, Object.assign({
      classes: {
        root: summaryClassName
      },
      "data-testid": `${dataTestId}-summary`,
      expandIcon: jsx(DotIcon, {
        iconId: "chevron-down"
      }, void 0)
    }, {
      children: [_startIcon, jsx(DotTooltip, Object.assign({
        "data-testid": "accordion-tooltip",
        title: _noWrap ? summary : ''
      }, {
        children: jsx(DotTypography, Object.assign({
          noWrap: _noWrap,
          variant: "body1"
        }, {
          children: summary
        }), void 0)
      }), void 0)]
    }), void 0), jsx(AccordionDetails, Object.assign({
      classes: {
        root: detailClassName
      },
      "data-testid": `${dataTestId}-details`
    }, {
      children: children
    }), void 0), actions && jsx(AccordionActions, {
      children: actions
    }, void 0)]
  }), void 0);
};

const rootClassName$10 = 'dot-text-field';
const rootSelectClassName = 'dot-select-field';
const labelClassName = 'dot-input-label';
const errorClassName = 'dot-error';
const warningClassName = 'dot-warning';
const successClassName = 'dot-success';
const adornmentIconClassName = 'dot-adornment-icon';
const fieldsetClassName = 'MuiOutlinedInput-notchedOutline';
const StyledAdornment = styled(InputAdornment).withConfig({
  displayName: "InputFormFieldsstyles__StyledAdornment",
  componentId: "sc-1mbn9f0-0"
})([".dot-icon{font-size:24px;height:24px;padding:0;width:24px;}"]);
const StyledInputLabel = styled(InputLabel).withConfig({
  displayName: "InputFormFieldsstyles__StyledInputLabel",
  componentId: "sc-1mbn9f0-1"
})(["", ""], ({
  theme
}) => css(["&.", "{transform:none;&.Mui-disabled .dot-typography{color:rgba(0,0,0,0.38);}&.Mui-error .dot-typography{color:", ";}.dot-typography{display:inline;}}"], labelClassName, theme.palette.error.main));
const StyledTextFieldContainer = styled.div.withConfig({
  displayName: "InputFormFieldsstyles__StyledTextFieldContainer",
  componentId: "sc-1mbn9f0-2"
})(["&.dot-input-text--fullwidth{width:100%;}"]);
const StyledTextField = styled(TextField).withConfig({
  displayName: "InputFormFieldsstyles__StyledTextField",
  componentId: "sc-1mbn9f0-3"
})(["", ""], ({
  theme,
  InputProps
}) => css(["&.", "{.MuiInputBase-root{margin-bottom:0;}.MuiInputBase-input{box-sizing:content-box;}.MuiOutlinedInput-input{padding:", ";}.MuiInputBase-inputSizeSmall{padding-top:10.5px;padding-bottom:10.5px;&:not(textarea){height:19px;}}.MuiInputBase-inputMultiline{padding:0;}}&.", ",&.", "{.", "{color:", ";.dot-icon i{margin-top:-2px;}}.MuiInputBase-root{margin-bottom:0;}.MuiInputBase-inputSizeSmall:not(textarea){height:19px;padding-top:10.5px;padding-bottom:10.5px;}select.dot-select{padding-left:", ";}.MuiSelect-select:focus{background-color:transparent;}.MuiSelect-icon{right:", ";}&.", "{.MuiOutlinedInput-notchedOutline{border-color:", ";}.MuiFormLabel-root.Mui-focused{color:", ";}.", " .dot-icon{color:", ";}}&.", "{.MuiInputLabel-outlined.MuiInputLabel-shrink{color:", ";}.", " .dot-icon{color:", ";}}&.", "{.MuiOutlinedInput-notchedOutline{border-color:", ";}.MuiInputLabel-outlined.MuiInputLabel-shrink{color:", ";}.", " .dot-icon{color:", ";}}.MuiOutlinedInput-adornedStart{padding-left:12px;&.", " .", "{border-color:", ";}}.MuiInputLabel-outlined.MuiInputLabel-shrink{color:", ";}.MuiInputBase-inputAdornedStart{padding-left:12px;}.MuiInputBase-inputAdornedEnd{padding-right:12px;}.MuiFormHelperText-root{font-family:", ";font-size:", "px;font-weight:400;margin:", ";display:flex;align-items:flex-end;&:not(.Mui-error){color:", ";}&.read-only .MuiOutlinedInput-root:hover > fieldset{border-color:", ";}}}"], rootClassName$10, InputProps.startAdornment ? `18px 12px 18px 0px` : `18px 12px`, rootSelectClassName, rootClassName$10, adornmentIconClassName, theme.palette.layer.n700, theme.spacing(1.5), InputProps.endAdornment ? `44px` : `12px`, successClassName, theme.palette.secondary.main, theme.palette.grey[700], adornmentIconClassName, theme.palette.secondary.main, errorClassName, theme.palette.error.main, adornmentIconClassName, theme.palette.error.main, warningClassName, theme.palette.warning.main, theme.palette.grey[700], adornmentIconClassName, theme.palette.warning.main, warningClassName, fieldsetClassName, theme.palette.warning[500], theme.palette.grey[700], theme.typography.fontFamily, theme.typography.body2.fontSize, theme.spacing(0.5, 0, 0, 1.5), theme.palette.grey[400], theme.palette.layer.n200));

const rootClassName$$ = 'dot-action-toolbar';
const StyledToolbar = styled(Toolbar).withConfig({
  displayName: "ActionToolbarstyles__StyledToolbar",
  componentId: "sc-5llm03-0"
})(["", ""], ({
  theme
}) => css(["&.", "{border-bottom:1px solid ", ";.", " .MuiInputBase-root{margin-bottom:0;}}"], rootClassName$$, theme.palette.grey[100], rootClassName$10));

const DotActionToolbar = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  variant: _variant = 'dense'
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$$, className);
  return jsx(StyledToolbar, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    variant: _variant
  }, {
    children: children
  }), void 0);
};

const rootClassName$_ = 'dot-alert-banner';
const StyledAlertBanner = styled(Alert).withConfig({
  displayName: "AlertBannerstyles__StyledAlertBanner",
  componentId: "sc-1u3aqgz-0"
})(["", ""], ({
  theme
}) => css(["&.", "{align-items:center;border-radius:8px;box-sizing:border-box;display:flex;min-height:48px;overflow:hidden;padding:", ";.dot-icon,.MuiAlert-icon,.MuiAlert-message{padding:0;.dot-typography{margin-bottom:0;}}&.MuiAlert-standardSuccess{.dot-icon,.MuiAlert-icon,.dot-typography{color:", ";}}&.MuiAlert-standardInfo{background-color:", ";.dot-icon,.MuiAlert-icon,.dot-typography{color:", ";}}&.MuiAlert-standardWarning{background-color:", ";.dot-icon,.MuiAlert-icon,.dot-typography{color:", ";}}&.MuiAlert-standardError{background-color:", ";.dot-typography{color:", ";}.dot-icon,.MuiAlert-icon{color:", ";}}}"], rootClassName$_, theme.spacing(0.75, 2), theme.palette.success[700], theme.palette.primary[50], theme.palette.primary[500], theme.palette.warning[100], theme.palette.grey[700], theme.palette.error[50], theme.palette.error[700], theme.palette.error[500]));

var LatoRegular = "data:font/woff;base64,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";

var LatoBold = "data:font/woff;base64,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";

let _ = t => t,
  _t;
const GlobalFonts = createGlobalStyle(_t || (_t = _`
  @font-face {
    font-family: 'Lato';
    font-weight: 400;
    src: url(${0}) format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 700;
    src: url(${0}) format('woff');
  }

  @font-face {
    font-family: 'LatoBold';
    font-weight: 700;
    src: url(${0}) format('woff');
  }
`), LatoRegular, LatoBold, LatoBold);

//Primary blue
//https://zeroheight.com/4a9ac476a/p/22005a-color/t/6288e9
const b50 = '#e8edf3';
const b100 = '#c5d3e2';
const b200 = '#9eb6cf';
const b300 = '#7798bb';
const b400 = '#5a82ad';
const b500 = '#3d6c9e';
const b600 = '#376496';
const b700 = '#2f598c';
const b800 = '#274f82';
const b900 = '#1a3d70';
const bA100 = '#abcaff';
const bA200 = '#78aaff';
const bA400 = '#458aff';
const bA700 = '#2b7aff';
//Success green
//https://zeroheight.com/4a9ac476a/p/22005a-color/t/653193
const g50 = '#e9f0e0';
const g100 = '#c8dab3';
const g200 = '#a4c280';
const g300 = '#80aa4d';
const g400 = '#649726';
const g500 = '#498500';
const g600 = '#427d00';
const g700 = '#397200';
const g800 = '#316800';
const g900 = '#215500';
const gA100 = '#aaff87';
const gA200 = '#86ff54';
const gA400 = '#61ff21';
const gA700 = '#4fff08';
//Neutral color
//https://zeroheight.com/4a9ac476a/p/22005a-color/t/44d174
const n0 = '#ffffff';
const n50 = '#f3f5f6';
const n100 = '#e3e5e8';
const n200 = '#c1c6cd';
const n300 = '#a4acb6';
const n400 = '#667385';
const n500 = '#4b5a6f';
const n600 = '#445267';
const n700 = '#3b485c';
const n700_90 = 'rgba(59, 72, 92, 0.9)';
const n800 = '#333f52';
const n900 = '#232e40';
const n900_70 = 'rgba(35, 46, 64, 0.7)';
const nA100 = '#88b1ff';
const nA200 = '#5590ff';
const nA400 = '#226eff';
const nA700 = '#085eff';
//Warning orange
//https://zeroheight.com/4a9ac476a/p/22005a-color/t/01bbd7
const o50 = '#fff3e9';
const o100 = '#ffe2c8';
const o200 = '#ffcfa4';
const o300 = '#ffbb80';
const o400 = '#ffad64';
const o500 = '#ff9e49';
const o600 = '#ff9642';
const o700 = '#ff8c39';
const o800 = '#ff8231';
const o900 = '#f05e1d';
const oA100 = '#ffffff';
const oA200 = '#ffffff';
const oA400 = '#ffe0d0';
const oA700 = '#ffceb7';
//Error red
//https://zeroheight.com/4a9ac476a/p/22005a-color/t/941bd8
const r50 = '#fae4e4';
const r100 = '#f3bcbc';
const r200 = '#eb8f90';
const r300 = '#e26264';
const r400 = '#dc4142';
const r500 = '#d61f21';
const r600 = '#d11b1d';
const r700 = '#cc1718';
const r800 = '#c61214';
const r900 = '#bc0a0b';
const rA100 = '#ffe7e7';
const rA200 = '#ffb4b5';
const rA400 = '#ff8182';
const rA700 = '#ff6869';
//Graph color
//Yellow
//https://zeroheight.com/4a9ac476a/p/22005a-color/t/48416f
const y50 = '#fdf8e2';
const y100 = '#faeeb8';
const y200 = '#f7e288';
const y300 = '#f3d658';
const y400 = '#f1ce35';
const y500 = '#eec511';
const y600 = '#ecbf0f';
const y700 = '#e9b80c';
const y800 = '#e7b00a';
const y900 = '#e2a305';
const yA100 = '#ffffff';
const yA200 = '#fff2d7';
const yA400 = '#ffe2a4';
const yA700 = '#ffda8b';
//Purple
//https://zeroheight.com/4a9ac476a/p/22005a-color/t/48416f
const p50 = '#f3e4ee';
const p100 = '#e0bbd4';
const p200 = '#cc8eb8';
const p300 = '#b8609c';
const p400 = '#a83e86';
const p500 = '#991c71';
const p600 = '#911969';
const p700 = '#86145e';
const p800 = '#7c1154';
const p900 = '#6b0942';
const pA100 = '#ff9cd1';
const pA200 = '#ff69b9';
const pA400 = '#ff36a2';
const pA700 = '#ff1d96';
const selectedGray = 'rgba(0, 0, 0, 0.12)';
const lightSelectedGray = 'rgba(0, 0, 0, 0.08)';
const hoverGray = 'rgba(0, 0, 0, 0.04)';

var lightThemeColors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  b50: b50,
  b100: b100,
  b200: b200,
  b300: b300,
  b400: b400,
  b500: b500,
  b600: b600,
  b700: b700,
  b800: b800,
  b900: b900,
  bA100: bA100,
  bA200: bA200,
  bA400: bA400,
  bA700: bA700,
  g50: g50,
  g100: g100,
  g200: g200,
  g300: g300,
  g400: g400,
  g500: g500,
  g600: g600,
  g700: g700,
  g800: g800,
  g900: g900,
  gA100: gA100,
  gA200: gA200,
  gA400: gA400,
  gA700: gA700,
  n0: n0,
  n50: n50,
  n100: n100,
  n200: n200,
  n300: n300,
  n400: n400,
  n500: n500,
  n600: n600,
  n700: n700,
  n700_90: n700_90,
  n800: n800,
  n900: n900,
  n900_70: n900_70,
  nA100: nA100,
  nA200: nA200,
  nA400: nA400,
  nA700: nA700,
  o50: o50,
  o100: o100,
  o200: o200,
  o300: o300,
  o400: o400,
  o500: o500,
  o600: o600,
  o700: o700,
  o800: o800,
  o900: o900,
  oA100: oA100,
  oA200: oA200,
  oA400: oA400,
  oA700: oA700,
  r50: r50,
  r100: r100,
  r200: r200,
  r300: r300,
  r400: r400,
  r500: r500,
  r600: r600,
  r700: r700,
  r800: r800,
  r900: r900,
  rA100: rA100,
  rA200: rA200,
  rA400: rA400,
  rA700: rA700,
  y50: y50,
  y100: y100,
  y200: y200,
  y300: y300,
  y400: y400,
  y500: y500,
  y600: y600,
  y700: y700,
  y800: y800,
  y900: y900,
  yA100: yA100,
  yA200: yA200,
  yA400: yA400,
  yA700: yA700,
  p50: p50,
  p100: p100,
  p200: p200,
  p300: p300,
  p400: p400,
  p500: p500,
  p600: p600,
  p700: p700,
  p800: p800,
  p900: p900,
  pA100: pA100,
  pA200: pA200,
  pA400: pA400,
  pA700: pA700,
  selectedGray: selectedGray,
  lightSelectedGray: lightSelectedGray,
  hoverGray: hoverGray
});

const componentOverrides = {
  MuiMenu: {
    defaultProps: {
      TransitionComponent: Fade
    }
  },
  MuiPopover: {
    defaultProps: {
      TransitionComponent: Fade
    }
  },
  MuiTooltip: {
    defaultProps: {
      TransitionComponent: Fade
    }
  }
};
const typographyOptions = {
  fontFamily: 'Lato, sans-serif',
  allVariants: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontFeatureSettings: 'normal',
    fontVariantLigatures: 'none'
  },
  h1: {
    fontSize: 24,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '30px'
  },
  h2: {
    fontSize: 20,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '26px',
    letterSpacing: '0.02em'
  },
  h3: {
    fontSize: 17,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '24px',
    letterSpacing: '0.02em'
  },
  h4: {
    fontSize: 14,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '18px',
    letterSpacing: '0.03em'
  },
  h5: {
    fontSize: 12,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '18px',
    letterSpacing: '0.03em'
  },
  subtitle1: {
    fontFamily: 'LatoBold, sans-serif',
    fontSize: 17,
    lineHeight: '23px',
    letterSpacing: '0.03em',
    marginBottom: 1
  },
  subtitle2: {
    fontFamily: 'LatoBold, sans-serif',
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '0.03em',
    marginBottom: 1
  },
  body1: {
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '0.03em',
    marginBottom: 4
  },
  body2: {
    fontSize: 12,
    lineHeight: '16px',
    letterSpacing: '0.02em',
    marginBottom: 3
  },
  caption: {
    fontSize: 10,
    fontFamily: 'LatoBold, sans-serif',
    fontWeight: 700,
    lineHeight: '16px',
    letterSpacing: '0.03em',
    marginBottom: 3
  },
  overline: {
    fontSize: 11,
    lineHeight: '14px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    marginBottom: 3
  },
  button: {
    fontSize: 14,
    letterSpacing: '0.03em',
    textTransform: 'none'
  }
};
const breakpointOptions = {
  values: {
    xs: 0,
    sm: 720,
    md: 1024,
    lg: 1280,
    xl: 1920
  }
};
const avatarColors = {
  default: {
    color: n700,
    backgroundColor: n100
  },
  green: {
    color: n0,
    backgroundColor: g500
  },
  blue: {
    color: n0,
    backgroundColor: b500
  },
  orange: {
    color: n700,
    backgroundColor: o500
  },
  purple: {
    color: n0,
    backgroundColor: p500
  },
  yellow: {
    color: n700,
    backgroundColor: y500
  },
  red: {
    color: n0,
    backgroundColor: r500
  },
  darkGrey: {
    color: n0,
    backgroundColor: n700
  },
  lightGrey: {
    color: n700,
    backgroundColor: n200
  },
  transparent: {
    color: n0,
    backgroundColor: 'transparent'
  }
};
const darkTheme = createTheme({
  breakpoints: Object.assign({}, breakpointOptions),
  palette: {
    mode: 'dark',
    avatarColors: Object.assign({}, avatarColors),
    icon: {
      checkOutline: b500,
      emphasized: b300,
      fileDotted: b500,
      improve: g500,
      improveHover: g300,
      maintain: r500,
      maintainHover: r300,
      rogueCommits: o500,
      unknown: n300,
      unknownHover: n100
    },
    layer: {
      n0: n0,
      n50: n0,
      n100: '#B8C0C7',
      n200: n300,
      n300: '#A9AEB3',
      n400: '#727A83',
      n500: '#30363D',
      n600: '#30363D',
      n700: '#21272D',
      n800: '#171B22',
      n900: '#0D1017' // level-0
    },

    text: {
      primary: n0
    }
  },
  components: componentOverrides,
  typography: Object.assign(Object.assign({}, typographyOptions), {
    allVariants: Object.assign(Object.assign({}, typographyOptions.allVariants), {
      color: n0
    })
  })
});
const lightTheme = createTheme({
  breakpoints: Object.assign({}, breakpointOptions),
  palette: {
    mode: 'light',
    avatarColors: Object.assign({}, avatarColors),
    background: {
      default: n0
    },
    primary: {
      main: b500,
      '50': b50,
      '100': b100,
      '200': b200,
      '300': b300,
      '400': b400,
      '500': b500,
      '600': b600,
      '700': b700,
      '800': b800,
      '900': b900,
      A100: bA100,
      A200: bA200,
      A400: bA400,
      A700: bA700
    },
    secondary: {
      main: g500,
      '50': g50,
      '100': g100,
      '200': g200,
      '300': g300,
      '400': g400,
      '500': g500,
      '600': g600,
      '700': g700,
      '800': g800,
      '900': g900,
      A100: gA100,
      A200: gA200,
      A400: gA400,
      A700: gA700
    },
    error: {
      main: r500,
      '50': r50,
      '100': r100,
      '200': r200,
      '300': r300,
      '400': r400,
      '500': r500,
      '600': r600,
      '700': r700,
      '800': r800,
      '900': r900,
      A100: rA100,
      A200: rA200,
      A400: rA400,
      A700: rA700
    },
    warning: {
      main: o500,
      '50': o50,
      '100': o100,
      '200': o200,
      '300': o300,
      '400': o400,
      '500': o500,
      '600': o600,
      '700': o700,
      '800': o800,
      '900': o900,
      A100: oA100,
      A200: oA200,
      A400: oA400,
      A700: oA700
    },
    success: {
      main: g500,
      '50': g50,
      '100': g100,
      '200': g200,
      '300': g300,
      '400': g400,
      '500': g500,
      '600': g600,
      '700': g700,
      '800': g800,
      '900': g900,
      A100: gA100,
      A200: gA200,
      A400: gA400,
      A700: gA700
    },
    grey: {
      '50': n50,
      '100': n100,
      '200': n200,
      '300': n300,
      '400': n400,
      '500': n500,
      '600': n600,
      '700': n700,
      '800': n800,
      '900': n900,
      A100: nA100,
      A200: nA200,
      A400: nA400,
      A700: nA700
    },
    purple: {
      main: p500,
      '50': p50,
      '100': p100,
      '200': p200,
      '300': p300,
      '400': p400,
      '500': p500,
      '600': p600,
      '700': p700,
      '800': p800,
      '900': p900,
      A100: pA100,
      A200: pA200,
      A400: pA400,
      A700: pA700
    },
    layer: {
      n0: n0,
      n50: n50,
      n100: n100,
      n200: n200,
      n300: n300,
      n400: n400,
      n500: n500,
      n600: n600,
      n700: n700,
      n800: n800,
      n900: n900
    },
    icon: {
      checkOutline: b500,
      emphasized: b300,
      fileDotted: b500,
      improve: g500,
      improveHover: g300,
      maintain: r500,
      maintainHover: r300,
      rogueCommits: o500,
      unknown: n300,
      unknownHover: n100
    },
    text: {
      primary: n700
    },
    tonalOffset: 0.2
  },
  components: componentOverrides,
  typography: Object.assign(Object.assign({}, typographyOptions), {
    allVariants: Object.assign(Object.assign({}, typographyOptions.allVariants), {
      color: n700
    })
  })
});
function DotThemeProvider({
  children,
  theme = lightTheme
}) {
  const userTheme = typeof theme === 'string' && theme === 'dark' ? darkTheme : lightTheme;
  return jsx(StylesProvider, Object.assign({
    injectFirst: true
  }, {
    children: jsx(ThemeProvider, Object.assign({
      theme: userTheme
    }, {
      children: jsxs(ThemeProvider$1, Object.assign({
        theme: userTheme
      }, {
        children: [jsx(GlobalFonts, {}, void 0), children]
      }), void 0)
    }), void 0)
  }), void 0);
}

const calculateNumberFromText = text => {
  const charCodes = text.split('') // => ["A", "A"]
  .map(char => char.charCodeAt(0)) // => [65, 65]
  .join(''); // => "6565"
  return parseInt(charCodes, 10);
};
const calculateWidth = width => {
  if (!width) return;
  return isString$1(width) ? width : `${width}px`;
};
const getAvatarColorForInputText = value => {
  const colorOptions = [...Object.keys(avatarColors)];
  if (!value || !colorOptions || colorOptions.length <= 0) return 'default';
  const numberFromValue = calculateNumberFromText(value);
  return colorOptions[numberFromValue % colorOptions.length];
};
const isString$1 = str => typeof str === 'string';
const isLowerCase = str => str === str.toLowerCase();
const isNumber = num => typeof num === 'number';
const renderNodeOrTypography = (content, typographyVariant = 'body1') => {
  return isString$1(content) ? jsx(DotTypography, Object.assign({
    variant: typographyVariant
  }, {
    children: content
  }), void 0) : content;
};

const DotAlertBanner = ({
  action,
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  onClose,
  roundedCorners: _roundedCorners = true,
  severity,
  textVariant: _textVariant = 'body1'
}) => {
  const AlertBannerIcon = iconId => {
    return jsx(DotIcon, {
      iconId: iconId
    }, void 0);
  };
  const AlertBannerIconMapping = {
    error: AlertBannerIcon('error-solid'),
    info: AlertBannerIcon('info-solid'),
    success: AlertBannerIcon('check-solid'),
    warning: AlertBannerIcon('warning-solid')
  };
  const rootClasses = useStylesWithRootClass(rootClassName$_, severity, className);
  /* For simple string use default component, for everything else use 'div' */
  const typographyComponent = isString$1(children) ? undefined : 'div';
  return jsx(StyledAlertBanner, Object.assign({
    action: action,
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId,
    iconMapping: AlertBannerIconMapping,
    onClose: onClose,
    severity: severity,
    style: {
      borderRadius: _roundedCorners ? '8px' : undefined
    }
  }, {
    children: jsx(DotTypography, Object.assign({
      variant: _textVariant,
      component: typographyComponent
    }, {
      children: children
    }), void 0)
  }), void 0);
};

const DotAppLogo = ({
  appLogo,
  appLogoSmall,
  ariaLabel,
  className,
  'data-testid': dataTestId,
  smallOnly: _smallOnly = false
}) => {
  const displaySmallLogo = appLogoSmall && _smallOnly;
  const rootClasses = useStylesWithRootClass(className, 'dot-app-logo', displaySmallLogo ? 'small' : '');
  return jsx("div", Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId
  }, {
    children: displaySmallLogo ? appLogoSmall : appLogo
  }), void 0);
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class ApiError extends Error {
  constructor(response, message) {
    super(message);
    this.url = response.url;
    this.status = response.status;
    this.statusText = response.statusText;
    this.body = response.body;
  }
}

const OpenAPI = {
  BASE: '',
  VERSION: '1 (local)',
  WITH_CREDENTIALS: false,
  TOKEN: undefined,
  USERNAME: undefined,
  PASSWORD: undefined,
  HEADERS: undefined,
  ENCODE_PATH: undefined
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
var ApplicationInstanceStates;
(function (ApplicationInstanceStates) {
  ApplicationInstanceStates[ApplicationInstanceStates["_0"] = 0] = "_0";
  ApplicationInstanceStates[ApplicationInstanceStates["_1"] = 1] = "_1";
})(ApplicationInstanceStates || (ApplicationInstanceStates = {}));

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
var ApplicationModel;
(function (ApplicationModel) {
  (function (instance_state) {
    instance_state[instance_state["_0"] = 0] = "_0";
    instance_state[instance_state["_1"] = 1] = "_1";
  })(ApplicationModel.instance_state || (ApplicationModel.instance_state = {}));
})(ApplicationModel || (ApplicationModel = {}));

function isDefined(value) {
  return value !== undefined && value !== null;
}
function isString(value) {
  return typeof value === 'string';
}
function isStringWithValue(value) {
  return isString(value) && value !== '';
}
function isBlob(value) {
  return value instanceof Blob;
}
function base64(str) {
  try {
    return btoa(str);
  } catch (err) {
    return Buffer.from(str).toString('base64');
  }
}
function getQueryString(params) {
  const qs = [];
  Object.keys(params).forEach(key => {
    const value = params[key];
    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach(value => {
          qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
        });
      } else {
        qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
      }
    }
  });
  if (qs.length > 0) {
    return `?${qs.join('&')}`;
  }
  return '';
}
function getUrl(options) {
  const path = options.path;
  const url = `${OpenAPI.BASE}${path}`;
  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }
  return url;
}
function getFormData(params) {
  const formData = new FormData();
  Object.keys(params).forEach(key => {
    const value = params[key];
    if (isDefined(value)) {
      formData.append(key, value);
    }
  });
  return formData;
}
function resolve(options, resolver) {
  return __awaiter(this, void 0, void 0, function* () {
    if (typeof resolver === 'function') {
      return resolver(options);
    }
    return resolver;
  });
}
function getHeaders(options) {
  return __awaiter(this, void 0, void 0, function* () {
    const token = yield resolve(options, OpenAPI.TOKEN);
    const username = yield resolve(options, OpenAPI.USERNAME);
    const password = yield resolve(options, OpenAPI.PASSWORD);
    const additionalHeaders = yield resolve(options, OpenAPI.HEADERS);
    const defaultHeaders = Object.entries(Object.assign(Object.assign({
      Accept: 'application/json'
    }, additionalHeaders), options.headers)).filter(([key, value]) => isDefined(value)).reduce((headers, [key, value]) => Object.assign(Object.assign({}, headers), {
      [key]: value
    }), {});
    const headers = new Headers(defaultHeaders);
    if (isStringWithValue(token)) {
      headers.append('Authorization', `Bearer ${token}`);
    }
    if (isStringWithValue(username) && isStringWithValue(password)) {
      const credentials = base64(`${username}:${password}`);
      headers.append('Authorization', `Basic ${credentials}`);
    }
    if (options.body) {
      if (options.mediaType) {
        headers.append('Content-Type', options.mediaType);
      } else if (isBlob(options.body)) {
        headers.append('Content-Type', options.body.type || 'application/octet-stream');
      } else if (isString(options.body)) {
        headers.append('Content-Type', 'text/plain');
      } else {
        headers.append('Content-Type', 'application/json');
      }
    }
    return headers;
  });
}
function getRequestBody(options) {
  var _a;
  if (options.formData) {
    return getFormData(options.formData);
  }
  if (options.body) {
    if ((_a = options.mediaType) === null || _a === void 0 ? void 0 : _a.includes('/json')) {
      return JSON.stringify(options.body);
    } else if (isString(options.body) || isBlob(options.body)) {
      return options.body;
    } else {
      return JSON.stringify(options.body);
    }
  }
  return undefined;
}
function sendRequest(options, url) {
  return __awaiter(this, void 0, void 0, function* () {
    const request = {
      method: options.method,
      headers: yield getHeaders(options),
      body: getRequestBody(options)
    };
    return yield fetch(url, request);
  });
}
function getResponseHeader(response, responseHeader) {
  if (responseHeader) {
    const content = response.headers.get(responseHeader);
    if (isString(content)) {
      return content;
    }
  }
  return null;
}
function getResponseBody(response) {
  return __awaiter(this, void 0, void 0, function* () {
    if (response.status !== 204) {
      try {
        const contentType = response.headers.get('Content-Type');
        if (contentType) {
          const isJSON = contentType.toLowerCase().startsWith('application/json');
          if (isJSON) {
            return yield response.json();
          } else {
            return yield response.text();
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    return null;
  });
}
function catchErrors(options, result) {
  const errors = Object.assign({
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable'
  }, options.errors);
  const error = errors[result.status];
  if (error) {
    throw new ApiError(result, error);
  }
  if (!result.ok) {
    throw new ApiError(result, 'Generic Error');
  }
}
/**
 * Request using fetch client
 * @param options The request options from the the service
 * @returns ApiResult
 * @throws ApiError
 */
function request(options) {
  return __awaiter(this, void 0, void 0, function* () {
    const url = getUrl(options);
    const response = yield sendRequest(options, url);
    const responseBody = yield getResponseBody(response);
    const responseHeader = getResponseHeader(response, options.responseHeader);
    const result = {
      url,
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      body: responseHeader || responseBody
    };
    catchErrors(options, result);
    return result;
  });
}

class ApplicationsService {
  /**
   * Retrieves existing applications for accounts and product_instances
   * The results can be filtered by an account and/or a product_instance.
   * - To filter by an account. provide ***account_id*** query parameter.
   * - To filter by a product_instance, provide ***product_instance_id*** query parameter,
   *
   * For example:
   * ```
   * GET /applications?account_id=<UUID for account>&product_instance_id=<UUID for product_instance>
   * ```
   *
   * __Sortable field names__: product_instance_id, account_id, name, url, status, description, alternate_label,         created_date, modified_date
   *
   * __Filterable field names__: product_instance_id, account_id, name, url, status, description, alternate_label,         created_date, modified_date, needs_authentication, enabled
   *
   * __Searchable field names__: name, url, status, description, alternate_label         (to be used with filter _search_ operator)
   *
   * @param accountId UUID Account identifier to filter results by
   * @param productInstanceId UUID Product_Instance identifier to filter results by
   * @param start offset (number of records to skip)
   * @param count limit (number of records to include in response)
   * @param sort comma separated field names (prefix field name with "-" to reverse order direction)
   * @param filter List of filters (each filter is a separate query param, and they are OR'ed)
   * @returns ApplicationModelsWrapper applications are returned.
   * @throws ApiError
   */
  static retrieveApplications(accountId, productInstanceId, start, count, sort, filter) {
    return __awaiter(this, void 0, void 0, function* () {
      const result = yield request({
        method: 'GET',
        path: `/licensing/v1/applications/`,
        query: {
          account_id: accountId,
          product_instance_id: productInstanceId,
          start: start,
          count: count,
          sort: sort,
          filter: filter
        },
        errors: {
          400: `Invalid product_instance/account identifier.`,
          401: `User is not authenticated`,
          403: `User is not authorized to read applications in the requested account`
        }
      });
      return result.body;
    });
  }
  /**
   * Retrieves a application by id
   * @param applicationId
   * @returns ApplicationModelWrapper application is returned.
   * @throws ApiError
   */
  static retrieveApplicationById(applicationId) {
    return __awaiter(this, void 0, void 0, function* () {
      const result = yield request({
        method: 'GET',
        path: `/licensing/v1/applications/${applicationId}`,
        errors: {
          400: `Invalid application identifier`,
          401: `User is not authenticated`,
          403: `User is not authorized to read applications in the requested account`,
          404: `Application is not found`
        }
      });
      return result.body;
    });
  }
}

/*
 * Adds a cancel method to a Promise that when called removes reference to
 * the resolve and reject methods, so the logic include will not execute and
 * also will not prevent garbage collection.
 */
function makeCancelable(promise) {
  let cancel;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(val => {
      if (resolve) {
        resolve(val);
      }
    }).catch(error => {
      if (reject) {
        reject(error);
      }
    });
    cancel = () => {
      resolve = null;
      reject = null;
    };
  });
  wrappedPromise.cancel = cancel;
  return wrappedPromise;
}
/*
 * Hook returns a method to create CancelablePromise's that will be automatically
 * cancelled when the hook is unmounted as part of unmounting the component
 * where it is used.
 */
function useCancelablePromise() {
  const promises = useRef([]);
  // return an unmount function to cancel any promises added
  useEffect(() => {
    return () => {
      promises.current.forEach(p => p.cancel());
      promises.current = [];
    };
  }, []);
  return {
    cancelablePromise: p => {
      const cPromise = makeCancelable(p);
      promises.current.push(cPromise);
      return cPromise;
    }
  };
}

const nullStr = null;
let idCount = 100;
const createAppInstance = (name, instance_state, appType = 'Deploy') => ({
  id: '757e74ed-389b-4ec4-be29-bfed6738b' + idCount++,
  product_instance_id: nullStr,
  account_id: 'c390d325-1628-4c4e-a1ee-d269e025c34e',
  enabled: true,
  created_date: '2022-11-30T23:28:50.980764+00:00',
  modified_date: '2022-11-30T23:28:50.980764+00:00',
  name,
  url: 'https://digital.ai/products/deploy/',
  description: '',
  alternate_label: nullStr,
  logo: nullStr,
  needs_authentication: false,
  logo_product_name: appType,
  instance_state: instance_state % 2
});
const testData = [['QA Deploy', 0], ['Deploy 1', 1], ['Deploy 2er', 5], ['Deploy 3rf', 3], ['Deploy 4', 7], ['Deploy 5', 9], ['Deploy 5a', 101], ['Deploy 5b', 91], ['Deploy 6', 2], ['Deploy 7', 3], ['Deploy 8c', 21], ['Deploy 9', 20], ['Deploy 10m', 10], ['Deploy 11', 11], ['Deploy 12qa', 30], ['Deploy 13', 31], ['Deploy 14d', 41], ['Deploy 15', 45], ['Deploy 16', 40], ['Deploy 17', 51], ['Deploy 18', 70], ['Deploy 19a', 61], ['Deploy 20', 63], ['Deploy 21', 67], ['Deploy 22p', 65], ['Deploy 23', 73], ['Deploy 24o', 93], ['Deploy 25', 11], ['Deploy 26', 80], ['Deploy 27io', 81], ['Deploy 28ty', 87], ['Deploy 29', 76], ['Deploy 30rt', 97], ['Deploy 31sd', 37], ['Deploy 32as', 39], ['Deploy 33', 12], ['No type 1c', 13], ['Deploy 34pl', 19], ['No type 2t', 14], ['Deploy 35', 17], ['No type 3h', 44], ['Deploy 36d', 55]];
const deployInstances = [];
for (const [name, instanceState] of testData) {
  const appType = name.startsWith('No type') ? null : 'Deploy';
  deployInstances.push(createAppInstance(name, instanceState, appType));
}
let applications = [{
  id: 'be6e1e4f-7009-4412-b3ba-e5633cbe6be0',
  product_instance_id: nullStr,
  account_id: 'c390d325-1628-4c4e-a1ee-d269e025c34e',
  enabled: true,
  created_date: '2022-11-30T23:28:01.662721+00:00',
  modified_date: '2022-11-30T23:28:01.662721+00:00',
  name: 'Agility 1',
  url: 'https://digital.ai/products/agility/',
  description: '',
  alternate_label: nullStr,
  logo: nullStr,
  needs_authentication: true,
  logo_product_name: 'Agility',
  instance_state: 1
}, {
  id: 'f30476d3-c432-44c8-a778-a0a9fae203c9',
  product_instance_id: nullStr,
  account_id: 'c390d325-1628-4c4e-a1ee-d269e025c34e',
  enabled: true,
  created_date: '2022-11-30T23:32:00.979159+00:00',
  modified_date: '2022-11-30T23:32:00.979159+00:00',
  name: 'Continuous Testing 1',
  url: 'https://digital.ai/products/continuous-testing/',
  description: '',
  alternate_label: nullStr,
  logo: nullStr,
  needs_authentication: false,
  logo_product_name: 'Continuous Testing',
  instance_state: 1
}, {
  id: 'f30476d4-c432-44c8-a778-a0a9fae203c9',
  product_instance_id: nullStr,
  account_id: 'c390d325-1628-4c4e-a1ee-d269e025c34e',
  enabled: true,
  created_date: '2022-12-30T23:32:00.979159+00:00',
  modified_date: '2022-12-30T23:32:00.979159+00:00',
  name: 'Continuous Testing 2',
  url: 'https://digital.ai/products/continuous-testing/',
  description: '',
  alternate_label: nullStr,
  logo: nullStr,
  needs_authentication: false,
  logo_product_name: 'Continuous Testing',
  instance_state: 1
}];
deployInstances.forEach(deployApp => {
  applications.push(deployApp);
});
applications = applications.concat([{
  id: '0c152339-b953-41e4-8b0f-51182b6e646a',
  product_instance_id: nullStr,
  account_id: 'c390d325-1628-4c4e-a1ee-d269e025c34e',
  enabled: true,
  created_date: '2022-11-30T23:31:18.846994+00:00',
  modified_date: '2022-11-30T23:31:18.846994+00:00',
  name: 'Staging Intelligence',
  url: 'https://digital.ai/products/intelligence/',
  description: '',
  alternate_label: nullStr,
  logo: nullStr,
  needs_authentication: true,
  logo_product_name: 'Intelligence',
  instance_state: 0
}, {
  id: '00f39f97-0e22-4e24-8cd1-20b359861c3f',
  product_instance_id: nullStr,
  account_id: 'c390d325-1628-4c4e-a1ee-d269e025c34e',
  enabled: true,
  created_date: '2022-11-30T23:30:11.995558+00:00',
  modified_date: '2022-11-30T23:30:11.995558+00:00',
  name: 'Prod Release',
  url: 'https://digital.ai/products/release/',
  description: '',
  alternate_label: nullStr,
  logo: nullStr,
  needs_authentication: true,
  logo_product_name: 'Release',
  instance_state: 1
}]);
const getApplicationsMock = {
  applications,
  pagination: {
    total_available: 5,
    start: 0,
    count: 100
  }
};

const DotCoreApiContext = /*#__PURE__*/createContext(null);
const DotCoreApiProvider = ({
  apiUrl,
  token,
  children
}) => {
  const {
    cancelablePromise
  } = useCancelablePromise();
  const [applications, setApplications] = useState();
  const [applicationsLoading, setApplicationsLoading] = useState(true);
  const [applicationsError, setApplicationsError] = useState(null);
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(false);
  const [selectedAppSwitcherAppType, setSelectedAppSwitcherAppType] = useState(null);
  const [platformConsoleUrl, setPlatformConsoleUrl] = useState(null);
  const MOCK_API_URL = 'https://demo-mock-api';
  const retrieveApplications = accountId => {
    const nullProductInstanceId = null;
    const sort = 'name';
    const filter = ['enabled:true'];
    if (OpenAPI.BASE === MOCK_API_URL) {
      setApplicationsError(null);
      setApplicationsLoading(false);
      setApplications(getApplicationsMock.applications);
    } else {
      cancelablePromise(ApplicationsService.retrieveApplications(accountId, nullProductInstanceId, 0, 100, sort, filter)).then(response => {
        setApplicationsError(null);
        setApplicationsLoading(false);
        setApplications(response.applications);
      }).catch(error => setApplicationsError(error));
    }
  };
  const isUUID = s => {
    const uuidRE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return s && s.search(uuidRE) === 0;
  };
  const loadApplications = accountId => {
    if (!accountId || isUUID(accountId)) {
      retrieveApplications(accountId);
    } else {
      const error = new ApiError({
        url: '',
        ok: false,
        status: 400,
        statusText: 'Bad Request',
        body: ''
      }, "If given, 'accountId' must be a UUID.");
      setApplicationsError(error);
    }
  };
  const decodeToken = encodedToken => {
    if (encodedToken) {
      try {
        const decodedToken = jwt_decode(encodedToken);
        const iss = decodedToken.iss;
        const issUrl = new URL(iss);
        const pathArray = issUrl.pathname.split('/');
        const vanityDomain = pathArray[pathArray.length - 1];
        let host = issUrl.hostname === 'localhost' ? 'local.digital.ai:4200' : issUrl.host;
        const identity = 'identity.';
        if (host.startsWith(identity)) {
          host = host.substring(identity.length);
        }
        const consoleUrl = issUrl.protocol + '//' + vanityDomain + '.' + host + '/';
        setPlatformConsoleUrl(consoleUrl);
      } catch (e) {
        console.error('Invalid token', e, encodedToken);
      }
    }
  };
  const setToken = newToken => {
    OpenAPI.TOKEN = newToken;
    decodeToken(newToken);
  };
  const DotCoreApiValues = {
    applications,
    applicationsLoading,
    applicationsError,
    loadApplications,
    setToken,
    isAppSwitcherOpen,
    platformConsoleUrl,
    setIsAppSwitcherOpen,
    selectedAppSwitcherAppType,
    setSelectedAppSwitcherAppType
  };
  const memoizedValues = useMemo(() => DotCoreApiValues, [applications, applicationsError, applicationsLoading, isAppSwitcherOpen, platformConsoleUrl, selectedAppSwitcherAppType]);
  if (apiUrl && OpenAPI.BASE !== apiUrl) {
    OpenAPI.BASE = apiUrl;
  }
  const demoUrl = 'https://digitalai.staging.digitalai.cloud/';
  if (token && OpenAPI.TOKEN !== token) {
    OpenAPI.TOKEN = token;
    decodeToken(token);
  } else if (OpenAPI.BASE === MOCK_API_URL && platformConsoleUrl !== demoUrl) {
    setPlatformConsoleUrl(demoUrl);
  }
  return jsx(DotCoreApiContext.Provider, Object.assign({
    value: memoizedValues
  }, {
    children: children
  }), void 0);
};
const useDotCoreApiContext = () => {
  return useContext(DotCoreApiContext);
};

const rootClassName$Z = 'dot-avatar';
const avatarSpacing = {
  small: 3,
  medium: 5,
  large: 7
};
const StyledAvatar = styled(Avatar).withConfig({
  displayName: "Avatarstyles__StyledAvatar",
  componentId: "sc-13bzj2s-0"
})(["", ""], ({
  theme
}) => css(["&.", "{display:inline-flex;background-color:", ";border:0px;&:focus-visible{box-shadow:0px 0px 0px 3px ", ",0px 0px 0px 5px ", ";outline:0;}img{width:auto;height:105%;}.dot-i,.dot-typography{color:", ";margin-bottom:0;}&.small{height:", ";width:", ";}&.medium{height:", ";width:", ";}&.large{height:", ";width:", ";}}"], rootClassName$Z, ({
  color
}) => {
  return color && theme.palette.avatarColors[color] ? theme.palette.avatarColors[color].backgroundColor : theme.palette.avatarColors['default'].backgroundColor;
}, theme.palette.layer.n0, theme.palette.layer.n900, ({
  color
}) => {
  return color === 'default' ? theme.palette.layer.n700 : color && theme.palette.avatarColors[color] ? theme.palette.avatarColors[color].color : theme.palette.avatarColors['default'].color;
}, theme.spacing(avatarSpacing.small), theme.spacing(avatarSpacing.small), theme.spacing(avatarSpacing.medium), theme.spacing(avatarSpacing.medium), theme.spacing(avatarSpacing.large), theme.spacing(avatarSpacing.large)));

const AvatarContent = ({
  'data-testid': dataTestId,
  iconId,
  imageSrc,
  size,
  text,
  type
}) => {
  const parsedText = () => {
    const textArray = text.split(' ');
    if (textArray.length > 1) {
      const firstInitial = textArray[0].slice(0, 1);
      const secondInitial = textArray[1].slice(0, 1);
      return `${firstInitial}${secondInitial}`;
    } else {
      return text ? text.slice(0, 1) : '';
    }
  };
  const getHeadingFromAvatarSize = () => size === 'large' ? 'h1' : 'h3';
  const getIconFontSizeFromAvatarSize = () => size === 'small' ? size : 'medium';
  if (type === 'icon' || type === 'image' && !imageSrc) {
    return jsx(DotIcon, {
      "data-testid": `${dataTestId}-icon`,
      fontSize: getIconFontSizeFromAvatarSize(),
      iconId: iconId || 'user'
    }, void 0);
  }
  if (type === 'text') {
    return jsx(DotTypography, Object.assign({
      variant: size === 'small' ? 'caption' : getHeadingFromAvatarSize()
    }, {
      children: parsedText()
    }), void 0);
  }
  return null;
};
const DotAvatar = ({
  alt,
  ariaLabel,
  className,
  component: _component = 'div',
  color,
  'data-testid': dataTestId,
  iconId,
  imageSrc,
  onClick,
  size: _size = 'medium',
  tabIndex: _tabIndex = 0,
  text: _text = alt,
  type: _type = 'image',
  tooltip,
  variant: _variant = 'circular',
  style
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$Z, className);
  const getAvatarColor = () => {
    if (color) return color;
    if (_text && _text !== alt) return getAvatarColorForInputText(_text);
    return 'default';
  };
  return jsx(DotTooltip, Object.assign({
    title: tooltip
  }, {
    children: jsx(StyledAvatar, Object.assign({
      alt: alt,
      "aria-label": ariaLabel,
      className: _size,
      classes: {
        root: rootClasses,
        img: 'dot-img'
      },
      color: getAvatarColor(),
      component: onClick ? 'button' : _component,
      "data-testid": dataTestId,
      onClick: event => onClick ? onClick(event) : null,
      src: _type === 'image' ? imageSrc : null,
      style: style,
      tabIndex: tooltip ? _tabIndex : undefined,
      variant: _variant
    }, {
      children: jsx(AvatarContent, {
        "data-testid": dataTestId,
        iconId: iconId,
        imageSrc: imageSrc,
        text: _text,
        type: _type,
        size: _size
      }, void 0)
    }), void 0)
  }), void 0);
};

const rootClassName$Y = 'dot-button';
const StyledButton = styled(Button).withConfig({
  displayName: "Buttonstyles__StyledButton",
  componentId: "sx99hh-0"
})(["", ""], ({
  theme
}) => css(["&.", "{margin:", ";min-width:auto;white-space:nowrap;&.MuiButton-outlined:not([disabled]){border-color:rgba(0,0,0,0.23);color:", ";}&:not(.MuiButton-sizeLarge):not(.MuiButton-sizeSmall){height:", ";}&.MuiButton-containedSecondary{background-color:", ";&:hover,&:active{background-color:", ";}}&.MuiButton-text{padding:6px 16px;}.dot-icon{display:flex;padding:0;}}"], rootClassName$Y, theme.spacing(0.5), theme.palette.grey[700], theme.spacing(5), theme.palette.error.main, darken(theme.palette.error.main, 0.2)));

/** This component wraps the Button component from @material-ui. */
const DotButton = /*#__PURE__*/forwardRef(({
  ariaLabel,
  autoFocus: _autoFocus = false,
  children,
  className,
  'data-testid': dataTestId,
  disabled: _disabled = false,
  disableRipple: _disableRipple = false,
  endIcon,
  fullWidth: _fullWidth = false,
  isSubmit: _isSubmit = false,
  onClick,
  size: _size = 'medium',
  startIcon,
  tooltip,
  type: _type = 'primary'
}, ref) => {
  const rootClasses = useStylesWithRootClass(rootClassName$Y, className);
  let color;
  let variant;
  switch (_type) {
    case 'destructive':
      color = _disabled ? 'inherit' : 'secondary';
      variant = 'contained';
      break;
    case 'primary':
      color = 'primary';
      variant = 'contained';
      break;
    case 'outlined':
      color = 'inherit';
      variant = 'outlined';
      break;
    case 'text':
      color = 'inherit';
      variant = 'text';
      break;
  }
  return jsx(DotTooltip, Object.assign({
    title: tooltip
  }, {
    children: jsx(StyledButton, Object.assign({
      "aria-label": ariaLabel,
      autoFocus: _autoFocus,
      classes: {
        root: rootClasses
      },
      color: color,
      "data-testid": dataTestId,
      disableRipple: _disableRipple,
      disabled: _disabled,
      endIcon: endIcon,
      fullWidth: _fullWidth,
      onClick: event => onClick && onClick(event),
      ref: ref,
      size: _size,
      startIcon: startIcon,
      type: _isSubmit ? 'submit' : 'button',
      variant: variant
    }, {
      children: children
    }), void 0)
  }), void 0);
});

const rootClassName$X = 'dot-link';
const StyledLink = styled(Link).withConfig({
  displayName: "Linkstyles__StyledLink",
  componentId: "sc-1lpmaww-0"
})(["", ""], () => css(["&.", "{cursor:pointer;&:hover:not(.MuiLink-underlineHover){text-decoration:none;}}"], rootClassName$X));

const DotLink = ({
  ariaLabel,
  children,
  className,
  color: _color = 'primary',
  'data-testid': dataTestId,
  href,
  onClick,
  onMouseEnter,
  onPointerDown,
  rel: _rel = 'noreferrer',
  tabIndex: _tabIndex = 0,
  target,
  tooltip,
  underline
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$X, className);
  const handleKeyPress = event => {
    if (onClick && event.key === 'Enter') {
      event.preventDefault();
      onClick(event);
    }
  };
  return jsx(DotTooltip, Object.assign({
    title: tooltip
  }, {
    children: jsx(StyledLink, Object.assign({
      "aria-label": ariaLabel,
      classes: {
        root: rootClasses
      },
      color: _color,
      "data-testid": dataTestId,
      href: href,
      onClick: onClick,
      onKeyPress: handleKeyPress,
      onMouseEnter: onMouseEnter,
      onPointerDown: onPointerDown,
      rel: _rel,
      tabIndex: _tabIndex,
      target: target,
      underline: underline
    }, {
      children: children
    }), void 0)
  }), void 0);
};

const rootClassName$W = 'dot-list';
const listItemRootClass = 'dot-list-item';
const nestedListClassName = 'dot-nested-list';
const nestedDrawerClassName = 'dot-nested-drawer';
const StyledList = styled(List).withConfig({
  displayName: "Liststyles__StyledList",
  componentId: "wxwqwr-0"
})(["", ""], ({
  theme
}) => css(["&.", "{background:", ";.dot-icon{color:", ";}&.", " .", "{padding-left:", ";}.MuiListSubheader-root{padding:0;.MuiTypography-root{padding:", ";}}}"], rootClassName$W, theme.palette.layer.n0, theme.palette.layer.n700, nestedListClassName, listItemRootClass, theme.spacing(4), theme.spacing(1)));

const getChevronIcon = (nestedListType, isOpened) => {
  if (nestedListType !== 'expandable') {
    return 'chevron-right';
  }
  if (isOpened) {
    return 'chevron-up';
  }
  return 'chevron-down';
};

const flyoutListItemClassName = 'dot-flyout-list-item';
const flyoutItemLinkClassName = 'dot-flyout-item-link';
const listItemLinkClassName = 'dot-list-item-link';
const StyledListItem = styled(ListItem).withConfig({
  displayName: "ListItemstyles__StyledListItem",
  componentId: "sc-1fawh8v-0"
})(["", ""], ({
  theme
}) => css(["&.", "{&.", "{padding:0;}p.MuiTypography-root{margin-bottom:0;}.", "{align-items:center;display:flex;flex-grow:2;}.", " .MuiIcon-root{margin-right:", ";}.dot-icon i:before{color:", ";}}"], listItemRootClass, flyoutListItemClassName, listItemLinkClassName, flyoutItemLinkClassName, theme.spacing(4), theme.palette.text.primary));

const rootClassName$V = 'dot-progress';
const StyledCircularProgress = styled(CircularProgress).withConfig({
  displayName: "Progressstyles__StyledCircularProgress",
  componentId: "sc-1gs77rb-0"
})(["&.", "{&.MuiCircularProgress-colorSecondary{color:#649a3d;}}"], rootClassName$V);

const DotProgress = ({
  ariaLabel,
  color: _color = 'secondary',
  className,
  'data-testid': dataTestId,
  size: _size = 40,
  thickness: _thickness = 3.6,
  tooltip: _tooltip = 'loading data',
  value,
  variant: _variant = 'indeterminate'
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$V, className);
  return jsx(DotTooltip, Object.assign({
    title: _tooltip
  }, {
    children: jsx(StyledCircularProgress, {
      "aria-label": ariaLabel,
      classes: {
        root: rootClasses
      },
      color: _color,
      "data-testid": dataTestId,
      size: _size,
      thickness: _thickness,
      value: value,
      variant: _variant
    }, void 0)
  }), void 0);
};

const levelBottom = -1;
const levelFirst = 1;
const levelSecond = 10;
const levelThird = 100;
const levelFourth = 1000;
const levelTop = 9999;

var variables = /*#__PURE__*/Object.freeze({
  __proto__: null,
  levelBottom: levelBottom,
  levelFirst: levelFirst,
  levelSecond: levelSecond,
  levelThird: levelThird,
  levelFourth: levelFourth,
  levelTop: levelTop
});

const rootClassName$U = 'dot-popper';
const StyledPopper$1 = styled(Popper).withConfig({
  displayName: "Popperstyles__StyledPopper",
  componentId: "sd1h8p-0"
})(["", ""], ({
  theme
}) => css(["&.", "{font-family:", ";font-size:", "px;}"], rootClassName$U, theme.typography.fontFamily, theme.typography.body1.fontSize));

const flyoutMenuClassName = 'dot-flyout-menu';
const rootClassName$T = 'dot-menu';
const getListMaxHeight = maxHeight => isString$1(maxHeight) ? maxHeight : `${maxHeight}px`;
const StyledPopper = styled(Popper).withConfig({
  displayName: "Menustyles__StyledPopper",
  componentId: "sc-134fmqu-0"
})(["", ""], ({
  theme
}) => css(["&.", "{font-family:", ";font-size:", "px;z-index:", ";}&.", ",&.", "{&.loading .MuiPaper-root{align-items:center;display:flex;justify-content:center;min-height:200px;min-width:200px;}ul,.dot-action-item{.dot-action-item-text{white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;}}ul{box-sizing:content-box;min-width:112px;overflow:auto;", " .dot-li{min-height:auto;}}.dot-action-item{height:", ";border-top:1px solid ", ";line-height:inherit;button.dot-button{border-radius:", ";justify-content:flex-start;height:100%;margin:0;&:focus-visible{background-color:", ";}.MuiButton-label{gap:", ";.MuiButton-startIcon{margin-left:0;.dot-icon{flex-shrink:0;}}}}}}"], rootClassName$U, theme.typography.fontFamily, theme.typography.body1.fontSize, levelSecond, rootClassName$T, rootClassName$U, ({
  $maxHeight
}) => $maxHeight !== undefined && `
          max-height: ${getListMaxHeight($maxHeight)};
        `, theme.spacing(7), theme.palette.grey[100], theme.spacing(0, 0, 0.5, 0.5), theme.palette.layer.n100, theme.spacing(3)));

const MENU_ITEM_HEIGHT_NORMAL = 48;
const MENU_ITEM_HEIGHT_DENSE = 36;
const DEFAULT_MAX_VISIBLE_ITEMS = 7;

const rootClassName$S = 'dot-ul';
const listItemClassName$1 = 'dot-li';
const listItemWithSubmenuClassName = 'dot-li-with-submenu';
const StyledMenuList = styled(MenuList).withConfig({
  displayName: "MenuListstyles__StyledMenuList",
  componentId: "yqdwwg-0"
})(["", ""], ({
  theme
}) => css(["&.", "{.dot-li{font-size:", "px;justify-content:space-between;gap:", ";&:hover{background:", ";}&.Mui-selected,&.Mui-selected:hover{background:", ";}&.", "{padding-right:", ";}}}"], rootClassName$S, theme.typography.body1.fontSize, theme.spacing(3), hoverGray, lightSelectedGray, listItemWithSubmenuClassName, theme.spacing(0.5)));

const getDefaultItemHeight = isDense => isDense ? MENU_ITEM_HEIGHT_DENSE : MENU_ITEM_HEIGHT_NORMAL;
const calculateItemHeight = (isDense, customItemHeight, menuItemHeight) => {
  // Custom item height must NOT be lower than MENU_ITEM_HEIGHT_DENSE value
  if (customItemHeight && customItemHeight >= MENU_ITEM_HEIGHT_DENSE) {
    return customItemHeight;
  }
  const itemHeightType = typeof menuItemHeight;
  if (itemHeightType === 'number' || itemHeightType === 'string') {
    return menuItemHeight;
  } else {
    return getDefaultItemHeight(isDense);
  }
};
const getNumberOfVisibleItems = (numberOfItems, maxVisibleItems) => {
  if (maxVisibleItems && maxVisibleItems > 0) {
    return maxVisibleItems <= numberOfItems ? maxVisibleItems : numberOfItems;
  }
  return DEFAULT_MAX_VISIBLE_ITEMS;
};
const calculateMaxHeight = ({
  isDense,
  maxVisibleItems,
  menuItems,
  menuItemHeight
}) => {
  // if menuItemHeight is "auto" set maxHeight as same
  if (typeof menuItemHeight === 'string') {
    return menuItemHeight;
  }
  // If 'menuItemHeight' is set it will take precedence here
  const itemHeight = menuItemHeight ? menuItemHeight : getDefaultItemHeight(isDense);
  let maxHeight = 0;
  const numberOfVisibleItems = getNumberOfVisibleItems(menuItems.length, maxVisibleItems);
  const visibleItems = menuItems.slice(0, numberOfVisibleItems);
  visibleItems.forEach(({
    height
  }) => {
    const customItemHeight = height ? height : itemHeight;
    // + 3 is for bottom margin of menuItem
    maxHeight += customItemHeight + 3;
  });
  return maxHeight;
};
const checkForSubItems = menuItems => menuItems.some(menuItem => menuItem.items && menuItems.length > 0);
const checkIfSubmenu = anchorElement => {
  if (!anchorElement) return false;
  return anchorElement.classList.contains(listItemWithSubmenuClassName);
};
const checkIfMenuItemSelected = (key, selectedKey, activeSubmenu) => {
  return selectedKey === key || activeSubmenu === key;
};
const checkForAutoFocus = (autoFocusItem, isFirstItem) => !!(autoFocusItem && isFirstItem);

/**
 * Since this component is used inside 'ClickAwayListener',
 * it needs to be contained within 'forwardRef' function
 */
const DotMenuList = /*#__PURE__*/forwardRef(({
  autoFocusItem,
  className,
  'data-testid': dataTestId,
  dense,
  id,
  maxVisibleItems,
  menuItemHeight,
  menuItems,
  onItemSelect,
  onKeyDown,
  onSubMenuCreate,
  selectedKey
}, ref) => {
  const rootClasses = useStylesWithRootClass(rootClassName$S, className);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [subItemAnchorEl, setSubItemAnchorEl] = useState(null);
  const openSubmenu = (target, itemKey) => {
    // Set new anchor for submenu and active submenu key
    // so that new submenu can be opened
    setSubItemAnchorEl(target);
    setActiveSubmenu(itemKey);
  };
  const closeActiveSubmenu = () => {
    // We want to clean active submenu state if it exists.
    // This will make previous submenu disappear when
    // hovering to item with no submenu items
    activeSubmenu && setActiveSubmenu(null);
  };
  const getMouseEnterHandler = (itemKey, hasSubmenu) => event => {
    hasSubmenu ? openSubmenu(event.currentTarget, itemKey) : closeActiveSubmenu();
  };
  return jsx(StyledMenuList, Object.assign({
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId,
    dense: dense,
    id: id,
    onKeyDown: onKeyDown,
    style: {
      height: calculateMaxHeight({
        isDense: dense,
        maxVisibleItems,
        menuItems,
        menuItemHeight
      })
    }
  }, {
    children: menuItems.map((item, index) => {
      const {
        ariaLabel: itemAriaLabel,
        children,
        classes,
        disabled,
        divider,
        height,
        items: subItems,
        key
      } = item;
      const itemHeight = calculateItemHeight(dense, height, menuItemHeight);
      const isSelected = checkIfMenuItemSelected(key, selectedKey, activeSubmenu);
      const isFirstItem = index === 0;
      const hasSubmenu = !!subItems;
      const hasAutoFocus = checkForAutoFocus(autoFocusItem, isFirstItem);
      const menuItemClasses = useStylesWithRootClass(listItemClassName$1, hasSubmenu ? listItemWithSubmenuClassName : '', classes ? classes : '');
      const handleClick = event => {
        // Execute select callback only for items which does not have
        // submenu defined. If there is no menu or handler - prevent
        // further propagation of the current event so that click on
        // items with submenu does not close the menu
        !hasSubmenu && onItemSelect ? onItemSelect(event, key) : event.stopPropagation();
      };
      /**
       * If there is submenu, right arrow icon will be added
       * and sub-menu will be rendered
       */
      return jsxs(MenuItem, Object.assign({
        autoFocus: hasAutoFocus,
        "aria-label": itemAriaLabel,
        className: menuItemClasses,
        disabled: disabled,
        disableRipple: hasSubmenu,
        divider: divider,
        onClick: handleClick,
        onMouseEnter: getMouseEnterHandler(key, hasSubmenu),
        ref: ref,
        style: {
          height: itemHeight
        },
        selected: isSelected
      }, {
        children: [children, hasSubmenu && jsx(DotIcon, {
          "data-testid": "dot-item-arrow-icon",
          iconId: "arrow-right"
        }, void 0), hasSubmenu && onSubMenuCreate({
          anchorElement: subItemAnchorEl,
          isOpened: isSelected,
          subMenuId: key,
          subMenuItems: subItems
        })]
      }), key);
    })
  }), void 0);
});

const DotMenu = ({
  anchorEl,
  ariaLabel,
  className,
  'data-testid': dataTestId,
  dense: _dense = true,
  disablePortal,
  id,
  loading: _loading = false,
  maxVisibleItems: _maxVisibleItems = DEFAULT_MAX_VISIBLE_ITEMS,
  menuItemHeight,
  menuItems: _menuItems = [],
  menuPlacement: _menuPlacement = 'bottom',
  onLeave,
  onSelect,
  open: _open = false,
  selectedKey
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$T, className, _loading ? 'loading' : '');
  const isSubmenu = checkIfSubmenu(anchorEl);
  const hasSubItems = checkForSubItems(_menuItems);
  // Timeout object is customizable when Menu component is either submenu
  // (it is opened within parent menu) or it contains at least one item which
  // has sub-items. This is done because when multi-level menu is closing it
  // will first close the parent and only then child menus - which looks
  // a bit weird - so here I'm giving it exit value of 0 so that it looks like
  // they all close at the same time. For "normal" menus, timeout is unnecessary.
  const timeout = isSubmenu || hasSubItems ? {
    exit: 0,
    enter: 300
  } : undefined;
  const handleSelect = (event, itemKey) => {
    onLeave && onLeave(event);
    onSelect && onSelect(event, id, itemKey);
  };
  const handleListKeyDown = event => {
    if (onLeave && event.key === 'Tab') {
      event.preventDefault();
      onLeave(event);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickAway = event => {
    if (onLeave && (!anchorEl || !anchorEl.contains(event.currentTarget))) {
      onLeave(event);
    }
  };
  return jsx(StyledPopper, Object.assign({
    anchorEl: anchorEl,
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    disablePortal: disablePortal,
    open: _open,
    placement: _menuPlacement,
    role: undefined,
    transition: true
  }, {
    children: ({
      TransitionProps,
      placement
    }) => jsx(Fade, Object.assign({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      },
      timeout: timeout
    }, {
      children: jsx(Paper, {
        children: jsx(ClickAwayListener, Object.assign({
          onClickAway: handleClickAway
        }, {
          children: _loading ? jsx(DotProgress, {
            "data-testid": "loading-indicator",
            tooltip: "Loading Data...",
            value: 20
          }, void 0) : jsx(DotMenuList, {
            autoFocusItem: _open,
            "data-testid": `${dataTestId}-menu`,
            dense: _dense,
            id: id,
            maxVisibleItems: _maxVisibleItems,
            menuItemHeight: menuItemHeight,
            menuItems: _menuItems,
            onItemSelect: handleSelect,
            onKeyDown: handleListKeyDown,
            onSubMenuCreate: ({
              anchorElement,
              isOpened,
              subMenuId,
              subMenuItems
            }) => jsx(DotMenu, {
              anchorEl: anchorElement,
              menuPlacement: "right-start",
              id: subMenuId,
              menuItems: subMenuItems,
              open: isOpened,
              onLeave: onLeave,
              onSelect: onSelect,
              selectedKey: selectedKey
            }, void 0),
            selectedKey: selectedKey
          }, void 0)
        }), void 0)
      }, void 0)
    }), void 0)
  }), void 0);
};

const CreateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

const rootClassName$R = 'dot-drawer';
const StyledDrawer = styled(Drawer).withConfig({
  displayName: "Drawerstyles__StyledDrawer",
  componentId: "sc-1uiowy0-0"
})(["", ""], ({
  theme
}) => css(["&.", " .MuiBackdrop-root{background-color:", ";}.dot-drawer-paper{height:", ";padding:", ";width:", ";}"], rootClassName$R, alpha(theme.palette.grey[900], 0.7), ({
  height,
  anchor
}) => anchor === 'left' || anchor === 'right' ? '100%' : height, theme.spacing(2), ({
  width,
  anchor
}) => anchor === 'bottom' || anchor === 'top' ? 'auto' : width));

const rootClassName$Q = 'dot-drawer-header';
const StyleDrawerHeader = styled.div.withConfig({
  displayName: "DrawerHeaderstyles__StyleDrawerHeader",
  componentId: "sc-2d2xd3-0"
})(["", ""], ({
  theme
}) => css(["&.", "{padding:", ";display:flex;align-items:center;.close-button{margin-left:auto;}}"], rootClassName$Q, theme.spacing(0, 0, 2)));

const rootClassName$P = 'dot-icon-btn';
const StyledIconButton = styled(IconButton).withConfig({
  displayName: "IconButtonstyles__StyledIconButton",
  componentId: "eko0kb-0"
})(["", ""], () => css(["&.", "{font-size:inherit;padding:10px;.dot-icon.MuiIcon-fontSizeSmall{padding:1px;}&.MuiIconButton-sizeSmall{padding:3px;}&.ripple-disabled{&:hover,&:active,&:focus{background:", ";}}"], rootClassName$P, hoverGray));

const DotIconButton = ({
  ariaLabel,
  className,
  color: _color = 'inherit',
  'data-testid': dataTestId,
  disabled: _disabled = false,
  disableRipple: _disableRipple = false,
  iconId,
  iconSize: _iconSize = 'small',
  onClick,
  tooltip,
  size: _size = 'medium'
}) => {
  const rippleClassName = _disableRipple ? 'ripple-disabled' : '';
  const rootClasses = useStylesWithRootClass(rootClassName$P, rippleClassName, className);
  return jsx(DotTooltip, Object.assign({
    "data-testid": "icon-button-tooltip",
    title: tooltip
  }, {
    children: jsx(StyledIconButton, Object.assign({
      "aria-label": ariaLabel,
      classes: {
        root: rootClasses
      },
      color: _color,
      "data-testid": dataTestId,
      disableRipple: _disableRipple,
      disabled: _disabled,
      onClick: event => onClick && onClick(event),
      size: _size
    }, {
      children: jsx(DotIcon, {
        "data-testid": "button-icon",
        fontSize: _iconSize,
        iconId: iconId
      }, void 0)
    }), void 0)
  }), void 0);
};

const DotDrawerHeader = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  onClose,
  variant
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$Q, className);
  return jsxs(StyleDrawerHeader, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId
  }, {
    children: [children, variant !== 'permanent' && jsx(DotIconButton, {
      className: "close-button",
      iconId: "close",
      onClick: onClose
    }, void 0)]
  }), void 0);
};

const rootClassName$O = 'dot-drawer-body';
const StyleDrawerBody = styled.div.withConfig({
  displayName: "DrawerBodystyles__StyleDrawerBody",
  componentId: "sc-1mpmjdk-0"
})(["", ""], () => css(["&.", "{display:flex;.dot-drawer-close-button{align-self:self-start;padding:0;margin-left:auto;}}"], rootClassName$O));

const DotDrawerBody = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  headerExists,
  onClose,
  variant
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$O, className);
  return jsxs(StyleDrawerBody, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId
  }, {
    children: [children, !headerExists && variant !== 'permanent' && jsx(DotIconButton, {
      className: "dot-drawer-close-button",
      iconId: "close",
      onClick: onClose
    }, void 0)]
  }), void 0);
};

const rootClassName$N = 'dot-drawer-footer';
const StyleDrawerFooter = styled.div.withConfig({
  displayName: "DrawerFooterstyles__StyleDrawerFooter",
  componentId: "sc-1ki05ze-0"
})(["", ""], ({
  theme
}) => css(["&.", "{padding:", ";}"], rootClassName$N, theme.spacing(2, 0, 0)));

const DotDrawerFooter = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$N, className);
  return jsx(StyleDrawerFooter, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId
  }, {
    children: children
  }), void 0);
};

const DotDrawer = ({
  anchor: _anchor = 'right',
  ariaLabel,
  className,
  children,
  'data-testid': dataTestId,
  drawerBodyProps,
  drawerFooterProps,
  drawerHeaderProps,
  height,
  ModalProps,
  onClose,
  open,
  PaperProps,
  variant: _variant = 'temporary',
  width: _width = '256px'
}) => {
  useEffect(() => {
    if (children !== undefined && drawerBodyProps !== undefined) {
      console.warn('Please use `children` or `drawerBodyProps`. If both are used, `children` is ignored.');
    }
  }, []);
  const handleClose = event => {
    if (onClose) {
      onClose(event);
    }
  };
  const rootClasses = useStylesWithRootClass(rootClassName$R, className);
  const headerExists = !!drawerHeaderProps;
  const bodyTestId = drawerBodyProps ? drawerBodyProps[`data-testid`] : 'drawer-body';
  return jsxs(StyledDrawer, Object.assign({
    ModalProps: ModalProps,
    PaperProps: PaperProps,
    anchor: _anchor,
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses,
      paper: 'dot-drawer-paper'
    },
    "data-testid": dataTestId,
    height: height,
    onClose: handleClose,
    open: open,
    variant: _variant,
    width: _width
  }, {
    children: [drawerHeaderProps && jsx(DotDrawerHeader, Object.assign({
      className: drawerHeaderProps.className,
      "data-testid": drawerHeaderProps[`data-testid`],
      onClose: handleClose,
      variant: _variant
    }, {
      children: drawerHeaderProps.children
    }), void 0), drawerBodyProps && jsx(DotDrawerBody, Object.assign({
      className: drawerBodyProps === null || drawerBodyProps === void 0 ? void 0 : drawerBodyProps.className,
      "data-testid": bodyTestId,
      headerExists: headerExists,
      onClose: handleClose,
      variant: _variant
    }, {
      children: drawerBodyProps.children
    }), void 0), !drawerBodyProps && children, drawerFooterProps && jsx(DotDrawerFooter, Object.assign({
      className: drawerFooterProps.className,
      "data-testid": drawerFooterProps[`data-testid`]
    }, {
      children: drawerFooterProps.children
    }), void 0)]
  }), void 0);
};

const fadeIn = keyframes(["from{opacity:0;}to{opacity:1;}"]);
const StyledDotDrawer = styled(DotDrawer).withConfig({
  displayName: "NestedListstyles__StyledDotDrawer",
  componentId: "sc-1wwoqos-0"
})(["", ""], ({
  open
}) => css(["&.", "{.dot-drawer-paper{z-index:", ";animation:", ";}}"], nestedDrawerClassName, open ? levelFirst : levelBottom, open && css(["", " 0.2s cubic-bezier(1,0,1,.01);"], fadeIn)));

const DEFAULT_TOOLTIP_PLACEMENT = 'top-start';
const DotListDivider = ({
  item,
  index
}) => {
  if (item.text) {
    return jsx(ListSubheader, Object.assign({
      disableSticky: true
    }, {
      children: jsx(DotTypography, Object.assign({
        variant: "overline"
      }, {
        children: item.text
      }), void 0)
    }), void 0);
  }
  return jsx(Divider, {
    "aria-hidden": true,
    "data-testid": `divider-${index}`
  }, void 0);
};
const DotList = ({
  ariaLabel,
  children,
  className,
  component: _component = 'ul',
  'data-testid': dataTestId,
  dense: _dense = false,
  disablePadding: _disablePadding = false,
  items: _items = [],
  menuPlacement: _menuPlacement = 'right-start',
  nestedDrawerLeftSpacing: _nestedDrawerLeftSpacing = 240,
  nestedListType: _nestedListType = 'expandable',
  width: _width = 240
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$W, className);
  const listWidth = typeof _width === 'number' ? `${_width}px` : _width;
  const listRef = useRef();
  const [listItemIndex, setListItemIndex] = useState(null);
  const updateSelectedListItem = currentIndex => {
    currentIndex === listItemIndex ? setListItemIndex(null) : setListItemIndex(currentIndex);
  };
  return jsxs(StyledList, Object.assign({
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    component: _component,
    "data-testid": dataTestId,
    dense: _dense,
    disablePadding: _disablePadding,
    ref: listRef,
    style: {
      width: listWidth
    }
  }, {
    children: [_items.map((item, index) => {
      const handleListItemClick = e => {
        var _a;
        updateSelectedListItem(index);
        (_a = item.onClick) === null || _a === void 0 ? void 0 : _a.call(item, e);
      };
      const handleMenuLeave = event => {
        var _a, _b;
        // Remove index only if clicked element is not found within the list
        if (!((_a = listRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
          setListItemIndex(null);
          (_b = item.onMenuLeave) === null || _b === void 0 ? void 0 : _b.call(item, event);
        }
      };
      if (item.child) {
        return jsx(Fragment, {
          children: item.child
        }, `item-child-${index}`);
      }
      if (item.divider) {
        return jsx(DotListDivider, {
          index: index,
          item: item
        }, `divider-${index}`);
      }
      return jsx(DotListItem, {
        className: item.className,
        component: item.component,
        "data-testid": `${dataTestId}-item-${index}`,
        endIcon: item.endIcon,
        href: item.href,
        isOpened: listItemIndex === index,
        items: item.items,
        menuPlacement: _menuPlacement,
        nestedDrawerLeftSpacing: _nestedDrawerLeftSpacing,
        nestedListType: _nestedListType,
        onClick: item.href && !item.onClick ? null : handleListItemClick,
        onMenuLeave: handleMenuLeave,
        primaryText: item.primaryText,
        secondaryText: item.secondaryText,
        selected: item.selected,
        startIcon: item.startIcon,
        target: item.target,
        text: item.text,
        tooltip: item.tooltip,
        tooltipPlacement: item.tooltipPlacement || DEFAULT_TOOLTIP_PLACEMENT
      }, index);
    }), children]
  }), void 0);
};
const DotListItem = ({
  ariaLabel,
  className,
  component: _component2 = 'li',
  'data-testid': dataTestId,
  divider: _divider = false,
  endIcon,
  href,
  isOpened,
  onClick,
  onMenuLeave,
  items: _items2 = [],
  menuPlacement,
  nestedDrawerLeftSpacing,
  nestedListType,
  primaryText,
  secondaryText,
  selected,
  startIcon,
  target,
  text,
  tooltip,
  tooltipPlacement: _tooltipPlacement = DEFAULT_TOOLTIP_PLACEMENT
}) => {
  const hasChildren = _items2.length > 0;
  const isFlyout = nestedListType === 'menu' && hasChildren;
  const [anchorEl, setAnchorEl] = useState(null);
  const showEndIcon = endIcon || hasChildren;
  const rootClasses = useStylesWithRootClass(listItemRootClass, className, isOpened ? 'open' : '');
  const toggleOpen = event => setAnchorEl(event.currentTarget);
  const handleClick = event => {
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
    toggleOpen(event);
  };
  const handleMenuLeave = event => onMenuLeave(event);
  const renderListItemText = () => primaryText && secondaryText ? jsx(ListItemText, {
    primary: primaryText,
    secondary: secondaryText
  }, void 0) : jsx(DotTypography, Object.assign({
    variant: "body1"
  }, {
    children: text
  }), void 0);
  const renderListItemEndIcon = () => {
    if (hasChildren || !endIcon) {
      return jsx(DotIcon, {
        iconId: hasChildren && getChevronIcon(nestedListType, isOpened)
      }, void 0);
    }
    return endIcon;
  };
  return jsxs(Fragment$1, {
    children: [jsx(DotTooltip, Object.assign({
      "data-testid": `${dataTestId}-tooltip`,
      placement: _tooltipPlacement,
      title: tooltip
    }, {
      children: jsxs(StyledListItem, Object.assign({
        "aria-label": ariaLabel,
        button: true,
        classes: {
          root: rootClasses
        },
        component: href && !onClick ? 'a' : _component2,
        "data-testid": dataTestId,
        divider: _divider,
        href: onClick ? null : href,
        onClick: onClick || !href ? handleClick : null,
        selected: isFlyout ? isOpened : selected,
        target: target
      }, {
        children: [jsxs("span", Object.assign({
          className: listItemLinkClassName
        }, {
          children: [startIcon && jsx(ListItemIcon, {
            children: startIcon
          }, void 0), renderListItemText()]
        }), void 0), showEndIcon && renderListItemEndIcon()]
      }), void 0)
    }), void 0), hasChildren && jsx(NestedList, {
      anchorEl: anchorEl,
      ariaLabel: "nested list",
      "data-testid": "nestedList",
      items: _items2,
      menuPlacement: menuPlacement,
      nestedDrawerLeftSpacing: nestedDrawerLeftSpacing,
      onMenuLeave: handleMenuLeave,
      open: isOpened,
      type: nestedListType
    }, void 0)]
  }, void 0);
};
const NestedList = ({
  ariaLabel,
  anchorEl,
  'data-testid': dataTestId,
  items,
  menuPlacement,
  nestedDrawerLeftSpacing,
  onMenuLeave,
  open,
  parentItemIndex,
  type
}) => {
  const flyoutItemClasses = useStylesWithRootClass(listItemRootClass, flyoutListItemClassName);
  const flyoutSpanClasses = useStylesWithRootClass(listItemLinkClassName, flyoutItemLinkClassName);
  if (type === 'expandable') {
    return jsx(Collapse, Object.assign({
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, {
      children: jsx(DotList, {
        ariaLabel: ariaLabel,
        className: nestedListClassName,
        component: "div",
        "data-testid": dataTestId,
        disablePadding: true,
        items: items
      }, parentItemIndex)
    }), void 0);
  }
  if (type === 'menu') {
    const menuItems = items.map((item, index) => {
      const {
        href,
        target,
        onClick,
        tooltip,
        tooltipPlacement = DEFAULT_TOOLTIP_PLACEMENT,
        text
      } = item;
      return {
        children: jsx(DotTooltip, Object.assign({
          placement: tooltipPlacement,
          title: tooltip
        }, {
          children: jsx(StyledListItem, Object.assign({
            className: flyoutItemClasses,
            component: href && !onClick ? 'a' : null,
            "data-testid": `${dataTestId}-item-${index}`,
            href: href,
            onClick: onClick,
            target: target
          }, {
            children: jsxs("span", Object.assign({
              className: flyoutSpanClasses
            }, {
              children: [item.startIcon, jsx(DotTypography, Object.assign({
                variant: "body1"
              }, {
                children: text
              }), void 0)]
            }), void 0)
          }), `${parentItemIndex}-${index}`)
        }), `${parentItemIndex}-${index}-tooltip`),
        classes: '',
        key: String(index)
      };
    });
    return jsx(DotMenu, {
      anchorEl: anchorEl,
      ariaLabel: ariaLabel,
      className: flyoutMenuClassName,
      "data-testid": dataTestId,
      id: CreateUUID(),
      menuItemHeight: "auto",
      menuItems: menuItems,
      menuPlacement: menuPlacement,
      onLeave: onMenuLeave,
      open: open
    }, parentItemIndex);
  }
  if (type === 'drawer') {
    return jsx(StyledDotDrawer, Object.assign({
      PaperProps: {
        style: {
          left: `${nestedDrawerLeftSpacing}px`
        }
      },
      anchor: "left",
      className: nestedDrawerClassName,
      "data-testid": "nested-drawer",
      open: open,
      variant: "persistent"
    }, {
      children: jsx(DotList, {
        ariaLabel: ariaLabel,
        className: nestedListClassName,
        component: "div",
        "data-testid": dataTestId,
        disablePadding: true,
        items: items,
        width: '100%'
      }, parentItemIndex)
    }), void 0);
  }
};

const DotInputLabel = ({
  'data-testid': dataTestId,
  disabled: _disabled = false,
  error: _error = false,
  id,
  label,
  required
}) => {
  return jsx(StyledInputLabel, Object.assign({
    "data-testid": dataTestId,
    classes: {
      root: labelClassName
    },
    disabled: _disabled,
    error: _error,
    htmlFor: id,
    required: required,
    shrink: false,
    variant: "outlined"
  }, {
    children: jsx(DotTypography, Object.assign({
      variant: "subtitle2"
    }, {
      children: label
    }), void 0)
  }), void 0);
};

const DELAY_MS = 300;
const EndAdornment = ({
  endAdornmentTooltip,
  error,
  dataTestId,
  endIcon,
  success,
  warning
}) => {
  const renderIcon = iconType => jsx(DotIcon, {
    "data-testid": dataTestId && `${dataTestId}-${iconType}-icon`,
    iconId: `${iconType}-solid`
  }, void 0);
  const errorIcon = error && renderIcon('error');
  const successIcon = success && renderIcon('check');
  const warningIcon = warning && renderIcon('warning');
  const endAdornmentIcon = endIcon || errorIcon || warningIcon || successIcon;
  const styledAdornment = jsx(StyledAdornment, Object.assign({
    className: `${adornmentIconClassName} end`,
    position: "end"
  }, {
    children: endAdornmentIcon
  }), void 0);
  return endAdornmentTooltip ? jsx(DotTooltip, Object.assign({
    title: endAdornmentTooltip
  }, {
    children: styledAdornment
  }), void 0) : styledAdornment;
};
const getInitialState = value => ({
  inputValue: value || ''
});
const DotInputText = ({
  autoComplete: _autoComplete = 'off',
  autoFocus,
  className,
  defaultValue,
  'data-testid': dataTestId,
  disabled: _disabled = false,
  error: _error = false,
  endAdornmentTooltip,
  fullWidth: _fullWidth = true,
  hasDebounce,
  helperText,
  endIcon,
  id,
  inputRef,
  label,
  maxRows,
  minRows,
  multiline: _multiline = false,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onMouseUp,
  persistentLabel,
  placeholder,
  readOnly: _readOnly = false,
  required: _required = false,
  shrink,
  startIcon,
  size: _size = 'small',
  success,
  type: _type = 'text',
  value,
  warning: _warning = false
}) => {
  const hasError = _error && errorClassName;
  const hasWarning = !_error && _warning && warningClassName;
  const hasSuccess = !_error && !_warning && success && successClassName;
  const hasEndAdornmentIcon = endIcon || _error || hasWarning || hasSuccess;
  // This state is used only with debounce feature enabled
  const [inputTextState, setInputTextState] = useState(hasDebounce && getInitialState(value));
  const rootStyles = useStylesWithRootClass(rootClassName$10, hasError, hasWarning, hasSuccess, _readOnly ? 'read-only' : '');
  // Used to control text value from the consumer component
  // when debounce feature is enabled
  useEffect(() => {
    if (hasDebounce && value !== inputTextState.inputValue) {
      setInputTextState(getInitialState(value));
    }
  }, [value]);
  // Improve performance by avoiding callback execution
  // on each keystroke (if debounce feature is active)
  useEffect(() => {
    // Do not proceed if debounce feature is turned
    // off or there is no event defined
    if (!hasDebounce || !inputTextState || !inputTextState.changeEvent || !onChange) return;
    const handler = setTimeout(() => {
      onChange(inputTextState.changeEvent);
    }, DELAY_MS);
    return () => clearTimeout(handler);
  }, [inputTextState]);
  const handleChange = e => {
    // We need to have control over change event and input value separately
    // so that we can set initial state via 'value' prop (if needed)
    hasDebounce ? setInputTextState({
      changeEvent: e,
      inputValue: e.target.value
    }) : onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };
  const inputTextValue = hasDebounce ? inputTextState.inputValue : value;
  // Don't use default value when debounce feature is enabled because
  // in that case component is controlled
  const defaultInputValue = hasDebounce ? undefined : defaultValue;
  const startAdornmentIcon = () => {
    if (!startIcon) return null;
    return jsx(StyledAdornment, Object.assign({
      className: `${adornmentIconClassName} start`,
      position: "start"
    }, {
      children: startIcon
    }), void 0);
  };
  const endAdornmentIcon = () => {
    if (!hasEndAdornmentIcon) return null;
    return jsx(EndAdornment, Object.assign({}, {
      endAdornmentTooltip,
      error: _error,
      dataTestId,
      endIcon,
      success,
      warning: _warning
    }), void 0);
  };
  const wrapperClassName = useStylesWithRootClass(_fullWidth !== false ? 'dot-input-text--fullwidth' : '', className);
  return jsxs(StyledTextFieldContainer, Object.assign({
    className: wrapperClassName
  }, {
    children: [persistentLabel && jsx(DotInputLabel, Object.assign({}, {
      disabled: _disabled,
      error: _error,
      id,
      label,
      required: _required
    }), void 0), jsx(StyledTextField, {
      InputProps: {
        startAdornment: startAdornmentIcon(),
        endAdornment: endAdornmentIcon()
      },
      "aria-label": name,
      autoComplete: _autoComplete,
      autoFocus: autoFocus,
      classes: {
        root: rootStyles
      },
      defaultValue: defaultInputValue,
      disabled: _disabled,
      error: _error,
      focused: _readOnly ? false : undefined,
      fullWidth: _fullWidth,
      helperText: helperText,
      id: id,
      InputLabelProps: {
        shrink: _type === 'date' ? true : shrink
      },
      inputProps: {
        'data-testid': dataTestId,
        className: 'dot-input',
        readOnly: _readOnly
      },
      inputRef: inputRef,
      label: persistentLabel ? null : label,
      multiline: _multiline,
      name: name,
      onBlur: onBlur,
      onChange: hasDebounce ? handleChange : onChange,
      onFocus: onFocus,
      onKeyDown: onKeyDown,
      onMouseUp: onMouseUp,
      placeholder: placeholder,
      required: _required,
      minRows: _multiline ? minRows : null,
      maxRows: _multiline ? maxRows : null,
      size: _size,
      type: _type,
      value: inputTextValue,
      variant: "outlined"
    }, void 0)]
  }), void 0);
};

const rootClassName$M = 'dot-search-input';
const StyledSearchInput = styled.span.withConfig({
  displayName: "SearchInputstyles__StyledSearchInput",
  componentId: "qlwzku-0"
})(["", ""], () => css(["&.", "{}"], rootClassName$M));

function SearchInput({
  'data-testid': dataTestId,
  autoFocus = true,
  className,
  disabled = false,
  onChange,
  onClear,
  placeholder = 'Search',
  tooltip = null,
  value
}) {
  const rootClasses = useStylesWithRootClass(rootClassName$M, className);
  const [searchText, setSearchText] = useState(value);
  let previousSearchText = '';
  const handleChange = useCallback(event => {
    previousSearchText = event.target.value;
    setSearchText(event.target.value);
    // Timeout is to give user a chance to finish typing before refreshing data.
    setTimeout(function () {
      if (onChange && event.target.value === previousSearchText) {
        onChange(event.target.value);
      }
    }, 500);
  }, [onChange]);
  const handleClear = useCallback(() => {
    setSearchText('');
    onClear && onClear();
  }, [onClear]);
  const searchIcon = jsx(DotIcon, {
    className: "search-icon",
    iconId: "search"
  }, void 0);
  const clearSearchIcon = jsx(DotIconButton, {
    iconId: "close",
    onClick: handleClear,
    size: "small",
    tooltip: "Clear search text"
  }, void 0);
  return jsx(StyledSearchInput, Object.assign({
    className: rootClasses
  }, {
    children: jsx(DotTooltip, Object.assign({
      placement: "bottom",
      title: tooltip
    }, {
      children: jsx(DotInputText, {
        "data-testid": dataTestId,
        autoFocus: autoFocus,
        className: "search-text",
        disabled: disabled,
        endIcon: (searchText === null || searchText === void 0 ? void 0 : searchText.length) > 0 ? clearSearchIcon : null,
        id: "app-instance-search-text",
        name: "app-instance-search-text",
        onChange: handleChange,
        placeholder: placeholder,
        startIcon: searchIcon,
        value: searchText
      }, void 0)
    }), void 0)
  }), void 0);
}

const rootClassName$L = 'dot-copy-button';
const StyledCopyButton = styled.span.withConfig({
  displayName: "CopyButtonstyles__StyledCopyButton",
  componentId: "sc-18ff0u-0"
})(["", ""], ({
  theme
}) => css(["&.", "{.copied-to-clipboard{color:", ";}}"], rootClassName$L, theme.palette.success[400]));

const DotCopyButton = ({
  ariaLabel: _ariaLabel = 'Copy to clipboard',
  copiedTooltip: _copiedTooltip = 'Copied!',
  copyTooltip: _copyTooltip = 'Copy to clipboard',
  'data-testid': dataTestId = 'dot-copy-button',
  value
}) => {
  const [showCopiedIcon, setShowCopiedIcon] = useState(false);
  const copyToClipboard = () => {
    // The check for navigator.clipboard.writeText is because this function is
    // only supported in secure contexts (https). This will always be the case in
    // production but not when running locally.
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      console.warn('Copy to clipboard is only supported in secure context (https)', value);
    } else {
      navigator.clipboard.writeText(value);
    }
  };
  const copy = () => {
    copyToClipboard();
    setShowCopiedIcon(true);
    setTimeout(function () {
      setShowCopiedIcon(false);
    }, 3000);
    return false;
  };
  return jsxs(StyledCopyButton, Object.assign({
    className: rootClassName$L,
    "data-testid": dataTestId
  }, {
    children: [!showCopiedIcon && jsx(DotIconButton, {
      ariaLabel: _ariaLabel,
      "data-testid": `${dataTestId}-button`,
      iconId: "duplicate",
      onClick: copy,
      size: "small",
      tooltip: _copyTooltip
    }, void 0), showCopiedIcon && jsx(DotIcon, {
      className: "copied-to-clipboard",
      "data-testid": `${dataTestId}-icon`,
      fontSize: "small",
      iconId: "check-solid",
      tooltip: _copiedTooltip
    }, void 0)]
  }), void 0);
};

var img$6 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z' fill='%23279FEA'/%3e%3cpath d='M12.4332 16.3533V14.8333H11.5665V16.3533L10.7432 15.8933L9.85651 16.4033L11.9998 17.6366L14.1932 16.3733L13.3332 15.8766L12.4332 16.3533Z' fill='white'/%3e%3cpath d='M7.99328 10.1866L9.24661 10.9132L9.67995 10.1399L8.36995 9.4299L9.09328 9.01657V8.03323L7.11328 9.18323L7.11661 11.5532L7.99328 11.0566V10.1866Z' fill='white'/%3e%3cpath d='M14.6934 10.9133L15.9934 10.1733L15.99 11.0566L16.8867 11.5599V9.1766L14.81 7.98993L14.7767 8.9566L15.6167 9.45326L14.29 10.0799L14.6934 10.9133Z' fill='white'/%3e%3cpath d='M16.8801 12.5435L16.0001 12.0402V12.0935V13.7068L12.4167 11.6868V7.61015L13.9667 8.49015V7.51682L12.0001 6.35349L9.95006 7.52348V8.52348L11.4967 7.63015V11.6868L8.00006 13.8168V12.0202L7.12006 12.5235V14.8202L8.96672 15.8502L9.86672 15.3335L8.40006 14.5268L12.0001 12.4368L15.5567 14.5035L14.1301 15.3268L15.0567 15.8701L16.8701 14.8268L16.8801 12.5435Z' fill='white'/%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z' fill='%23279FEA'/%3e%3cpath d='M14.1867 11.2667L12.1634 10.0833L10.1367 11.2667V13.62L12.1634 14.7867L14.1867 13.62V11.2667Z' fill='white'/%3e%3cpath d='M8.43666 12.0001L7.47333 11.1501V15.1667L10.41 16.8367V15.7034L8.43666 14.5401V12.0001Z' fill='white'/%3e%3cpath d='M15.8965 12V14.5833L13.9632 15.7033V16.9367L16.8532 15.1533V11.0967L15.8965 12Z' fill='white'/%3e%3cpath d='M12.1565 8.13333L14.7165 9.61333L15.4165 8.89L12.1565 7L8.87988 8.90667L9.57988 9.63333L12.1565 8.13333Z' fill='white'/%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z' fill='%2333D389'/%3e%3cpath d='M17.0033 7.62322H16.4567C16.3925 7.62863 16.3324 7.65679 16.2871 7.70264C16.2419 7.74848 16.2146 7.80898 16.21 7.87322V9.14322C15.7432 8.43248 15.1064 7.84955 14.3572 7.44732C13.6081 7.04509 12.7703 6.8363 11.92 6.83989C11.0845 6.84475 10.2627 7.05243 9.52515 7.44508C8.78763 7.83772 8.15649 8.40359 7.68598 9.09405C7.21547 9.7845 6.91966 10.5789 6.82398 11.4089C6.72831 12.2389 6.83562 13.0798 7.13669 13.8592C7.43777 14.6386 7.92361 15.3332 8.55245 15.8834C9.18128 16.4335 9.93431 16.8227 10.7468 17.0176C11.5593 17.2124 12.4069 17.207 13.2169 17.0019C14.0269 16.7967 14.7749 16.398 15.3967 15.8399C15.4257 15.8182 15.4492 15.79 15.4654 15.7576C15.4816 15.7252 15.49 15.6894 15.49 15.6532C15.49 15.617 15.4816 15.5813 15.4654 15.5489C15.4492 15.5165 15.4257 15.4883 15.3967 15.4666L14.9833 15.0532C14.9369 15.0135 14.8778 14.9917 14.8167 14.9917C14.7556 14.9917 14.6965 15.0135 14.65 15.0532C13.9076 15.7352 12.9312 16.1052 11.9233 16.0866C11.1892 16.087 10.4684 15.8897 9.83687 15.5154C9.20531 15.141 8.68627 14.6034 8.33429 13.9591C7.98231 13.3148 7.81039 12.5876 7.83662 11.8539C7.86284 11.1202 8.08624 10.4071 8.48332 9.78959C8.8804 9.17207 9.4365 8.67292 10.0932 8.34461C10.7499 8.0163 11.4828 7.87095 12.2151 7.92384C12.9474 7.97674 13.6519 8.22592 14.2545 8.6452C14.8572 9.06448 15.3358 9.63837 15.64 10.3066H14.1467C14.0828 10.3112 14.0227 10.3387 13.9774 10.384C13.9321 10.4293 13.9046 10.4893 13.9 10.5532V11.0466C13.9046 11.1104 13.9321 11.1705 13.9774 11.2158C14.0227 11.2611 14.0828 11.2886 14.1467 11.2932H17C17.0639 11.2886 17.124 11.2611 17.1693 11.2158C17.2146 11.1705 17.242 11.1104 17.2467 11.0466V7.87322C17.2422 7.8095 17.2154 7.74942 17.1708 7.70364C17.1263 7.65787 17.0669 7.62938 17.0033 7.62322Z' fill='white'/%3e%3cpath d='M12.1232 9.39987C12.1667 9.39747 12.2077 9.37914 12.2384 9.34839C12.2692 9.31764 12.2875 9.27662 12.2899 9.2332C12.2899 9.2332 12.3399 8.8332 12.3399 8.69987C12.3399 8.56653 12.2499 8.4932 12.1666 8.48987C11.5045 8.45232 10.8457 8.60791 10.2703 8.93771C9.69497 9.26752 9.22779 9.75734 8.92557 10.3477C8.62335 10.938 8.4991 11.6034 8.56792 12.263C8.63675 12.9226 8.89568 13.548 9.31325 14.0632C9.83849 14.7239 10.5905 15.1658 11.4232 15.3032C11.5166 15.3032 11.5999 15.2632 11.6299 15.1365C11.6299 15.1365 11.6999 14.8032 11.7132 14.6832C11.7233 14.639 11.7157 14.5927 11.692 14.554C11.6684 14.5154 11.6305 14.4876 11.5866 14.4765C11.225 14.4227 10.8806 14.2869 10.5795 14.0795C10.2785 13.8721 10.029 13.5986 9.84992 13.2799C9.64046 12.9274 9.51393 12.5318 9.47992 12.1232C9.44986 11.7648 9.49697 11.4042 9.61806 11.0655C9.73915 10.7269 9.93142 10.4181 10.1819 10.1601C10.4324 9.90199 10.7353 9.70061 11.0702 9.56947C11.405 9.43834 11.7641 9.38051 12.1232 9.39987Z' fill='white'/%3e%3cpath d='M13.9433 13.1568C13.96 13.1389 13.9724 13.1175 13.9796 13.0942C13.9868 13.0708 13.9885 13.0461 13.9846 13.0219C13.9808 12.9978 13.9714 12.9749 13.9573 12.9549C13.9432 12.9349 13.9247 12.9185 13.9033 12.9068L13.6133 12.7001C13.5739 12.6762 13.5272 12.6674 13.4818 12.6754C13.4364 12.6833 13.3955 12.7075 13.3666 12.7434C13.2321 12.9033 13.0642 13.0318 12.8747 13.12C12.6853 13.2082 12.4789 13.2538 12.2699 13.2538C12.061 13.2538 11.8546 13.2082 11.6651 13.12C11.4757 13.0318 11.3078 12.9033 11.1733 12.7434C11.1277 12.6913 11.0864 12.6356 11.0499 12.5768C10.9268 12.3776 10.8582 12.1495 10.8512 11.9155C10.8442 11.6814 10.8989 11.4496 11.0099 11.2434C11.0314 11.2102 11.0389 11.1699 11.0308 11.1312C11.0227 11.0925 10.9996 11.0585 10.9666 11.0368L10.6333 10.7901C10.5891 10.7715 10.5396 10.7697 10.4942 10.7851C10.4487 10.8004 10.4105 10.8319 10.3866 10.8734C10.2376 11.1465 10.153 11.45 10.1391 11.7608C10.1253 12.0716 10.1825 12.3815 10.3066 12.6668C10.4127 12.938 10.5831 13.1794 10.8033 13.3701C11.1902 13.7461 11.7104 13.9534 12.2499 13.9468C12.5743 13.9565 12.8964 13.8902 13.1905 13.753C13.4845 13.6158 13.7424 13.4116 13.9433 13.1568Z' fill='white'/%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z' fill='%23279FEA'/%3e%3cpath d='M17.6865 10.0334C17.3062 9.49067 16.7772 9.06934 16.1632 8.82008C15.6426 8.61932 15.0801 8.55138 14.5267 8.62237C13.9733 8.69337 13.4462 8.90108 12.9932 9.22674C12.4991 9.62868 12.0519 10.0849 11.6598 10.5867L11.4232 10.8534L13.0198 11.5434L13.1498 11.4067C13.4002 11.1158 13.6697 10.8419 13.9565 10.5867C14.1891 10.4177 14.4599 10.3085 14.7448 10.269C15.0297 10.2294 15.3199 10.2607 15.5898 10.3601C15.916 10.4798 16.1929 10.7051 16.3765 11.0001C16.5305 11.2108 16.6383 11.4516 16.6932 11.7067C16.7448 11.9619 16.7448 12.2249 16.6932 12.4801C16.6319 12.8145 16.4783 13.125 16.2498 13.3767C16.0471 13.5809 15.7972 13.7319 15.5221 13.8162C15.2471 13.9005 14.9554 13.9156 14.6732 13.8601C14.318 13.7558 13.9714 13.6243 13.6365 13.4667L13.4598 13.3967L12.3032 14.6934L12.6365 14.8367C13.196 15.1144 13.7809 15.3376 14.3832 15.5034C14.841 15.5831 15.3102 15.5706 15.7632 15.4667C16.4116 15.3301 17.0012 14.9945 17.4498 14.5067C17.907 14.0252 18.2099 13.4182 18.3198 12.7634C18.4116 12.2979 18.4116 11.8189 18.3198 11.3534C18.186 10.8803 17.9717 10.4338 17.6865 10.0334Z' fill='white'/%3e%3cpath d='M12.8401 13.0499L11.2468 12.3599L11.1168 12.4966C10.8669 12.7942 10.5962 13.0738 10.3068 13.3332C10.0741 13.5023 9.80337 13.6115 9.51849 13.651C9.2336 13.6905 8.94336 13.6593 8.67345 13.5599C8.35219 13.4397 8.07852 13.2187 7.89345 12.9299C7.74251 12.7191 7.63591 12.4798 7.58012 12.2266C7.51653 11.9342 7.52262 11.6311 7.5979 11.3415C7.67318 11.052 7.81553 10.7842 8.01345 10.5599C8.2156 10.3551 8.46564 10.2039 8.74095 10.1201C9.01626 10.0363 9.30813 10.0225 9.59012 10.0799C9.94807 10.1781 10.2971 10.3063 10.6335 10.4632L10.8101 10.5299L11.9668 9.23324L11.6735 9.11324C11.1141 8.8326 10.5278 8.60924 9.92345 8.44657C9.37154 8.32869 8.79848 8.35611 8.26035 8.52614C7.72222 8.69617 7.23744 9.00299 6.85345 9.41657C6.38782 9.89208 6.08347 10.5019 5.98345 11.1599C5.88532 11.6248 5.88532 12.105 5.98345 12.5699C6.08588 13.0347 6.28211 13.4736 6.56012 13.8599C6.92983 14.4125 7.46217 14.8365 8.08345 15.0732C8.69864 15.3134 9.37049 15.369 10.0168 15.2332C10.4725 15.1299 10.9023 14.9348 11.2801 14.6599C11.7741 14.258 12.2214 13.8018 12.6135 13.2999L12.8401 13.0499Z' fill='white'/%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z' fill='%23F7B731'/%3e%3cpath d='M17.0168 10.4836C16.8598 10.4819 16.704 10.5111 16.5583 10.5697C16.4126 10.6282 16.2799 10.715 16.1679 10.8249C16.0558 10.9348 15.9665 11.0658 15.9051 11.2103C15.8437 11.3548 15.8114 11.51 15.8101 11.667C15.8125 11.8887 15.8759 12.1056 15.9934 12.2936L15.3268 13.0036C15.1062 12.8766 14.8516 12.8214 14.5982 12.8459C14.3449 12.8704 14.1055 12.9733 13.9134 13.1403L13.2168 12.667C13.3204 12.3753 13.3514 12.0627 13.307 11.7564C13.2626 11.45 13.1441 11.1591 12.9619 10.9089C12.7796 10.6587 12.5391 10.4567 12.2611 10.3204C11.9832 10.1842 11.6762 10.1178 11.3668 10.127C10.9257 10.1237 10.4963 10.268 10.1468 10.537L9.2801 9.74364C9.38078 9.56935 9.43368 9.37158 9.43343 9.1703C9.43084 9.01345 9.39725 8.85866 9.33461 8.71484C9.27197 8.57101 9.18151 8.44099 9.06844 8.33225C8.95537 8.22352 8.82191 8.13821 8.67575 8.08124C8.52958 8.02427 8.3736 7.99677 8.21677 8.0003C7.89915 8.00103 7.59426 8.12525 7.36658 8.34671C7.13891 8.56817 7.00628 8.86949 6.99677 9.18697C6.99848 9.34467 7.03153 9.50046 7.09399 9.64528C7.15645 9.7901 7.24707 9.92106 7.36059 10.0305C7.4741 10.14 7.60825 10.2259 7.75524 10.283C7.90222 10.3402 8.0591 10.3676 8.21677 10.3636C8.43906 10.3609 8.65657 10.2987 8.84677 10.1836L9.71343 10.977C9.49991 11.2949 9.3884 11.6704 9.39376 12.0533C9.39912 12.4363 9.5211 12.8085 9.74343 13.1203L9.07677 13.8303C8.87595 13.7162 8.64759 13.6597 8.41677 13.667C8.18607 13.6729 7.96224 13.7467 7.77327 13.8791C7.5843 14.0116 7.43859 14.1968 7.35437 14.4117C7.27015 14.6265 7.25115 14.8615 7.29975 15.087C7.34836 15.3126 7.46241 15.5189 7.62763 15.68C7.79286 15.8411 8.00192 15.9499 8.22867 15.9928C8.45542 16.0357 8.68978 16.0108 8.90244 15.9212C9.11509 15.8315 9.2966 15.6812 9.42425 15.4889C9.5519 15.2967 9.62002 15.0711 9.6201 14.8403C9.61839 14.6452 9.57041 14.4533 9.4801 14.2803L10.1468 13.5703C10.5613 13.8772 11.0792 14.0102 11.5902 13.9411C12.1013 13.872 12.5653 13.6062 12.8834 13.2003L13.5501 13.637C13.5048 13.7597 13.4811 13.8894 13.4801 14.0203C13.4963 14.3289 13.6304 14.6196 13.8546 14.8323C14.0788 15.045 14.376 15.1636 14.6851 15.1636C14.9942 15.1636 15.2914 15.045 15.5156 14.8323C15.7398 14.6196 15.8739 14.3289 15.8901 14.0203C15.8923 13.8081 15.8333 13.5998 15.7201 13.4203L16.3868 12.7103C16.5613 12.81 16.7591 12.8617 16.9601 12.8603C17.1212 12.8706 17.2827 12.8481 17.4348 12.794C17.5869 12.74 17.7264 12.6555 17.8448 12.5458C17.9633 12.4361 18.0581 12.3035 18.1237 12.156C18.1893 12.0085 18.2241 11.8492 18.2261 11.6878C18.2282 11.5264 18.1974 11.3662 18.1356 11.2171C18.0737 11.068 17.9822 10.933 17.8666 10.8203C17.751 10.7077 17.6137 10.6198 17.463 10.5619C17.3123 10.504 17.1514 10.4774 16.9901 10.4836H17.0168ZM11.3501 13.2436C11.1161 13.2377 10.8891 13.163 10.6973 13.0287C10.5056 12.8944 10.3578 12.7065 10.2723 12.4886C10.1868 12.2707 10.1675 12.0325 10.2167 11.8036C10.266 11.5748 10.3816 11.3656 10.5492 11.2021C10.7167 11.0387 10.9288 10.9283 11.1588 10.8848C11.3887 10.8412 11.6264 10.8665 11.8422 10.9574C12.0579 11.0483 12.242 11.2007 12.3714 11.3957C12.5009 11.5907 12.57 11.8196 12.5701 12.0536C12.5657 12.3719 12.4357 12.6756 12.2085 12.8985C11.9812 13.1214 11.6751 13.2454 11.3568 13.2436H11.3501Z' fill='white'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z' fill='%23205AB7'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.0859 8.30868C16.4108 8.42839 16.6831 8.6593 16.8542 8.96074L16.8628 8.97583L16.8705 8.99134C17.0174 9.28464 17.0775 9.61353 17.0441 9.93936C17.0123 11.03 16.8132 12.1093 16.4535 13.1395L16.4528 13.1415C16.1368 14.0377 15.4456 15.1335 14.6589 16.0108C14.2622 16.4533 13.8228 16.8611 13.3705 17.1668C12.9284 17.4656 12.4155 17.7067 11.8835 17.7262L11.8597 17.7271L11.8358 17.7262C11.291 17.7072 10.7708 17.4701 10.3204 17.1682C9.86244 16.8612 9.42376 16.4516 9.03057 16.0079C8.24999 15.1271 7.57941 14.0321 7.26533 13.1415L7.2645 13.1391C6.90532 12.1083 6.70674 11.0285 6.67566 9.93751C6.64229 9.61177 6.70236 9.28297 6.84922 8.98974L6.85684 8.97453L6.86522 8.95974C7.03585 8.65846 7.30747 8.42744 7.63179 8.30728L11.3874 6.76891C11.4429 6.74689 11.4996 6.7281 11.5571 6.71254C11.7538 6.6514 11.9644 6.6514 12.161 6.71254C12.2186 6.7281 12.2753 6.74693 12.3307 6.76895L12.3374 6.77159L16.0859 8.30868ZM11.9735 7.35255C11.8994 7.32695 11.8188 7.32695 11.7447 7.35255C11.7069 7.36213 11.6698 7.37415 11.6335 7.38855L7.87245 8.92913C7.69157 8.99369 7.53996 9.12117 7.44531 9.28828C7.35196 9.47467 7.31578 9.6845 7.34132 9.89139C7.36791 10.9234 7.55437 11.9449 7.89404 12.9198C8.45396 14.5075 10.3737 17.008 11.8591 17.06C13.2749 17.008 15.2642 14.5075 15.8241 12.9198C16.1642 11.9455 16.3512 10.9245 16.3784 9.89299C16.404 9.6861 16.3678 9.47627 16.2745 9.28988C16.1794 9.12247 16.0272 8.99495 15.8457 8.93073L12.0847 7.38855C12.0484 7.37415 12.0113 7.36213 11.9735 7.35255Z' fill='white'/%3e%3cpath d='M11.8631 8.29559L8.22357 9.77059V10.8904L11.8631 9.33705L15.5025 10.8904V9.77059L11.8631 8.29559Z' fill='white'/%3e%3cpath d='M10.6184 15.718C10.7942 16.0092 11.3957 16.4678 11.8633 16.4774C12.3078 16.4678 12.9324 16.0092 13.108 15.718C13.2835 15.4268 10.4426 15.427 10.6184 15.718Z' fill='white'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='-8 -8 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M19.7521 0.348161H20.3976V2.23694H20.7722L20.7752 0.351063H21.4208V0.00290065L19.7521 0V0.348161Z' fill='%232B2B2B'/%3e %3cpath d='M22.31 0.00290065H21.7223V2.23114H22.0785L22.0816 0.438104H22.0877L22.718 2.23404H22.9799L23.6224 0.441005H23.6285L23.6255 2.23404H23.997L24 0.00290065H23.4093L22.8642 1.58994H22.8551L22.31 0.00290065Z' fill='%232B2B2B'/%3e %3cpath d='M16.4863 0C15.3048 0 14.5435 0.713733 14.5435 1.81915L14.5374 8.1557C13.3194 6.89362 11.4893 6.20309 9.34245 6.20019C4.36976 6.19729 0.00609663 10.3636 6.37628e-06 15.1219C-0.00608387 19.8453 4.35149 23.9942 9.32114 24C11.5258 24.0029 13.5904 22.9207 14.6836 21.853C14.8968 23.0135 15.6306 23.6489 16.7726 23.6489C17.7165 23.6489 18.4017 22.9584 18.4047 22.0068L18.4291 1.82495C18.4291 0.734042 17.6496 0.00290135 16.4863 0ZM9.28764 20.0803C6.42218 20.0774 4.08961 17.852 4.09266 15.1161C4.0957 12.383 6.43131 10.1605 9.29677 10.1634C12.1622 10.1663 14.4948 12.3917 14.4918 15.1277C14.4887 17.8607 12.1531 20.0832 9.28764 20.0803Z' fill='%232B2B2B'/%3e %3cpath d='M9.29431 11.7998C7.3363 11.7998 5.74979 13.3143 5.74979 15.1799C5.74979 17.0455 7.3363 18.56 9.29431 18.56C11.2523 18.56 12.8419 17.0455 12.8419 15.1799C12.8419 13.3143 11.2523 11.7998 9.29431 11.7998Z' fill='%23517934'/%3e%3c/svg%3e";

// Takes a appType name and returns its logo as a data url.
// If appType does not exist the Digital.ai logo is returned.
const getLogoForAppType = appType => {
  switch (appType) {
    case 'Release':
      {
        return img$6;
      }
    case 'Deploy':
      {
        return img$5;
      }
    case 'Agility':
      {
        return img$4;
      }
    case 'Continuous Testing':
      {
        return img$3;
      }
    case 'Intelligence':
      {
        return img$2;
      }
    case 'Application Protection':
      {
        return img$1;
      }
    default:
      {
        return img;
      }
  }
};
const daiAppsHeaderMenuItem = (count = 0) => {
  return sectionHeaderMenuItem('DIGITAL.AI APPLICATIONS', count, true, false);
};
const sectionHeaderMenuItem = (title, count, showEmpty = false, showCount = true) => {
  const children = showEmpty || count > 0 ? jsxs(DotTypography, Object.assign({
    className: "section-title"
  }, {
    children: [title, showCount && count > 0 ? ` (${count})` : '']
  }), `menu-item-section-title-${title}`) : null;
  return {
    children,
    key: `section-header-${title}`
  };
};
const createMenuItem = (url, title, subtitle, onClick) => jsxs("div", Object.assign({
  className: "app-menu-item"
}, {
  children: [jsx(DotLink, Object.assign({
    href: url,
    color: "textPrimary",
    target: "_blank",
    onClick: onClick,
    onPointerDown: onClick
  }, {
    children: jsxs("div", Object.assign({
      className: "logo-title"
    }, {
      children: [jsx("div", Object.assign({
        className: "start-icon"
      }, {
        children: jsx(DotIcon, {
          iconId: "open-new-tab"
        }, void 0)
      }), void 0), jsxs("div", Object.assign({
        className: "dot-app-switcher-app-title"
      }, {
        children: [jsx(DotTypography, Object.assign({
          variant: "body1"
        }, {
          children: title
        }), void 0), subtitle && jsx(DotTypography, Object.assign({
          variant: "body2"
        }, {
          children: subtitle
        }), void 0)]
      }), void 0)]
    }), void 0)
  }), void 0), jsx(DotCopyButton, {
    copyTooltip: "Copy application URL",
    value: url
  }, void 0)]
}), `app-menu-item-${title}`);
const createTopLevelMenuItem = (url, logo, title, openNewTab = true) => {
  // Creates an entry in the AppSwitcher at the same level as the AppTypeLabels, used for the Platform link and
  // Empty state current application link
  const target = openNewTab ? '_blank' : '_self';
  return jsxs(DotLink, Object.assign({
    href: url,
    color: "textPrimary",
    target: target
  }, {
    children: [jsxs("div", Object.assign({
      className: "logo-title"
    }, {
      children: [jsx(DotAvatar, {
        alt: "app image",
        imageSrc: logo,
        type: "image",
        variant: "circular"
      }, void 0), jsx("div", Object.assign({
        className: "dot-app-switcher-app-title"
      }, {
        children: jsx(DotTypography, Object.assign({
          variant: "body1"
        }, {
          children: title
        }), void 0)
      }), void 0)]
    }), void 0), openNewTab && jsx(DotIcon, {
      iconId: "open-new-tab"
    }, void 0)]
  }), `top-menu-item-${title}`);
};
const createAppTypeLabel = (appTypeName, logo, appProps) => {
  const logoProps = logo ? {
    imageSrc: logo
  } : {
    iconId: 'collection'
  };
  return jsxs("div", Object.assign({
    className: "logo-title"
  }, {
    children: [jsx(DotAvatar, Object.assign({}, logoProps, {
      alt: "app image",
      type: "image",
      variant: "circular"
    }), void 0), jsxs("div", Object.assign({
      className: "dot-app-switcher-app-title"
    }, {
      children: [jsx(DotTypography, Object.assign({
        variant: "body1"
      }, {
        children: appTypeName
      }), void 0), jsxs(DotTypography, Object.assign({
        variant: "body2"
      }, {
        children: ["Instance (", appProps.length, ")"]
      }), void 0)]
    }), void 0)]
  }), void 0);
};
const getInstanceStateText = application => {
  if (application.instance_state === 1) {
    return 'Production';
  }
  return 'Non-production';
};
const sortRecentAppInstancesFn = (a, b) => {
  const appA = a.application;
  const appB = b.application;
  return sortAppInstancesFn(appA, appB);
};
const sortAppInstancesFn = (a, b) => {
  let result = a.name.localeCompare(b.name);
  if (result === 0) {
    if (a.instance_state > b.instance_state) {
      result = -1;
    } else if (a.instance_state < b.instance_state) {
      result = 1;
    }
  }
  return result;
};
const RECENT_INSTANCES_KEY = 'dot-app-switcher-recent-app-instances';
const recentAppInstancesSetter = (latestInstance, maxRecentItems
//): (RecentAppInstance[]) => RecentAppInstance[])=> {
) => {
  return orig => {
    const lastAccess = Date.now();
    let isNew = true;
    let oldestIndex = 0;
    let oldestAccess = lastAccess;
    orig.forEach((item, index) => {
      if (item.application.id === latestInstance.id) {
        isNew = false;
        // don't need to rerender so eventually returning orig
        item.lastAccess = lastAccess;
      }
      if (item.lastAccess < oldestAccess) {
        oldestIndex = index;
        oldestAccess = item.lastAccess;
      }
    });
    if (isNew) {
      const newRecentItem = {
        application: latestInstance,
        lastAccess
      };
      let newRecent;
      if (orig.length >= maxRecentItems) {
        newRecent = [...orig];
        newRecent.splice(oldestIndex, 1, newRecentItem);
      } else {
        newRecent = [...orig, newRecentItem];
      }
      newRecent.sort(sortRecentAppInstancesFn);
      localStorage.setItem(RECENT_INSTANCES_KEY, JSON.stringify(newRecent));
      return newRecent;
    }
    return orig;
  };
};

const rootClassName$K = 'dot-app-switcher';
const StyledAppSwitcher = styled(DotDrawer).withConfig({
  displayName: "AppSwitcherstyles__StyledAppSwitcher",
  componentId: "hhxfqg-0"
})(["", ""], ({
  theme
}) => css(["&.", "{.dot-drawer-paper{padding:0;width:382px;}.content{padding:", ";overflow-y:auto;}.app-menu-item{display:flex;justify-content:space-between;align-items:center;}.dot-link,.product-menu-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:60px;margin-bottom:", ";text-decoration:none;cursor:pointer;}.logo-title{display:flex;align-items:center;gap:16px;width:100%;.start-icon{width:40px;display:flex;justify-content:space-around;align-items:center;}}.dot-avatar{flex-basis:40px;}.section-title{display:flex;align-items:center;height:30px;padding:", ";margin:", ";border-bottom:1px solid ", ";}.dot-app-switcher-app-title{min-width:150px;}.dot-icon{flex-basis:content;}.app-switcher-header{.app-switcher-header-title{display:flex;align-items:center;}display:flex;justify-content:space-between;align-items:end;border-bottom:1px solid ", ";padding:", ";.app-switcher-label{padding-left:", ";}}.app-switcher-back-button{&.dot-button.MuiButton-text{padding-left:0;}}.product-heading{display:flex;align-items:center;gap:16px;}.product-applications{margin-top:", ";width:100%;}.app-instance-search{margin-top:", ";}}"], rootClassName$K, theme.spacing(0, 2, 1, 2), theme.spacing(1), theme.spacing(0, 0, 0, 2), theme.spacing(0, -2, 0), theme.palette.grey[100], theme.palette.grey[100], theme.spacing(0, 2, 1, 2), theme.spacing(2), theme.spacing(2), theme.spacing(2)));

const DotAppSwitcherView = ({
  activeApp,
  apps,
  className,
  maxRecentInstances: _maxRecentInstances = 5,
  noAppTypeLabel: _noAppTypeLabel = 'Other',
  platformConsoleUrl,
  onClose,
  open,
  searchInstancesThreshold: _searchInstancesThreshold = 5,
  selectedAppType,
  yOffset: _yOffset = 56,
  zIndex: _zIndex = 990
}) => {
  const dotCoreApiContext = useDotCoreApiContext();
  let setSelectedAppType = null;
  if (dotCoreApiContext !== null) {
    setSelectedAppType = dotCoreApiContext.setSelectedAppSwitcherAppType;
  }
  const rootClasses = useStylesWithRootClass(rootClassName$K, className);
  const [appTypeMap, setAppTypeMap] = useState();
  const [appTypeLabels, setAppTypeLabels] = useState();
  const [appTypeMenuItems, setAppTypeMenuItems] = useState();
  const [selectedAppTypeAlt, setSelectedAppTypeAlt] = useState(null);
  const [searchText, setSearchText] = useState('');
  const cachedRecentItemsJson = localStorage.getItem(RECENT_INSTANCES_KEY);
  const [recentAppInstances, setRecentAppInstances] = useState(cachedRecentItemsJson ? JSON.parse(cachedRecentItemsJson) : []);
  if (!setSelectedAppType) {
    selectedAppType = selectedAppTypeAlt;
    setSelectedAppType = setSelectedAppTypeAlt;
  }
  const showApps = useCallback(appType => {
    setSelectedAppType(appType);
  }, []);
  const showAppTypes = useCallback(() => {
    setSearchText('');
    setSelectedAppType(null);
  }, []);
  const populateAppTypeMap = useCallback(() => {
    const newAppTypeMap = new Map();
    // we'll put Other at the end
    const otherApps = [];
    apps === null || apps === void 0 ? void 0 : apps.forEach(app => {
      const instanceStateText = `${getInstanceStateText(app)} instance`;
      const children = createMenuItem(app.url, app.name, instanceStateText, e => {
        handleRecentInstance(e, app);
      });
      const searchableContent = `${app.name} ${instanceStateText}`;
      const appTypeName = app.logo_product_name;
      let appTypeApps;
      if (appTypeName) {
        appTypeApps = newAppTypeMap.get(appTypeName);
        if (!appTypeApps) {
          appTypeApps = [];
          newAppTypeMap.set(appTypeName, appTypeApps);
        }
      } else {
        appTypeApps = otherApps;
      }
      appTypeApps.push({
        application: app,
        children,
        searchableContent,
        key: app.id
      });
    });
    const keys = Array.from(newAppTypeMap.keys()).sort();
    const sortedAppTypeMap = new Map();
    for (const appType of keys) {
      const appTypeApps = newAppTypeMap.get(appType);
      appTypeApps.sort((a, b) => {
        return sortAppInstancesFn(a.application, b.application);
      });
      sortedAppTypeMap.set(appType, appTypeApps);
    }
    let appTypeCount = sortedAppTypeMap.size;
    if (platformConsoleUrl) {
      appTypeCount++;
    }
    if (otherApps.length > 0) {
      otherApps.sort((a, b) => {
        return sortAppInstancesFn(a.application, b.application);
      });
      sortedAppTypeMap.set(_noAppTypeLabel, otherApps);
    }
    setAppTypeMap(sortedAppTypeMap);
    const menuItems = [daiAppsHeaderMenuItem(appTypeCount)];
    if (platformConsoleUrl) {
      const children = createTopLevelMenuItem(platformConsoleUrl, getLogoForAppType('Platform'), 'Digital.ai Platform', !window.location.href.startsWith(platformConsoleUrl));
      menuItems.push({
        children,
        key: 'app-switcher-platform-link'
      });
    }
    const newAppTypeLabels = new Map();
    sortedAppTypeMap.forEach((singleTypeApps, appTypeName) => {
      if ((singleTypeApps === null || singleTypeApps === void 0 ? void 0 : singleTypeApps.length) > 0) {
        const logo = appTypeName === _noAppTypeLabel ? null : getLogoForAppType(appTypeName);
        newAppTypeLabels.set(appTypeName, {
          logo,
          singleTypeApps
        });
        menuItems.push({
          children: jsxs(DotLink, Object.assign({
            className: "product-menu-item",
            onClick: () => showApps(appTypeName)
          }, {
            children: [createAppTypeLabel(appTypeName, logo, singleTypeApps), jsx(DotIcon, {
              iconId: "chevron-right"
            }, void 0)]
          }), `menu-item-${appTypeName}`),
          key: appTypeName
        });
      }
    });
    setAppTypeMenuItems(menuItems);
    setAppTypeLabels(newAppTypeLabels);
  }, [apps]);
  const emptyState = useCallback(() => {
    const currentAppMenuItem = createTopLevelMenuItem(window.location.href, getLogoForAppType(activeApp.product), activeApp.name, false);
    setAppTypeMenuItems([daiAppsHeaderMenuItem(), {
      children: currentAppMenuItem,
      key: 'no_applications_configured'
    }]);
  }, [activeApp]);
  useEffect(() => {
    if ((apps === null || apps === void 0 ? void 0 : apps.length) > 0) {
      populateAppTypeMap();
    } else {
      emptyState();
    }
  }, [apps]);
  const onAppInstanceSearchTextChange = useCallback(text => {
    setSearchText(text);
  }, []);
  const clearAppInstanceSearchText = useCallback(() => {
    setSearchText('');
  }, []);
  const closeHandler = useCallback(event => {
    setSearchText('');
    onClose && onClose(event);
  }, [onClose]);
  const filteredAppInstances = useCallback(() => {
    var _a;
    return (_a = appTypeMap.get(selectedAppType)) === null || _a === void 0 ? void 0 : _a.filter(item => {
      let isMatch = !searchText;
      if (searchText) {
        const testStr = isLowerCase(searchText) ? item.searchableContent.toLowerCase() : item.searchableContent;
        isMatch = testStr.indexOf(searchText) >= 0;
      }
      return isMatch;
    }).map(item => item.children);
  }, [appTypeMap, selectedAppType, searchText]);
  const handleRecentInstance = useCallback((event, latestInstance) => {
    // middle button counts; click to open context menu does not
    if (event.button < 2) {
      setRecentAppInstances(recentAppInstancesSetter(latestInstance, _maxRecentInstances));
    }
  }, [recentAppInstances]);
  const recentAppInstancesSection = jsxs(Fragment$1, {
    children: [sectionHeaderMenuItem('RECENT', recentAppInstances.length).children, jsx("div", Object.assign({
      className: "product-applications"
    }, {
      children: recentAppInstances.map(item => {
        const app = item.application;
        return createMenuItem(app.url, app.name, `${app.logo_product_name} - ${getInstanceStateText(app)}`, e => {
          handleRecentInstance(e, app);
        });
      })
    }), void 0)]
  }, void 0);
  const content = () => {
    var _a;
    if (selectedAppType && appTypeMap && appTypeLabels) {
      const labelConfig = appTypeLabels.get(selectedAppType);
      return jsxs("div", Object.assign({
        className: "content"
      }, {
        children: [jsx("span", {
          children: jsx(DotButton, Object.assign({
            className: "app-switcher-back-button",
            type: "text",
            onClick: showAppTypes,
            startIcon: jsx(DotIcon, {
              iconId: "back"
            }, void 0)
          }, {
            children: jsx("span", {
              children: "Back"
            }, void 0)
          }), void 0)
        }, void 0), jsx("div", Object.assign({
          className: "product-heading"
        }, {
          children: createAppTypeLabel(selectedAppType, labelConfig.logo, labelConfig.singleTypeApps)
        }), void 0), ((_a = appTypeMap === null || appTypeMap === void 0 ? void 0 : appTypeMap.get(selectedAppType)) === null || _a === void 0 ? void 0 : _a.length) >= _searchInstancesThreshold && jsx("div", Object.assign({
          className: "app-instance-search"
        }, {
          children: jsx(SearchInput, {
            "data-testid": "app-instance-search-input",
            onChange: onAppInstanceSearchTextChange,
            onClear: clearAppInstanceSearchText,
            value: searchText
          }, void 0)
        }), void 0), jsx("div", Object.assign({
          className: "product-applications"
        }, {
          children: filteredAppInstances()
        }), void 0)]
      }), void 0);
    } else {
      return jsxs("div", Object.assign({
        className: "content"
      }, {
        children: [jsx(DotList, {
          items: appTypeMenuItems === null || appTypeMenuItems === void 0 ? void 0 : appTypeMenuItems.map(item => ({
            child: item.children
          })),
          width: "100%"
        }, void 0), recentAppInstancesSection]
      }), void 0);
    }
  };
  const header = {
    className: 'app-switcher-header',
    children: jsxs("div", Object.assign({
      className: "app-switcher-header-title",
      style: {
        marginTop: _yOffset + 'px',
        width: '80%'
      }
    }, {
      children: [jsx(DotAvatar, {
        iconId: "apps",
        alt: "app image",
        type: "image",
        variant: "circular"
      }, void 0), jsx(DotTypography, Object.assign({
        className: "app-switcher-label"
      }, {
        children: "App switcher"
      }), void 0)]
    }), void 0)
  };
  return jsx(StyledAppSwitcher, Object.assign({
    className: rootClasses,
    ModalProps: {
      style: {
        zIndex: _zIndex
      }
    },
    drawerHeaderProps: header,
    variant: "temporary",
    width: "340px",
    open: open,
    onClose: closeHandler
  }, {
    children: content()
  }), void 0);
};
const DotAppSwitcher = _a => {
  var {
      accountId,
      includePlatformConsole = true,
      onClose
    } = _a,
    commonProps = __rest(_a, ["accountId", "includePlatformConsole", "onClose"]);
  const {
    applications,
    applicationsLoading,
    applicationsError,
    loadApplications,
    isAppSwitcherOpen: open,
    platformConsoleUrl,
    setIsAppSwitcherOpen: setOpen,
    selectedAppSwitcherAppType: selectedAppType,
    setSelectedAppSwitcherAppType: setSelectedAppType
  } = useDotCoreApiContext();
  useEffect(() => {
    if ((!applications || applications.length === 0) && open) {
      loadApplications(accountId);
    }
  }, [accountId, open]);
  if (applicationsError) {
    console.error('Error loading application list in AppSwitcher', applicationsError);
  }
  const closeHandler = useCallback(event => {
    setOpen(false);
    setSelectedAppType(null);
    onClose && onClose(event);
  }, [onClose]);
  const viewProps = includePlatformConsole ? Object.assign(Object.assign({}, commonProps), {
    platformConsoleUrl
  }) : Object.assign({}, commonProps);
  if (!applicationsLoading && !applicationsError) {
    return jsx(DotAppSwitcherView, Object.assign({}, viewProps, {
      open: open,
      apps: applications,
      selectedAppType: selectedAppType,
      onClose: closeHandler
    }), void 0);
  }
  return null;
};

var _path$2, _path2$2, _path3, _path4;
var _excluded$2 = ["title", "titleId"];
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function SvgLogoD(_ref, svgRef) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties$2(_ref, _excluded$2);
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    width: 26,
    height: 27,
    viewBox: "0 0 26 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.6581 0.750488C16.4436 0.750488 15.661 1.52053 15.661 2.71315L15.6547 9.54961C14.4026 8.18795 12.5214 7.44295 10.3145 7.43982C5.20285 7.43669 0.717205 11.9317 0.710944 17.0653C0.704684 22.1614 5.18406 26.6376 10.2926 26.6439C12.5589 26.647 14.6812 25.4794 15.805 24.3275C16.0241 25.5796 16.7785 26.2651 17.9523 26.2651C18.9227 26.2651 19.627 25.5201 19.6301 24.4934L19.6552 2.71941C19.6552 1.54244 18.8538 0.753619 17.6581 0.750488ZM10.2581 22.4147C7.31251 22.4116 4.91474 20.0107 4.91787 17.0589C4.921 14.1102 7.3219 11.7124 10.2675 11.7155C13.213 11.7187 15.6108 14.1196 15.6077 17.0714C15.6045 20.0201 13.2036 22.4178 10.2581 22.4147Z",
    fill: "black"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React.createElement("path", {
    d: "M21.2629 1.29086H21.8915V3.22108H22.2562L22.2592 1.29382H22.8878V0.938023L21.2629 0.935059V1.29086Z",
    fill: "black"
  })), _path3 || (_path3 = /*#__PURE__*/React.createElement("path", {
    d: "M23.7535 0.938023H23.1813V3.21515H23.5282L23.5312 1.38277H23.5371L24.1509 3.21812H24.4058L25.0315 1.38574H25.0374L25.0344 3.21812H25.3961L25.3991 0.938023H24.8239L24.2932 2.55988H24.2843L23.7535 0.938023Z",
    fill: "black"
  })), _path4 || (_path4 = /*#__PURE__*/React.createElement("path", {
    d: "M6.71094 17.1125C6.70889 19.3196 8.27902 21.1148 10.2079 21.1172C12.1367 21.1195 13.7089 19.3267 13.7109 17.1219C13.713 14.9147 12.1429 13.1195 10.214 13.1172C8.28517 13.1148 6.71299 14.9077 6.71094 17.1125Z",
    fill: "#649A3D"
  })));
}
var ForwardRef$2 = /*#__PURE__*/React.forwardRef(SvgLogoD);

var _path$1, _path2$1;
var _excluded$1 = ["title", "titleId"];
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function SvgLogoDigitalAi(_ref, svgRef) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties$1(_ref, _excluded$1);
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    width: 93,
    height: 23,
    viewBox: "0 0 93 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M90.0642 5.26552H89.6102V5.00856L90.7837 5.0107V5.26766H90.3297L90.3276 6.65953H90.0642V5.26552ZM90.9957 5.0107H91.409L91.7923 6.18201H91.7987L92.182 5.0107H92.5974L92.5952 6.65738H92.334L92.3361 5.33404H92.3319L91.88 6.65738H91.6959L91.2526 5.3319H91.2483L91.2462 6.65524H90.9957V5.0107ZM81.9764 4.94861C81.2698 4.94861 80.7387 5.41327 80.6466 6.08137C79.7537 5.16274 78.4518 4.65739 76.9571 4.65739C73.2783 4.6531 70.3918 7.54389 70.3875 11.2398C70.3875 11.3298 70.3897 11.4176 70.394 11.5054C71.7773 12.0492 72.758 13.3983 72.7558 14.9722C72.7558 15.3961 72.6809 15.803 72.5481 16.182C73.6938 17.1906 75.2184 17.7901 76.94 17.7923C78.4197 17.7944 79.8201 17.0707 80.6231 16.3083C80.6831 17.0364 81.2162 17.5332 81.9593 17.5353C82.8008 17.5353 83.3254 17.0128 83.3254 16.1692L83.3361 6.29764C83.3404 5.47751 82.8051 4.94861 81.9764 4.94861ZM76.925 14.8994C74.91 14.8972 73.2698 13.2548 73.2741 11.2355C73.2762 9.21841 74.9186 7.57816 76.9336 7.5803C78.9486 7.58244 80.5888 9.22484 80.5867 11.2441C80.5845 13.2612 78.9421 14.9015 76.925 14.8994ZM57.9572 4.92291C57.2505 4.92291 56.7195 5.38758 56.6274 6.05567C55.7345 5.13704 54.4325 4.63169 52.9379 4.63169C49.2591 4.62741 46.3747 7.5182 46.3704 11.2141C46.3661 14.9465 49.1841 17.7623 52.925 17.7666C54.4068 17.7687 55.8051 17.045 56.6081 16.2826C56.6681 17.0107 57.2013 17.5075 57.9443 17.5096C58.7858 17.5096 59.3105 16.9871 59.3105 16.1435L59.3212 6.27195C59.3212 5.45182 58.7858 4.92291 57.9572 4.92291ZM52.8137 14.8715C50.7987 14.8694 49.1584 13.227 49.1606 11.2077C49.1627 9.19058 50.8051 7.55032 52.8201 7.55246C54.8372 7.5546 56.4754 9.197 56.4732 11.2163C56.4732 13.2334 54.8308 14.8737 52.8137 14.8715ZM11.5931 0C10.7623 0 10.227 0.526766 10.227 1.34261L10.2227 6.01927C9.36617 5.08779 8.07923 4.57816 6.56959 4.57602C3.07281 4.57387 0.00428714 7.64882 4.48378e-06 11.1606C-0.00427817 14.6467 3.05996 17.7088 6.55461 17.7131C8.10493 17.7152 9.55674 16.9165 10.3255 16.1285C10.4754 16.985 10.9914 17.454 11.7944 17.454C12.4582 17.454 12.94 16.9443 12.9422 16.242L12.9593 1.34689C12.9593 0.541755 12.4111 0.00214133 11.5931 0ZM6.53105 14.8201C4.51606 14.818 2.87581 13.1756 2.87795 11.1563C2.88009 9.13918 4.52249 7.49893 6.53747 7.50107C8.55246 7.50321 10.1927 9.14561 10.1906 11.1649C10.1884 13.182 8.54604 14.8223 6.53105 14.8201ZM31.4561 4.89293C30.5824 4.89293 30.1328 5.29978 30.0193 6.20985C29.2056 5.38758 27.7709 4.60171 26.2377 4.60171C22.743 4.59743 19.6724 7.66381 19.6702 11.1606C19.6659 14.6595 22.728 17.7302 26.2248 17.7345C27.8051 17.7366 29.0535 17.2548 29.8544 16.3383C29.7773 18.985 28.4989 20.2698 25.9572 20.2677C25.1285 20.2677 24.591 20.803 24.5889 21.6317C24.5889 22.5011 25.1178 22.9979 26.0407 23C30.8844 23.0064 32.606 19.4818 32.6081 16.4625L32.6188 6.08351C32.6231 5.394 32.1327 4.89293 31.4561 4.89293ZM26.1692 14.8415C24.152 14.8394 22.5139 13.197 22.5161 11.1777C22.5182 9.1606 24.1606 7.52034 26.1756 7.52248C28.1906 7.52462 29.8308 9.16702 29.8287 11.1863C29.8265 13.2056 28.1841 14.8437 26.1692 14.8415ZM87.0749 4.86081C86.3083 4.86081 85.7302 5.43683 85.7302 6.20342L85.6852 16.2163C85.6852 17.0214 86.2355 17.5824 87.0278 17.5846C87.8693 17.5846 88.394 17.0621 88.3961 16.2206L88.4411 6.20771C88.4389 5.40257 87.8908 4.86081 87.0749 4.86081ZM16.4668 4.72591C15.7002 4.72591 15.1221 5.30193 15.1221 6.06852L15.1113 16.0921C15.1113 16.8972 15.6617 17.4604 16.454 17.4604C17.2955 17.4604 17.8201 16.9379 17.8201 16.0942L17.8308 6.07066C17.8308 5.26766 17.2826 4.72591 16.4668 4.72591ZM36.3726 4.78158C35.606 4.78158 35.0278 5.3576 35.0278 6.1242L35.0171 16.1135C35.0171 16.9186 35.5674 17.4818 36.3597 17.4818C37.2013 17.4818 37.7259 16.9593 37.7259 16.1156L37.7366 6.12634C37.7366 5.32334 37.1884 4.78158 36.3726 4.78158ZM44.7537 14.8458C43.8651 14.7709 43.3148 14.5203 43.3169 13.5011L43.3233 7.72805H44.0278C44.8073 7.72805 45.3726 7.16488 45.3726 6.38544C45.3726 5.5546 44.8479 5.01927 44.03 5.01713H43.3255L43.3297 1.40471C43.3297 0.561028 42.8073 0.0385439 41.9657 0.0364026C41.1756 0.0364026 40.621 0.59743 40.621 1.40043L40.6167 5.04711C39.9614 5.14561 39.5589 5.65096 39.5589 6.37901C39.5589 7.06424 39.9786 7.591 40.6145 7.71092L40.6081 13.5182C40.606 16.0385 41.9593 17.4861 44.3255 17.4904C45.304 17.4925 45.8908 17.0214 45.8908 16.2355C45.8908 15.4218 45.4775 14.9165 44.7537 14.8458ZM63.2634 0.0578157C62.4732 0.0578157 61.9186 0.610278 61.9186 1.40043L61.9015 16.1413C61.9015 16.9465 62.4518 17.5096 63.2441 17.5096C64.0856 17.5096 64.6102 16.9871 64.6124 16.1435L64.6295 1.40257C64.6274 0.573875 64.1049 0.059957 63.2634 0.0578157ZM71.1584 13.5375C71.1135 13.4689 71.0642 13.4026 71.0107 13.3405C70.8865 13.1906 70.7451 13.0578 70.591 12.9379C70.5374 12.8972 70.4818 12.8565 70.4239 12.8201C70.1392 12.6338 69.8158 12.5032 69.4668 12.4433C69.3276 12.4197 69.1841 12.4068 69.0385 12.4068C68.5974 12.4068 68.182 12.5182 67.8201 12.7152C67.7473 12.7537 67.6766 12.7966 67.6081 12.8437C66.9272 13.3041 66.4796 14.0814 66.4775 14.9657C66.4775 15.8501 66.9229 16.6295 67.6038 17.0899C67.6723 17.137 67.743 17.1799 67.8137 17.2184C68.1756 17.4154 68.591 17.5289 69.0321 17.5289C69.6509 17.5289 70.2184 17.3105 70.6595 16.9465C70.7858 16.8415 70.9015 16.7259 71.0064 16.5996C71.0599 16.5375 71.1092 16.4711 71.1541 16.4026C71.2462 16.2655 71.3254 16.122 71.3897 15.9679C71.5182 15.6617 71.591 15.3255 71.591 14.9722C71.591 14.6188 71.5203 14.2826 71.3918 13.9743C71.3297 13.818 71.2505 13.6724 71.1584 13.5375Z",
    fill: "#2A2A2A"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    d: "M55.2464 10.6403C55.2892 10.8223 55.3128 11.0107 55.3128 11.2056C55.3128 11.3126 55.3063 11.4197 55.2935 11.5225C55.2807 11.6274 55.2614 11.7281 55.2357 11.8287C55.1843 12.0278 55.1094 12.2184 55.013 12.394C54.5911 13.1713 53.7667 13.7002 52.8203 13.7002C51.4434 13.7002 50.3278 12.5824 50.3278 11.2056C50.3278 11.0343 50.3449 10.8651 50.3792 10.7024C50.544 9.8908 51.1051 9.22056 51.8524 8.90579C52.15 8.77945 52.4777 8.70878 52.8224 8.70878C53.1672 8.70878 53.4948 8.77945 53.7924 8.90579C54.3513 9.14133 54.801 9.57816 55.0644 10.1199C55.1415 10.2848 55.2036 10.4582 55.2464 10.6403ZM6.53549 8.70878C5.15862 8.70878 4.04299 9.82656 4.04299 11.2034C4.04299 12.5803 5.15862 13.6981 6.53549 13.6981C7.91236 13.6981 9.03014 12.5803 9.03014 11.2034C9.03014 9.82656 7.91236 8.70878 6.53549 8.70878ZM77.8995 8.90579C77.8245 8.87367 77.7496 8.84583 77.6704 8.82227C77.5526 8.78587 77.4327 8.75803 77.3085 8.73876C77.1843 8.71949 77.058 8.70878 76.9295 8.70878C76.6725 8.70878 76.422 8.74733 76.1886 8.82013C76.1115 8.84369 76.0344 8.87367 75.9594 8.90364C75.2143 9.21842 74.6532 9.88865 74.4862 10.7002C74.4541 10.863 74.4348 11.03 74.4348 11.2034C74.4348 11.8929 74.7132 12.5161 75.165 12.9679C75.2785 13.0814 75.4027 13.1842 75.5333 13.272C75.7325 13.4069 75.9509 13.5139 76.1864 13.5867C76.422 13.6595 76.6704 13.6981 76.9273 13.6981C77.0558 13.6981 77.1843 13.6895 77.3063 13.6702C77.4305 13.651 77.5505 13.6231 77.6682 13.5867C77.9016 13.5139 78.1222 13.4069 78.3213 13.272C78.4541 13.182 78.5783 13.0814 78.6896 12.9679C79.1415 12.5161 79.4198 11.8929 79.4198 11.2034C79.4198 11.0321 79.4027 10.863 79.3684 10.7002C79.2057 9.8908 78.6468 9.22056 77.8995 8.90579ZM27.1415 8.90579C26.8438 8.77945 26.5162 8.70878 26.1715 8.70878C25.8267 8.70878 25.4991 8.77945 25.2014 8.90579C24.4563 9.22056 23.8952 9.8908 23.7282 10.7024C23.6961 10.8651 23.6768 11.0321 23.6768 11.2056C23.6768 12.5846 24.7924 13.7002 26.1693 13.7002C27.5462 13.7002 28.664 12.5824 28.664 11.2056C28.664 11.0343 28.6468 10.8651 28.6126 10.7024C28.4498 9.8908 27.8888 9.22056 27.1415 8.90579Z",
    fill: "#649A3D"
  })));
}
var ForwardRef$1 = /*#__PURE__*/React.forwardRef(SvgLogoDigitalAi);

var _path, _path2;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function SvgLogoDigitalAiWhite(_ref, svgRef) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 100,
    height: 26,
    viewBox: "0 0 100 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M97.2643 6.22339H96.774V5.94409L98.0413 5.94642V6.22572H97.5511L97.5487 7.73862H97.2643V6.22339ZM98.2702 5.94642H98.7166L99.1305 7.21958H99.1374L99.5514 5.94642H100L99.9977 7.73629H99.7156L99.7179 6.29787H99.7133L99.2253 7.73629H99.0264L98.5477 6.29555H98.5431L98.5408 7.73396H98.2702V5.94642ZM88.5299 5.87892C87.7668 5.87892 87.1933 6.38399 87.0939 7.11018C86.1295 6.11167 84.7235 5.56238 83.1094 5.56238C79.1365 5.55772 76.0192 8.69988 76.0146 12.7172C76.0146 12.815 76.0169 12.9104 76.0215 13.0058C77.5154 13.597 78.5746 15.0633 78.5722 16.7741C78.5722 17.2349 78.4913 17.6772 78.3479 18.0891C79.5851 19.1854 81.2316 19.8371 83.0909 19.8394C84.6889 19.8418 86.2012 19.0551 87.0684 18.2265C87.1332 19.0178 87.709 19.5578 88.5114 19.5601C89.4203 19.5601 89.9868 18.9922 89.9868 18.0752L89.9984 7.34526C90.003 6.45382 89.4249 5.87892 88.5299 5.87892ZM83.0747 16.6949C80.8986 16.6926 79.1273 14.9074 79.1319 12.7125C79.1342 10.52 80.9079 8.73713 83.084 8.73945C85.26 8.74178 87.0314 10.527 87.0291 12.7219C87.0268 14.9144 85.2531 16.6973 83.0747 16.6949ZM62.5905 5.85099C61.8274 5.85099 61.2538 6.35606 61.1544 7.08225C60.1901 6.08374 58.7841 5.53445 57.1699 5.53445C53.197 5.52979 50.0821 8.67196 50.0775 12.6893C50.0728 16.7462 53.1161 19.8069 57.1561 19.8115C58.7563 19.8138 60.2664 19.0271 61.1336 18.1985C61.1983 18.9899 61.7742 19.5299 62.5766 19.5322C63.4854 19.5322 64.052 18.9643 64.052 18.0472L64.0636 7.31733C64.0636 6.42589 63.4854 5.85099 62.5905 5.85099ZM57.0358 16.6647C54.8597 16.6624 53.0884 14.8771 53.0907 12.6823C53.093 10.4898 54.8667 8.70687 57.0428 8.70919C59.2211 8.71152 60.9902 10.4967 60.9879 12.6916C60.9879 14.8841 59.2142 16.667 57.0358 16.6647ZM12.5199 0.5C11.6227 0.5 11.0446 1.07257 11.0446 1.95936L11.0399 7.04268C10.1149 6.03021 8.72512 5.47626 7.09479 5.47393C3.31846 5.4716 0.00462987 8.81394 4.84224e-06 12.6311C-0.00462018 16.4203 3.30459 19.7487 7.07861 19.7533C8.75287 19.7556 10.3207 18.8875 11.1509 18.031C11.3128 18.962 11.8701 19.4717 12.7373 19.4717C13.4542 19.4717 13.9745 18.9177 13.9768 18.1543L13.9953 1.96402C13.9953 1.08886 13.4033 0.502328 12.5199 0.5ZM7.05317 16.6088C4.87709 16.6065 3.10571 14.8213 3.10802 12.6264C3.11033 10.4339 4.88403 8.65101 7.06011 8.65333C9.23618 8.65566 11.0076 10.4409 11.0053 12.6357C11.0029 14.8283 9.22924 16.6112 7.05317 16.6088ZM33.9708 5.8184C33.0273 5.8184 32.5417 6.26063 32.4191 7.24983C31.5404 6.35606 29.991 5.50186 28.3352 5.50186C24.5612 5.49721 21.2451 8.83023 21.2427 12.6311C21.2381 16.4343 24.545 19.7719 28.3213 19.7766C30.028 19.7789 31.3762 19.2552 32.2411 18.259C32.1578 21.1359 30.7772 22.5324 28.0323 22.5301C27.1373 22.5301 26.5569 23.1119 26.5546 24.0127C26.5546 24.9577 27.1258 25.4977 28.1225 25.5C33.3534 25.507 35.2126 21.6759 35.2149 18.394L35.2265 7.11251C35.2311 6.36305 34.7016 5.8184 33.9708 5.8184ZM28.2612 16.6321C26.0828 16.6298 24.3138 14.8446 24.3161 12.6497C24.3184 10.4572 26.0921 8.67428 28.2682 8.67661C30.4442 8.67894 32.2156 10.4642 32.2133 12.659C32.211 14.8539 30.4373 16.6344 28.2612 16.6321ZM94.036 5.78349C93.2082 5.78349 92.5838 6.4096 92.5838 7.24285L92.5352 18.1264C92.5352 19.0015 93.1295 19.6113 93.9852 19.6137C94.894 19.6137 95.4605 19.0458 95.4628 18.131L95.5114 7.24751C95.5091 6.37236 94.9171 5.78349 94.036 5.78349ZM17.7832 5.63686C16.9553 5.63686 16.331 6.26296 16.331 7.09622L16.3194 17.9914C16.3194 18.8665 16.9137 19.4787 17.7694 19.4787C18.6782 19.4787 19.2447 18.9108 19.2447 17.9937L19.2563 7.09855C19.2563 6.22572 18.6643 5.63686 17.7832 5.63686ZM39.2803 5.69737C38.4525 5.69737 37.8281 6.32348 37.8281 7.15673L37.8165 18.0147C37.8165 18.8898 38.4108 19.5019 39.2665 19.5019C40.1753 19.5019 40.7419 18.934 40.7419 18.017L40.7534 7.15906C40.7534 6.28624 40.1614 5.69737 39.2803 5.69737ZM48.3315 16.6368C47.3718 16.5553 46.7775 16.283 46.7798 15.1751L46.7868 8.90005H47.5476C48.3893 8.90005 48.9998 8.28791 48.9998 7.44069C48.9998 6.53761 48.4333 5.95573 47.5499 5.9534H46.7891L46.7937 2.02686C46.7937 1.10981 46.2294 0.541896 45.3206 0.539568C44.4673 0.539568 43.8684 1.14938 43.8684 2.0222L43.8637 5.98599C43.1561 6.09305 42.7214 6.64235 42.7214 7.43371C42.7214 8.17852 43.1746 8.75109 43.8614 8.88143L43.8545 15.1937C43.8522 17.9332 45.3137 19.5066 47.869 19.5113C48.9258 19.5136 49.5595 19.0015 49.5595 18.1473C49.5595 17.2629 49.1131 16.7136 48.3315 16.6368ZM68.3209 0.562843C67.4676 0.562843 66.8686 1.16335 66.8686 2.0222L66.8501 18.0449C66.8501 18.9201 67.4444 19.5322 68.3001 19.5322C69.2089 19.5322 69.7755 18.9643 69.7778 18.0472L69.7963 2.02453C69.794 1.12378 69.2297 0.565171 68.3209 0.562843ZM76.8471 15.2146C76.7986 15.1402 76.7454 15.068 76.6876 15.0005C76.5534 14.8376 76.4008 14.6933 76.2343 14.5629C76.1765 14.5187 76.1164 14.4745 76.0539 14.4349C75.7464 14.2324 75.3972 14.0904 75.0202 14.0253C74.8699 13.9997 74.715 13.9857 74.5577 13.9857C74.0814 13.9857 73.6327 14.1067 73.2419 14.3209C73.1633 14.3628 73.087 14.4093 73.013 14.4605C72.2776 14.9609 71.7943 15.8058 71.792 16.7671C71.792 17.7284 72.273 18.5756 73.0083 19.076C73.0823 19.1272 73.1587 19.1738 73.235 19.2157C73.6258 19.4298 74.0744 19.5532 74.5508 19.5532C75.2191 19.5532 75.8319 19.3157 76.3083 18.9201C76.4447 18.806 76.5696 18.6803 76.6829 18.543C76.7407 18.4755 76.7939 18.4034 76.8425 18.3289C76.9419 18.1799 77.0275 18.024 77.0969 17.8564C77.2356 17.5235 77.3143 17.1581 77.3143 16.7741C77.3143 16.39 77.2379 16.0246 77.0992 15.6895C77.0321 15.5195 76.9466 15.3613 76.8471 15.2146Z",
    fill: "white"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M59.6633 12.0655C59.7095 12.2633 59.735 12.4682 59.735 12.68C59.735 12.7963 59.728 12.9127 59.7141 13.0244C59.7003 13.1385 59.6795 13.2479 59.6517 13.3573C59.5962 13.5737 59.5153 13.7809 59.4112 13.9717C58.9556 14.8166 58.0653 15.3915 57.0432 15.3915C55.5562 15.3915 54.3514 14.1766 54.3514 12.68C54.3514 12.4938 54.3699 12.3099 54.4069 12.133C54.585 11.2509 55.1909 10.5223 55.9979 10.1802C56.3194 10.0429 56.6732 9.96606 57.0455 9.96606C57.4178 9.96606 57.7716 10.0429 58.0931 10.1802C58.6966 10.4362 59.1823 10.911 59.4667 11.4999C59.5499 11.6791 59.617 11.8677 59.6633 12.0655ZM7.05822 9.96606C5.57127 9.96606 4.36646 11.181 4.36646 12.6776C4.36646 14.1742 5.57127 15.3892 7.05822 15.3892C8.54517 15.3892 9.7523 14.1742 9.7523 12.6776C9.7523 11.181 8.54517 9.96606 7.05822 9.96606ZM84.1273 10.1802C84.0464 10.1453 83.9655 10.115 83.8799 10.0894C83.7527 10.0499 83.6232 10.0196 83.4891 9.99865C83.355 9.9777 83.2185 9.96606 83.0798 9.96606C82.8023 9.96606 82.5317 10.008 82.2796 10.0871C82.1964 10.1127 82.1131 10.1453 82.0322 10.1779C81.2275 10.52 80.6216 11.2485 80.4412 12.1307C80.4065 12.3076 80.3857 12.4891 80.3857 12.6776C80.3857 13.4271 80.6863 14.1044 81.1743 14.5955C81.2968 14.7189 81.4309 14.8306 81.572 14.926C81.7871 15.0727 82.023 15.189 82.2773 15.2682C82.5317 15.3473 82.8 15.3892 83.0775 15.3892C83.2162 15.3892 83.355 15.3799 83.4868 15.3589C83.6209 15.338 83.7504 15.3077 83.8776 15.2682C84.1297 15.189 84.3678 15.0727 84.5829 14.926C84.7263 14.8283 84.8604 14.7189 84.9807 14.5955C85.4686 14.1044 85.7692 13.4271 85.7692 12.6776C85.7692 12.4914 85.7507 12.3076 85.7137 12.1307C85.538 11.2509 84.9344 10.5223 84.1273 10.1802ZM29.3115 10.1802C28.9901 10.0429 28.6363 9.96606 28.264 9.96606C27.8916 9.96606 27.5378 10.0429 27.2164 10.1802C26.4116 10.5223 25.8058 11.2509 25.6254 12.133C25.5907 12.3099 25.5699 12.4914 25.5699 12.68C25.5699 14.1789 26.7747 15.3915 28.2617 15.3915C29.7486 15.3915 30.9557 14.1766 30.9557 12.68C30.9557 12.4938 30.9372 12.3099 30.9002 12.133C30.7245 11.2509 30.1186 10.5223 29.3115 10.1802Z",
    fill: "#649A3D"
  })));
}
var ForwardRef = /*#__PURE__*/React.forwardRef(SvgLogoDigitalAiWhite);

const rootClassName$J = 'dot-sidebar';
const StyledSidebar = styled.aside.withConfig({
  displayName: "Sidebarstyles__StyledSidebar",
  componentId: "l3atb4-0"
})(["", ""], ({
  theme
}) => css(["&.", "{align-items:stretch;background:", ";border-width:0 1px;border-style:solid;border-color:", ";box-sizing:border-box;color:", ";display:flex;height:100%;flex-direction:column;justify-content:space-between;letter-spacing:0.01em;-o-transition:width cubic-bezier(0.4,0,0.6,1) 0.3s;-moz-transition:width cubic-bezier(0.4,0,0.6,1) 0.3s;-webkit-transition:width cubic-bezier(0.4,0,0.6,1) 0.3s;transition:width cubic-bezier(0.4,0,0.6,1) 0.3s;header{align-items:center;border-bottom:1px solid;border-bottom-color:", ";display:flex;height:40px;flex-shrink:0;overflow:hidden;padding:", ";white-space:nowrap;&.app-logo{box-sizing:border-box;.dot-app-logo{svg,img{max-width:100%;}}}.dot-avatar{margin-right:", ";}}.go-back{align-items:center;border-bottom:1px solid;border-bottom-color:", ";display:flex;.go-back-button{margin:", ";background-color:", ";&:hover{background-color:", ";}&:focus-visible{box-shadow:0 0 0 2px ", ",0 0 0 4px ", ";}}.back-button-text{margin-right:", ";}}hr.MuiDivider-root{border-color:", ";margin:", ";}.MuiListSubheader-root{border-bottom:1px solid ", ";margin:", ";.dot-typography{display:block;margin:0;padding:", ";}}ul.side-nav{background:transparent;flex-grow:2;overflow-x:hidden;overflow-y:auto;padding:0;width:auto;.dot-nested-list{background:transparent;}.", "{.dot-drawer-paper{padding:", ";overflow-y:auto;border-right:1px solid ", ";box-shadow:0 0 5px 0 rgba(0,0,0,0.15);}.MuiTypography-root.MuiTypography-subtitle2{line-height:40px;}.", "{margin:0;padding-left:", ";}}.dot-list-item{height:44px;padding:0;&.Mui-focusVisible{box-shadow:inset 0 0 0 2px ", ";border:2px solid ", ";}&.open{border:'none';}.dot-list-item-link .dot-icon{margin-right:", ";}.dot-icon{border-radius:50%;height:40px;margin:", ";width:40px;}.dot-typography{white-space:nowrap;}}}.toggle-nav{border-top:1px solid;border-top-color:", ";padding:", ";text-align:right;.dot-icon{transform:rotate(0deg);-o-transition:all cubic-bezier(0.4,0,0.2,1) 0.3s;-moz-transition:all cubic-bezier(0.4,0,0.2,1) 0.3s;-webkit-transition:all cubic-bezier(0.4,0,0.2,1) 0.3s;transition:all cubic-bezier(0.4,0,0.2,1) 0.3s;}}.powered-by{border-top:1px solid;border-top-color:", ";color:", ";display:flex;flex-direction:column;flex-shrink:0;font-size:12px;overflow:hidden;padding:", ";p.desc{white-space:nowrap;}.company-name{margin-top:", ";}.d-icon{display:none;}}&.collapsed{overflow:hidden;width:58px;-o-transition:all cubic-bezier(0.4,0,0.6,1) 0.3s;-moz-transition:all cubic-bezier(0.4,0,0.6,1) 0.3s;-webkit-transition:all cubic-bezier(0.4,0,0.6,1) 0.3s;transition:all cubic-bezier(0.4,0,0.6,1) 0.3s;li.MuiListSubheader-root .dot-typography,.go-back .MuiTypography-root,.MuiListItem-divider .dot-list-item-link,.child,.powered-by .company-name,.powered-by p.desc{display:none;}.dot-nested-drawer li.MuiListSubheader-root .dot-typography,.powered-by .d-icon{display:block;}header .dot-app-logo{text-align:center;}ul.side-nav{width:56px;.dot-list-item{margin-left:0;}.toggle-nav{align-self:center;}}.powered-by{align-items:center;}}}"], rootClassName$J, theme.palette.layer.n50, theme.palette.layer.n100, theme.palette.grey[700], theme.palette.layer.n100, theme.spacing(1, 2), theme.spacing(1), theme.palette.layer.n100, theme.spacing(0.5, 1), theme.palette.layer.n100, theme.palette.layer.n200, theme.palette.layer.n0, theme.palette.layer.n900, theme.spacing(2.5), theme.palette.layer.n100, theme.spacing(1, 0), theme.palette.layer.n100, theme.spacing(0, 0, 1), theme.spacing(1.5, 2), nestedDrawerClassName, theme.spacing(2), theme.palette.layer.n100, listItemRootClass, theme.spacing(2), theme.palette.layer.n0, theme.palette.layer.n900, theme.spacing(1), theme.spacing(0, 1), theme.palette.layer.n100, theme.spacing(1), theme.palette.layer.n100, theme.palette.grey[400], theme.spacing(1), theme.spacing(1)));

const rootClassName$I = 'dot-truncate-with-tooltip';
const StyledTruncateWithTooltip = styled(Tooltip).withConfig({
  displayName: "TruncateWithTooltipstyles__StyledTruncateWithTooltip",
  componentId: "sc-1o80lur-0"
})(["", ""], () => css(["&.", "{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}&.dot-characters-limit{display:inline;}"], rootClassName$I));

const getTruncatedLabel = (label, charactersLimit) => {
  if (!charactersLimit || charactersLimit <= 0 || label.length < charactersLimit) return label;
  return `${label.substr(0, charactersLimit)}...`;
};
const getTooltipLabel = (label, charactersLimit) => {
  if (!charactersLimit || charactersLimit <= 0 || label.length < charactersLimit) return null;
  return label;
};

const DotTruncateWithTooltip = ({
  ariaLabel,
  charactersLimit,
  className,
  'data-testid': dataTestId,
  label,
  width
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$I, className, charactersLimit ? 'dot-characters-limit' : '');
  return jsx(StyledTruncateWithTooltip, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    title: getTooltipLabel(label, charactersLimit),
    style: {
      width: calculateWidth(width)
    }
  }, {
    children: jsx("span", {
      children: getTruncatedLabel(label, charactersLimit)
    }, void 0)
  }), void 0);
};

const Brand = ({
  brandDesc
}) => {
  const theme = useTheme();
  return jsxs("div", Object.assign({
    className: "powered-by"
  }, {
    children: [jsx(DotTypography, Object.assign({
      className: "desc",
      variant: "body2"
    }, {
      children: brandDesc
    }), void 0), jsx(DotTooltip, Object.assign({
      title: "digital.ai"
    }, {
      children: theme.palette.mode === "light" ? jsx(ForwardRef$1, {
        className: "company-name"
      }, void 0) : jsx(ForwardRef, {
        className: "company-name"
      }, void 0)
    }), void 0), jsx(DotTooltip, Object.assign({
      title: "digital.ai"
    }, {
      children: jsx(ForwardRef$2, {
        className: "d-icon"
      }, void 0)
    }), void 0)]
  }), void 0);
};
const Header = ({
  appLogo,
  appLogoSmall,
  displayAppLogo,
  hasAppLogo,
  isOpen,
  title,
  titleAvatarProps
}) => {
  const headerClasses = useStylesWithRootClass(displayAppLogo ? 'app-logo' : '');
  return jsx("header", Object.assign({
    className: headerClasses
  }, {
    children: hasAppLogo ? jsx(DotAppLogo, {
      appLogo: appLogo,
      appLogoSmall: appLogoSmall,
      smallOnly: !isOpen
    }, void 0) : jsxs(Fragment$1, {
      children: [jsx(DotAvatar, Object.assign({}, titleAvatarProps), void 0), isOpen && jsx(DotTypography, Object.assign({
        variant: "h4"
      }, {
        children: title
      }), void 0)]
    }, void 0)
  }), void 0);
};
const DotSidebar = ({
  appLogo,
  appLogoSmall,
  ariaLabel,
  backItem,
  brandDesc,
  children,
  className,
  collapsable: _collapsable = false,
  'data-testid': dataTestId = 'primaryNav',
  displayAppLogo: _displayAppLogo = false,
  displayBrand: _displayBrand = true,
  goBack: _goBack = false,
  navItems: _navItems = [],
  nestedListType: _nestedListType = 'expandable',
  onCollapseChange,
  open: _open = true,
  title,
  titleAvatarProps,
  width: _width = 240
}) => {
  const [isOpen, setIsOpen] = useState(_open);
  const [sidebarWidth, setSidebarWidth] = useState(_width);
  const hasAppLogo = appLogo !== null && _displayAppLogo;
  const hasBackItem = _goBack && backItem;
  const displayHeader = title || hasAppLogo;
  const openClass = isOpen ? 'open' : 'collapsed';
  const checkPrimaryNavMissingIcons = () => _navItems.some(item => !item.divider && !item.startIcon);
  useEffect(() => {
    // Incorrect usage warning
    if (_collapsable && checkPrimaryNavMissingIcons()) {
      console.warn('When using `collapsable`, please define `startIcon` for each item in primary nav.');
    }
  }, []);
  useEffect(() => {
    setIsOpen(_open);
  }, [_open]);
  useEffect(() => {
    setSidebarWidth(isOpen ? _width : 58);
  }, [isOpen]);
  const collapseNav = () => {
    onCollapseChange && onCollapseChange(isOpen);
    setIsOpen(!isOpen);
  };
  const sidebarClasses = useStylesWithRootClass('side-nav', openClass);
  const rootClasses = useStylesWithRootClass(rootClassName$J, openClass, className);
  return jsxs(StyledSidebar, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    style: {
      width: sidebarWidth
    }
  }, {
    children: [displayHeader && jsx(Header, {
      appLogo: appLogo,
      appLogoSmall: appLogoSmall,
      displayAppLogo: _displayAppLogo,
      hasAppLogo: hasAppLogo,
      isOpen: isOpen,
      title: title,
      titleAvatarProps: titleAvatarProps
    }, void 0), hasBackItem && jsxs("div", Object.assign({
      className: "go-back"
    }, {
      children: [jsx(DotIconButton, {
        className: "go-back-button",
        "data-testid": "back-button",
        iconId: backItem.iconId || 'back',
        onClick: backItem.onClick,
        tooltip: backItem.title || backItem.text
      }, void 0), jsx(DotTypography, Object.assign({
        className: "back-button-text",
        variant: "h4",
        noWrap: true
      }, {
        children: jsx(DotTruncateWithTooltip, {
          "data-testid": dataTestId && `${dataTestId}-go-back-truncate-tooltip`,
          label: backItem.text
        }, void 0)
      }), void 0)]
    }), void 0), _navItems.length > 0 && jsx(DotList, {
      ariaLabel: "left navigation",
      className: sidebarClasses,
      "data-testid": "sideNav",
      dense: true,
      disablePadding: true,
      items: _navItems,
      nestedDrawerLeftSpacing: sidebarWidth,
      nestedListType: _nestedListType,
      width: "100%"
    }, void 0), children && jsx("div", Object.assign({
      className: "child"
    }, {
      children: children
    }), void 0), _collapsable && jsx("div", Object.assign({
      className: "toggle-nav"
    }, {
      children: jsx(DotTooltip, Object.assign({
        title: isOpen ? 'Collapse' : 'Expand'
      }, {
        children: jsx(DotIconButton, {
          ariaLabel: "collapse sidebar navigation",
          "data-testid": "toggle-nav",
          iconId: isOpen ? 'chevron-left' : 'chevron-right',
          iconSize: "small",
          onClick: collapseNav,
          size: "small"
        }, void 0)
      }), void 0)
    }), void 0), _displayBrand && jsx(Brand, {
      brandDesc: brandDesc
    }, void 0)]
  }), void 0);
};

const rootClassName$H = 'dot-badge';
const StyledBadge = styled(Badge).withConfig({
  displayName: "Badgestyles__StyledBadge",
  componentId: "sc-1brv3h5-0"
})(["", ""], ({
  theme
}) => css(["&.", "{color:", ";word-break:normal;.MuiBadge-badge{background-color:", ";&.MuiBadge-standard{font-size:10px;height:", ";min-width:", ";padding:", ";}}}"], rootClassName$H, theme.palette.text.primary, ({
  $badgeColor
}) => {
  return $badgeColor;
}, theme.spacing(2), theme.spacing(2), theme.spacing(0, 0.5)));

const DotBadge = ({
  ariaLabel,
  badgeColor,
  badgeContent,
  children,
  className,
  'data-testid': dataTestId,
  invisible,
  max,
  overlap,
  variant: _variant = 'dot'
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$H, className);
  return jsx(StyledBadge, Object.assign({
    "$badgeColor": badgeColor,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    "aria-label": ariaLabel,
    badgeContent: badgeContent,
    classes: {
      root: rootClasses
    },
    color: "primary",
    "data-testid": dataTestId,
    invisible: invisible,
    max: max,
    overlap: overlap,
    variant: _variant
  }, {
    children: children
  }), void 0);
};

const rootClassName$G = 'dot-app-toolbar';
const denseClassName = 'dense';
const StyledMainMenu = styled(DotDrawer).withConfig({
  displayName: "AppToolbarstyles__StyledMainMenu",
  componentId: "sc-3kokby-0"
})(["", ""], ({
  theme
}) => css(["&.dot-main-menu{.dot-drawer-body{padding:", ";.dot-drawer-close-button{display:none;}}&.", " .dot-drawer-paper{top:48px;.dot-sidebar{height:calc(100vh - 48px);}}.dot-drawer-paper{height:100%;top:64px;padding:0;overflow-y:hidden;.dot-sidebar{height:calc(100vh - 64px);}}}"], theme.spacing(0), denseClassName));
const StyledAppToolbar = styled.header.withConfig({
  displayName: "AppToolbarstyles__StyledAppToolbar",
  componentId: "sc-3kokby-1"
})(["", ""], ({
  theme
}) => css(["&.", "{align-items:center;background:", ";border-bottom:4px solid ", ";box-sizing:border-box;color:", ";display:flex;height:64px;padding:", ";position:fixed;width:100%;z-index:", ";top:0;left:0;right:0;&.without-menu-icon{padding-left:", ";}&.", "{height:48px;}.dot-main-menu-btn,.dot-right-side{.dot-icon-btn{color:", ";}}.dot-main-menu-btn{text-align:center;}.dot-branding{align-items:center;display:flex;padding:", ";.primary-logo,.app-logo{margin-right:", ";}.primary-logo,.dot-app-logo{display:flex;max-width:200px;svg,img{max-height:36px;max-width:200px;}}a{line-height:0;}.divider{margin-left:", ";}}div.dot-right-side{display:flex;flex-grow:2;justify-content:flex-end;.dot-badge .MuiBadge-anchorOriginTopRightRectangular{top:", ";right:", ";}}.avatar-wrapper{display:flex;align-items:center;justify-content:center;width:40px;button.dot-avatar:focus-visible{box-shadow:0px 0px 0px 3px ", ",0px 0px 0px 5px ", ";}}}"], rootClassName$G, theme.palette.grey[700], theme.palette.grey[100], theme.palette.grey[0], theme.spacing(1.5, 2, 1.5, 1), levelFourth, theme.spacing(1.5), denseClassName, theme.palette.grey[100], theme.spacing(0, 4, 0, 0.75), theme.spacing(1.5), theme.spacing(2), theme.spacing(1.5), theme.spacing(1.5), theme.palette.layer.n900, theme.palette.layer.n0));

const DotAppToolbar = ({
  ariaLabel,
  appLogo,
  appLogoHref: _appLogoHref = '/',
  appLogoSmall,
  avatar,
  borderColor,
  children,
  className,
  closeMenuOnItemClick,
  customLogo,
  'data-testid': dataTestId,
  dense: _dense = true,
  mainMenu,
  mainMenuItems,
  mainMenuWidth: _mainMenuWidth = 240,
  menuCloseOnClickAway: _menuCloseOnClickAway = false,
  navItems: _navItems = [],
  onClickAway,
  primaryLogoHref: _primaryLogoHref = '/'
}) => {
  const [menuOpen, updateMenuOpen] = useState(false);
  const showMainMenu = mainMenu || mainMenuItems;
  const displayAppLogo = appLogo || appLogoSmall;
  const mainMenuRef = useRef(null);
  const denseClass = _dense ? denseClassName : '';
  const rootClasses = useStylesWithRootClass(rootClassName$G, className, denseClass, showMainMenu ? '' : 'without-menu-icon');
  const mainMenuClasses = useStylesWithRootClass('dot-main-menu', denseClass, menuOpen ? 'open' : '');
  const targetBreakpoint = useMediaQuery(theme => theme.breakpoints.up('md'));
  useEffect(() => {
    const handleInsideMenuClick = event => {
      var _a, _b;
      const targetEl = event.target;
      const clickInsideMenu = (_a = mainMenuRef.current) === null || _a === void 0 ? void 0 : _a.contains(targetEl);
      const hasLink = (_b = targetEl.closest('a')) === null || _b === void 0 ? void 0 : _b.hasAttribute('href');
      // Close menu on click only in two cases:
      // 1. 'closeMenuOnItemClick' is set to true
      // 2. item has a link and 'closeMenuOnItemClick' is NOT explicitly set to false
      const shouldCloseMenu = clickInsideMenu && (closeMenuOnItemClick || hasLink && closeMenuOnItemClick !== false);
      shouldCloseMenu && updateMenuOpen(false);
    };
    if (mainMenuRef === null || mainMenuRef === void 0 ? void 0 : mainMenuRef.current) {
      mainMenuRef.current.addEventListener('click', handleInsideMenuClick);
      return () => {
        var _a;
        (_a = mainMenuRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', handleInsideMenuClick);
      };
    }
  }, []);
  const renderNavItems = _navItems.map((item, index) => {
    return jsx(DotBadge, Object.assign({
      badgeColor: item.badgeColor,
      badgeContent: item.badgeContent,
      "data-testid": "dot-app-toolbar-badge",
      invisible: !item.displayBadge,
      variant: item.badgeVariant
    }, {
      children: jsx(DotIconButton, {
        className: item.className,
        "data-testid": "dot-app-toolbar-icon-button",
        iconId: item.iconId,
        iconSize: "medium",
        onClick: event => item.onClick && item.onClick(event),
        size: "medium",
        tooltip: item.tooltip
      }, index)
    }), index);
  });
  const appToolbar = jsxs(StyledAppToolbar, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    style: {
      borderBottomColor: borderColor
    }
  }, {
    children: [showMainMenu && jsxs(Fragment$1, {
      children: [jsx("div", Object.assign({
        className: "dot-main-menu-btn"
      }, {
        children: jsx(DotIconButton, {
          "data-testid": "main-menu-icon",
          iconId: menuOpen ? 'close' : 'menu',
          iconSize: "medium",
          onClick: () => updateMenuOpen(!menuOpen),
          tooltip: "Open Menu"
        }, void 0)
      }), void 0), jsx(StyledMainMenu, Object.assign({
        anchor: "left",
        className: mainMenuClasses,
        "data-testid": "main-menu",
        onClose: () => updateMenuOpen(false),
        open: menuOpen,
        variant: "persistent",
        width: _mainMenuWidth + 'px'
      }, {
        children: jsx("div", Object.assign({
          className: "dot-drawer-body",
          ref: mainMenuRef
        }, {
          children: mainMenuItems ? jsx(DotSidebar, Object.assign({
            collapsable: false,
            displayBrand: false,
            goBack: false,
            navItems: mainMenuItems,
            nestedListType: "menu",
            width: _mainMenuWidth
          }, {
            children: mainMenu
          }), void 0) : mainMenu
        }), void 0)
      }), void 0)]
    }, void 0), jsxs("div", Object.assign({
      className: "dot-branding"
    }, {
      children: [jsx(DotLink, Object.assign({
        className: "primary-logo",
        "data-testid": "primary-logo",
        href: _primaryLogoHref
      }, {
        children: customLogo ? customLogo : jsx(DotTooltip, Object.assign({
          "data-testid": "logo-tooltip",
          title: "digital.ai"
        }, {
          children: jsx(ForwardRef, {}, void 0)
        }), void 0)
      }), void 0), displayAppLogo && jsx(DotLink, Object.assign({
        href: _appLogoHref,
        "data-testid": "app-logo"
      }, {
        children: jsx(DotAppLogo, {
          appLogo: appLogo,
          appLogoSmall: appLogoSmall,
          className: "dot-app-logo",
          smallOnly: !targetBreakpoint
        }, void 0)
      }), void 0)]
    }), void 0), children, jsxs("div", Object.assign({
      className: "dot-right-side"
    }, {
      children: [_navItems.length > 0 && jsx("nav", Object.assign({
        "data-testid": "right-side-nav"
      }, {
        children: renderNavItems
      }), void 0), avatar && jsx("div", Object.assign({
        className: "avatar-wrapper"
      }, {
        children: avatar
      }), void 0)]
    }), void 0)]
  }), void 0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickAway = event => {
    if (_menuCloseOnClickAway && onClickAway) {
      updateMenuOpen(false);
      onClickAway(event);
    }
  };
  return _menuCloseOnClickAway ? jsx(ClickAwayListener, Object.assign({
    onClickAway: handleClickAway
  }, {
    children: jsx("div", {
      children: appToolbar
    }, void 0)
  }), void 0) : appToolbar;
};

const rootClassName$F = 'dot-autocomplete';
const inputRootClassName = 'dot-input-root';
const inputMediumClassName = 'dot-input-medium';
const StyledAutocomplete = styled(Autocomplete).withConfig({
  displayName: "AutoCompletestyles__StyledAutocomplete",
  componentId: "j2sgjy-0"
})(["", ""], ({
  theme
}) => css(["&.", "{&.", " .dot-text-field .", "{height:56px;padding-left:", ";}.", "{padding-top:", ";padding-bottom:", ";}.dot-chip:first-child{margin-left:", ";}.dot-text-field{.", "{min-height:", ";}.warning-icon{color:", ";}.error-icon{color:", ";}}}"], rootClassName$F, inputMediumClassName, inputRootClassName, theme.spacing(2), inputRootClassName, theme.spacing(0), theme.spacing(0), theme.spacing(0), inputRootClassName, theme.spacing(5), theme.palette.warning.main, theme.palette.error.main));

const rootClassName$E = 'dot-chip';
const StyledChip = styled(Chip).withConfig({
  displayName: "Chipstyles__StyledChip",
  componentId: "f1tsra-0"
})(["", ""], ({
  theme
}) => css(["&.", "{border-color:", ";.dot-icon i{height:auto;}&.MuiChip-sizeSmall{.dot-icon,.dot-avatar{width:18px;height:18px;}}&.Mui-error{background-color:", ";border-color:", ";.MuiChip-deleteIcon{color:", ";}}&:not(.Mui-error){&:hover{background-color:", ";}.MuiChip-deleteIcon{&:hover{color:", ";}}}.MuiChip-deleteIcon{width:18px;height:18px;color:", ";}}"], rootClassName$E, theme.palette.grey[300], theme.palette.error[50], theme.palette.error.main, theme.palette.error.main, theme.palette.grey[50], theme.palette.grey[400], theme.palette.grey[300]));

const DEFAULT_CHARACTERS_LIMIT = 32;
const DotChip = ({
  ariaLabel,
  avatar,
  charactersLimit: _charactersLimit = DEFAULT_CHARACTERS_LIMIT,
  children,
  className,
  'data-testid': dataTestId,
  disabled: _disabled = false,
  error: _error = false,
  isClickable: _isClickable = false,
  isDeletable: _isDeletable = true,
  onClick,
  onDelete,
  size: _size = 'medium',
  startIcon
}) => {
  const errorClass = _error ? 'Mui-error' : '';
  const rootClasses = useStylesWithRootClass(rootClassName$E, className, errorClass);
  const getChipLabel = () => {
    if (_charactersLimit <= 0 || children.length < _charactersLimit) return children;
    const label = `${children.substring(0, _charactersLimit)}...`;
    return jsx(DotTooltip, Object.assign({
      title: children
    }, {
      children: jsx("span", {
        children: label
      }, void 0)
    }), void 0);
  };
  return jsx(StyledChip, {
    "aria-label": ariaLabel,
    avatar: avatar,
    classes: {
      root: rootClasses
    },
    clickable: _isClickable,
    color: "default",
    "data-testid": dataTestId,
    disabled: _disabled,
    icon: avatar ? null : startIcon,
    label: getChipLabel(),
    onClick: event => onClick && onClick(event),
    onDelete: _isDeletable && onDelete ? event => onDelete(event) : undefined,
    size: _size,
    variant: "outlined"
  }, void 0);
};

// takes multiple types of data from autocomplete selection
// parses value and returns a string which is saved to state
const parseAutoCompleteValue = value => {
  if (typeof value === 'string') {
    return value;
  } else if (Array.isArray(value)) {
    let titles = '';
    value.forEach((val, index) => {
      if (index !== 0) {
        titles += ',';
      }
      if (typeof val === 'string') {
        titles += val;
      } else {
        titles += val.title;
      }
    });
    return titles;
  } else if (value && value.title) {
    return value.title;
  }
  return '';
};
const getChipsFromAutocomplete = ({
  chipSize: _chipSize = 'medium',
  getTagProps,
  isReadOnly: _isReadOnly = false,
  values
}) => {
  return values.map((option, index) => {
    const hasStringValue = isString$1(option);
    const optionAsString = option;
    const optionAsObject = option;
    const chipError = hasStringValue ? undefined : optionAsObject.error;
    return jsx(DotChip, Object.assign({
      "data-testid": "dot-autocomplete-chip",
      isDeletable: !_isReadOnly,
      error: chipError,
      size: _chipSize
    }, getTagProps({
      index
    }), {
      children: hasStringValue ? optionAsString : optionAsObject.title
    }), index);
  });
};
const checkIfDuplicateItem = (itemText, autocompleteOptions) => autocompleteOptions.some(autocompleteOption => autocompleteOption.title === itemText);

const DEFAULT_ACTION_ITEM_TEXT = 'Add new item';
const DotAutoComplete = ({
  ListboxComponent,
  actionItem,
  ariaLabel,
  autoFocus,
  className,
  'data-testid': dataTestId,
  defaultValue,
  dense: _dense = true,
  disabled: _disabled = false,
  disablePortal: _disablePortal = true,
  endAdornmentTooltip,
  error: _error = false,
  filterSelectedOptions: _filterSelectedOptions = true,
  freesolo: _freesolo = true,
  group: _group = false,
  helperText,
  inputId,
  inputRef,
  label,
  loading,
  maxHeight,
  multiple: _multiple = true,
  onBlur,
  onChange,
  onClose,
  onInputChange,
  onOpen,
  open,
  options,
  persistentLabel,
  placeholder,
  readOnly: _readOnly = false,
  renderOption,
  renderTags,
  required: _required = false,
  size: _size = 'small',
  value,
  warning: _warning = false
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState(!value && !defaultValue);
  const {
    iconId: actionIconId = 'add',
    text: actionItemText,
    onClick: onActionItemClick,
    preventDuplicateInsertion
  } = actionItem || {};
  const isActionItemDefined = onActionItemClick !== undefined;
  let highlightedOption = null;
  const [isOpened, setIsOpened] = useState(false);
  const [inputText, setInputText] = useState('');
  const textFieldWarningClassName = !_error && _warning && warningClassName;
  const rootClasses = useStylesWithRootClass(rootClassName$F, _size === 'medium' && inputMediumClassName, className);
  const textFieldRootClasses = useStylesWithRootClass(rootClassName$10, className, _readOnly ? 'read-only' : '', textFieldWarningClassName);
  const inputRootClasses = useStylesWithRootClass(inputRootClassName, !_dense && inputMediumClassName);
  let textFieldInput;
  // Used for focus management while popper is opened
  const actionItemRef = useRef();
  const textFieldRef = element => {
    // We want to use this element in callback function
    textFieldInput = element;
    // Check if ref is defined via props
    if (inputRef) {
      // Check if callback ref
      if (typeof inputRef === 'function') {
        inputRef(element);
      } else {
        // We are dealing with mutable ref object
        inputRef.current = element;
      }
    }
  };
  const valuesChanged = ({
    event,
    val,
    reason
  }) => {
    onChange && onChange(event, val, reason);
    setShowPlaceholder(parseAutoCompleteValue(val) === '');
  };
  const sortOptions = () => {
    return _group ? options.sort((a, b) => {
      const aGroup = a.group ? a.group : '';
      const bGroup = b.group ? b.group : '';
      return -bGroup.localeCompare(aGroup);
    }) : options;
  };
  const handleBlur = event => {
    event.relatedTarget !== actionItemRef.current && setIsOpened(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
  };
  const onActionButtonClick = () => {
    setIsOpened(false);
    textFieldInput.focus();
    onActionItemClick(inputText);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DotPopper = props => {
    if (!isActionItemDefined) return jsx(StyledPopper, Object.assign({}, props, {
      className: rootClassName$U,
      disablePortal: _disablePortal,
      "$maxHeight": maxHeight
    }), void 0);
    // Disable action if customer explicitly enabled duplicate
    // item insertion and input text is found inside the 'options'
    const isActionDisabled = preventDuplicateInsertion && checkIfDuplicateItem(inputText, options);
    // Display warning icon if disabled
    const actionStartIconId = isActionDisabled ? 'warning-solid' : actionIconId;
    const defaultText = inputText ? `Add "${inputText}"` : DEFAULT_ACTION_ITEM_TEXT;
    const nonDisabledText = actionItemText ? actionItemText : defaultText;
    const itemText = isActionDisabled ? 'Value already exists' : nonDisabledText;
    // If simple text, we need to give it a class so that
    // styling for displaying ellipsis on a long text
    // can be applied. If it is custom node coming from the
    // consumer, then leave it as it is.
    const itemTextNode = isString$1(itemText) ? jsx("span", Object.assign({
      className: "dot-action-item-text"
    }, {
      children: itemText
    }), void 0) : itemText;
    const paperProps = props.children.props;
    const paperChildren = paperProps.children;
    return jsx(StyledPopper, Object.assign({}, props, {
      className: rootClassName$U,
      disablePortal: _disablePortal,
      "$maxHeight": maxHeight
    }, {
      children: jsxs(Paper, Object.assign({}, paperProps, {
        children: [paperChildren, jsx("div", Object.assign({
          className: "dot-action-item",
          /* Add this to short circuit blur event (otherwise button click will not work):
           * https://github.com/mui-org/material-ui/issues/19038 */
          onBlur: handleBlur,
          onKeyDown: event => {
            if (event.key === 'Tab' && textFieldInput) {
              event.preventDefault();
              textFieldInput.focus();
            }
          },
          // We want to close the popper each time focus is shifted from action item
          onMouseDown: e => {
            e.preventDefault();
          }
        }, {
          children: jsx(DotButton, Object.assign({
            "data-testid": "dot-action-item-btn",
            disableRipple: true,
            disabled: isActionDisabled,
            fullWidth: true,
            onClick: onActionButtonClick,
            ref: actionItemRef,
            startIcon: jsx(DotIcon, {
              ariaLabel: actionStartIconId,
              fontSize: "small",
              iconId: actionStartIconId
            }, void 0),
            type: "text"
          }, {
            children: itemTextNode
          }), void 0)
        }), void 0)]
      }), void 0)
    }), void 0);
  };
  // Use passed in onOpen callback (if exists), otherwise create custom function
  const handleOpen = onOpen || (() => setIsOpened(true));
  // Use passed in onClose callback (if exists), otherwise create custom function
  const handleClose = onClose || (event => {
    // We want to close popper in each occasion where focus isn't set to action item
    if (!('relatedTarget' in event) || event.relatedTarget !== actionItemRef.current) {
      setIsOpened(false);
    }
  });
  // Create handler only if 'onInputChange' or 'actionItem' prop is defined
  const handleInputChange = (onInputChange || isActionItemDefined) && ((event, inputValue, reason) => {
    isActionItemDefined && setInputText(inputValue);
    onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(event, inputValue, reason);
  }) || undefined;
  // Create callback when action item click event handler is defined,
  // free-solo mode is NOT set and 'Enter' key has been pressed
  const handleKeyDown = !_freesolo && onActionItemClick && (event => {
    if (event.key === 'Enter') {
      // Do NOT execute callback if duplicate item or have selected an option from the dropdown
      if (preventDuplicateInsertion && checkIfDuplicateItem(inputText, options) || highlightedOption) return;
      onActionButtonClick();
    }
  }) || undefined;
  const handleRenderChips = (values, getTagProps) => getChipsFromAutocomplete({
    chipSize: _dense ? 'small' : 'medium',
    getTagProps,
    isReadOnly: _readOnly,
    values
  });
  const handleTagsRender = () => {
    if (!_multiple) return;
    return renderTags || handleRenderChips;
  };
  const renderErrorOrWarningIcon = () => {
    if (!_error && !_warning) return;
    const iconType = _error ? 'error' : 'warning';
    return jsx(DotIcon, {
      className: `${iconType}-icon`,
      "data-testid": dataTestId && `${dataTestId}-${iconType}-icon`,
      iconId: `${iconType}-solid`
    }, void 0);
  };
  const renderEndAdornment = nativeEndAdornment => {
    const getInputAdornment = () => {
      const icon = renderErrorOrWarningIcon();
      if (!icon) return;
      return endAdornmentTooltip ? jsx(DotTooltip, Object.assign({
        title: endAdornmentTooltip
      }, {
        children: icon
      }), void 0) : icon;
    };
    return jsxs(Fragment$1, {
      children: [loading && jsx(DotProgress, {
        color: "inherit",
        size: 20
      }, void 0), getInputAdornment(), nativeEndAdornment]
    }, void 0);
  };
  return jsx(StyledAutocomplete, {
    PopperComponent: DotPopper,
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses,
      inputRoot: inputRootClasses
    },
    "data-testid": dataTestId,
    defaultValue: defaultValue,
    disabled: _disabled,
    filterSelectedOptions: _filterSelectedOptions,
    freeSolo: _freesolo,
    getOptionLabel: option => parseAutoCompleteValue(option),
    groupBy: _group ? option => option.group : undefined,
    ListboxComponent: ListboxComponent,
    loading: loading,
    multiple: _multiple,
    onBlur: handleBlur,
    onChange: (event, val, reason) => {
      if (_readOnly) return;
      valuesChanged({
        event,
        val,
        reason
      });
      setIsOpened(false);
    },
    onClose: handleClose,
    onHighlightChange: (_event, v) => highlightedOption = v,
    onInputChange: handleInputChange,
    onKeyDown: handleKeyDown,
    // We want to close the popper each time focus is shifted from the autocomplete
    onOpen: handleOpen,
    open: !_readOnly && (open || isOpened),
    options: sortOptions(),
    renderInput: params => {
      // InputBaseComponentProps is used here because that is the base
      // type of 'inputProps' of 'StyledTextField' component. TS treats
      // 'inputProps' as 'object' type and will complain when accessing
      // className without casting to proper type
      const inputProps = params.inputProps;
      return (
        // We are not using DotInputText here because the {...params} spread
        // passed to renderInput includes inputProps and InputProps properties
        // that must be passed to TextField in order for Autocomplete to work
        // correctly. We decided that at this time exposing those props in
        // DotInputText would not be a worthwhile tradeoff. Instead we are
        // using the StyledTextField used by DotInputText so that we will
        // at least pick up any styling that is used there. Should additional
        // functionality be added to DotInputText we will have to make a
        // decision about if/how to expose it here.
        jsxs(Fragment$1, {
          children: [persistentLabel && jsx(DotInputLabel, Object.assign({
            "data-testid": dataTestId && `${dataTestId}-persistent-label`,
            id: inputId
          }, {
            disabled: _disabled,
            error: _error,
            label,
            required: _required
          }), void 0), jsx(StyledTextField, Object.assign({}, params, {
            autoFocus: autoFocus,
            classes: {
              root: textFieldRootClasses
            },
            error: _error,
            focused: _readOnly ? false : undefined,
            helperText: helperText,
            inputProps: Object.assign(Object.assign({}, inputProps), {
              id: inputId,
              className: useStylesWithRootClass(inputProps.className, 'dot-input'),
              readOnly: _readOnly
            }),
            InputProps: Object.assign(Object.assign({}, params.InputProps), {
              endAdornment: !_readOnly ? renderEndAdornment(params.InputProps.endAdornment) : undefined
            }),
            inputRef: textFieldRef,
            label: persistentLabel ? null : label,
            name: label,
            onKeyDown: event => {
              var _a;
              // Intercept 'tab' key press while action item element exists
              if (event.key === 'Tab' && actionItemRef.current) {
                event.preventDefault();
                (_a = actionItemRef === null || actionItemRef === void 0 ? void 0 : actionItemRef.current) === null || _a === void 0 ? void 0 : _a.focus();
              }
            },
            placeholder: showPlaceholder ? placeholder : undefined,
            required: _required,
            size: _size,
            variant: "outlined"
          }), void 0)]
        }, void 0)
      );
    },
    renderOption: renderOption,
    renderTags: handleTagsRender(),
    size: _size,
    value: value
  }, void 0);
};

const rootClassName$D = 'dot-avatar-group';
const StyledAvatarGroup = styled(AvatarGroup).withConfig({
  displayName: "AvatarGroupstyles__StyledAvatarGroup",
  componentId: "sc-25by6z-0"
})(["", ""], () => css(["&.", "{justify-content:flex-end;.MuiAvatar-root{border:none;}}}"], rootClassName$D));

const DotAvatarGroup = ({
  ariaLabel,
  avatars,
  className,
  'data-testid': dataTestId,
  max: _max = 3,
  spacing: _spacing = 'medium'
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$D, className);
  return jsx(StyledAvatarGroup, Object.assign({
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId,
    max: _max,
    spacing: _spacing
  }, {
    children: avatars.map((avatar, index) => /*#__PURE__*/createElement(DotAvatar, Object.assign({}, avatar, {
      key: index
    })))
  }), void 0);
};

const rootClassName$C = 'dot-breadcrumbs';
const breadcrumbsWrapperClass = 'dot-breadcrumbs-wrapper';
const StyledBreadcrumbsWrapper = styled.div.withConfig({
  displayName: "Breadcrumbsstyles__StyledBreadcrumbsWrapper",
  componentId: "sc-7cg374-0"
})(["", ""], ({
  theme
}) => css(["&.", "{overflow:hidden;.dot-breadcrumbs-menu{.MuiMenuItem-root{padding:0;}a.breadcrumb{width:100%;padding:", ";}}}"], rootClassName$C, theme.spacing(0.5, 2)));
const StyledBreadcrumbs = styled(Breadcrumbs).withConfig({
  displayName: "Breadcrumbsstyles__StyledBreadcrumbs",
  componentId: "sc-7cg374-1"
})(["", ""], ({
  theme
}) => css(["&.", "{margin-bottom:0;.MuiBreadcrumbs-ol{flex-wrap:nowrap;}.MuiBreadcrumbs-li,.separator{color:", ";margin:0;white-space:nowrap;}.separator{font-size:12px;width:20px;height:20px;padding:0;}.MuiBreadcrumbs-separator{margin:0;}.MuiLink-underlineHover{cursor:pointer;}.MuiBreadcrumbs-li:last-child{overflow:hidden;text-overflow:ellipsis;}.breadcrumb{padding:", ";}.current-page{color:", ";cursor:default;}}"], rootClassName$C, theme.palette.grey[300], theme.spacing(0.5, 2), theme.palette.grey[700]));

const compareWidth = (parentEl, childEl) => {
  return parentEl.getBoundingClientRect().width < childEl.getBoundingClientRect().width;
};

const getItemsAfterCollapse = (adjustMaxItems, visibleItemsNumber, maxItems) => {
  // Check if maximum number of items is defined via prop
  if (maxItems) {
    return adjustMaxItems ? 1 : 2;
  }
  if (visibleItemsNumber > 1) return visibleItemsNumber - 1;
  if (visibleItemsNumber === 1) return visibleItemsNumber;
  return undefined;
};
const getMaxItems = (adjustMaxItems, visibleItemsNumber, maxItems) => {
  // Check if maximum number of items is defined via prop
  if (maxItems) {
    return adjustMaxItems ? 2 : maxItems;
  }
  return visibleItemsNumber > 1 ? visibleItemsNumber : undefined;
};
const getWidthFromRef = ref => {
  var _a;
  return (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width;
};
const checkIfFirstItemAfterCollapse = (currentIndex, items, itemsAfterCollapse) => currentIndex === items.length - itemsAfterCollapse;
const getExpandElement = breadcrumbElement => {
  const elements = breadcrumbElement.getElementsByClassName('MuiBreadcrumbs-ol');
  if (!elements || elements.length !== 1) return null;
  return elements[0].getElementsByClassName('MuiButtonBase-root')[0];
};
const getInitialMaxVisibleItems = (items, maxItems) => maxItems || items && Array.isArray(items) && items.length || 0;
const getMenuItems = (items, itemsAfterCollapse) => {
  if (!items || !items.length || !isFinite(itemsAfterCollapse) || itemsAfterCollapse < 1 || itemsAfterCollapse >= items.length - 1) return [];
  const sliceEnd = items.length - itemsAfterCollapse;
  const menuItems = items.slice(1, sliceEnd);
  if (!menuItems.length) return [];
  return menuItems.map((item, index) => {
    const itemChildren = jsx(DotLink, Object.assign({
      ariaLabel: item.ariaLabel,
      className: "breadcrumb",
      color: "inherit",
      href: item.href,
      onClick: item.onClick,
      tabIndex: 0,
      underline: "none"
    }, {
      children: item.text
    }), index);
    return {
      children: itemChildren,
      key: index.toString()
    };
  });
};
const addListenersToMenu = (expandElement, eventListener) => {
  expandElement.addEventListener('click', eventListener);
  expandElement.addEventListener('keydown', eventListener);
};
const removeListenersFromMenu = (expandElement, eventListener) => {
  expandElement.removeEventListener('click', eventListener);
  expandElement.removeEventListener('keydown', eventListener);
};
const getLastItemElement = ({
  ariaLabel,
  text
}, lastItemRef, index) => {
  return jsx("span", Object.assign({
    "aria-label": ariaLabel,
    className: "breadcrumb current-page",
    ref: lastItemRef
  }, {
    children: text
  }), index);
};
const mapBreadcrumbItems = (items, refs, {
  isLastItemFullyVisible,
  itemsAfterCollapse
}) => {
  const {
    firstItemRef,
    lastItemRef
  } = refs;
  return items === null || items === void 0 ? void 0 : items.map((item, index) => {
    const {
      ariaLabel,
      characterLimit,
      href,
      onClick,
      text,
      underline
    } = item;
    let truncatedText = '';
    if (text.length > characterLimit) {
      truncatedText = text.slice(0, characterLimit) + '...';
    }
    // Check if last element
    if (index === items.length - 1) {
      // Add tooltip if item is not fully visible
      return isLastItemFullyVisible ? getLastItemElement(item, lastItemRef, index) : jsx(DotTooltip, Object.assign({
        title: text,
        placement: "bottom-start"
      }, {
        children: getLastItemElement(item, lastItemRef)
      }), index);
    } else {
      const isFirstItemAfterCollapse = checkIfFirstItemAfterCollapse(index, items, itemsAfterCollapse);
      return jsx("div", Object.assign({
        ref: isFirstItemAfterCollapse ? firstItemRef : undefined
      }, {
        children: jsx(DotTooltip, Object.assign({
          title: truncatedText && text
        }, {
          children: jsx(DotLink, Object.assign({
            ariaLabel: ariaLabel,
            className: "breadcrumb",
            color: "inherit",
            href: href,
            onClick: onClick,
            tabIndex: 0,
            underline: underline
          }, {
            children: truncatedText ? truncatedText : text
          }), void 0)
        }), void 0)
      }), index);
    }
  });
};
const checkIfLastItemFullyVisible = (breadcrumbRef, lastItemRef) => {
  if (!(breadcrumbRef === null || breadcrumbRef === void 0 ? void 0 : breadcrumbRef.current) || !lastItemRef.current) return false;
  const availableSpace = (breadcrumbRef === null || breadcrumbRef === void 0 ? void 0 : breadcrumbRef.current.getBoundingClientRect().right) - lastItemRef.current.getBoundingClientRect().left;
  const lastItemWidth = getWidthFromRef(lastItemRef);
  return lastItemWidth <= availableSpace;
};

const MIN_AVAILABLE_SPACE = 60;
const ITEMS_SEPARATOR_SPACE = 20;
const useBreadcrumbsResizer = (breadcrumbsRightCoord, breadcrumbItemsProps, refs) => {
  const {
    firstItemRef,
    lastItemRef
  } = refs;
  const {
    items,
    maxItems
  } = breadcrumbItemsProps;
  const isMountedRef = useRef(false);
  const initialMaxVisibleItems = {
    maxVisibleItems: getInitialMaxVisibleItems(items, maxItems),
    lastRemovedItemWidth: undefined
  };
  const [breadcrumbsSettings, setBreadcrumbsSettings] = useState(initialMaxVisibleItems);
  /* Adjust number of visible items after collapse */
  useEffect(() => {
    // Automatic resizing is performed only when 'maxItem' is NOT set
    if (maxItems !== undefined || !(lastItemRef === null || lastItemRef === void 0 ? void 0 : lastItemRef.current) || !breadcrumbsRightCoord) return;
    // Get width of breadcrumb's last item
    const lastItemWidth = getWidthFromRef(lastItemRef);
    // Get width of breadcrumb's first item after collapse
    // Sometimes first item can also be last item
    const firstItemWidth = getWidthFromRef(firstItemRef) || lastItemWidth;
    // Get left coordinate of the last item
    const lastItemLeftCoord = lastItemRef.current.getBoundingClientRect().left;
    const {
      lastRemovedItemWidth,
      maxVisibleItems
    } = breadcrumbsSettings;
    const availableSpace = breadcrumbsRightCoord - lastItemLeftCoord;
    const hasHiddenItems = maxVisibleItems < items.length;
    const isLastRemovedItemSuitable = lastRemovedItemWidth !== undefined ? availableSpace - lastRemovedItemWidth > MIN_AVAILABLE_SPACE : false;
    if (availableSpace < MIN_AVAILABLE_SPACE && maxVisibleItems > 2) {
      setBreadcrumbsSettings(prevValue => ({
        maxVisibleItems: prevValue.maxVisibleItems - 1,
        lastRemovedItemWidth: firstItemWidth + ITEMS_SEPARATOR_SPACE
      }));
    } else if (hasHiddenItems && (lastRemovedItemWidth === undefined || isLastRemovedItemSuitable)) {
      setBreadcrumbsSettings(prevValue => ({
        maxVisibleItems: prevValue.maxVisibleItems + 1,
        lastRemovedItemWidth: undefined
      }));
    }
  }, [maxItems, breadcrumbsRightCoord, lastItemRef === null || lastItemRef === void 0 ? void 0 : lastItemRef.current, firstItemRef === null || firstItemRef === void 0 ? void 0 : firstItemRef.current, breadcrumbsSettings]);
  /* Set new initial state after array of items has been changed  */
  useEffect(() => {
    // Run this effect only when 'items' array change
    // Ignore it on initial render
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
    // Set new state only if object values are different
    setBreadcrumbsSettings(initialMaxVisibleItems);
  }, [items]);
  return [breadcrumbsSettings];
};

const useBreadcrumbsObserver = (items, maxItems) => {
  const breadcrumbRef = useRef();
  const firstItemRef = useRef();
  const lastItemRef = useRef();
  const [breadcrumbsRightCoord, setBreadcrumbsRightCoord] = useState(null);
  const [breadcrumbsSettings] = useBreadcrumbsResizer(breadcrumbsRightCoord, {
    items,
    maxItems
  }, {
    firstItemRef,
    lastItemRef
  });
  /* Observe breadcrumbs width change and store it in state */
  useEffect(() => {
    // Automatic resizing is performed only when 'maxItem' is NOT set
    if (maxItems !== undefined) return;
    const breadcrumbsObserver = new ResizeObserver(entries => {
      setBreadcrumbsRightCoord(entries[0].target.getBoundingClientRect().right);
    });
    breadcrumbsObserver.observe(breadcrumbRef.current);
    return () => {
      // Cleanup to avoid memory leaks
      breadcrumbRef.current && breadcrumbsObserver.unobserve(breadcrumbRef.current);
      setBreadcrumbsRightCoord(null);
    };
  }, [maxItems, breadcrumbRef, setBreadcrumbsRightCoord]);
  return [{
    breadcrumbRef,
    firstItemRef,
    lastItemRef
  }, breadcrumbsSettings.maxVisibleItems];
};

const DotBreadcrumbs = ({
  className,
  'data-testid': dataTestId,
  expansionMenu: _expansionMenu = false,
  items,
  maxItems
}) => {
  const wrapperRootClasses = useStylesWithRootClass(breadcrumbsWrapperClass, className);
  const wrapperRef = useRef();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [adjustMaxItems, setAdjustMaxItems] = useState(false);
  const [{
    breadcrumbRef,
    firstItemRef,
    lastItemRef
  }, maxVisibleItems] = useBreadcrumbsObserver(items, maxItems);
  const isLastItemFullyVisible = checkIfLastItemFullyVisible(breadcrumbRef, lastItemRef);
  const itemsAfterCollapse = getItemsAfterCollapse(adjustMaxItems, maxVisibleItems, maxItems);
  const menuItems = (items === null || items === void 0 ? void 0 : items.length) > maxVisibleItems ? getMenuItems(items, itemsAfterCollapse) : [];
  const breadcrumbItemRefs = {
    firstItemRef,
    lastItemRef
  };
  const clickListener = event => {
    if (event instanceof KeyboardEvent && event.key !== 'Enter') return;
    event.stopPropagation();
    setMenuOpen(currentMenuOpen => {
      return !currentMenuOpen;
    });
  };
  const onMenuLeave = _event => {
    setMenuOpen(false);
  };
  /* Build and connect expansion menu if 'expansionMenu' is set to true.
    In order for this to be functioning properly we need to set 'items' in
    the dependencies list as it will re-trigger hook if items array change.
   */
  useEffect(() => {
    if (!_expansionMenu || !breadcrumbRef || !breadcrumbRef.current) return;
    const expandElement = getExpandElement(breadcrumbRef.current);
    if (expandElement) {
      setAnchorEl(expandElement);
      addListenersToMenu(expandElement, clickListener);
      return () => removeListenersFromMenu(expandElement, clickListener);
    }
  }, [_expansionMenu, maxVisibleItems, adjustMaxItems, items]);
  useEffect(() => {
    if (maxItems && (breadcrumbRef === null || breadcrumbRef === void 0 ? void 0 : breadcrumbRef.current) && (wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current)) {
      setAdjustMaxItems(compareWidth(wrapperRef.current, breadcrumbRef.current));
    }
  }, [maxItems, breadcrumbRef === null || breadcrumbRef === void 0 ? void 0 : breadcrumbRef.current, wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current]);
  return jsxs(StyledBreadcrumbsWrapper, Object.assign({
    className: wrapperRootClasses,
    "data-testid": dataTestId && `${dataTestId}-wrapper`,
    ref: wrapperRef
  }, {
    children: [jsx(StyledBreadcrumbs, Object.assign({
      "aria-label": "breadcrumb",
      classes: {
        root: rootClassName$C,
        ol: 'dot-ol',
        li: 'dot-li'
      },
      "data-testid": dataTestId,
      itemsAfterCollapse: itemsAfterCollapse,
      maxItems: getMaxItems(adjustMaxItems, maxVisibleItems, maxItems),
      ref: breadcrumbRef,
      separator: jsx(DotIcon, {
        className: "separator",
        iconId: "chevron-right"
      }, void 0)
    }, {
      children: mapBreadcrumbItems(items, breadcrumbItemRefs, {
        isLastItemFullyVisible,
        itemsAfterCollapse
      })
    }), void 0), jsx(DotMenu, {
      anchorEl: anchorEl,
      className: "dot-breadcrumbs-menu",
      disablePortal: true,
      id: "expand-menu",
      menuItems: menuItems,
      menuPlacement: "bottom-start",
      onLeave: onMenuLeave,
      open: menuOpen
    }, void 0)]
  }), void 0);
};

const rootClassName$B = 'dot-button-toggle';
const StyledToggleButtonGroup = styled(ToggleButtonGroup).withConfig({
  displayName: "ButtonTogglestyles__StyledToggleButtonGroup",
  componentId: "sc-1oh4ljv-0"
})(["", ""], ({
  theme
}) => css(["&.", "{button:not(.MuiToggleButton-sizeLarge):not(.MuiToggleButton-sizeSmall){height:", ";.dot-icon{width:", ";}}.dot-icon{color:", ";+ p{margin-left:", ";}i{height:auto;}}.dot-typography{margin-bottom:0;}.MuiToggleButton-label{color:", ";p{margin-bottom:0;}}.MuiToggleButtonGroup-groupedHorizontal{border:1px solid ", ";border-radius:0;}.dot-tooltip{&:first-child .MuiToggleButtonGroup-groupedHorizontal{border-top-left-radius:4px;border-bottom-left-radius:4px;margin-left:0;}&:last-child .MuiToggleButtonGroup-groupedHorizontal{border-top-right-radius:4px;border-bottom-right-radius:4px;margin-right:0;}&:not(:first-child) .MuiToggleButtonGroup-groupedHorizontal{margin-left:-1px;}}& > .MuiToggleButtonGroup-groupedHorizontal{:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px;margin-left:0;}:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;margin-right:0;}}}.MuiButtonBase-root{&.Mui-disabled p,&.Mui-disabled .dot-icon{color:", ";}&.Mui-selected{&.MuiToggleButton-standard{background:", ";}.dot-typography{color:inherit;}}}"], rootClassName$B, theme.spacing(5), theme.spacing(2), theme.palette.layer.n700, theme.spacing(1), theme.palette.layer.n700, theme.palette.layer.n300, theme.palette.grey[200], selectedGray));

const DotButtonToggle = ({
  ariaLabel,
  buttonOptions,
  className,
  color,
  'data-testid': dataTestId = 'dot-toggle',
  disableFocusRipple: _disableFocusRipple = false,
  disableRipple: _disableRipple = false,
  exclusive: _exclusive = false,
  onChange,
  orientation: _orientation = 'horizontal',
  size: _size = 'medium',
  value
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$B, className);
  const renderToggleButton = ({
    ariaLabel: optionAriaLabel,
    className: optionClassName,
    disabled: optionDisabled,
    iconId: optionIconId,
    text: optionText,
    tooltip: optionTooltip,
    value: optionValue
  }, key) => {
    const commonProps = {
      'aria-label': optionAriaLabel,
      className: optionClassName,
      disableFocusRipple: _disableFocusRipple,
      disableRipple: _disableRipple,
      disabled: optionDisabled,
      key,
      value: optionValue
    };
    const children = jsxs(Fragment$1, {
      children: [optionIconId && jsx(DotIcon, {
        className: "dot-toggle-icon",
        iconId: optionIconId
      }, void 0), optionText && jsx(DotTypography, {
        children: optionText
      }, void 0)]
    }, void 0);
    return optionTooltip ? jsx(TooltipToggleButton, Object.assign({}, commonProps, {
      CustomTooltipProps: {
        title: optionTooltip
      },
      value: optionValue
    }, {
      children: children
    }), void 0) : jsx(ToggleButton, Object.assign({}, commonProps, {
      children: children
    }), void 0);
  };
  return jsx(StyledToggleButtonGroup, Object.assign({
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    color: color,
    "data-testid": dataTestId,
    exclusive: _exclusive,
    onChange: onChange,
    orientation: _orientation,
    size: _size,
    value: value
  }, {
    children: buttonOptions.map((option, key) => {
      return renderToggleButton(option, key);
    })
  }), void 0);
};
/** Catch props and forward to ToggleButton */
const TooltipToggleButton = /*#__PURE__*/forwardRef((_a, ref) => {
  var {
      CustomTooltipProps
    } = _a,
    props = __rest(_a, ["CustomTooltipProps"]);
  return jsx(DotTooltip, Object.assign({}, CustomTooltipProps, {
    children: jsx(ToggleButton, Object.assign({
      ref: ref
    }, props), void 0)
  }), void 0);
});

const DotCard = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId
}) => {
  const rootClasses = useStylesWithRootClass('dot-card', className);
  return jsx(Card, Object.assign({
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId,
    variant: "outlined"
  }, {
    children: children
  }), void 0);
};

const DotCardContent = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId
}) => {
  const rootClasses = useStylesWithRootClass('dot-card-content', className);
  return jsx(CardContent, Object.assign({
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId
  }, {
    children: children
  }), void 0);
};

const rootClassName$A = 'dot-card-footer';
const StyledDiv = styled.div.withConfig({
  displayName: "CardFooterstyles__StyledDiv",
  componentId: "koblh6-0"
})(["", ""], ({
  theme
}) => css(["&.", "{padding:", ";}"], rootClassName$A, theme.spacing(2)));

const DotCardFooter = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$A, className);
  return jsx(StyledDiv, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId
  }, {
    children: children
  }), void 0);
};

const DotCardHeader = ({
  action,
  ariaLabel,
  avatar,
  className,
  'data-testid': dataTestId,
  subheader,
  subheaderSize: _subheaderSize = 'large',
  title,
  titleSize: _titleSize = 'large'
}) => {
  const rootClasses = useStylesWithRootClass('dot-card-header', className);
  const titleVariant = _titleSize === 'small' ? 'h4' : _titleSize === 'medium' ? 'h3' : 'h2';
  const titleTypographyProps = {
    variant: titleVariant
  };
  const subheaderVariant = _subheaderSize === 'small' ? 'body2' : 'body1';
  const subheaderTypographyProps = {
    variant: subheaderVariant
  };
  return jsx(CardHeader, {
    action: action,
    "aria-label": ariaLabel,
    avatar: avatar,
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId,
    subheader: subheader,
    subheaderTypographyProps: subheaderTypographyProps,
    title: title,
    titleTypographyProps: titleTypographyProps
  }, void 0);
};

const rootClassName$z = 'dot-form-control-label';
const StyledFormControlLabel = styled(FormControlLabel).withConfig({
  displayName: "FormControlLabelstyles__StyledFormControlLabel",
  componentId: "sc-1vt0om4-0"
})(["&.", "{.MuiFormControlLabel-label{margin-bottom:0;padding:0 0 0 4px;}&.MuiFormControlLabel-labelPlacementBottom{.MuiFormControlLabel-label{padding:4px 0 0 0;}}&.MuiFormControlLabel-labelPlacementTop{.MuiFormControlLabel-label{padding:0 0 4px 0;}}&.MuiFormControlLabel-labelPlacementStart{.MuiFormControlLabel-label{padding:0 4px 0;}}}"], rootClassName$z);

const rootClassName$y = 'dot-checkbox';
const StyledCheckbox = styled(Checkbox).withConfig({
  displayName: "Checkboxstyles__StyledCheckbox",
  componentId: "sc-1ubsn6i-0"
})(["", ""], ({
  theme
}) => css(["&.", "{padding:", ";&.MuiCheckbox-indeterminate{color:rgba(0,0,0,0.6);}}"], rootClassName$y, theme.spacing(1)));

function DotCheckbox({
  ariaLabel,
  ariaLabelledby,
  checked,
  className,
  'data-testid': dataTestId,
  disabled,
  disableRipple,
  id,
  indeterminate,
  inputRef,
  label,
  labelPlacement,
  name,
  onChange,
  required,
  size = 'medium',
  value
}) {
  const rootClasses = useStylesWithRootClass(rootClassName$z, className);
  const handleChange = event => {
    onChange && onChange(event, event.target.value);
  };
  const checkboxControl = jsx(StyledCheckbox, {
    checked: checked,
    classes: {
      root: rootClassName$y
    },
    color: "primary",
    "data-testid": dataTestId,
    disableRipple: disableRipple,
    disabled: disabled,
    id: id,
    indeterminate: indeterminate,
    inputProps: {
      'aria-label': ariaLabel || label,
      'aria-labelledby': ariaLabelledby
    },
    inputRef: inputRef,
    name: name,
    onChange: handleChange,
    required: required,
    size: size,
    value: value
  }, void 0);
  return jsx(StyledFormControlLabel, {
    className: rootClasses,
    control: checkboxControl,
    label: label,
    labelPlacement: labelPlacement
  }, void 0);
}

const rootClassName$x = 'dot-form-group';
const groupLabelClassName = 'dot-form-group-label';
const startAdornmentClassName = 'dot-start-adornment';
const endAdornmentClassName = 'dot-end-adornment';
const placementClassName = 'dot-';
const StyledFormControl = styled(FormControl).withConfig({
  displayName: "FormControlstyles__StyledFormControl",
  componentId: "sc-532kip-0"
})(["&.", "{.MuiFormLabel-root{width:100%;line-height:24px;margin-bottom:4px;display:flex;align-items:center;.", "{padding-left:4px;}.", "{padding-right:4px;}}&.", "{.MuiFormHelperText-root,.MuiFormLabel-root{display:flex;flex-direction:row-reverse;}}&.", "{.MuiFormHelperText-root,.MuiFormLabel-root{display:flex;justify-content:center;}}}"], rootClassName$x, endAdornmentClassName, startAdornmentClassName, `${placementClassName}start`, `${placementClassName}bottom`);

const rootClassName$w = 'dot-checkbox-group';
const wrapperClassName$1 = 'dot-checkbox-group-wrapper';
const checkboxListClassName = 'dot-checkbox-list';
const checkboxListItemClassName = 'dot-checkbox-list-item';
const StyledCheckboxGroup = styled.div.withConfig({
  displayName: "CheckboxGroupstyles__StyledCheckboxGroup",
  componentId: "bhb21v-0"
})(["", ""], ({
  theme
}) => css(["{&.", "{.", "{width:100%;}.MuiFormLabel-root{display:inline;width:100%;}.MuiFormHelperText-root{font-family:", ";font-size:", "px;font-weight:", ";&:not(.Mui-error){color:", ";}}.", "{list-style:none;margin-top:0;padding-left:", ";.", "{margin:0;}}}"], wrapperClassName$1, rootClassName$w, theme.typography.body2.fontFamily, theme.typography.body2.fontSize, theme.typography.body2.fontWeight, theme.palette.grey[400], checkboxListClassName, theme.spacing(2.5), rootClassName$z));

const rootClassName$v = 'dot-form-group';
const StyledFormGroup = styled(FormGroup).withConfig({
  displayName: "FormGroupstyles__StyledFormGroup",
  componentId: "sc-1dlipcr-0"
})(["", ""], ({
  theme,
  row
}) => css(["&.", "{& > *{margin:", ";}}"], rootClassName$v, row ? `${theme.spacing(0.5)}` : 0));

function DotFormGroup({
  ariaLabel,
  className,
  children,
  'data-testid': dataTestId,
  row
}) {
  const rootClasses = useStylesWithRootClass(rootClassName$x, className);
  return jsx(StyledFormGroup, Object.assign({
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId,
    role: "group",
    row: row
  }, {
    children: children
  }), void 0);
}

// Have this outside of component to avoid having different
// reference for the array and thus generate infinite loop
// in use effect hook
const DEFAULT_VALUES = [];
function DotCheckboxGroup({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  defaultValues = DEFAULT_VALUES,
  disableGroup,
  endIcon,
  error,
  groupLabel,
  helperText,
  name,
  labelPlacement,
  onChange,
  options,
  showSelectAll = false,
  required = false,
  row = false,
  selectAllLabel = 'Select All',
  startIcon,
  size = 'medium'
}) {
  const placement = `${placementClassName}${labelPlacement}`;
  const rootClasses = useStylesWithRootClass(rootClassName$x, rootClassName$w, className, placement);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);
  const [allChecked, setAllChecked] = useState(false);
  /* This will ensure that state can be updated from the outside */
  useEffect(() => {
    // Change only if new value is passed in
    if (defaultValues !== DEFAULT_VALUES) {
      setSelectedOptions(defaultValues);
    }
  }, [defaultValues]);
  const handleChange = (event, data) => {
    const newOptions = event.target.checked ? [...selectedOptions, data] : selectedOptions.filter(option => option.value !== event.target.value);
    setSelectedOptions(newOptions);
    setAllChecked(newOptions.length === options.length);
    onChange && onChange(event, newOptions);
  };
  const handleSelectAll = event => {
    const _selectedOptions = event.target.checked ? options : [];
    setSelectedOptions(_selectedOptions);
    setAllChecked(event.target.checked);
    onChange && onChange(event, _selectedOptions);
  };
  const renderOptions = options ? options.map(({
    label,
    disabled,
    value
  }) => {
    return jsx(DotCheckbox, {
      checked: selectedOptions.some(option => option && option.value === value) || allChecked,
      className: checkboxListItemClassName,
      disabled: disabled || disableGroup,
      label: label,
      labelPlacement: labelPlacement,
      name: name,
      onChange: event => handleChange(event, {
        label,
        value
      }),
      size: size,
      value: value
    }, value);
  }) : null;
  return jsx(StyledCheckboxGroup, Object.assign({
    "aria-label": ariaLabel,
    className: wrapperClassName$1,
    "data-testid": dataTestId
  }, {
    children: jsxs(StyledFormControl, Object.assign({
      classes: {
        root: rootClasses
      },
      component: "fieldset",
      disabled: disableGroup,
      error: error,
      required: required
    }, {
      children: [groupLabel && jsxs(FormLabel, Object.assign({
        component: "legend"
      }, {
        children: [startIcon && jsx("span", Object.assign({
          className: startAdornmentClassName
        }, {
          children: startIcon
        }), void 0), jsxs("span", Object.assign({
          className: groupLabelClassName
        }, {
          children: [groupLabel, " "]
        }), void 0), endIcon && jsx("span", Object.assign({
          className: endAdornmentClassName
        }, {
          children: endIcon
        }), void 0)]
      }), void 0), showSelectAll && jsx(DotCheckbox, {
        checked: selectedOptions.length === options.length,
        indeterminate: selectedOptions.length > 0 && selectedOptions.length < options.length,
        label: selectAllLabel,
        name: name ? `${name}-select-all` : 'dot-select-all',
        onChange: handleSelectAll,
        size: size,
        value: "select-all"
      }, void 0), jsx(DotFormGroup, Object.assign({
        className: checkboxListClassName,
        row: row
      }, {
        children: renderOptions
      }), void 0), helperText && jsx(FormHelperText, {
        children: helperText
      }, void 0)]
    }), void 0)
  }), void 0);
}

const rootClassName$u = 'dot-dialog';
const StyledDialog = styled(Dialog).withConfig({
  displayName: "Dialogstyles__StyledDialog",
  componentId: "sc-1tkr4ex-0"
})(["", ""], ({
  theme
}) => css(["&.", "{.MuiDialog-paper{min-width:280px;max-height:80vh;max-width:80vw;}.MuiDialogTitle-root,.dot-dialog-title{align-items:center;display:flex;flex-wrap:nowrap;padding:", ";h2{flex-grow:1;}.dot-icon-button{margin-left:", ";}}.dot-dialog-content{padding:", ";overflow-y:auto;}.dot-dialog-actions{padding:", ";.cancel-button{color:inherit;}}}"], rootClassName$u, theme.spacing(1, 2), theme.spacing(1), theme.spacing(1, 2), theme.spacing(1)));

const DotDialog = ({
  ariaLabel,
  cancelButtonProps,
  cancelButtonVisible: _cancelButtonVisible = true,
  className,
  'data-testid': dataTestId,
  children,
  closeIconVisible,
  closeOnClickAway: _closeOnClickAway = true,
  hasPrimaryAction: _hasPrimaryAction = true,
  onCancel,
  onSubmit,
  open,
  submitButtonProps,
  title
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$u, className);
  const cancelClasses = useStylesWithRootClass(cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.className, 'cancel-button');
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  const handleCancel = event => {
    if (onCancel) {
      onCancel(event);
    }
    handleClose();
  };
  const handleClickAway = event => {
    if (_closeOnClickAway) {
      handleCancel(event);
    }
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSubmit = event => {
    if (onSubmit) {
      onSubmit(event);
    }
    handleClose();
  };
  return jsxs(StyledDialog, Object.assign({
    "aria-label": ariaLabel,
    "aria-labelledby": "MuiDialogTitle-root",
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId,
    onClose: handleClickAway,
    open: isOpen
  }, {
    children: [jsxs("div", Object.assign({
      className: "dot-dialog-title"
    }, {
      children: [renderNodeOrTypography(title, 'h2'), closeIconVisible && jsx(DotIconButton, {
        iconId: "close",
        onClick: handleCancel,
        size: "small"
      }, void 0)]
    }), void 0), jsx(DialogContent, Object.assign({
      classes: {
        root: `dot-dialog-content`
      }
    }, {
      children: renderNodeOrTypography(children)
    }), void 0), (_hasPrimaryAction || _cancelButtonVisible) && jsxs(DialogActions, Object.assign({
      classes: {
        root: `dot-dialog-actions`
      }
    }, {
      children: [_cancelButtonVisible && jsx(DotButton, Object.assign({
        autoFocus: cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.autoFocus,
        className: cancelClasses,
        "data-testid": cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps['data-testid'],
        disableRipple: cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.disableRipple,
        disabled: cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.disabled,
        endIcon: cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.endIcon,
        onClick: handleCancel,
        startIcon: cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.startIcon,
        tooltip: cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.tooltip,
        type: "text"
      }, {
        children: (cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.label) || 'Cancel'
      }), void 0), _hasPrimaryAction && jsx(DotButton, Object.assign({
        autoFocus: submitButtonProps === null || submitButtonProps === void 0 ? void 0 : submitButtonProps.autoFocus,
        className: submitButtonProps === null || submitButtonProps === void 0 ? void 0 : submitButtonProps.className,
        "data-testid": submitButtonProps === null || submitButtonProps === void 0 ? void 0 : submitButtonProps['data-testid'],
        disableRipple: submitButtonProps === null || submitButtonProps === void 0 ? void 0 : submitButtonProps.disableRipple,
        disabled: submitButtonProps === null || submitButtonProps === void 0 ? void 0 : submitButtonProps.disabled,
        endIcon: submitButtonProps === null || submitButtonProps === void 0 ? void 0 : submitButtonProps.endIcon,
        onClick: handleSubmit,
        startIcon: submitButtonProps === null || submitButtonProps === void 0 ? void 0 : submitButtonProps.startIcon,
        tooltip: submitButtonProps === null || submitButtonProps === void 0 ? void 0 : submitButtonProps.tooltip,
        type: (submitButtonProps === null || submitButtonProps === void 0 ? void 0 : submitButtonProps.type) || 'primary'
      }, {
        children: (submitButtonProps === null || submitButtonProps === void 0 ? void 0 : submitButtonProps.label) || 'OK'
      }), void 0)]
    }), void 0)]
  }), void 0);
};

const DotConfirmationDialog = ({
  ariaLabel,
  cancelButtonProps,
  className,
  'data-testid': dataTestId,
  message: _message = '',
  onCancel,
  onSubmit,
  submitButtonProps,
  open,
  title: _title = ''
}) => {
  const rootClasses = useStylesWithRootClass('dot-confirmation-dialog', className);
  if (_message === '' && _title === '') {
    _title = 'Please confirm';
  }
  return jsx(DotDialog, Object.assign({
    ariaLabel: ariaLabel,
    cancelButtonProps: cancelButtonProps,
    className: rootClasses,
    "data-testid": dataTestId,
    onCancel: onCancel,
    onSubmit: onSubmit,
    open: open,
    submitButtonProps: submitButtonProps,
    title: _title
  }, {
    children: _message
  }), void 0);
};

const rootClassName$t = 'dot-grid';
const frGetter = value => typeof value === 'number' ? `repeat(${value}, 1fr)` : value;
const breakpointsGetter$1 = (theme, columnsBreakpoints, columnGap, rowGap) => `${theme.breakpoints.up('xs')} {
    column-gap: ${`${columnGap.xs}px`};
    grid-template-columns: ${frGetter(columnsBreakpoints.xs)};
    row-gap: ${`${rowGap.xs}px`};
  }
  ${theme.breakpoints.up('sm')} {
    column-gap: ${`${columnGap.sm}px`};
    grid-template-columns: ${frGetter(columnsBreakpoints.sm)};
    row-gap: ${`${rowGap.sm}px`};
  }
  ${theme.breakpoints.up('md')} {
    column-gap: ${`${columnGap.md}px`};
    grid-template-columns: ${frGetter(columnsBreakpoints.md)};
    row-gap: ${`${rowGap.md}px`};
  }
  ${theme.breakpoints.up('lg')} {
    column-gap: ${`${columnGap.lg}px`};
    grid-template-columns: ${frGetter(columnsBreakpoints.lg)};
    row-gap: ${`${rowGap.lg}px`};
  }
  ${theme.breakpoints.up('xl')} {
    column-gap: ${`${columnGap.xl}px`};
    grid-template-columns: ${frGetter(columnsBreakpoints.lg)};
    row-gap: ${`${rowGap.xl}px`};
  }`;
const defaultGutter = {
  xs: 16,
  sm: 16,
  md: 24,
  lg: 24,
  xl: 24
};
const defaultColumns = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 12,
  xl: 12
};
const Grid = ({
  className,
  children
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$t, className);
  return jsx("div", Object.assign({
    className: rootClasses
  }, {
    children: children
  }), void 0);
};
const StyledGrid = styled(Grid).withConfig({
  displayName: "CssGrid__StyledGrid",
  componentId: "hupbhx-0"
})(["", ""], ({
  columns,
  columnsBreakpoints: _columnsBreakpoints = Object.assign({}, defaultColumns),
  columnGap: _columnGap = Object.assign({}, defaultGutter),
  gap,
  gridTemplateAreas,
  height,
  rowGap: _rowGap = Object.assign({}, defaultGutter),
  rows,
  theme,
  width
}) => css(["&.", "{display:grid;grid-template-rows:", ";", " ", " ", " ", " ", ""], rootClassName$t, frGetter(rows), columns ? `${columns && `grid-template-columns: ${frGetter(columns)}`};` : breakpointsGetter$1(theme, _columnsBreakpoints, _columnGap, _rowGap), gridTemplateAreas && `grid-template-areas: ${gridTemplateAreas};`, gap && `grid-gap: ${gap};`, width && `width: ${width};`, height && `height: ${height};`));
const CssGrid = props => {
  return jsx(StyledGrid, Object.assign({}, props), void 0);
};

const breakpointsGetter = (value, theme, breakpoint) => {
  return `
  ${theme.breakpoints.up(breakpoint)} {
    ${`grid-column-start: ${value.start ? value.start : 1}`};
    grid-column-end: ${`span ${value.span ? value.span : defaultColumns[breakpoint]}`};
  }
  `;
};
const Cell = ({
  children,
  className
}) => {
  return jsx("div", Object.assign({
    className: className
  }, {
    children: children
  }), void 0);
};
const CssCell = styled(Cell).withConfig({
  displayName: "CssCell",
  componentId: "sc-1podmpa-0"
})(["", ""], ({
  alignItems: _alignItems = 'stretch',
  area,
  center: _center = true,
  gridColumn,
  height,
  justifyContent: _justifyContent = 'center',
  lg,
  middle: _middle = true,
  md,
  sm,
  start,
  theme,
  top,
  width,
  xl,
  xs
}) => css(["height:", ";min-width:0;box-sizing:border-box;", ";", ";", ";", ";grid-row-end:", ";", ";", ";", " ", " ", " ", " ", " ", " grid-column:", ";}"], height ? height : '100%', top && `grid-row-start: ${top}`, _center && `text-align: center`, !start && `grid-column-start: ${start}`, !width && `grid-column-end: span ${width}`, height && `span ${height}`, area && `grid-area: ${area}`, _middle && `
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: ${_justifyContent};
    align-items: ${_alignItems};
    justify-self: stretch;
  `, xs && breakpointsGetter(xs, theme, 'xs'), sm && breakpointsGetter(sm, theme, 'sm'), md && breakpointsGetter(md, theme, 'md'), lg && breakpointsGetter(lg, theme, 'lg'), lg && breakpointsGetter(lg, theme, 'lg'), xl && breakpointsGetter(lg, theme, 'xl'), gridColumn));

const gridClassName = 'debug-grid';
const gridClassContainer = 'debug-grid-container';
const cellClassName = 'debug-cell';
const StyledGridOverlay = styled(CssGrid).withConfig({
  displayName: "CssGridDebug__StyledGridOverlay",
  componentId: "sc-1agvp15-0"
})(["", ""], () => css(["&.", "{position:absolute;z-index:", ";width:100%;.", "{background:rgba(255,192,203,0.4);height:100vh;}}"], gridClassName, levelBottom, cellClassName));
const StyledInfo = styled.div.withConfig({
  displayName: "CssGridDebug__StyledInfo",
  componentId: "sc-1agvp15-1"
})(["&.breakpoint-info{border-radius:4px 0 0 4px;padding:8px;position:fixed;background:rgba(255,255,255,0.8);right:-1px;bottom:10px;box-shadow:2px 2px 2px #9c9c9c;font-family:sans-serif;font-size:11px;width:100px;border:1px solid red;ul{list-style:none;padding-left:4px;margin:0;}.list{padding-top:4px;}.header{font-weight:bold;}.message{padding-top:8px;color:red;}}"]);
const StyledDivContainer = styled.div.withConfig({
  displayName: "CssGridDebug__StyledDivContainer",
  componentId: "sc-1agvp15-2"
})(["&.", "{position:relative;}"], gridClassContainer);
const CssGridDebug = ({
  showInfo: _showInfo = false
}) => {
  const theme = useTheme$1();
  const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const [width, setWidth] = useState(getWidth());
  const [columns, setColumns] = useState(12);
  const resizeListener = () => {
    getColumns();
  };
  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    getColumns();
    console.warn(`You are using the "CssGridDebug" component, please remove before going to production.`);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  const getColumns = () => {
    setWidth(getWidth());
    if (getWidth() > theme.breakpoints.values.xs) {
      setColumns(defaultColumns.sm);
    }
    if (getWidth() > theme.breakpoints.values.md) {
      setColumns(defaultColumns.md);
    }
    if (getWidth() > theme.breakpoints.values.lg) {
      setColumns(defaultColumns.lg);
    }
    if (getWidth() > theme.breakpoints.values.xl) {
      setColumns(defaultColumns.xl);
    }
    if (getWidth() < theme.breakpoints.values.sm) {
      setColumns(defaultColumns.xs);
    }
  };
  return jsxs(StyledDivContainer, Object.assign({
    className: gridClassContainer
  }, {
    children: [_showInfo && jsxs(StyledInfo, Object.assign({
      className: "breakpoint-info"
    }, {
      children: [jsx("div", Object.assign({
        className: "close-container"
      }, {
        children: jsx("div", Object.assign({
          className: "header"
        }, {
          children: "Debug info"
        }), void 0)
      }), void 0), jsxs("div", {
        children: [jsxs("ul", {
          children: [jsxs("li", {
            children: ["Columns: ", columns]
          }, void 0), jsxs("li", {
            children: ["Width: ", width]
          }, void 0)]
        }, void 0), jsx("div", Object.assign({
          className: "header list"
        }, {
          children: "Breakpoints"
        }), void 0), jsx("ul", Object.assign({
          className: "breakpoints"
        }, {
          children: Object.keys(theme.breakpoints.values).map(value => {
            return jsxs("li", {
              children: [value, ": ", theme.breakpoints.values[value], ", col:", defaultColumns[value]]
            }, value);
          })
        }), void 0)]
      }, void 0), jsx("div", Object.assign({
        className: "message"
      }, {
        children: "NOT FOR PRODUCTION"
      }), void 0)]
    }), void 0), jsx(StyledGridOverlay, Object.assign({
      className: gridClassName,
      rows: "minmax(100vh, 100%)"
    }, {
      children: [...Array(columns)].map((item, i) => {
        return jsx(CssCell, {
          className: `${cellClassName}`,
          start: i + 1,
          width: 1
        }, i);
      })
    }), void 0)]
  }), void 0);
};

const rootClassName$s = 'dot-empty-state';
const StyledEmptyState = styled.div.withConfig({
  displayName: "EmptyStatestyles__StyledEmptyState",
  componentId: "sc-1sftmht-0"
})(["", ""], ({
  theme
}) => css(["&.dot-empty-state{margin:0 auto;max-width:600px;text-align:center;.empty-state-image{min-height:239px;margin-bottom:", ";}h2{margin-bottom:", ";}.dot-button{margin-top:", ";}}"], theme.spacing(5), theme.spacing(1), theme.spacing(4)));

const DotEmptyState = ({
  ariaLabel,
  buttonProps,
  className,
  'data-testid': dataTestId,
  imageAltText,
  imageSrc,
  subtitle,
  title
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$s, className);
  return jsxs(StyledEmptyState, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId
  }, {
    children: [imageSrc && jsx("img", {
      alt: imageAltText || title,
      className: "empty-state-image",
      src: imageSrc,
      title: imageAltText || title
    }, void 0), jsx(DotTypography, Object.assign({
      variant: "h2"
    }, {
      children: title
    }), void 0), subtitle && jsx(DotTypography, Object.assign({
      variant: "body1"
    }, {
      children: subtitle
    }), void 0), buttonProps && jsx(DotButton, Object.assign({}, buttonProps), void 0)]
  }), void 0);
};

const wrapperClassName = 'dot-radio-group-wrapper';
const groupClassName = 'dot-radio-group';
const StyledRadioGroupWrapper = styled.div.withConfig({
  displayName: "RadioGroupstyles__StyledRadioGroupWrapper",
  componentId: "sc-84g3mq-0"
})(["", ""], ({
  theme
}) => css(["{&.", "{.MuiFormControl-root{width:100%;}.MuiFormLabel-root{display:inline;width:100%;}}.MuiFormHelperText-root{font-family:", ";font-size:", "px;font-weight:", ";&:not(.Mui-error){color:", ";}}"], wrapperClassName, theme.typography.body2.fontFamily, theme.typography.body2.fontSize, theme.typography.body2.fontWeight, theme.palette.grey[400]));
const StyledRadioGroup = styled(RadioGroup).withConfig({
  displayName: "RadioGroupstyles__StyledRadioGroup",
  componentId: "sc-84g3mq-1"
})(["", ""], ({
  theme
}) => css(["{&.", "{padding-left:", ";.", "{margin:0;}}"], groupClassName, theme.spacing(2.5), rootClassName$z));

const rootClassName$r = 'dot-form';
const StyledFormContainer = styled.div.withConfig({
  displayName: "Formstyles__StyledFormContainer",
  componentId: "bbovqo-0"
})(["", ""], ({
  theme
}) => css(["&.", "{margin:", ";.", ",.", ",.", ",.", "{margin:", ";}.", ",.", "{.", "{margin:0;}}}"], rootClassName$r, theme.spacing(3, 0), rootClassName$x, rootClassName$z, rootClassName$10, rootSelectClassName, theme.spacing(1, 0), rootClassName$w, groupClassName, rootClassName$z));

const DotForm = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  onSubmit
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$r, className);
  return jsx("form", Object.assign({
    "aria-label": ariaLabel,
    "data-testid": dataTestId,
    noValidate: true,
    onSubmit: onSubmit
  }, {
    children: jsx(StyledFormContainer, Object.assign({
      className: rootClasses
    }, {
      children: children
    }), void 0)
  }), void 0);
};

const rootClassName$q = 'dot-dynamic-form';
const StyledDynamicForm = styled(DotForm).withConfig({
  displayName: "DynamicFormstyles__StyledDynamicForm",
  componentId: "sc-1lnljcn-0"
})(["", ""], () => css(["&.", "{}"], rootClassName$q));

const DATA_CONTROLS = ['dot-autocomplete', 'dot-checkbox', 'dot-checkbox-group', 'dot-input-select', 'dot-input-text', 'dot-radio-group', 'dot-switch'];
/* Array of control types for which we don't have error state so validation doesn't make any sense */
const DATA_CONTROLS_WITHOUT_VALIDATION = ['dot-checkbox', 'dot-switch'];
const INITIAL_STATE_ITEM = {
  errorMessage: null,
  isTouched: false,
  isValid: false,
  value: null
};

const getControlValue = (controlName, data) => {
  return controlName in data && data[controlName].value;
};
const getOutputFormData = formState => {
  const outputData = {};
  for (const dataKey in formState.data) {
    outputData[dataKey] = formState.data[dataKey].value;
  }
  return outputData;
};
const checkIfHiddenControl = (hidden, formValues) => {
  if (!hidden) return false;
  if (typeof hidden === 'boolean') return hidden;
  try {
    return hidden(formValues);
  } catch (e) {
    return false;
  }
};
const checkIfDisabledControl = (disabled, formValues, isFormValid) => {
  if (!disabled) return false;
  if (typeof disabled === 'boolean') return disabled;
  try {
    return disabled(formValues, isFormValid);
  } catch (e) {
    return false;
  }
};
const getInitialValueFromControl = ({
  controlType,
  initialValue
}) => {
  // Skip non-data controls (ignore buttons and other non-relevant elements)
  // or hidden elements
  if (!DATA_CONTROLS.includes(controlType)) return;
  return initialValue ? initialValue : undefined;
};
const getFormDataFromInitialValues = config => {
  const formValues = {};
  config.controls.forEach(control => {
    const {
      controlName,
      formSection,
      controlType
    } = control;
    // Check if there are section controls and grab initial values from those
    if (formSection && formSection.sectionControls) {
      formSection.sectionControls.forEach(formSectionControl => {
        const {
          controlName: sectionControlName,
          controlType: sectionControlType
        } = formSectionControl;
        if (!DATA_CONTROLS.includes(sectionControlType)) return;
        const sectionControlInitialValue = getInitialValueFromControl(formSectionControl);
        formValues[sectionControlName] = sectionControlInitialValue ? sectionControlInitialValue : undefined;
      });
    }
    if (!DATA_CONTROLS.includes(controlType)) return;
    const initialValue = getInitialValueFromControl(control);
    formValues[controlName] = initialValue ? initialValue : undefined;
  });
  return formValues;
};

const checkIfValidationApplies = (validationField, formValues) => {
  const condition = validationField.condition;
  if (!condition) return true;
  try {
    return condition(formValues);
  } catch (e) {
    return false;
  }
};
const checkIfEmptyValue$1 = value => value === '' || value === null || value === undefined;
const checkIfString = value => typeof value === 'string';
const checkIfEmptyString = value => value.trim() === '';
const checkIfArray = value => Array.isArray(value);
const checkIfEmptyArray = value => !value.length;
const checkIfStringRequiredInvalid = (value, validation, formValues) => !!(validation.isRequired && checkIfValidationApplies(validation.isRequired, formValues) && checkIfEmptyString(value));
const checkIfArrayRequiredInvalid = (value, validation, formValues) => !!(validation.isRequired && checkIfValidationApplies(validation.isRequired, formValues) && checkIfEmptyArray(value));
const checkIfMinLengthInvalid = (value, validation, formValues) => !!(validation.minLength && checkIfValidationApplies(validation.minLength, formValues) && value.length < validation.minLength.value);
const checkIfMaxLengthInvalid = (value, validation, formValues) => !!(validation.maxLength && checkIfValidationApplies(validation.maxLength, formValues) && value.length > validation.maxLength.value);
const getInvalidFieldValidation = errorMessage => ({
  isValid: false,
  errorMessage
});
const getRequiredFieldValidationError = validation => getInvalidFieldValidation(validation.isRequired.errorMessage);
const getMinLengthFieldValidationError = validation => getInvalidFieldValidation(validation.minLength.errorMessage);
const getMaxLengthFieldValidationError = validation => getInvalidFieldValidation(validation.maxLength.errorMessage);
const getEmptyValueValidationError = (validation, formValues) => {
  if (validation.isRequired && checkIfValidationApplies(validation.isRequired, formValues)) {
    return getRequiredFieldValidationError(validation);
  }
  return null;
};
const getStringValidationError = (value, validation, formValues) => {
  if (checkIfStringRequiredInvalid(value, validation, formValues)) return getRequiredFieldValidationError(validation);
  if (checkIfMinLengthInvalid(value, validation, formValues)) return getMinLengthFieldValidationError(validation);
  if (checkIfMaxLengthInvalid(value, validation, formValues)) return getMaxLengthFieldValidationError(validation);
  return null;
};
const getArrayValidationError = (array, validation, formValues) => {
  if (checkIfArrayRequiredInvalid(array, validation, formValues)) return getRequiredFieldValidationError(validation);
  if (checkIfMinLengthInvalid(array, validation, formValues)) return getMinLengthFieldValidationError(validation);
  if (checkIfMaxLengthInvalid(array, validation, formValues)) return getMaxLengthFieldValidationError(validation);
  return null;
};
const getCustomValidationError = (value, validation) => {
  const customValidation = validation.customValidator(value);
  if (!customValidation.isValid) {
    return {
      isValid: false,
      errorMessage: customValidation.errorMessage
    };
  }
  return null;
};
const getFieldValidation = (value, validation, formValues) => {
  var _a;
  const fieldValidation = {
    isValid: true,
    errorMessage: null
  };
  // No validation checks are defined on the field
  if (!validation) return fieldValidation;
  const isRequired = !!((_a = validation.isRequired) === null || _a === void 0 ? void 0 : _a.value);
  // Check if required but with no value
  if (isRequired && checkIfEmptyValue$1(value)) {
    const emptyValueError = getEmptyValueValidationError(validation, formValues);
    if (emptyValueError) return emptyValueError;
  }
  // String validations
  if (checkIfString(value)) {
    const stringValidationError = getStringValidationError(value, validation, formValues);
    if (stringValidationError) return stringValidationError;
  }
  // Array validations
  if (checkIfArray(value)) {
    const arrayValidationError = getArrayValidationError(value, validation, formValues);
    if (arrayValidationError) return arrayValidationError;
  }
  if (validation.customValidator) {
    const customValidatorError = getCustomValidationError(value, validation);
    if (customValidatorError) return customValidatorError;
  }
  return fieldValidation;
};
const getControlValidationFromConfig = (controlName, config) => {
  const formControl = config.controls.find(control => control.controlName === controlName);
  // Returned undefined if there is no such form control or is included in
  // array of controls for which we don't do validation
  if (!formControl || DATA_CONTROLS_WITHOUT_VALIDATION.includes(formControl.controlType)) return;
  return formControl.validation;
};
const checkIfFormDataValid = formState => {
  if (!formState || !('data' in formState)) return false;
  const formData = formState.data;
  for (const formDataKey in formData) {
    const formValues = getOutputFormData(formState);
    const isHidden = checkIfHiddenControl(formData[formDataKey].hidden, formValues);
    if (!formData[formDataKey].isValid && !isHidden) return false;
  }
  return true;
};

const DotInputSelect = ({
  ariaLabel,
  autoFocus,
  className,
  'data-testid': dataTestId,
  defaultValue,
  disabled: _disabled = false,
  endIcon,
  error: _error = false,
  fullWidth: _fullWidth = true,
  helperText,
  id,
  inputRef,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  options: _options = [],
  persistentLabel,
  readOnly: _readOnly = false,
  required,
  shrink,
  size: _size = 'small',
  startIcon,
  success,
  value,
  warning: _warning = false
}) => {
  const hasWarning = !_error && _warning && warningClassName;
  const hasSuccess = !_error && !_warning && success && successClassName;
  const rootStyles = useStylesWithRootClass(rootSelectClassName, hasSuccess, hasWarning, _readOnly ? 'read-only' : '');
  const getOption = option => {
    return typeof option === 'string' ? option : option.option;
  };
  const getValue = option => {
    return typeof option === 'string' ? option : (option === null || option === void 0 ? void 0 : option.value) || option.option;
  };
  return jsxs("div", Object.assign({
    className: className
  }, {
    children: [persistentLabel && jsx(DotInputLabel, Object.assign({}, {
      disabled: _disabled,
      error: _error,
      id,
      label,
      required
    }), void 0), jsx(StyledTextField, Object.assign({
      InputProps: {
        startAdornment: startIcon && jsx(StyledAdornment, Object.assign({
          className: `${adornmentIconClassName} start`,
          position: "start"
        }, {
          children: startIcon
        }), void 0),
        endAdornment: endIcon && jsx(StyledAdornment, Object.assign({
          className: `${adornmentIconClassName} end`,
          position: "end"
        }, {
          children: endIcon
        }), void 0)
      },
      SelectProps: {
        native: !_readOnly,
        readOnly: _readOnly,
        open: _readOnly ? false : undefined
      },
      autoFocus: autoFocus,
      className: rootStyles,
      defaultValue: defaultValue,
      disabled: _disabled,
      error: _error,
      focused: _readOnly ? false : undefined,
      fullWidth: _fullWidth,
      helperText: helperText,
      id: id,
      InputLabelProps: {
        shrink: shrink
      },
      inputProps: {
        'aria-label': ariaLabel,
        'data-testid': dataTestId,
        className: 'dot-select',
        readOnly: _readOnly
      },
      inputRef: inputRef,
      label: persistentLabel ? null : label,
      multiline: false,
      name: name,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      onKeyDown: onKeyDown,
      required: required,
      select: true,
      size: _size,
      value: value,
      variant: "outlined"
    }, {
      children: _options.map(option => jsx("option", Object.assign({
        className: "dot-option",
        value: getValue(option)
      }, {
        children: getOption(option)
      }), getValue(option)))
    }), void 0)]
  }), void 0);
};

const rootClassName$p = 'dot-progress-button';
const StyledProgressButton = styled(DotButton).withConfig({
  displayName: "ProgressButtonstyles__StyledProgressButton",
  componentId: "sc-1fvgky0-0"
})(["", ""], ({
  theme
}) => css(["&.", "{.hidden{visibility:hidden;}.progress-circle{color:", ";position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;}}"], rootClassName$p, theme.palette.layer.n300));

const SPINNER_DEFAULT_SIZE = 20;
const SPINNER_LARGE_SIZE = 24;
const DotProgressButton = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  disabled: _disabled = false,
  disableRipple: _disableRipple = false,
  fullWidth: _fullWidth = false,
  isLoading: _isLoading = false,
  isSubmit: _isSubmit = false,
  onClick,
  size: _size = 'medium',
  tooltip,
  type: _type = 'primary'
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$p, className);
  const isButtonDisabled = _disabled || _isLoading;
  const titleClasses = useStylesWithRootClass(_isLoading ? 'hidden' : '');
  const progressCircleSize = _size === 'large' ? SPINNER_LARGE_SIZE : SPINNER_DEFAULT_SIZE;
  return jsxs(StyledProgressButton, Object.assign({
    ariaLabel: ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    disableRipple: _disableRipple,
    disabled: isButtonDisabled,
    fullWidth: _fullWidth,
    isSubmit: _isSubmit,
    onClick: onClick,
    size: _size,
    tooltip: tooltip,
    type: _type
  }, {
    children: [jsx("div", Object.assign({
      className: titleClasses
    }, {
      children: children
    }), void 0), _isLoading && jsx(DotProgress, {
      className: "progress-circle",
      size: progressCircleSize
    }, void 0)]
  }), void 0);
};

const rootClassName$o = 'dot-radio';
const StyledRadioButton = styled(Radio).withConfig({
  displayName: "RadioButtonstyles__StyledRadioButton",
  componentId: "brp0sc-0"
})(["", ""], () => css(["{&.", "{padding:8px;}"], rootClassName$o));

function DotRadioButton({
  ariaLabel,
  checked,
  className,
  'data-testid': dataTestId,
  disabled,
  id,
  inputRef,
  label,
  labelPlacement = 'end',
  name,
  onChange,
  required,
  size = 'medium',
  value
}) {
  const rootClasses = useStylesWithRootClass(rootClassName$z, className);
  const handleChange = event => {
    onChange && onChange(event, event.target.value);
  };
  const radioControl = jsx(StyledRadioButton, {
    "aria-label": ariaLabel,
    checked: checked,
    classes: {
      root: rootClassName$o
    },
    color: "primary",
    "data-testid": dataTestId,
    disabled: disabled,
    id: id,
    inputRef: inputRef,
    name: name,
    onChange: handleChange,
    required: required,
    size: size
  }, void 0);
  return jsx(StyledFormControlLabel, {
    className: rootClasses,
    control: radioControl,
    label: label || radioControl,
    labelPlacement: labelPlacement,
    value: value
  }, void 0);
}

const DotRadioGroup = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  defaultValue,
  disableGroup,
  endIcon,
  error,
  helperText,
  groupLabel,
  name,
  labelPlacement: _labelPlacement = 'end',
  onChange,
  value,
  options,
  startIcon,
  required,
  row,
  size: _size = 'medium'
}) => {
  const placement = `${placementClassName}${_labelPlacement}`;
  const rootClasses = useStylesWithRootClass(rootClassName$x, className, placement);
  const radioValue = value || defaultValue;
  const [selectedValue, setSelectedValue] = useState(radioValue);
  /* This will ensure that value can be updated from the outside */
  useEffect(() => {
    setSelectedValue(radioValue);
  }, [radioValue]);
  const handleChange = event => {
    setSelectedValue(event.target.value);
    onChange && onChange(event, event.target.value);
  };
  const renderOptions = options ? options.map(({
    label: optionLabel,
    value: optionValue,
    disabled: optionDisabled
  }) => {
    return jsx(DotRadioButton, {
      checked: selectedValue === optionValue,
      disabled: optionDisabled || disableGroup,
      label: optionLabel,
      labelPlacement: _labelPlacement,
      size: _size,
      value: optionValue
    }, optionValue);
  }) : null;
  return jsx(StyledRadioGroupWrapper, Object.assign({
    className: wrapperClassName
  }, {
    children: jsxs(StyledFormControl, Object.assign({
      classes: {
        root: rootClasses
      },
      component: "fieldset",
      error: error,
      required: required
    }, {
      children: [groupLabel && jsxs(FormLabel, Object.assign({
        component: "legend"
      }, {
        children: [startIcon && jsx("span", Object.assign({
          className: startAdornmentClassName
        }, {
          children: startIcon
        }), void 0), jsx("span", Object.assign({
          className: groupLabelClassName
        }, {
          children: groupLabel
        }), void 0), endIcon && jsx("span", Object.assign({
          className: endAdornmentClassName
        }, {
          children: endIcon
        }), void 0)]
      }), void 0), jsx(StyledRadioGroup, Object.assign({
        "aria-label": ariaLabel,
        className: groupClassName,
        "data-testid": dataTestId,
        defaultValue: defaultValue,
        name: name,
        onChange: handleChange,
        row: row,
        value: selectedValue
      }, {
        children: renderOptions
      }), void 0), helperText && jsx(FormHelperText, {
        children: helperText
      }, void 0)]
    }), void 0)
  }), void 0);
};

const rootClassName$n = 'dot-switch';
const StyledSwitch = styled(Switch).withConfig({
  displayName: "Switchstyles__StyledSwitch",
  componentId: "eign2a-0"
})(["", ""], ({
  theme
}) => css(["{&.dot-switch{span.Mui-disabled{color:", ";}.MuiSwitch-switchBase:not(.Mui-checked):not(.Mui-disabled){color:", ";}}"], theme.palette.grey[200], theme.palette.background.default));

const DotSwitch = ({
  ariaLabel,
  checked,
  className,
  color,
  'data-testid': dataTestId,
  disabled: _disabled = false,
  id,
  inputRef,
  label,
  labelPlacement: _labelPlacement = 'end',
  onChange,
  size: _size = 'medium'
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$n, className);
  const handleChange = event => {
    onChange && onChange(event);
  };
  const switchControl = jsx(StyledSwitch, {
    checked: checked,
    classes: {
      root: rootClasses
    },
    color: color,
    "data-testid": dataTestId,
    disabled: _disabled,
    id: id,
    inputProps: {
      'aria-label': ariaLabel || label
    },
    inputRef: inputRef,
    onChange: handleChange,
    size: _size
  }, void 0);
  return jsx(StyledFormControlLabel, {
    className: rootClassName$z,
    control: switchControl,
    label: label,
    labelPlacement: _labelPlacement
  }, void 0);
};

const getInitialStateFromControl = ({
  hidden,
  initialValue,
  controlType,
  validation
}, liveValidation, formValues) => {
  // Skip non-data controls (ignore buttons and other non-relevant elements)
  // or hidden elements
  if (!DATA_CONTROLS.includes(controlType)) return;
  const formStateItem = Object.assign({}, INITIAL_STATE_ITEM);
  if (hidden) formStateItem.hidden = hidden;
  if (initialValue !== null && initialValue !== undefined) {
    formStateItem.value = initialValue;
    if (liveValidation) {
      const isHidden = checkIfHiddenControl(hidden, formValues);
      formStateItem.isTouched = true;
      // Since it is hidden field we will mark valid field to true so that is doesn't
      // prevent form submission
      if (isHidden) {
        formStateItem.isValid = true;
      } else {
        const fieldValidation = getFieldValidation(initialValue, validation, formValues);
        formStateItem.isValid = fieldValidation.isValid;
        formStateItem.errorMessage = fieldValidation.errorMessage;
      }
    }
  }
  // If no validation always set valid to true
  if (!validation || DATA_CONTROLS_WITHOUT_VALIDATION.includes(controlType)) {
    // Set always to valid for now
    formStateItem.isValid = true;
  }
  return formStateItem;
};
const getInitialFormState = (config, liveValidation) => {
  const formValues = getFormDataFromInitialValues(config);
  const initialState = {
    data: {},
    isValid: false
  };
  config.controls.forEach(control => {
    const {
      formSection
    } = control;
    // Check if there are form section controls and grab initial state from those
    if (formSection && formSection.sectionControls) {
      formSection.sectionControls.forEach(formSectionControl => {
        const {
          controlName: formSectionControlName
        } = formSectionControl;
        const sectionFormStateItem = getInitialStateFromControl(formSectionControl, liveValidation, formValues);
        if (!sectionFormStateItem) return;
        initialState.data[formSectionControlName] = sectionFormStateItem;
      });
    }
    const {
      controlName
    } = control;
    const formStateItem = getInitialStateFromControl(control, liveValidation, formValues);
    if (!formStateItem) return;
    initialState.data[controlName] = formStateItem;
  });
  return initialState;
};
const getControlClickHandler = (formValues, onControlClick) => {
  return onControlClick ? () => onControlClick(formValues) : undefined;
};
const buildInputTextControl = ({
  controlName,
  controlProps,
  disabled,
  formData,
  handleChange,
  index
}) => {
  const props = controlProps;
  const value = getControlValue(controlName, formData) || '';
  const errorMessage = controlName in formData && formData[controlName].errorMessage;
  const handleChangeFn = handleChange;
  return jsx(DotInputText, Object.assign({}, props, {
    disabled: disabled,
    error: !!errorMessage,
    helperText: errorMessage || props.helperText,
    onChange: handleChangeFn(controlName),
    value: value
  }), index);
};
const buildInputSelectControl = ({
  controlName,
  controlProps,
  disabled,
  formData,
  handleChange,
  index
}) => {
  const props = controlProps;
  const value = getControlValue(controlName, formData) || '';
  const errorMessage = formData[controlName].errorMessage;
  const handleChangeFn = handleChange;
  return jsx(DotInputSelect, Object.assign({}, props, {
    disabled: disabled,
    error: !!errorMessage,
    helperText: errorMessage || props.helperText,
    onChange: handleChangeFn(controlName),
    value: value
  }), index);
};
const buildAutocompleteControl = ({
  controlName,
  controlProps,
  disabled,
  formData,
  handleChange,
  index
}) => {
  const props = controlProps;
  const value = getControlValue(controlName, formData) || [];
  const errorMessage = formData[controlName].errorMessage;
  const handleChangeFn = handleChange;
  return jsx(DotAutoComplete, Object.assign({}, props, {
    disabled: disabled,
    error: !!errorMessage,
    helperText: errorMessage || props.helperText,
    onChange: handleChangeFn(controlName),
    value: value
  }), index);
};
const buildRadioGroupControl = ({
  controlName,
  controlProps,
  disabled,
  formData,
  handleChange,
  index
}) => {
  const props = controlProps;
  const value = getControlValue(controlName, formData) || '';
  const errorMessage = formData[controlName].errorMessage;
  const handleChangeFn = handleChange;
  return jsx(DotRadioGroup, Object.assign({}, props, {
    disableGroup: disabled,
    error: !!errorMessage,
    helperText: errorMessage || props.helperText,
    onChange: handleChangeFn(controlName),
    value: value
  }), index);
};
const buildCheckboxControl = ({
  controlName,
  controlProps,
  disabled,
  formData,
  handleChange,
  index
}) => {
  const props = controlProps;
  const checked = getControlValue(controlName, formData) || false;
  const handleChangeFn = handleChange;
  return jsx(DotCheckbox, Object.assign({}, props, {
    checked: checked,
    disabled: disabled,
    onChange: handleChangeFn(controlName)
  }), index);
};
const buildCheckboxGroupControl = ({
  controlName,
  controlProps,
  disabled,
  formData,
  handleChange,
  index
}) => {
  const props = controlProps;
  const errorMessage = formData[controlName].errorMessage;
  const values = getControlValue(controlName, formData) || [];
  const handleChangeFn = handleChange;
  return jsx(DotCheckboxGroup, Object.assign({}, props, {
    defaultValues: values,
    disableGroup: disabled,
    error: !!errorMessage,
    helperText: errorMessage || props.helperText,
    onChange: handleChangeFn(controlName)
  }), index);
};
const buildSwitchControl = ({
  controlName,
  controlProps,
  disabled,
  formData,
  handleChange,
  index
}) => {
  const props = controlProps;
  const checked = getControlValue(controlName, formData) || false;
  const handleChangeFn = handleChange;
  return jsx(DotSwitch, Object.assign({}, props, {
    checked: checked,
    disabled: disabled,
    onChange: handleChangeFn(controlName)
  }), index);
};
const buildButtonControl = ({
  controlProps,
  disabled,
  index,
  handleClick
}) => {
  const props = controlProps;
  const {
    onClick
  } = props;
  const handleButtonClick = onClick || handleClick ? e => {
    var _a;
    (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
    handleClick === null || handleClick === void 0 ? void 0 : handleClick();
  } : undefined;
  return jsx(DotButton, Object.assign({}, props, {
    disabled: disabled,
    onClick: handleButtonClick
  }, {
    children: props.children
  }), index);
};
const buildProgressButtonControl = ({
  controlProps,
  disabled,
  index,
  handleClick
}) => {
  const props = controlProps;
  const {
    onClick
  } = props;
  const handleButtonClick = onClick || handleClick ? e => {
    var _a;
    (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
    handleClick === null || handleClick === void 0 ? void 0 : handleClick();
  } : undefined;
  return jsx(DotProgressButton, Object.assign({}, props, {
    disabled: disabled,
    onClick: handleButtonClick
  }), index);
};
const buildResetControl = ({
  controlProps,
  disabled,
  handleClick,
  index
}) => {
  const props = controlProps;
  return jsx(DotButton, Object.assign({}, props, {
    disabled: disabled,
    onClick: e => {
      var _a;
      (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
      handleClick();
    }
  }, {
    children: props.children
  }), index);
};
const buildSubmitControl = ({
  controlProps,
  disabled,
  formState,
  index,
  liveValidation
}) => {
  const props = controlProps;
  const isDisabled = disabled || liveValidation && !formState.isValid;
  return jsx(DotButton, Object.assign({}, props, {
    disabled: isDisabled,
    isSubmit: true
  }, {
    children: props.children
  }), index);
};
const buildProgressSubmitControl = ({
  controlProps,
  disabled,
  formState,
  index,
  liveValidation
}) => {
  const props = controlProps;
  const isDisabled = disabled || liveValidation && !formState.isValid;
  return jsx(DotProgressButton, Object.assign({}, props, {
    disabled: isDisabled,
    isSubmit: true
  }), index);
};

const DotDynamicForm = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  config,
  disabled: isFormDisabled,
  liveValidation: _liveValidation = true,
  onChange,
  onSubmit
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$q, className);
  // Memoize this operation so that is doesn't get executed each time this
  // component re-renders
  const initialFormState = useMemo(() => getInitialFormState(config, _liveValidation), [config, _liveValidation, getInitialFormState]);
  const [formState, setFormState] = useState(initialFormState);
  useEffect(() => {
    // Skip if live validation is turned off
    if (!_liveValidation) return;
    const currentIsFormValid = checkIfFormDataValid(formState);
    // Check if validity state has changed
    if (formState.isValid !== currentIsFormValid) {
      setFormState(prevState => {
        const newState = Object.assign(Object.assign({}, prevState), {
          isValid: currentIsFormValid
        });
        onChange === null || onChange === void 0 ? void 0 : onChange(newState);
        return newState;
      });
    } else {
      onChange === null || onChange === void 0 ? void 0 : onChange(formState);
    }
  }, [formState]);
  const getControlValidation = (controlName, controlValue, formConfig) => {
    const validation = getControlValidationFromConfig(controlName, formConfig);
    const formValues = getOutputFormData(formState);
    const fieldValidation = getFieldValidation(controlValue, validation, formValues);
    return {
      isValid: fieldValidation.isValid,
      errorMessage: fieldValidation.errorMessage
    };
  };
  const updateFormState = ({
    controlName,
    newValue,
    formConfig,
    validate: _validate = true
  }) => {
    let fieldValidation = {};
    if (_validate && _liveValidation) {
      fieldValidation = getControlValidation(controlName, newValue, formConfig);
    }
    setFormState(prevFormState => Object.assign(Object.assign({}, prevFormState), {
      data: Object.assign(Object.assign({}, prevFormState.data), {
        [controlName]: Object.assign(Object.assign(Object.assign({}, prevFormState.data[controlName]), {
          value: newValue,
          isTouched: true
        }), fieldValidation)
      })
    }));
  };
  const validateForm = () => {
    const newFormData = {};
    const formData = formState.data;
    let isValid = true;
    for (const formDataKey in formData) {
      const formControl = formData[formDataKey];
      const fieldValidation = getControlValidation(formDataKey, formControl.value, config);
      const isFieldValid = fieldValidation.isValid;
      newFormData[formDataKey] = Object.assign(Object.assign({}, formControl), {
        isValid: isFieldValid,
        errorMessage: fieldValidation.errorMessage
      });
      if (!isFieldValid && isValid) {
        isValid = false;
      }
    }
    setFormState(prevState => Object.assign(Object.assign({}, prevState), {
      data: newFormData
    }));
    return isValid;
  };
  const handleAutocompleteChange = controlName => (_event, value) => {
    updateFormState({
      controlName,
      formConfig: config,
      newValue: value
    });
  };
  const handleCheckChange = controlName => e => {
    const newValue = e.target.checked;
    updateFormState({
      controlName,
      formConfig: config,
      newValue,
      validate: false
    });
  };
  const handleCheckboxGroupChange = controlName => (e, value) => {
    updateFormState({
      controlName,
      formConfig: config,
      newValue: value
    });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    let isFormValid = true;
    // If live validation is turned off we have to validate form before submitting it
    if (!_liveValidation) {
      isFormValid = validateForm();
    }
    if (!isFormValid) return;
    const formOutputData = getOutputFormData(formState);
    onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(formOutputData);
  };
  const handleInputChange = controlName => e => {
    const newValue = e.target.value;
    updateFormState({
      controlName,
      formConfig: config,
      newValue
    });
  };
  const handleReset = () => setFormState(initialFormState);
  const buildFormControls = (controls, startIndex = 0) => {
    if (!controls || !controls.length) return;
    return controls.map(({
      controlName,
      controlType,
      controlProps: _controlProps = {},
      customElement,
      disabled,
      hidden,
      formSection,
      onControlClick
    }, index) => {
      const elementIndex = startIndex + index;
      const inputControlName = controlName || `control-${elementIndex}`;
      const formValues = getOutputFormData(formState);
      if (checkIfHiddenControl(hidden, formValues)) return '';
      // Control can be disabled when: 1) whole form is disabled, 2.) control is disabled via config prop
      // 3.) control is disabled via its own `disable` control prop
      const isDisabled = isFormDisabled || checkIfDisabledControl(disabled, formValues, formState.isValid) || 'disabled' in _controlProps && _controlProps.disabled;
      const control = {
        controlProps: _controlProps,
        disabled: isDisabled,
        index: elementIndex,
        liveValidation: _liveValidation
      };
      const commonControlledInputArgs = Object.assign(Object.assign({}, control), {
        controlName: inputControlName,
        formData: formState.data
      });
      switch (controlType) {
        case 'dot-input-text':
          {
            return buildInputTextControl(Object.assign(Object.assign({}, commonControlledInputArgs), {
              handleChange: handleInputChange
            }));
          }
        case 'dot-input-select':
          {
            return buildInputSelectControl(Object.assign(Object.assign({}, commonControlledInputArgs), {
              handleChange: handleInputChange
            }));
          }
        case 'dot-autocomplete':
          {
            return buildAutocompleteControl(Object.assign(Object.assign({}, commonControlledInputArgs), {
              handleChange: handleAutocompleteChange
            }));
          }
        case 'dot-radio-group':
          {
            return buildRadioGroupControl(Object.assign(Object.assign({}, commonControlledInputArgs), {
              handleChange: handleInputChange
            }));
          }
        case 'dot-checkbox':
          {
            return buildCheckboxControl(Object.assign(Object.assign({}, commonControlledInputArgs), {
              handleChange: handleCheckChange
            }));
          }
        case 'dot-checkbox-group':
          {
            return buildCheckboxGroupControl(Object.assign(Object.assign({}, commonControlledInputArgs), {
              handleChange: handleCheckboxGroupChange
            }));
          }
        case 'dot-switch':
          {
            return buildSwitchControl(Object.assign(Object.assign({}, commonControlledInputArgs), {
              handleChange: handleCheckChange
            }));
          }
        case 'dot-button':
          {
            const handleClick = getControlClickHandler(formValues, onControlClick);
            return buildButtonControl(Object.assign(Object.assign({}, control), {
              handleClick
            }));
          }
        case 'dot-progress-button':
          {
            const handleClick = getControlClickHandler(formValues, onControlClick);
            return buildProgressButtonControl(Object.assign(Object.assign({}, control), {
              handleClick
            }));
          }
        case 'dot-reset':
          {
            return buildResetControl(Object.assign(Object.assign({}, control), {
              handleClick: handleReset
            }));
          }
        case 'dot-submit':
          {
            return buildSubmitControl(Object.assign(Object.assign({}, control), {
              formState
            }));
          }
        case 'dot-progress-submit':
          {
            return buildProgressSubmitControl(Object.assign(Object.assign({}, control), {
              formState
            }));
          }
        case 'custom-element':
          {
            return jsx(Fragment, {
              children: customElement
            }, elementIndex);
          }
        case 'dot-form-section':
          {
            const {
              FormSectionComponent,
              sectionControls
            } = formSection;
            const sectionStartIndex = elementIndex + 1;
            return jsx(FormSectionComponent, {
              sectionControls: buildFormControls(sectionControls, sectionStartIndex)
            }, elementIndex);
          }
        default:
          {
            return '';
          }
      }
    });
  };
  return jsx(StyledDynamicForm, Object.assign({
    ariaLabel: ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    onSubmit: handleFormSubmit
  }, {
    children: buildFormControls(config.controls)
  }), void 0);
};

const rootClassName$m = 'dot-inline-edit';
const editModeClassName = 'dot-edit-mode';
const viewModeClassName = 'dot-view-mode';
const readOnlyClassName = 'dot-read-only';
const editActionsClassName = 'dot-edit-actions';
const editTextFieldClassName = 'dot-edit-text-field';
const StyledInlineEdit = styled.div.withConfig({
  displayName: "InlineEditstyles__StyledInlineEdit",
  componentId: "sc-10l2c0v-0"
})(["", ""], ({
  theme,
  fullWidth
}) => css(["&.", "{display:", ";align-items:center;color:", ";min-width:", ";&:not(.", "):focus-visible{border-radius:", ";background-color:", ";cursor:pointer;outline:0;.dot-edit-icon{display:block;}}.", "{display:flex;width:100%;position:relative;.dot-edit-icon{height:100%;position:absolute;right:0;width:40px;background-color:", ";border-radius:", ";display:none;.dot-i{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}}&:not(.", "):hover{border-radius:", ";background-color:", ";cursor:pointer;.dot-edit-icon{display:block;}}.dot-view-mode-typography{padding:", ";margin-bottom:0;}}.dot-empty-value fieldset{border-color:", ";}.dot-adornment-error{color:", ";}.MuiInputBase-input{height:auto;}.MuiInputBase-root{margin-bottom:", ";}", " .", " .dot-input{padding-left:", ";}.MuiOutlinedInput-input:focus{cursor:auto;}.dot-counter-adornment{.dot-counter-max-length{color:", ";}.dot-counter-length,.dot-counter-max-length{&.dot-counter-limit{color:", ";}&:hover{background:", ";}.editing-actions{display:flex;justify-content:flex-end;margin-top:", ";}.dot-icon-btn{background:", ";border:1px solid ", ";color:", ";margin-left:", ";padding:", ";}}}.dot-read-only-adornment{display:none;}.", "{display:flex;align-items:center;margin:", ";.dot-button{padding:", ";margin-top:", ";margin-bottom:", ";}}}"], rootClassName$m, fullWidth ? 'flex' : 'inline-flex', theme.palette.grey[700], theme.spacing(32), readOnlyClassName, theme.spacing(0.5), theme.palette.layer.n50, viewModeClassName, theme.palette.layer.n50, theme.spacing(0, 0.5, 0.5, 0), readOnlyClassName, theme.spacing(0.5), theme.palette.layer.n50, theme.spacing(1.3125, 1), theme.palette.error[500], theme.palette.error[500], theme.spacing(0), ({
  typography
}) => typography && `
         .MuiInputBase-root {
            font-family: ${theme.typography[typography].fontFamily || 'inherit'};
            font-size: ${theme.typography[typography].fontSize};
            line-height: ${theme.typography[typography].lineHeight || 'normal'};
            letter-spacing: ${theme.typography[typography].letterSpacing || 'normal'};
            text-transform: ${theme.typography[typography].textTransform || 'none'};
         }
      `, editTextFieldClassName, theme.spacing(1), theme.palette.layer.n400, theme.palette.error[500], theme.palette.grey[50], theme.spacing(0.5), theme.palette.grey[0], theme.palette.grey[300], theme.palette.grey[700], theme.spacing(1), theme.spacing(0.25), editActionsClassName, theme.spacing(0, 0, 0, 0.5), theme.spacing(0.75), theme.spacing(0), theme.spacing(0)));

const getCounterAdornment = (currentLength, maxLength, dataTestId) => {
  if (currentLength === undefined || typeof currentLength !== 'number' || !maxLength || typeof maxLength !== 'number') return;
  const isLimitReached = currentLength >= maxLength;
  const limitClass = isLimitReached ? 'dot-counter-limit' : '';
  const currentLengthClasses = useStylesWithRootClass('dot-counter-length', limitClass);
  const maxLengthClasses = useStylesWithRootClass('dot-counter-max-length', limitClass);
  return jsxs(InputAdornment, Object.assign({
    className: "dot-counter-adornment",
    "data-testid": dataTestId && `${dataTestId}-counter`,
    position: "end"
  }, {
    children: [jsx("span", Object.assign({
      className: currentLengthClasses,
      "data-testid": dataTestId && `${dataTestId}-counter-current`
    }, {
      children: currentLength
    }), void 0), jsxs("span", Object.assign({
      className: maxLengthClasses,
      "data-testid": dataTestId && `${dataTestId}-counter-max`
    }, {
      children: ["/", maxLength]
    }), void 0)]
  }), void 0);
};
const getWarningAdornment = () => {
  return jsx(InputAdornment, Object.assign({
    position: "end"
  }, {
    children: jsx(DotTooltip, Object.assign({
      title: "You must specify the value or press ESC to revert"
    }, {
      children: jsx(DotIcon, {
        className: "dot-adornment-error",
        iconId: "error-solid"
      }, void 0)
    }), void 0)
  }), void 0);
};
const applyBindings = (bindings, inlineEditText) => {
  if (!bindings || !bindings.length || !inlineEditText) return;
  let text = inlineEditText;
  let boundNode = [];
  bindings.forEach((binding, index) => {
    const {
      binding: stringBinding,
      className = null,
      value
    } = binding;
    let bindingStringIndex = text.indexOf(stringBinding);
    let key = 0;
    while (bindingStringIndex >= 0) {
      // Since key is needed only for bindings with className,
      // increment key value only if className value is defined
      className && key++;
      const nextStartingIndex = bindingStringIndex + stringBinding.length;
      const previousText = text.substring(0, bindingStringIndex);
      text = text.substring(nextStartingIndex, text.length);
      bindingStringIndex = text.indexOf(stringBinding);
      // Add nodes to array
      boundNode = [boundNode, previousText, className ? jsx("span", Object.assign({
        className: className
      }, {
        children: value
      }), `${index}-${key}`) : value];
    }
  });
  // Add remainder of the text to the node
  boundNode = [boundNode, text];
  return boundNode;
};
const checkIfEmptyValue = inputValue => inputValue.trim() === '';

/**
 * @experimental This component is still in development
 */
const DotInlineEdit = ({
  ariaLabel,
  bindings,
  charactersLimit,
  className,
  'data-testid': dataTestId,
  fullWidth: _fullWidth = true,
  hideActionButtons,
  name,
  onChange,
  onEditStateChange,
  readOnly,
  selectTextOnEdit,
  tabIndex: _tabIndex = 0,
  tooltip,
  typography: _typography = 'body1',
  value: _value = ''
}) => {
  const [editing, setEditing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [originalValue, setOriginalValue] = useState('');
  const [inputValue, setInputValue] = useState(_value);
  const inputRef = useRef();
  const inlineEditRef = useRef();
  const isSaveDisabled = checkIfEmptyValue(inputValue);
  const rootClasses = useStylesWithRootClass(rootClassName$m, className, editing ? editModeClassName : '');
  const handleShowTooltip = visible => {
    if (!editing) {
      setShowTooltip(visible);
    }
  };
  const handleInlineEditClick = () => {
    if (editing) return;
    setOriginalValue(inputValue);
    setEditing(true);
    if (onEditStateChange) {
      onEditStateChange(true);
    }
  };
  const handleSave = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    setShowTooltip(false);
    if (isSaveDisabled) return;
    if (onChange) {
      const isSuccess = yield onChange(inputValue);
      if (!isSuccess) {
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        return;
      }
    }
    setEditing(false);
    if (onEditStateChange) {
      onEditStateChange(false);
    }
  });
  const handleCancel = () => {
    setShowTooltip(false);
    setEditing(false);
    setInputValue(originalValue);
    if (onEditStateChange) {
      onEditStateChange(false);
    }
  };
  const handleKeyPress = event => __awaiter(void 0, void 0, void 0, function* () {
    switch (event.key) {
      case 'Enter':
        if (!editing) {
          handleInlineEditClick();
          return;
        }
        // Save only when Enter is pressed within input field
        if (inputRef.current !== event.target) return;
        yield handleSave();
        break;
      case 'Escape':
        handleCancel();
        break;
    }
  });
  const handleBlur = event => __awaiter(void 0, void 0, void 0, function* () {
    if (!editing) {
      setShowTooltip(false);
    } else {
      if (!event.relatedTarget || !inlineEditRef.current.contains(event.relatedTarget)) {
        yield handleSave();
      }
    }
  });
  const renderEndAdornment = () => {
    if (isSaveDisabled) {
      return getWarningAdornment();
    }
    if (charactersLimit && !charactersLimit.hideCounter) {
      return getCounterAdornment(inputValue.length, charactersLimit.maxLength, dataTestId);
    }
  };
  const renderViewMode = () => {
    const viewModeClasses = useStylesWithRootClass(viewModeClassName, readOnly ? readOnlyClassName : '');
    const viewModeChildren = jsxs(Fragment$1, {
      children: [jsx(DotTypography, Object.assign({
        className: "dot-view-mode-typography",
        "data-testid": dataTestId && `${dataTestId}-view-mode-typography`,
        variant: _typography
      }, {
        children: bindings ? applyBindings(bindings, inputValue) : inputValue
      }), void 0), jsx(DotIcon, {
        className: "dot-edit-icon",
        "data-testid": dataTestId && `${dataTestId}-edit-icon`,
        iconId: "edit"
      }, void 0)]
    }, void 0);
    return tooltip ? jsx(DotTooltip, Object.assign({
      title: tooltip,
      className: viewModeClasses,
      "data-testid": dataTestId && `${dataTestId}-view-mode-tooltip-wrapper`,
      open: showTooltip
    }, {
      children: viewModeChildren
    }), void 0) : jsx("div", Object.assign({
      className: viewModeClasses,
      "data-testid": dataTestId && `${dataTestId}-view-mode-wrapper`
    }, {
      children: viewModeChildren
    }), void 0);
  };
  const renderEditMode = () => {
    const textFieldClasses = useStylesWithRootClass(editTextFieldClassName, isSaveDisabled ? 'dot-empty-value' : '');
    return jsxs(Fragment$1, {
      children: [jsx(TextField, {
        InputProps: {
          endAdornment: renderEndAdornment()
        },
        "aria-label": name,
        autoFocus: true,
        autoComplete: "off",
        className: textFieldClasses,
        error: false,
        fullWidth: _fullWidth,
        inputProps: {
          'data-testid': dataTestId,
          className: 'dot-input',
          maxLength: charactersLimit === null || charactersLimit === void 0 ? void 0 : charactersLimit.maxLength
        },
        inputRef: inputRef,
        multiline: false,
        name: name,
        onChange: event => setInputValue(event.target.value),
        onFocus: selectTextOnEdit ? event => event.target.select() : undefined,
        size: "small",
        type: "text",
        value: inputValue,
        variant: "outlined"
      }, void 0), !hideActionButtons && jsxs("div", Object.assign({
        className: editActionsClassName
      }, {
        children: [jsx(DotButton, Object.assign({
          "data-testid": dataTestId && `${dataTestId}-cancel`,
          onClick: handleCancel,
          size: "small",
          tooltip: "Cancel [ESC]",
          type: "outlined"
        }, {
          children: jsx(DotIcon, {
            iconId: "close"
          }, void 0)
        }), void 0), jsx(DotButton, Object.assign({
          "data-testid": dataTestId && `${dataTestId}-save`,
          disabled: isSaveDisabled,
          onClick: handleSave,
          size: "small",
          tooltip: "Save [ENTER]",
          type: "outlined"
        }, {
          children: jsx(DotIcon, {
            iconId: "check-line"
          }, void 0)
        }), void 0)]
      }), void 0)]
    }, void 0);
  };
  return jsx(StyledInlineEdit, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    fullWidth: _fullWidth,
    onBlur: !readOnly ? handleBlur : undefined,
    onClick: !readOnly ? handleInlineEditClick : undefined,
    onFocus: () => handleShowTooltip(true),
    onMouseOver: () => handleShowTooltip(true),
    onMouseOut: () => handleShowTooltip(false),
    onKeyDown: !readOnly ? event => handleKeyPress(event) : undefined,
    ref: inlineEditRef,
    tabIndex: !readOnly ? _tabIndex : undefined,
    typography: _typography
  }, {
    children: editing ? renderEditMode() : renderViewMode()
  }), void 0);
};

const rootClassName$l = 'dot-navigation-rail';
const StyledNavigationRail = styled.div.withConfig({
  displayName: "NavigationRailstyles__StyledNavigationRail",
  componentId: "sc-160kivd-0"
})(["", ""], ({
  theme,
  railItemPosition
}) => css(["&.", "{background-color:", ";border-left:1px solid ", ";display:flex;flex-direction:column;justify-content:", ";padding:", ";width:72px;.rail-item-button{border-radius:0;display:flex;flex-basis:72px;flex-direction:column;margin:0;padding:0;width:100%;white-space:normal;.dot-icon{color:", ";}&.selected{background-color:", ";}&:focus-visible{background-color:", ";}.rail-item-text{word-break:break-word;padding:", ";}}}"], rootClassName$l, theme.palette.layer.n50, theme.palette.layer.n100, railItemPosition, theme.spacing(1, 0, 0), theme.palette.grey[700], theme.palette.layer.n0, theme.palette.layer.n100, theme.spacing(0, 0.5)));

const MAX_ALLOWED_ITEMS = 7;
const DotNavigationRail = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  onChange,
  railItemPosition: _railItemPosition = 'flex-start',
  railItems,
  selectedIndex: _selectedIndex = 0
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$l, className);
  const [selectedItemIndex, setSelectedItemIndex] = useState(_selectedIndex);
  /* Used to change selected index programmatically from the consumer component */
  useEffect(() => {
    setSelectedItemIndex(_selectedIndex);
  }, [_selectedIndex]);
  const onItemSelect = index => () => {
    setSelectedItemIndex(index);
    onChange && onChange(index);
  };
  const checkIfSelected = index => selectedItemIndex === index;
  const renderIcon = (iconId, railIconBadge) => {
    const icon = jsx(DotIcon, {
      className: "rail-item-button-icon",
      iconId: iconId
    }, void 0);
    if (!railIconBadge) return icon;
    return jsx(DotBadge, Object.assign({}, railIconBadge, {
      className: "rail-item-badge",
      children: icon
    }), void 0);
  };
  const renderRailItems = () => {
    return railItems === null || railItems === void 0 ? void 0 : railItems.slice(0, MAX_ALLOWED_ITEMS).map(({
      ariaLabel: itemAriaLabel,
      iconBadge,
      iconId,
      title
    }, index) => jsxs(DotButton, Object.assign({
      ariaLabel: itemAriaLabel,
      className: useStylesWithRootClass('rail-item-button', checkIfSelected(index) && 'selected'),
      "data-testid": `rail-item-${index}`,
      disableRipple: true,
      onClick: onItemSelect(index),
      type: "text"
    }, {
      children: [iconId && renderIcon(iconId, iconBadge), jsx(DotTypography, Object.assign({
        className: "rail-item-text",
        variant: "body2"
      }, {
        children: title
      }), void 0)]
    }), index));
  };
  return jsx(StyledNavigationRail, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    railItemPosition: _railItemPosition
  }, {
    children: railItems && renderRailItems()
  }), void 0);
};

const rootClassName$k = 'dot-pill';
const StyledPill = styled(Chip).withConfig({
  displayName: "Pillstyles__StyledPill",
  componentId: "l7oxi2-0"
})(["", ""], ({
  theme
}) => css(["&.", "{background-color:", ";color:", ";border-color:", ";&.error{background-color:", ";color:", ";}&.success{background-color:", ";color:", ";}&.warning{background-color:", ";color:", ";}&.in-progress{background-color:", ";color:", ";}"], rootClassName$k, ({
  backgroundcolor
}) => {
  return backgroundcolor || theme.palette.grey[200];
}, ({
  labelcolor
}) => {
  return labelcolor ? labelcolor : theme.palette.layer.n700;
}, ({
  bordercolor
}) => {
  return bordercolor ? bordercolor : theme.palette.layer.n700;
}, theme.palette.error[500], theme.palette.layer.n0, theme.palette.success[500], theme.palette.layer.n0, theme.palette.warning[500], theme.palette.layer.n700, theme.palette.primary.main, theme.palette.layer.n0));

const DotPill = ({
  ariaLabel,
  backgroundcolor,
  bordercolor,
  className,
  'data-testid': dataTestId,
  icon,
  label,
  labelcolor,
  size: _size = 'medium',
  status: _status = 'default',
  variant: _variant = 'filled'
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$k, className, _status);
  return jsx(StyledPill, {
    "aria-label": ariaLabel,
    bordercolor: bordercolor,
    backgroundcolor: backgroundcolor,
    classes: {
      root: rootClasses
    },
    clickable: false,
    "data-testid": dataTestId,
    icon: icon,
    label: label,
    labelcolor: labelcolor,
    size: _size,
    variant: _variant
  }, void 0);
};

const rootClassName$j = 'dot-skeleton';
const StyledSkeleton = styled(Skeleton).withConfig({
  displayName: "Skeletonstyles__StyledSkeleton",
  componentId: "sc-17ayzv5-0"
})(["", ""], ({
  theme
}) => css(["&.", "{background-color:", ";}"], rootClassName$j, theme.palette.grey[100]));

const DotSkeleton = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  height,
  width,
  variant
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$j, className);
  return jsx(StyledSkeleton, Object.assign({
    animation: "wave",
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId,
    height: height,
    variant: variant,
    width: width
  }, {
    children: children
  }), void 0);
};

const rootClassName$i = 'dot-snackbar';
const StyledSnackbar = styled(Snackbar).withConfig({
  displayName: "Snackbarstyles__StyledSnackbar",
  componentId: "sc-1huxoy3-0"
})(["", ""], ({
  theme
}) => css(["&.", "{.MuiSvgIcon-root{color:", ";}.MuiAlert-icon{padding:11px 0px;}.MuiAlert-message{padding:13px 0px;}&.MuiSnackbar-anchorOriginTopRight{top:0px;z-index:", ";}.MuiAlert-root{&.MuiAlert-standardInfo{background-color:", ";}&.MuiAlert-standardWarning{color:", ";.MuiSvgIcon-root{color:", ";}}max-width:500px;min-width:344px;color:", ";z-index:", ";position:relative;margin-top:108px;background-color:", ";@media (min-width:720px){.MuiAlert-root{top:112px;position:relative;}}}"], rootClassName$i, theme.palette.layer.n0, levelFourth, theme.palette.primary[500], theme.palette.grey[900], theme.palette.grey[900], theme.palette.layer.n0, levelFourth, props => theme.palette[props.severity].main));

function addAutoHideDuration(severity) {
  return severity === 'error' ? null : 10000;
}

function checkForConflictingEventHandlers({
  action,
  onClose
}) {
  if (action && onClose) {
    console.error('You have passed two event handlers for action buttons. Please pick one.');
  }
}
const DEFAULT_ANCHOR_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
const DotSnackbar = ({
  action,
  anchorOrigin: _anchorOrigin = DEFAULT_ANCHOR_ORIGIN,
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  onClose,
  open,
  severity,
  width
}) => {
  const autoHideDuration = addAutoHideDuration(severity);
  checkForConflictingEventHandlers({
    onClose,
    action
  });
  const rootClasses = useStylesWithRootClass(rootClassName$i, className);
  return jsx(StyledSnackbar, Object.assign({
    anchorOrigin: _anchorOrigin,
    "aria-label": ariaLabel,
    autoHideDuration: autoHideDuration,
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId,
    onClose: onClose,
    open: open,
    severity: severity
  }, {
    children: jsx(Alert, Object.assign({
      action: action,
      onClose: onClose,
      severity: severity,
      style: {
        width: width
      }
    }, {
      children: jsx("span", Object.assign({
        "aria-label": severity
      }, {
        children: children
      }), void 0)
    }), void 0)
  }), void 0);
};

const rootClassName$h = 'dot-snackbar-container';
const StyledSnackbarContainer = styled.div.withConfig({
  displayName: "SnackbarContainerstyles__StyledSnackbarContainer",
  componentId: "sc-1ogwjuc-0"
})(["", ""], () => css(["&.", "{position:absolute;top:0;width:250px;height:auto;right:0;& > div{position:relative;}}"], rootClassName$h));

const DotSnackbarContext = /*#__PURE__*/createContext({
  alerts: [],
  enqueueMessage: (_message, _severity) => null,
  removeMessage: _id => null
});
const DotSnackbarContainer = () => {
  const {
    alerts,
    removeMessage
  } = useDotSnackbarContext();
  function handleClose(id) {
    return () => {
      removeMessage(id);
    };
  }
  return jsx(StyledSnackbarContainer, Object.assign({
    className: rootClassName$h
  }, {
    children: jsx("div", Object.assign({
      className: rootClassName$h,
      "data-testid": rootClassName$h
    }, {
      children: alerts.slice().reverse().map(alert => {
        return jsx(DotSnackbar, Object.assign({
          onClose: handleClose(alert.id),
          open: alert.open,
          severity: alert.severity
        }, {
          children: alert.message
        }), alert.id);
      })
    }), void 0)
  }), void 0);
};
const DotSnackbarProvider = ({
  children
}) => {
  const [alerts, setAlerts] = useState([]);
  function enqueueMessage(message, severity) {
    const id = CreateUUID();
    const queue = {
      id,
      message,
      severity,
      open: true
    };
    setAlerts(prevState => {
      return [...prevState, Object.assign({}, queue)];
    });
  }
  const removeMessage = id => {
    setAlerts(prev => {
      return prev.map(a => {
        return a.id === id ? Object.assign(Object.assign({}, a), {
          open: false
        }) : a;
      });
    });
  };
  const DotSnackbarValues = {
    alerts,
    enqueueMessage,
    removeMessage
  };
  const memoizedValues = useMemo(() => DotSnackbarValues, [alerts]);
  return jsxs(DotSnackbarContext.Provider, Object.assign({
    value: memoizedValues
  }, {
    children: [jsx(DotSnackbarContainer, {}, void 0), children]
  }), void 0);
};
const useDotSnackbarContext = () => {
  return useContext(DotSnackbarContext);
};

const rootClassName$g = 'dot-split-button-group';
const StyledSplitButtonGroup = styled(ButtonGroup).withConfig({
  displayName: "SplitButtonstyles__StyledSplitButtonGroup",
  componentId: "ild520-0"
})(["", ""], ({
  theme
}) => css(["&.", "{box-shadow:0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%),0px 1px 5px 0px rgb(0 0 0 / 12%);&.disabled{box-shadow:none;.dot-button{background:", ";border:1px solid ", ";}}&.outlined,&.text{box-shadow:none;.expand-button{border-left:none;}}&.outlined .dot-button{border-color:", ";}&.destructive .expand-button{border-left-color:", ";}.dot-button{box-shadow:none;margin:0;padding:", ";}.label-button{border-top-right-radius:0;border-bottom-right-radius:0;}.expand-button{border-left:1px solid ", ";border-top-left-radius:0;border-bottom-left-radius:0;&.Mui-disabled{border-left:0;}.MuiButton-label,.dot-icon{width:14px;height:14px;}}}"], rootClassName$g, theme.palette.grey['50'], theme.palette.grey['200'], theme.palette.grey['300'], theme.palette.error['800'], theme.spacing(0.75, 1.5), theme.palette.primary['800']));
const StyledMenu$2 = styled(DotMenu).withConfig({
  displayName: "SplitButtonstyles__StyledMenu",
  componentId: "ild520-1"
})(["&.dot-menu{z-index:", ";}"], levelTop);

const getMainOptionIndex = (options, mainOptionKey) => {
  if (!options || options.length <= 0) return null;
  if (mainOptionKey) return options.findIndex(option => option.key === mainOptionKey);
  return 0;
};

const DotSplitButton = ({
  autoFocus: _autoFocus = false,
  ariaLabel,
  className,
  'data-testid': dataTestId,
  defaultMainOptionKey,
  disabled: _disabled = false,
  disablePortal,
  disableRipple: _disableRipple = false,
  fullWidth: _fullWidth = false,
  isSubmit: _isSubmit = false,
  onOptionClick,
  options: _options = [],
  size: _size = 'medium',
  tooltip,
  type: _type = 'primary'
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$g, className, _type, _disabled ? 'disabled' : '');
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const hasEmptyOptions = _options.length === 0;
  const mainOptionIndex = getMainOptionIndex(_options, defaultMainOptionKey);
  const mainOption = _options[mainOptionIndex];
  const dropdownOptions = _options.filter((_option, index) => index !== mainOptionIndex);
  const {
    children: mainOptionChildren = 'Empty button',
    disabled: mainOptionDisabled = false,
    key: mainOptionKey = ''
  } = mainOption || {};
  const isMainOptionDisabled = _disabled || hasEmptyOptions || mainOptionDisabled;
  const isMenuButtonDisabled = _disabled || hasEmptyOptions || _options.length === 1;
  const handleClick = (_event, _menuId, itemKey) => {
    setOpen(false);
    onOptionClick(itemKey);
  };
  return jsxs(Fragment$1, {
    children: [jsxs(StyledSplitButtonGroup, Object.assign({
      "aria-label": ariaLabel,
      className: rootClasses,
      fullWidth: _fullWidth,
      ref: anchorRef
    }, {
      children: [jsx(DotButton, Object.assign({
        autoFocus: _autoFocus,
        className: "label-button",
        "data-testid": dataTestId,
        disableRipple: _disableRipple,
        disabled: isMainOptionDisabled,
        isSubmit: _isSubmit,
        onClick: event => handleClick(event, null, mainOptionKey),
        size: _size,
        tooltip: tooltip,
        type: _type
      }, {
        children: mainOptionChildren
      }), void 0), jsx(DotButton, Object.assign({
        className: "expand-button",
        "data-testid": dataTestId && `${dataTestId}-expand`,
        disableRipple: _disableRipple,
        disabled: isMenuButtonDisabled,
        onClick: () => setOpen(!open),
        size: _size,
        type: _type
      }, {
        children: jsx(DotIcon, {
          fontSize: "small",
          iconId: "arrow-down",
          tooltip: tooltip
        }, void 0)
      }), void 0)]
    }), void 0), jsx(StyledMenu$2, {
      anchorEl: anchorRef.current,
      disablePortal: disablePortal,
      id: "dot-menu-id",
      menuItems: dropdownOptions,
      menuPlacement: "bottom-end",
      onLeave: () => setOpen(false),
      onSelect: handleClick,
      open: open
    }, void 0)]
  }, void 0);
};

const rootClassName$f = 'dot-table-pagination';
// TO-DO: Determine how to apply styles to standard popper element
const paginationItemClassName = 'dot-pagination-menu-item';
const StyledTablePagination = styled.div.withConfig({
  displayName: "TablePaginationstyles__StyledTablePagination",
  componentId: "bs7p0b-0"
})(["", ""], ({
  theme,
  typography
}) => css([".", "{border-top:1px solid ", ";.dot-caption,.MuiInputBase-root{font-family:", ";font-size:", "px;letter-spacing:", ";line-height:", ";}.dot-caption{margin:0;}.dot-menu,.MuiInputBase-root{margin-bottom:0;}}"], rootClassName$f, theme.palette.grey[200], theme.typography[typography].fontFamily, theme.typography[typography].fontSize, theme.typography[typography].letterSpacing, theme.typography[typography].lineHeight));

const ROWS_PER_PAGE_OPTIONS = [10, 25, 50, 100, 150, 200];
/** This component wraps the TablePagination component from @material-ui. */
const DotTablePagination = ({
  ariaLabel,
  className,
  count,
  'data-testid': dataTestId,
  onPageChange,
  onRowsPerPageChange,
  page: _page = 0,
  rowsPerPage: _rowsPerPage = 10,
  typography: _typography = 'subtitle2'
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$f, className);
  const handlePageChange = (event, newPage) => {
    onPageChange && onPageChange(newPage);
  };
  const handleChangeRowsPerPage = evt => {
    onRowsPerPageChange && onRowsPerPageChange(evt);
  };
  return (/* Container is used to pass 'typography' prop to a styled component */
    jsx(StyledTablePagination, Object.assign({
      className: rootClassName$f,
      typography: _typography
    }, {
      children: jsx(TablePagination, {
        "aria-label": ariaLabel,
        classes: {
          root: rootClasses,
          selectIcon: 'dot-icon',
          selectLabel: 'dot-caption',
          displayedRows: 'dot-caption',
          menuItem: paginationItemClassName,
          selectRoot: 'dot-menu'
        },
        component: "div",
        count: count,
        "data-testid": dataTestId,
        onPageChange: handlePageChange,
        onRowsPerPageChange: handleChangeRowsPerPage,
        page: _page,
        rowsPerPage: _rowsPerPage,
        rowsPerPageOptions: [...ROWS_PER_PAGE_OPTIONS]
      }, void 0)
    }), void 0)
  );
};

const rootClassName$e = 'dot-table';
const StyledPaper = styled(Paper).withConfig({
  displayName: "Tablestyles__StyledPaper",
  componentId: "s95z6y-0"
})(["", ""], ({
  theme
}) => css(["&.", "{overflow:hidden;border:1px solid ", ";&.loading{opacity:0.4;pointer-events:none;.dot-table-pagination{display:none;}}}"], rootClassName$e, theme.palette.layer.n100));
const StyledTableContainer = styled(TableContainer).withConfig({
  displayName: "Tablestyles__StyledTableContainer",
  componentId: "s95z6y-1"
})(["", ""], ({
  theme
}) => css(["&.dot-table-container{border-radius:4px;align-items:stretch;flex-direction:column;justify-content:center;table{width:100%;td,th{.dot-cell-typography{margin:0;}}.Mui-selected:not(:hover){background-color:", ";}.MuiTableRow-head{height:56px;}.MuiTableCell-root{border-bottom:1px solid ", ";}.MuiTableRow-root{height:52px;}}}"], theme.palette.grey[200], theme.palette.layer.n100));
const StyledMenu$1 = styled(DotMenu).withConfig({
  displayName: "Tablestyles__StyledMenu",
  componentId: "s95z6y-2"
})([".dot-ul > li{padding:0;> button{width:100%;margin:0;justify-content:flex-start;}}"]);

const getFormattedTableCellValue = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
value, typographyVariant) => {
  if (isString$1(value) || isNumber(value)) {
    return jsx(DotTypography, Object.assign({
      className: "dot-cell-typography",
      variant: typographyVariant
    }, {
      children: value
    }), void 0);
  }
  return value;
};
// If maxHeight is provided, make this the max height for the
// table container. If it is not provided but stickyHeader is true,
// calculate a max height based on screen size.
const getContainerMaxHeightStyle = (stickyHeader, maxHeight) => {
  const maxHeightStickyHeader = stickyHeader ? 'calc(100vh - 76px)' : '';
  return maxHeight ? maxHeight : maxHeightStickyHeader;
};
const getSelectedRowIds = (id, isChecked, selectedIds) => {
  const newIds = [...selectedIds];
  if (isChecked) {
    !selectedIds.includes(id) && newIds.push(id);
  } else {
    const index = selectedIds.indexOf(id);
    if (index > -1) {
      newIds.splice(index, 1);
    }
  }
  return newIds;
};
const getBulkSelectedRowIds = (isChecked, selectedIds, pageData) => {
  const newIds = [...selectedIds];
  if (isChecked) {
    pageData.forEach(({
      id
    }) => {
      if (!newIds.includes(id)) {
        newIds.push(id);
      }
    });
  } else {
    pageData.forEach(({
      id
    }) => {
      const index = newIds.indexOf(id);
      if (index > -1) {
        newIds.splice(index, 1);
      }
    });
  }
  return newIds;
};

const rootClassName$d = 'dot-td';
const StyledTableCell = styled(TableCell).withConfig({
  displayName: "TableCellstyles__StyledTableCell",
  componentId: "e84k25-0"
})(["", ""], () => css(["&.", "{padding-top:0;padding-bottom:0;&.actionItems,&.noWrap p{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}&.actionItems{max-width:0;text-align:right;text-overflow:clip;}&.noWrap p{max-width:calc(100% - 1px);}.action-cell-wrapper{width:100%;}}"], rootClassName$d));

/**
 * A wrapper component around the TableCell component from @material-ui.
 */
const DotBodyCell = ({
  ariaLabel,
  align,
  cellKey,
  className,
  colspan,
  'data-testid': dataTestId,
  noWrap,
  onActionMenuTrigger,
  typography,
  value
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    const noWrapTableCell = document.getElementsByClassName('noWrap');
    Array.from(noWrapTableCell).forEach(truncatedText => {
      const isOverflowing = truncatedText.clientWidth < truncatedText.scrollWidth || truncatedText.clientHeight < truncatedText.scrollHeight;
      if (isOverflowing) {
        truncatedText.setAttribute('title', truncatedText.innerText);
      }
    });
    // on window resize, set action column to menu or icon button
    if (Array.isArray(value)) {
      getActionColumn();
      window.addEventListener('resize', getActionColumn);
      return () => {
        window.removeEventListener('resize', Array.isArray(value) && getActionColumn);
      };
    }
  }, []);
  // Logic to determine action column as menu or icon button
  const getActionColumn = () => {
    const iconBtnWidth = document.getElementsByClassName('dot-table-action-icon');
    const getTotalActionItem = Array.isArray(value) && value.length;
    const actionTableCellWidth = getTotalActionItem * (iconBtnWidth.length > 0 && iconBtnWidth[0].clientWidth);
    const isOverflowing = actionTableCellWidth > (wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current.clientWidth);
    setShowMenu(isOverflowing);
  };
  const rootClasses = useStylesWithRootClass(rootClassName$d, className, noWrap && 'noWrap', Array.isArray(value) && 'actionItems');
  const getTableCellValue = () => {
    if (Array.isArray(value)) {
      return jsx("div", Object.assign({
        className: "action-cell-wrapper",
        ref: wrapperRef
      }, {
        children: showMenu ? jsx(DotIconButton, {
          className: "dot-table-action-icon",
          iconId: "options",
          iconSize: "small",
          onClick: () => onActionMenuTrigger(wrapperRef.current, value),
          size: "small"
        }, void 0) : value.map((item, index) => jsx(DotIconButton, {
          className: "dot-table-action-icon",
          "data-testid": item.dataTestId,
          disabled: item.disabled,
          iconId: item.iconId,
          iconSize: "small",
          onClick: item.onclick,
          size: "small",
          tooltip: item.tooltip
        }, `${cellKey}-icon-${index}`))
      }), void 0);
    }
    return getFormattedTableCellValue(value, typography);
  };
  return jsx(StyledTableCell, Object.assign({
    align: align,
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    colSpan: colspan,
    "data-testid": dataTestId
  }, {
    children: getTableCellValue()
  }), void 0);
};

const rootClassName$c = 'dot-td-checkbox';
const StyledTableBodyCheckboxCell = styled(TableCell).withConfig({
  displayName: "TableBodyCheckboxCellstyles__StyledTableBodyCheckboxCell",
  componentId: "ebk3sz-0"
})(["", ""], ({
  theme
}) => css(["&.", "{.dot-form-control-label{margin:0;}width:", ";padding:", ";}"], rootClassName$c, theme.spacing(5), theme.spacing(0, 1)));

const DotBodyCheckboxCell = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  isChecked,
  onChange,
  rowId
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$c, className);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(isChecked);
  /** This effect is used when 'checked' status is changed from the outside  */
  useEffect(() => {
    setIsCheckboxChecked(isChecked);
  }, [isChecked]);
  const handleChange = e => {
    const checked = e.target.checked;
    setIsCheckboxChecked(checked);
    onChange(checked, rowId);
  };
  return jsx(StyledTableBodyCheckboxCell, Object.assign({
    align: "left",
    className: rootClasses,
    "data-testid": dataTestId
  }, {
    children: jsx(DotCheckbox, {
      ariaLabel: ariaLabel,
      checked: isCheckboxChecked,
      "data-testid": "table-body-checkbox",
      onChange: handleChange,
      size: "small"
    }, void 0)
  }), void 0);
};

const rootClassName$b = 'dot-tr';
const StyledTableRowStyles = styled(TableRow).withConfig({
  displayName: "TableRowstyles__StyledTableRowStyles",
  componentId: "a4fx2l-0"
})(["", ""], ({
  theme
}) => css(["&.", "{&.selected{background-color:", ";}}"], rootClassName$b, theme.palette.primary[50]));

/**
 * A wrapper component around the TableRow component from @material-ui. This component can be used
 * for manipulating data prior to displaying the data inside the table
 */
const DotTableRow = ({
  columns,
  className,
  data,
  multiSelectBody,
  onActionMenuTrigger,
  onClick,
  rowKey,
  selected,
  typography
}) => {
  const id = data.id;
  const rowData = data.rowData;
  const handleOnClick = event => {
    onClick && onClick(event, id.toString());
  };
  const {
    onCheckIndividualChange,
    selectedTableRowIds
  } = multiSelectBody || {};
  const isCheckboxChecked = selectedTableRowIds && selectedTableRowIds.includes(id) || false;
  const rootClasses = useStylesWithRootClass(rootClassName$b, isCheckboxChecked ? 'selected' : undefined, className);
  const renderCheckboxCell = () => {
    return jsx(DotBodyCheckboxCell, {
      ariaLabel: "Click to select this row",
      isChecked: isCheckboxChecked,
      onChange: onCheckIndividualChange,
      rowId: id
    }, void 0);
  };
  return jsxs(StyledTableRowStyles, Object.assign({
    classes: {
      root: rootClasses
    },
    onClick: handleOnClick,
    selected: selected
  }, {
    children: [multiSelectBody && renderCheckboxCell(), columns.map((column, index) => {
      return jsx(DotBodyCell, {
        align: column.align,
        cellKey: rowKey,
        typography: typography,
        className: rowData.className && `${rowData.className}-${column.id}`,
        noWrap: column.truncate,
        onActionMenuTrigger: (menuRef, menuItem) => onActionMenuTrigger(menuRef, menuItem),
        value: rowData[column.id]
      }, index);
    })]
  }), void 0);
};
const EmptyDotRow = ({
  cols,
  message: _message = 'No data found',
  typography
}) => {
  return jsx(TableRow, Object.assign({
    className: "empty-row"
  }, {
    children: jsx(DotBodyCell, {
      typography: typography,
      colspan: cols,
      value: _message
    }, void 0)
  }), CreateUUID());
};

const rootClassName$a = 'dot-tbody';
const StyledTableBody = styled(TableBody).withConfig({
  displayName: "TableBodystyles__StyledTableBody",
  componentId: "wszqgk-0"
})(["", ""], ({
  theme
}) => css(["&.", "{tr:hover{background-color:", ";}tr:last-child td{border-bottom:none;}.empty-row td{text-align:center;}}"], rootClassName$a, theme.palette.grey[50]));

/**
 * A wrapper component around the TableBody component from @material-ui. This component can be used
 * to determine the functionality of the table.
 */
const DotTableBody = ({
  columns,
  data,
  emptyMessage,
  multiSelectBody,
  onRowClick,
  typography
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuProps, setMenuProps] = useState([]);
  const [open, setOpen] = useState(false);
  const handleActionMenuTrigger = (el, menuItem) => {
    setAnchorEl(el);
    setMenuProps(menuItem);
    setOpen(!open);
  };
  const menuId = CreateUUID();
  const tableId = CreateUUID();
  const onLeave = () => {
    setOpen(false);
  };
  const getTableBodyRows = () => {
    return data.length === 0 ? jsx(EmptyDotRow, {
      cols: columns.length,
      message: emptyMessage,
      typography: typography
    }, void 0) : data.map((row, index) => {
      return jsx(DotTableRow, {
        className: row.className,
        columns: columns,
        data: row,
        multiSelectBody: multiSelectBody,
        onActionMenuTrigger: handleActionMenuTrigger,
        onClick: onRowClick,
        rowKey: `${tableId}-row-${index}`,
        selected: row.selected,
        typography: typography
      }, index);
    });
  };
  return jsxs(Fragment$1, {
    children: [jsx(StyledTableBody, Object.assign({
      classes: {
        root: rootClassName$a
      }
    }, {
      children: getTableBodyRows()
    }), void 0), jsx(StyledMenu$1, {
      anchorEl: anchorEl,
      disablePortal: true,
      id: menuId,
      menuItems: menuProps,
      menuPlacement: "bottom-end",
      onLeave: onLeave,
      open: open
    }, void 0)]
  }, void 0);
};

const rootClassName$9 = 'dot-th';
const StyledTableHeaderCell = styled(TableCell).withConfig({
  displayName: "TableHeaderCellstyles__StyledTableHeaderCell",
  componentId: "nko9j-0"
})(["", ""], ({
  theme
}) => css(["&.", "{&.MuiTableCell-alignCenter > span.MuiTableSortLabel-root{padding-left:26px;}.dot-cell-typography{font-family:", ";}}"], rootClassName$9, theme.typography.h4.fontFamily));

/**
 * A wrapper component around the TableCell component from @material-ui. This component should only
 * be used inside DotHeaderRow.
 */
const DotHeaderCell = ({
  align,
  typography,
  createSortHandler,
  id,
  order,
  orderBy,
  sortable: _sortable = true,
  sortDirection,
  uid,
  value,
  width
}) => {
  const headerTitle = isString$1(value) ? value : null;
  const formattedValue = getFormattedTableCellValue(value, typography);
  const getCellValue = () => {
    if (_sortable) {
      const orderById = orderBy === id;
      return jsx(TableSortLabel, Object.assign({
        active: orderById,
        "data-testid": "table-sort-label",
        direction: orderById ? order : 'asc',
        onClick: createSortHandler && createSortHandler(id)
      }, {
        children: formattedValue
      }), void 0);
    }
    return formattedValue;
  };
  const headerCellStyle = width ? {
    width: width
  } : undefined;
  return jsx(StyledTableHeaderCell, Object.assign({
    align: align,
    classes: {
      root: rootClassName$9
    },
    sortDirection: _sortable ? sortDirection : undefined,
    style: headerCellStyle,
    title: headerTitle
  }, {
    children: getCellValue()
  }), uid);
};

const rootClassName$8 = 'dot-th-checkbox';
const StyledTableHeaderCheckboxCell = styled(TableCell).withConfig({
  displayName: "TableHeaderCheckboxCellstyles__StyledTableHeaderCheckboxCell",
  componentId: "ymqg8x-0"
})(["", ""], ({
  theme
}) => css(["&.", "{.dot-form-control-label{margin:0;}width:", ";padding:", ";}"], rootClassName$8, theme.spacing(5), theme.spacing(0, 1)));

const DotHeaderCheckboxCell = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  multiSelectState,
  onCheckAllChange
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$8, className);
  const [checkboxState, setCheckboxState] = useState('unchecked');
  useEffect(() => {
    setCheckboxState(multiSelectState);
  }, [multiSelectState]);
  const getNextCheckboxState = currentCheckboxState => {
    if (currentCheckboxState === 'indeterminate' || currentCheckboxState === 'checked') return 'unchecked';
    return 'checked';
  };
  const isIndeterminate = checkboxState === 'indeterminate';
  const isCheckboxChecked = checkboxState === 'checked';
  const handleChange = () => {
    const nextState = getNextCheckboxState(checkboxState);
    setCheckboxState(nextState);
    onCheckAllChange(nextState === 'checked', []);
  };
  return jsx(StyledTableHeaderCheckboxCell, Object.assign({
    align: "left",
    className: rootClasses,
    "data-testid": dataTestId
  }, {
    children: jsx(DotCheckbox, {
      ariaLabel: ariaLabel,
      checked: isCheckboxChecked,
      "data-testid": "multi-select-checkbox",
      indeterminate: isIndeterminate,
      onChange: handleChange,
      size: "small"
    }, void 0)
  }), void 0);
};

/**
 * A wrapper component around the TableHead component from @material-ui. This component can be used
 * to determine the functionality of the table header.
 */
const DotHeaderRow = ({
  columns,
  multiSelectHeader,
  onRequestSort,
  order,
  orderBy,
  sortable: _sortable = false,
  typography
}) => {
  const createSortHandler = property => _event => {
    onRequestSort(property);
  };
  const [multiSelectState, setMultiSelectState] = useState('unchecked');
  const {
    onCheckAllChange,
    pageData,
    selectedTableRowIds
  } = multiSelectHeader || {};
  useEffect(() => {
    if (!multiSelectHeader) return;
    if (selectedTableRowIds && selectedTableRowIds.length > 0 && pageData) {
      const itemsNumber = pageData.length;
      const checkedItemsNumber = pageData.filter(row => selectedTableRowIds.includes(row.id)).length;
      if (itemsNumber === checkedItemsNumber) {
        setMultiSelectState('checked');
        return;
      }
      if (checkedItemsNumber > 0) {
        setMultiSelectState('indeterminate');
        return;
      }
    }
    setMultiSelectState('unchecked');
  }, [multiSelectHeader]);
  const renderMultiSelectCell = () => {
    return jsx(DotHeaderCheckboxCell, {
      ariaLabel: "Click to select all table page rows",
      multiSelectState: multiSelectState,
      onCheckAllChange: onCheckAllChange
    }, void 0);
  };
  return jsx(TableHead, Object.assign({
    classes: {
      root: 'dot-thead'
    }
  }, {
    children: jsxs(TableRow, Object.assign({
      classes: {
        root: 'dot-tr'
      }
    }, {
      children: [multiSelectHeader && renderMultiSelectCell(), columns.map(cell => {
        return jsx(DotHeaderCell, {
          align: cell.align,
          createSortHandler: createSortHandler,
          id: cell.id,
          order: order,
          orderBy: orderBy,
          sortDirection: orderBy === cell.id ? order : undefined,
          sortable: _sortable && cell.sortable,
          truncate: cell.truncate,
          typography: typography,
          uid: CreateUUID(),
          value: cell.label,
          width: cell.width
        }, CreateUUID());
      })]
    }), void 0)
  }), void 0);
};

const rootClassName$7 = 'dot-table-selection-toolbar';
const StyledTableSelectionToolbar = styled(DotActionToolbar).withConfig({
  displayName: "TableSelectionToolbarstyles__StyledTableSelectionToolbar",
  componentId: "qpx3y9-0"
})(["", ""], ({
  theme
}) => css(["&.", "{display:flex;align-items:center;justify-content:space-between;background-color:", ";.dot-selected-rows-container{display:flex;align-items:center;.dot-button{padding:", ";}}.dot-selected-rows-heading{font-weight:bold;}.dot-selected-rows-divider{padding:", ";}}"], rootClassName$7, theme.palette.primary[50], theme.spacing(0.25, 0.25, 0, 0.5), theme.spacing(0.25, 0, 0, 1)));

const DotTableSelectionToolbar = ({
  ariaLabel,
  bulkActions,
  className,
  'data-testid': dataTestId,
  onClearAll,
  selectedRowsNumber
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$7, className);
  return jsxs(StyledTableSelectionToolbar, Object.assign({
    ariaLabel: ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    variant: "regular"
  }, {
    children: [jsxs("div", Object.assign({
      className: "dot-selected-rows-container"
    }, {
      children: [jsxs(DotTypography, Object.assign({
        className: "dot-selected-rows-heading",
        variant: "h3"
      }, {
        children: [selectedRowsNumber, " selected"]
      }), void 0), onClearAll && jsxs(Fragment$1, {
        children: [jsx(DotTypography, Object.assign({
          className: "dot-selected-rows-divider"
        }, {
          children: "|"
        }), void 0), jsx(DotButton, Object.assign({
          type: "text",
          onClick: onClearAll
        }, {
          children: "Clear all"
        }), void 0)]
      }, void 0)]
    }), void 0), bulkActions && jsx("div", Object.assign({
      className: "dot-bulk-actions"
    }, {
      children: bulkActions
    }), void 0)]
  }), void 0);
};

const TABLE_TYPOGRAPHY_VARIANT = 'body1';
const skeletonRows = 4;
const sortComparator = (a, b, orderBy) => {
  if (b.rowData[orderBy] < a.rowData[orderBy]) {
    return -1;
  }
  if (b.rowData[orderBy] > a.rowData[orderBy]) {
    return 1;
  }
  return 0;
};
const getComparator = (order, orderBy) => (a, b) => {
  const compare = sortComparator(a, b, orderBy);
  return order === 'desc' ? compare : -compare;
};
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((order, orderBy) => {
    const newOrder = comparator(order[0], orderBy[0]);
    return newOrder !== 0 ? newOrder : order[1] - orderBy[1];
  });
  return stabilizedThis.map(el => el[0]);
}
// https://material-ui.com/components/tables/#custom-pagination-options
/**
 * A wrapper component around the Table component from @material-ui. This component can be used for
 *  creating a common structure for tables in the system.
 */
const DotTable = ({
  ariaLabel,
  bodyTypography: _bodyTypography = TABLE_TYPOGRAPHY_VARIANT,
  className,
  columns,
  count,
  data,
  'data-testid': dataTestId,
  emptyMessage,
  footerTypography: _footerTypography = TABLE_TYPOGRAPHY_VARIANT,
  headerTypography: _headerTypography = TABLE_TYPOGRAPHY_VARIANT,
  loading: _loading = false,
  maxHeight,
  multiSelect,
  order: _order = 'asc',
  orderBy,
  onRowClick,
  onUpdateData,
  page: _page = 0,
  rowsPerPage,
  stickyHeader: _stickyHeader = true,
  sortable: _sortable = true,
  toolbar
}) => {
  const [tableOrder, setOrder] = useState(_order);
  const [tableOrderBy, setOrderBy] = useState(orderBy);
  const [tablePage, setPage] = useState(_page);
  const [tableRowsPerPage, setRowsPerPage] = useState(rowsPerPage);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const getSortedData = () => {
    return onUpdateData ? data : stableSort(data, getComparator(_order, orderBy));
  };
  const [pageData, setPageData] = useState(getSortedData().slice(0, rowsPerPage ? rowsPerPage : data.length));
  const rootClasses = useStylesWithRootClass(rootClassName$e, className, _loading ? 'loading' : '');
  const updateData = (newOrder, newOrderBy, newPage, newRowsPerPage) => {
    const newData = stableSort(data, getComparator(newOrder, newOrderBy));
    setPageData(newRowsPerPage ? newData.slice(newPage * newRowsPerPage, newPage * newRowsPerPage + newRowsPerPage) : newData);
  };
  const onSortRequest = property => {
    const isAsc = tableOrderBy === property && tableOrder === 'asc';
    const dataOrder = isAsc ? 'desc' : 'asc';
    setOrder(dataOrder);
    setOrderBy(property);
    setPage(0);
    onUpdateData ? onUpdateData(dataOrder, property, 0, tableRowsPerPage) : updateData(dataOrder, property, 0, tableRowsPerPage);
  };
  const onPageChange = newPage => {
    setPage(newPage);
    onUpdateData ? onUpdateData(tableOrder, tableOrderBy, newPage, tableRowsPerPage) : updateData(tableOrder, tableOrderBy, newPage, tableRowsPerPage);
  };
  const onRowsPerPageChange = evt => {
    const newRowsPerPage = parseInt(evt.target.value);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    onUpdateData ? onUpdateData(tableOrder, tableOrderBy, 0, newRowsPerPage) : updateData(tableOrder, tableOrderBy, 0, newRowsPerPage);
  };
  const getSkeletonData = () => {
    const skeletonData = [];
    const skeletonRow = {
      rowData: {}
    };
    columns.forEach(column => {
      skeletonRow.rowData[column.id] = jsx(DotSkeleton, Object.assign({
        width: "300"
      }, {
        children: jsx("span", {
          children: column.label
        }, void 0)
      }), void 0);
    });
    for (let i = 0; i < (rowsPerPage ? rowsPerPage : skeletonRows); i++) {
      skeletonData.push(skeletonRow);
    }
    return skeletonData;
  };
  const getData = () => {
    const tableBodyData = onUpdateData ? data : pageData;
    return _loading ? getSkeletonData() : tableBodyData;
  };
  const tableData = getData();
  // If table is not paginated (rowsPerPage prop not provided), ignore 'count'.
  // If paging is managed externally (onUpdateData callback provided) then use
  // the 'count' prop for total row count if it is provided, otherwise use
  // -1 (unknown). If paging is managed internally (onUpdateData not provided)
  // ignore 'count' prop and use the length of the provided 'data' for the
  // total row count.
  const getTotalCount = () => {
    const validCount = count || count === 0 ? count : -1;
    const totalCount = onUpdateData ? validCount : data.length;
    return rowsPerPage ? totalCount : null;
  };
  if (count && !rowsPerPage) {
    console.warn("'count' prop is ignored as table is not paginated (no 'rowsPerPage' prop provided)");
  }
  if (count && !onUpdateData) {
    console.warn("'count' prop is ignored as it can be determined by 'data.length' for internally paginated table (no 'onUpdateData' callback provided)");
  }
  const tableClasses = useStylesWithRootClass('dot-table', rowsPerPage ? 'dot-table-paginated' : '');
  const maxHeightStyle = getContainerMaxHeightStyle(_stickyHeader, maxHeight);
  const handleCheckAllChange = isChecked => {
    setSelectedRowIds(prevRowIds => {
      const newIds = getBulkSelectedRowIds(isChecked, prevRowIds, onUpdateData ? data : pageData);
      multiSelect.onCheckAllChange && multiSelect.onCheckAllChange(isChecked, newIds);
      return newIds;
    });
  };
  const handleRowSelectionChange = (isChecked, rowId) => {
    setSelectedRowIds(prevRowIds => {
      const newIds = getSelectedRowIds(rowId, isChecked, prevRowIds);
      multiSelect.onCheckRowChange && multiSelect.onCheckRowChange(isChecked, newIds);
      return newIds;
    });
  };
  const handleClearAll = () => {
    setSelectedRowIds([]);
    multiSelect.onClearAllChange && multiSelect.onClearAllChange(false, []);
  };
  const multiSelectBody = multiSelect && {
    onCheckIndividualChange: handleRowSelectionChange,
    selectedTableRowIds: selectedRowIds
  };
  const multiSelectHeader = multiSelect && {
    onCheckAllChange: handleCheckAllChange,
    pageData: onUpdateData ? data : pageData,
    selectedTableRowIds: selectedRowIds
  };
  const selectedRowsNumber = selectedRowIds.length;
  const renderToolbar = () => {
    const {
      bulkActions
    } = multiSelect || {};
    return multiSelect && selectedRowsNumber ? jsx(DotTableSelectionToolbar, {
      ariaLabel: "Selected table rows with bulk actions",
      onClearAll: (multiSelect === null || multiSelect === void 0 ? void 0 : multiSelect.onClearAllChange) && handleClearAll,
      selectedRowsNumber: selectedRowsNumber,
      bulkActions: bulkActions
    }, void 0) : toolbar;
  };
  return jsxs(StyledPaper, Object.assign({
    className: rootClasses,
    elevation: 0
  }, {
    children: [renderToolbar(), jsx(StyledTableContainer, Object.assign({
      className: "dot-table-container",
      "data-testid": dataTestId,
      style: {
        maxHeight: maxHeightStyle
      }
    }, {
      children: jsxs(Table, Object.assign({
        "aria-label": ariaLabel,
        className: tableClasses,
        padding: "normal",
        stickyHeader: _stickyHeader
      }, {
        children: [jsx(DotHeaderRow, {
          columns: columns,
          multiSelectHeader: multiSelectHeader,
          onRequestSort: onSortRequest,
          order: tableOrder,
          orderBy: tableOrderBy,
          sortable: _sortable,
          typography: _headerTypography
        }, void 0), jsx(DotTableBody, {
          columns: columns,
          data: tableData,
          emptyMessage: emptyMessage,
          multiSelectBody: multiSelectBody,
          onRowClick: onRowClick,
          typography: _bodyTypography
        }, void 0)]
      }), void 0)
    }), void 0), rowsPerPage && jsx(DotTablePagination, {
      count: getTotalCount(),
      onPageChange: onPageChange,
      onRowsPerPageChange: onRowsPerPageChange,
      page: tablePage,
      rowsPerPage: tableRowsPerPage,
      typography: _footerTypography
    }, void 0)]
  }), void 0);
};

const getMenuItem = action => {
  const startIcon = action.iconId && jsx(DotIcon, {
    iconId: action.iconId
  }, void 0);
  return jsx(DotButton, Object.assign({
    className: "table-menu-button",
    "data-testid": action['data-testid'],
    disabled: action.disabled,
    startIcon: startIcon,
    onClick: action.onClick,
    type: "text"
  }, {
    children: action.label
  }), void 0);
};
const DotTableAction = ({
  'data-testid': dataTestId,
  disabled: _disabled = false,
  iconId,
  onClick,
  tooltip
}) => {
  return jsx(DotIconButton, {
    className: "dot-table-action-icon",
    "data-testid": dataTestId,
    disabled: _disabled,
    iconId: iconId,
    iconSize: "small",
    onClick: onClick,
    size: "small",
    tooltip: tooltip
  }, void 0);
};

const rootClassName$6 = 'dot-table-actions';
const TableActionsContainer = styled.div.withConfig({
  displayName: "TableActionsstyles__TableActionsContainer",
  componentId: "sc-8lo813-0"
})(["overflow:hidden;text-overflow:clip;text-align:right;"]);
const StyledMenu = styled(DotMenu).withConfig({
  displayName: "TableActionsstyles__StyledMenu",
  componentId: "sc-8lo813-1"
})(["", ""], ({
  theme
}) => css(["&.dot-menu .table-menu-button{margin-left:0;padding-left:0;&:hover{background-color:", ";}}"], theme.palette.grey[50]));

const DotTableActions = ({
  actions,
  id
}) => {
  const wrapperRef = useRef(null);
  const [menuItems, setMenuItems] = useState();
  const [selectionMap, setSelectionMap] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const items = actions.map(action => ({
      ariaLabel: action.ariaLabel,
      children: getMenuItem(action),
      disabled: action.disabled,
      key: action.id
    }));
    setMenuItems(items);
    const map = {};
    actions.forEach(action => {
      map[action.id] = action;
    });
    setSelectionMap(map);
    checkForOverflowing();
    window.addEventListener('resize', checkForOverflowing);
    return () => {
      window.removeEventListener('resize', checkForOverflowing);
    };
  }, []);
  const checkForOverflowing = () => {
    if (actions.length > 1) {
      const actionIcons = document.getElementsByClassName('dot-table-action-icon');
      const actionTableCellWidth = 3 * (actionIcons.length > 0 && actionIcons[0].clientWidth);
      const isOverflowing = actionTableCellWidth > (wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current.clientWidth);
      setShowMenu(isOverflowing);
    }
  };
  const toggleMenu = event => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };
  const onSelect = (_event, _menuId, itemKey) => {
    selectionMap[itemKey].onClick(null);
  };
  const onLeave = () => {
    setMenuOpen(false);
  };
  const renderTableActions = () => {
    return actions && actions.map((action, index) => index < 2 && jsx(DotTableAction, {
      iconId: action.iconId,
      label: action.label,
      tooltip: action.tooltip || action.label,
      onClick: action.onClick
    }, `action-${index}`));
  };
  return jsxs(Fragment$1, {
    children: [jsxs(TableActionsContainer, Object.assign({
      className: rootClassName$6,
      ref: wrapperRef
    }, {
      children: [!showMenu && renderTableActions(), (showMenu || actions.length > 2) && jsx(DotIconButton, {
        className: "dot-table-action-icon",
        iconId: "options",
        iconSize: "small",
        onClick: toggleMenu,
        size: "small",
        tooltip: "More options"
      }, void 0)]
    }), void 0), jsx(StyledMenu, {
      anchorEl: anchorEl,
      id: id,
      menuItems: menuItems,
      menuPlacement: "bottom-end",
      onLeave: onLeave,
      open: menuOpen,
      onSelect: onSelect
    }, void 0)]
  }, void 0);
};

const rootClassName$5 = 'dot-tabs';
const StyledTabs = styled(Tabs).withConfig({
  displayName: "Tabsstyles__StyledTabs",
  componentId: "sc-1pmrz8k-0"
})(["", ""], ({
  theme
}) => css(["&.", "{&.MuiTabs-root{width:100%;}.dot-tab-label-container{display:flex;.dot-tab-label{padding-top:", ";}}.MuiTab-root{box-shadow:inset 0px -1px 0px ", ";max-width:360px;min-width:0;}.MuiIcon-root{display:inline;padding-right:", ";}}"], rootClassName$5, theme.spacing(0.5), theme.palette.layer.n100, theme.spacing(0.5)));

const DotTabs = ({
  centered: _centered = false,
  className,
  color: _color = 'primary',
  'data-testid': dataTestId,
  initialValue: _initialValue = 0,
  onChange,
  scrollButtons,
  tabs,
  variant: _variant = 'standard'
}) => {
  const [value, setValue] = useState(_initialValue);
  const rootClasses = useStylesWithRootClass(rootClassName$5, className);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (_event, val) => {
    setValue(val);
    onChange && onChange(val);
  };
  const tabArray = [];
  tabs.forEach((tab, index) => {
    const icon = tab.iconId ? jsx(DotIcon, {
      iconId: tab.iconId
    }, void 0) : null;
    const label = jsxs("div", Object.assign({
      className: "dot-tab-label-container"
    }, {
      children: [icon && jsx("span", {
        children: icon
      }, void 0), jsx("span", Object.assign({
        className: "dot-tab-label"
      }, {
        children: tab.label
      }), void 0)]
    }), void 0);
    const tabElement = jsx(Tab, {
      "aria-label": tab.ariaLabel,
      "data-testid": tab['data-testid'],
      disableRipple: true,
      disabled: tab.disabled,
      label: label,
      value: tab.value
    }, index);
    tabArray.push(tabElement);
  });
  return jsx(StyledTabs, Object.assign({
    "aria-label": "tabs",
    centered: _centered,
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId,
    indicatorColor: _color,
    onChange: handleChange,
    scrollButtons: scrollButtons,
    textColor: _color,
    value: value,
    variant: _variant
  }, {
    children: tabArray
  }), void 0);
};

const rootClassName$4 = 'dot-file-upload';
const containerClassName = `${rootClassName$4}-container`;
const dropZoneClassName = `${rootClassName$4}-drop-zone`;
const StyledFileUploadContainer = styled.div.withConfig({
  displayName: "FileUploadstyles__StyledFileUploadContainer",
  componentId: "sc-1q8bcxy-0"
})(["", ""], ({
  theme
}) => css(["&.", "{.dot-max-files-message.dot-max-files-reached{color:", ";}}"], containerClassName, theme.palette.error[500]));
const StyledFileUpload = styled.div.withConfig({
  displayName: "FileUploadstyles__StyledFileUpload",
  componentId: "sc-1q8bcxy-1"
})(["", ""], ({
  theme
}) => css(["&.", ".", "{align-items:center;background:", ";border:2px dashed ", ";border-radius:4px;color:", ";display:flex;flex-direction:column;flex-wrap:wrap;height:240px;justify-content:center;padding:", ";margin-bottom:", ";text-align:center;&.disabled .dot-typography{color:", ";}.dot-icon{color:", ";font-size:100px;i.dot-i{height:100px;}}}"], rootClassName$4, dropZoneClassName, theme.palette.layer.n50, theme.palette.layer.n300, theme.palette.layer.n500, theme.spacing(3, 0), theme.spacing(1), theme.palette.layer.n300, theme.palette.layer.n100));

const rootClassName$3 = 'dot-file-list-item';
const StyledFileListItem = styled(StyledListItem).withConfig({
  displayName: "FileListItemstyles__StyledFileListItem",
  componentId: "sc-6mp1tz-0"
})(["", ""], ({
  theme
}) => css(["&.", "{border-bottom:1px solid ", ";&:hover{cursor:pointer;background:", ";}&:focus-visible{background-color:", ";outline:none;}&.file-success:not(:hover,:focus-visible) .", "-end-icon{i:before{color:", ";}&:focus-visible i:before{color:unset;}}&.file-error:not(:hover,:focus-visible) .", "-end-icon{i:before,.MuiListItemText-secondary{color:", ";}&:focus-visible i:before{color:unset;}}.dot-typography,.file-item-text{flex-grow:2;padding-left:", ";}.file-item-text{display:flex;flex-direction:column;.MuiTypography-body2{color:", ";}}}"], rootClassName$3, theme.palette.layer.n100, theme.palette.layer.n50, theme.palette.layer.n100, rootClassName$3, theme.palette.secondary.main, rootClassName$3, theme.palette.error.main, theme.spacing(1), theme.palette.error.main));

const DotFileListItem = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  deleteFile,
  disableDelete,
  error: _error = false,
  errorText,
  file,
  onClick,
  onKeyPress,
  tabIndex: _tabIndex = 0
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$3, className, _error ? 'file-error' : 'file-success');
  const defaultIcon = _error ? 'error-solid' : 'check-solid';
  const [endIcon, setEndIcon] = useState(defaultIcon);
  const handleItemClick = clickedFile => _event => onClick === null || onClick === void 0 ? void 0 : onClick(clickedFile);
  const handleItemDelete = fileId => event => {
    event.stopPropagation();
    deleteFile(fileId);
  };
  return jsxs(StyledFileListItem, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    onBlur: () => setEndIcon(defaultIcon),
    onClick: handleItemClick(file),
    onFocus: () => setEndIcon('delete'),
    onMouseEnter: () => setEndIcon('delete'),
    onMouseLeave: () => setEndIcon(defaultIcon),
    onKeyPress: onKeyPress,
    tabIndex: _tabIndex
  }, {
    children: [jsx(DotIcon, {
      "data-testid": dataTestId && `${dataTestId}-start-icon`,
      iconId: "file"
    }, void 0), jsxs("div", Object.assign({
      className: "file-item-text"
    }, {
      children: [jsx(DotTypography, Object.assign({
        variant: "body1"
      }, {
        children: file.path
      }), void 0), _error && jsx(DotTypography, Object.assign({
        variant: "body2"
      }, {
        children: errorText
      }), void 0)]
    }), void 0), jsx(DotIconButton, {
      className: `${rootClassName$3}-end-icon`,
      "data-testid": dataTestId && `${dataTestId}-end-icon`,
      disabled: disableDelete,
      iconId: endIcon,
      onClick: handleItemDelete(file.id)
    }, void 0)]
  }), void 0);
};

const renderMaxSizeMessage = maxSizeMB => jsxs(DotTypography, Object.assign({
  variant: "body2"
}, {
  children: ["File size should not exceed ", maxSizeMB, "MB."]
}), void 0);
const renderMaxFilesMessage = (maxFiles, maxFilesClasses) => jsxs(DotTypography, Object.assign({
  className: maxFilesClasses,
  variant: "body2"
}, {
  children: [maxFiles, " files are the maximum number of files you can upload."]
}), void 0);
const renderSelectFilesButton = (isUploadDisabled, onButtonClick) => jsx(DotButton, Object.assign({
  disabled: isUploadDisabled,
  onClick: onButtonClick
}, {
  children: "Select file(s)"
}), void 0);
const renderActiveDragArea = () => jsxs(Fragment$1, {
  children: [jsx(DotIcon, {
    iconId: "upload-file"
  }, void 0), jsx(DotTypography, Object.assign({
    variant: "h3"
  }, {
    children: "Drop the file(s) here ..."
  }), void 0)]
}, void 0);
const renderDragAndDropArea = (isUploadDisabled, onSelectButtonClick) => jsxs(Fragment$1, {
  children: [jsx(DotIcon, {
    iconId: "upload-file"
  }, void 0), jsxs(DotTypography, Object.assign({
    variant: "h3"
  }, {
    children: ["Drag and drop your file(s) here ", jsx("br", {}, void 0), " or"]
  }), void 0), renderSelectFilesButton(isUploadDisabled, onSelectButtonClick)]
}, void 0);
const renderDropzoneContent = ({
  buttonOnly,
  isDragActive,
  isUploadDisabled,
  open
}) => {
  if (buttonOnly) {
    return renderSelectFilesButton(isUploadDisabled, open);
  } else {
    return isDragActive ? renderActiveDragArea() : renderDragAndDropArea(isUploadDisabled, open);
  }
};
const getUploadedFilesList = ({
  maxSize,
  onFileClick,
  onFileDelete,
  uploadedFiles
}) => uploadedFiles.map((fileToBeParsed, index) => parseListItem({
  fileToBeParsed,
  onFileDelete,
  onFileClick,
  index,
  maxSize
}));
const parseListItem = ({
  onFileDelete,
  onFileClick,
  fileToBeParsed,
  index,
  maxSize
}) => {
  const fileErrors = fileToBeParsed.errors;
  const parsedFile = fileToBeParsed.file;
  const hasErrors = fileErrors.length > 0;
  let errorText;
  if (hasErrors) {
    errorText = fileErrors.map(e => {
      switch (e.code) {
        case 'file-too-large':
          return `File exceeds ${maxSize}MB`;
        case 'file-invalid-type':
        case 'too-many-files':
          return e.message;
        default:
          console.log('Unknown error', e);
          return e.message;
      }
    }).join(', ');
  }
  return {
    child: jsx(DotFileListItem, {
      deleteFile: onFileDelete,
      error: hasErrors,
      errorText: errorText,
      file: {
        id: index,
        path: parsedFile.path
      },
      onClick: onFileClick
    }, void 0)
  };
};
const mapAcceptedFiles = files => files.map(value => ({
  file: value,
  errors: []
}));
const joinAcceptedAndRejectedFiles = (filesAccepted, filesRejected) => mapAcceptedFiles(filesAccepted).concat(filesRejected);

const DotFileUpload = ({
  accept,
  ariaLabel,
  buttonOnly: _buttonOnly = false,
  className,
  'data-testid': dataTestId,
  disabled,
  hideFilesList,
  maxFiles,
  maxSize,
  onChange,
  onDragEnter,
  onFileClick
}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [hasMaxFilesError, setHasMaxFilesError] = useState(false);
  const isUploadDisabled = disabled || maxFiles && uploadedFiles.length >= maxFiles;
  const rootClasses = useStylesWithRootClass(rootClassName$4, className, !_buttonOnly ? dropZoneClassName : '', isUploadDisabled ? 'disabled' : '');
  const maxFilesClasses = useStylesWithRootClass('dot-max-files-message', hasMaxFilesError ? 'dot-max-files-reached' : '');
  const allowMultiple = maxFiles === undefined || maxFiles > 1;
  const setNewlyUploadedFiles = (acceptedFiles, fileRejections) => {
    const joinedFiles = joinAcceptedAndRejectedFiles(acceptedFiles, fileRejections);
    setUploadedFiles(joinedFiles);
    onChange(joinedFiles);
  };
  const parseFiles = (acceptedFiles, fileRejections) => {
    const totalFilesToUpload = uploadedFiles.length + acceptedFiles.length + fileRejections.length;
    const isMaxFilesReached = maxFiles && totalFilesToUpload > maxFiles;
    if (isMaxFilesReached) {
      setHasMaxFilesError(true);
      return;
    }
    setHasMaxFilesError(false);
    const joinedUploadedFiles = joinAcceptedAndRejectedFiles(acceptedFiles, fileRejections);
    setUploadedFiles(joinedUploadedFiles);
    onChange(joinedUploadedFiles);
  };
  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    hideFilesList ? setNewlyUploadedFiles(acceptedFiles, fileRejections) : parseFiles(acceptedFiles, fileRejections);
  }, [hideFilesList, setNewlyUploadedFiles, parseFiles]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open
  } = useDropzone({
    accept,
    disabled: isUploadDisabled,
    maxSize: maxSize * 1000000,
    multiple: allowMultiple,
    noClick: true,
    onDragEnter,
    onDrop
  });
  const deleteFile = fileIndexToBeRemoved => {
    uploadedFiles.splice(fileIndexToBeRemoved, 1);
    setUploadedFiles([...uploadedFiles]);
    onChange(uploadedFiles);
  };
  const uploadedFilesList = getUploadedFilesList({
    maxSize,
    onFileClick,
    onFileDelete: deleteFile,
    uploadedFiles
  });
  return jsxs(StyledFileUploadContainer, Object.assign({
    className: containerClassName
  }, {
    children: [jsxs(StyledFileUpload, Object.assign({}, getRootProps(), {
      "aria-label": ariaLabel,
      className: rootClasses,
      "data-testid": dataTestId
    }, {
      children: [jsx("input", Object.assign({}, getInputProps()), void 0), renderDropzoneContent({
        buttonOnly: _buttonOnly,
        isDragActive,
        isUploadDisabled,
        open
      })]
    }), void 0), maxSize && renderMaxSizeMessage(maxSize), maxFiles && renderMaxFilesMessage(maxFiles, maxFilesClasses), !hideFilesList && jsx(DotList, {
      "data-testid": dataTestId && `${dataTestId}-file-list`,
      items: uploadedFilesList,
      width: "100%"
    }, void 0)]
  }), void 0);
};

const rootClassName$2 = 'dot-divider';
const StyledDivider = styled(Divider).withConfig({
  displayName: "Dividerstyles__StyledDivider",
  componentId: "yu3sip-0"
})(["", ""], () => css(["&.", "{}"], rootClassName$2));

const DotDivider = ({
  absolute,
  ariaLabel,
  className,
  'data-testid': dataTestId,
  flexItem,
  light,
  orientation,
  variant
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$2, className);
  return jsx(StyledDivider, {
    absolute: absolute,
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    "data-testid": dataTestId,
    flexItem: flexItem,
    light: light,
    orientation: orientation,
    variant: variant
  }, void 0);
};

const DotPopper = ({
  ariaLabel,
  anchorEl,
  children,
  className,
  'data-testid': dataTestId,
  disablePortal,
  onClickAway,
  open,
  placement
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$U, className);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickAway = event => {
    if (onClickAway && (!anchorEl || !anchorEl.contains(event.currentTarget))) {
      onClickAway(event);
    }
  };
  return jsx(StyledPopper$1, Object.assign({
    anchorEl: anchorEl,
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    disablePortal: disablePortal,
    open: open,
    placement: placement,
    role: "presentation",
    transition: true
  }, {
    children: ({
      TransitionProps
    }) => jsx(Fade, Object.assign({}, TransitionProps, {
      children: jsx(Paper, Object.assign({
        className: "dot-popper-paper"
      }, {
        children: jsx(ClickAwayListener, Object.assign({
          onClickAway: handleClickAway
        }, {
          children: jsx("div", Object.assign({
            className: "dot-popper-content-wrapper",
            "data-testid": dataTestId && `${dataTestId}-content-wrapper`
          }, {
            children: children
          }), void 0)
        }), void 0)
      }), void 0)
    }), void 0)
  }), void 0);
};

const rootClassName$1 = 'dot-draggable-list';
const listItemClassName = 'dot-draggable-list-item';
const StyledDraggableList = styled.div.withConfig({
  displayName: "DraggableListstyles__StyledDraggableList",
  componentId: "sc-1nekees-0"
})(["", ""], ({
  theme,
  width,
  draggableHandle
}) => css(["&.", " .", "{width:", " !important;.dot-icon{color:", ";}&.react-draggable-dragging{background-color:", ";}&.with-default-cursor{cursor:default;}&.with-handle-grab-cursor ", "{cursor:grab;}}"], rootClassName$1, listItemClassName, width, theme.palette.layer.n700, theme.palette.grey[50], draggableHandle));

const getOrderedListItems = (layout, listItems) => {
  if (!listItems || !layout) return [];
  return [...listItems].sort((a, b) => layout.find(layoutItem => layoutItem.i === a.id).y - layout.find(layoutItem => layoutItem.i === b.id).y);
};
const checkIfEqual = (oldList, newList) => {
  if (oldList.length !== newList.length) return false;
  return oldList.every((oldListItem, index) => oldListItem.id === newList[index].id);
};
const getListItemLayout = listItems => {
  return listItems === null || listItems === void 0 ? void 0 : listItems.map((item, index) => ({
    i: item.id,
    x: 0,
    y: index,
    w: 1,
    h: 1
  }));
};

const DEFAULT_LIST_WIDTH = '100%';
const DEFAULT_LIST_ITEM_HEIGHT = 36;
const ListGridLayout = WidthProvider(GridLayout);
const DotDraggableList = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  disableDrag,
  draggableHandle,
  items,
  onChange,
  rowHeight: _rowHeight = DEFAULT_LIST_ITEM_HEIGHT,
  width: _width = DEFAULT_LIST_WIDTH
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName$1, className, draggableHandle ? 'with-draggable-handle' : '');
  const listItemClasses = useStylesWithRootClass(listItemClassName, draggableHandle && !disableDrag ? 'with-handle-grab-cursor' : '', draggableHandle || disableDrag ? 'with-default-cursor' : '');
  const listWidth = isNumber(_width) ? `${_width}px` : _width;
  const [orderedItems, setOrderedItems] = useState([]);
  useEffect(() => {
    setOrderedItems(items);
  }, [items]);
  const handleLayoutChange = () => layout => {
    const newList = getOrderedListItems(layout, orderedItems);
    if (!checkIfEqual(orderedItems, newList)) {
      setOrderedItems(newList);
      onChange(newList);
    }
  };
  return jsx(StyledDraggableList, Object.assign({
    "aria-label": ariaLabel,
    className: rootClasses,
    "data-testid": dataTestId,
    draggableHandle: draggableHandle,
    width: listWidth
  }, {
    children: jsx(List, Object.assign({
      "data-testid": dataTestId && `${dataTestId}-ul`,
      style: {
        width: listWidth
      }
    }, {
      children: jsx(ListGridLayout, Object.assign({
        className: "layout",
        draggableHandle: draggableHandle,
        isDraggable: !disableDrag,
        layout: getListItemLayout(orderedItems),
        cols: 1,
        margin: [0, 0],
        onLayoutChange: onChange && handleLayoutChange(),
        rowHeight: _rowHeight
      }, {
        children: orderedItems.map(({
          id: itemId,
          children
        }) => {
          return jsx(ListItem, {
            "data-testid": dataTestId && `${dataTestId}-item`,
            button: true,
            children: renderNodeOrTypography(children),
            className: listItemClasses,
            disableRipple: true
          }, itemId);
        })
      }), void 0)
    }), void 0)
  }), void 0);
};

const rootClassName = 'dot-linear-progress';
const StyledLinearProgress = styled(LinearProgress).withConfig({
  displayName: "LinearProgressstyles__StyledLinearProgress",
  componentId: "sc-1qhzxb3-0"
})(["&.", "{}"], rootClassName);

const DotLinearProgress = ({
  ariaLabel,
  color,
  className,
  'data-testid': dataTestId,
  value,
  valueBuffer,
  variant: _variant = 'indeterminate'
}) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  return jsx(StyledLinearProgress, {
    "aria-label": ariaLabel,
    classes: {
      root: rootClasses
    },
    color: color,
    "data-testid": dataTestId,
    value: value,
    valueBuffer: valueBuffer,
    variant: _variant
  }, void 0);
};

export { Cell, CreateUUID, CssCell, CssGrid, CssGridDebug, DotAccordion, DotActionToolbar, DotAlertBanner, DotAppLogo, DotAppSwitcher, DotAppToolbar, DotAutoComplete, DotAvatar, DotAvatarGroup, DotBadge, DotBreadcrumbs, DotButton, DotButtonToggle, DotCard, DotCardContent, DotCardFooter, DotCardHeader, DotCheckbox, DotCheckboxGroup, DotChip, DotConfirmationDialog, DotCopyButton, DotCoreApiProvider, DotDialog, DotDivider, DotDraggableList, DotDrawer, DotDynamicForm, DotEmptyState, DotFileListItem, DotFileUpload, DotForm, DotFormGroup, DotHeaderRow, DotIcon, DotIconButton, DotInlineEdit, DotInputSelect, DotInputText, DotLinearProgress, DotLink, DotList, DotMenu, DotNavigationRail, DotPill, DotPopper, DotProgress, DotProgressButton, DotRadioButton, DotRadioGroup, DotSidebar, DotSkeleton, DotSnackbar, DotSnackbarContainer, DotSnackbarProvider, DotSplitButton, DotSwitch, DotTable, DotTableAction, DotTableActions, DotTablePagination, DotTabs, DotThemeProvider, DotTooltip, DotTruncateWithTooltip, DotTypography, avatarColors, lightThemeColors as lightColors, parseAutoCompleteValue, variables as themeVariables, typographyOptions, useDotCoreApiContext, useDotSnackbarContext };
