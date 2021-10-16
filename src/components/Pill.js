import React from 'react'
import { Layer, Box } from 'grommet'

export function Pill({pad, children, onClose, ...rest}) {
  return (
    <Layer plain modal={false} position='top' onEsc={onClose} onClickOutside={onClose}>
      <Box
        direction='row'
        align='center'
        elevation='medium'
        round='xsmall'
        margin={{top: 'medium'}}
        pad={pad || {vertical: 'xsmall', horizontal: 'medium'}}
        {...rest}>
        {children}
      </Box>
    </Layer>
  )
}
