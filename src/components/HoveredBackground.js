import React from 'react'
import {ThemeContext} from 'grommet'
import {css} from 'styled-components'
import {normalizeColor, colorIsDark} from './colors'


const hoverStyle = css`
  outline: none !important;
  ${props => {
    let color = normalizeColor('brand', props.theme)
    let isDark = colorIsDark(color)
    return `
      &:hover {
        background: ${color};
        ${isDark && 'color: white;'}
      }
      &:hover svg {
        ${isDark && `
        fill: white !important;
        stroke: white !important;
      `}
      }
    `
  }}
`;

const accentHover = css`
  outline: none !important;
  &:hover {
    color: ${props => normalizeColor('focus', props.theme)};
  }
  &:hover svg {
    fill: ${props => normalizeColor('focus', props.theme)} !important;
    stroke: ${props => normalizeColor('focus', props.theme)} !important;
  }
`;

const sidebarHover = css`
  outline: none !important;
  ${props => {
    const color = normalizeColor('sidebarHover', props.theme)
    const isDark = colorIsDark(color)
    const textColor = isDark ? 'white' : 'black'

    return `
      &:hover {
        background: ${color};
        ${props.accentText && `color: ${textColor} !important;`}
      }

      ${props.accentText && `
        &:hover svg {
          stroke: ${textColor} !important;
          fill: ${textColor} !important;
        }
        &:hover span {
          color: ${textColor} !important;
        }
      `}
    `
  }}
`;

const highlightHover = css`
  outline: none !important;
  ${props => {
    const textColor = normalizeColor('focusText', props.theme)
    const border = props.border ? `border: 1px solid ${textColor};` : null
    return `
      &:hover {
        color: ${textColor};
        ${border}
      }

      &:hover svg {
        stroke: ${textColor} !important;
        fill: ${textColor} !important;
      }

      &:hover span {
        color: ${textColor};
      }
    `
  }}
`;

function determineHover(props) {
  if (props.hoverable) return hoverStyle
  if (props.accentable) return accentHover
  if (props.sidebarHover) return sidebarHover
  if (props.highlight) return highlightHover
  return {}
}

const boxBorderTheme = {
  box: {
    extend: determineHover
  },
  text: {
    extend: determineHover
  }
};

export function HoveredBackground(props) {
  return (
    <ThemeContext.Extend value={boxBorderTheme}>
      {props.children}
    </ThemeContext.Extend>
  )
}