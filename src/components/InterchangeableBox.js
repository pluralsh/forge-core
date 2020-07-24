import React, { useState, useCallback } from 'react'
import { Box, Text } from 'grommet'
import { FormPrevious } from 'grommet-icons'

function ContentWrapper({setAlternate, children}) {
  return (
    <Box gap='xsmmall' animation={slideAnimate('slideRight')}>
      {children}
      <Box pad='xxsmall' border='top'>
        <Box
          hoverable
          style={{cursor: 'pointer'}}
          onClick={() => setAlternate(null)}
          hoverIndicator='light-3'
          focusIndicator={false}
          pad={{vertical: 'xsmall', horizontal: 'small'}}
          direction='row'
          align='center'
          round='xsmall'
          gap='xsmall'>
          <FormPrevious size='15px' />
          <Text size='small'>return to menu</Text>
        </Box>
      </Box>
    </Box>
  )
}

function MaybeWrap({noWrap, children, ...rest}) {
  if (noWrap) return children
  return (<ContentWrapper {...rest}>{children}</ContentWrapper>)
}

function slideAnimate(type) {
  return {type: type, duration: 150, delay: 0, size: 'xlarge'}
}

export function InterchangeableBox({children, noWrap, ...props}) {
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
    : <MaybeWrap noWrap={noWrap} setAlternate={wrappedSetAlternate}>{alternate}</MaybeWrap>
  )
}