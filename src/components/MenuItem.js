import React, { useContext } from 'react'
import { HoveredBackground } from './HoveredBackground'
import { Box, Text, ThemeContext } from 'grommet'
import { FormNext } from 'grommet-icons'
import { colorIsDark, normalizeColor } from './colors'
import './menu-item.css'

const ITEM_PADDING = {vertical: 'xsmall', left: 'small', right: 'xsmall'}

export function SubMenu({text, setAlternate, children, ...rest}) {
  return (
    <MenuItem onClick={() => setAlternate(children)} direction='row' {...rest}>
      <Box width='100%' direction='row' align='center'>
        <Text size='small'>{text}</Text>
      </Box>
      <Box width='20px' align='center' justify='center'>
        <FormNext size='15px' />
      </Box>
    </MenuItem>
  )
}


export function MenuItem({onClick, children, hover, ...rest}) {
  const theme = useContext(ThemeContext)
  const dark = colorIsDark(normalizeColor(hover || 'brand', theme))
  return (
    <Box pad={{horizontal: 'xxsmall'}}>
      <Box
        className={dark ? 'menu-item-dark' : null}
        round='xsmall'
        focusIndicator={false}
        hoverIndicator={hover || 'brand'}
        pad={ITEM_PADDING}
        onClick={() => onClick && onClick()}
        {...rest}>
        {children}
      </Box>
    </Box>
  )
}