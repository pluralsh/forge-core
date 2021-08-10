import React, { useContext, useMemo, useState } from 'react'
import { Box, Text, ThemeContext } from 'grommet'
import { FormClose } from 'grommet-icons'
import { BeatLoader } from 'react-spinners'
import { Errors } from './Error'
import { Pill } from './Pill'
import { shadeColor } from '../utils/color'
import { normalizeColor } from 'grommet/utils'

const BUTTON_PAD = {horizontal: 'small', vertical: 'xsmall'}

function ErrorPill({error}) {
  const [open, setOpen] = useState(true)
  return (
    open && (
      <Pill background='status-warning' onClose={() => setOpen(false)}>
        <Box direction='row' align='center'>
          <Box width='100%' align='center'>
            <Errors errors={error}/>
          </Box>
          <Box width='25px' style={{cursor: 'pointer'}}>
            <FormClose size='25px' onClick={() => setOpen(false)} />
          </Box>
        </Box>
      </Pill>
    )
  )
}

export function SecondaryButton({onClick, round, label, pad, error, icon, textSize, weight: textWeight, ...rest}) {
  const theme = useContext(ThemeContext)
  const weight = textWeight || (theme.button && theme.button.weight) || 450
  return (
    <>
    {error && <ErrorPill error={error} />}
    <Box
      flex={false}
      focusIndicator={false}
      hoverIndicator='light-1'
      onClick={onClick}
      direction='row'
      border={{color: 'light-6'}}
      align='center'
      justify='center'
      background='#fff'
      gap='xsmall'
      pad={pad || BUTTON_PAD}
      round={round || 'xsmall'}
      {...rest}>
      {icon}
      <Text size={textSize || 'small'} weight={weight}>{label}</Text>
    </Box>
    </>
  )
}

export function Button({pad, disabled, onClick, label, loading, textSize, error, icon, round, background, shade, weight: textWeight, ...rest}) {
  const theme = useContext(ThemeContext)
  const bg = background || 'action'
  const darkened = useMemo(() => shadeColor(normalizeColor(bg, theme), shade || -5), [bg, theme, shade])
  const weight = textWeight || (theme.button && theme.button.weight) || 450

  return (
    <>
    {error && <ErrorPill error={error} />}
    <Box
      flex={false}
      focusIndicator={false}
      onClick={disabled ? null : onClick}
      pad={pad || BUTTON_PAD}
      direction='row'
      gap='xsmall'
      align='center'
      justify='center'
      round={round || 'xsmall'}
      background={disabled ? 'light-6' : (background || 'action')}
      hoverIndicator={darkened}
      {...rest}>
      {loading && <BeatLoader color='white' size={8} />}
      {icon}
      <Text size={textSize || 'small'} weight={weight}>{label}</Text>
    </Box>
    </>
  )
}