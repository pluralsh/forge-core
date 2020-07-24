import React, { useState, useContext, useCallback } from 'react'
import { Box, ThemeContext } from 'grommet'
import { normalizeColor}  from './colors'

export function RadioButton({enabled, onChange, label}) {
  const theme = useContext(ThemeContext)
  const [hover, setHover] = useState(false)
  const [en, setEn] = useState(!!enabled)
  const enabledStyle = en ? {borderColor: normalizeColor('focus', theme)} : {}
  const setEnabled = useCallback((en) => {
    setEn(en)
    onChange && onChange(en)
  }, [setEn, onChange])


  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setEnabled(!en)}
      direction='row'
      pad='xsmall'
      border
      round='xsmall'
      align='center'
      gap='xsmall'
      elevation={hover ? 'xsmall' : null}
      style={{cursor: 'pointer', ...enabledStyle}}>
      <Box width='30px' align='center' justify='center'>
        <Box width='21px' height='21px' round='full' align='center' justify='center' border>
          {en && <Box width='15px' height='15px' round='full' background='focus' elevation='xsmall' />}
        </Box>
      </Box>
      <Box>
        {label}
      </Box>
    </Box>
  )
}
