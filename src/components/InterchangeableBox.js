import React, { useState, useCallback } from 'react'
import { Box, Text } from 'grommet'
import { FormPrevious } from 'grommet-icons'
import { MenuItem } from './MenuItem'

function MaybeWrap({noWrap, children, hover, setAlternate}) {
  if (noWrap) return children
  return (
    <Box gap='xsmmall' animation={slideAnimate('slideRight')}>
      {children}
      <Box pad={{vertical: 'xsmall'}} border='top'>
        <MenuItem direction='row' gap='xsmall' align='center' hover={hover} onClick={() => setAlternate(null)}>
          <FormPrevious size='15px' />
          <Text size='small'>return to menu</Text>
        </MenuItem>
      </Box>
    </Box>
  )
}

function slideAnimate(type) {
  return {type: type, duration: 150, delay: 0, size: 'xlarge'}
}

export function InterchangeableBox({children, noWrap, hover, ...props}) {
  const [loaded, setLoaded] = useState(false)
  const [alternate, setAlternate] = useState(null)
  const wrappedSetAlternate = useCallback((alternate) => {
    setLoaded(true)
    setAlternate(alternate)
  }, [setLoaded, setAlternate])

  return (!alternate ?
    <Box animation={loaded && !noWrap ? slideAnimate('slideLeft') : null} {...props}>
      {children(wrappedSetAlternate)}
    </Box>
    : <MaybeWrap noWrap={noWrap} setAlternate={wrappedSetAlternate} hover={hover}>{alternate}</MaybeWrap>
  )
}