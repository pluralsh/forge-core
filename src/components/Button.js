import React, { useState } from 'react'
import { Box, Text } from 'grommet'
import { FormClose } from 'grommet-icons'
import { BeatLoader } from 'react-spinners'
import { Errors } from './Error'
import { Pill } from './Pill'

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

export function SecondaryButton({onClick, round, label, pad, error, icon, textSize, ...rest}) {
  const [hover, setHover] = useState(null)
  return (
    <>
    {error && <ErrorPill error={error} />}
    <Box
      flex={false}
      focusIndicator={false}
      hoverIndicator='light-1'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      direction='row'
      border={{color: 'light-6'}}
      align='center'
      justify='center'
      elevation={hover ? 'small' : null}
      background='#fff'
      gap='xsmall'
      pad={pad || BUTTON_PAD}
      round={round || 'xsmall'}
      {...rest}>
      {icon}
      <Text size={textSize || 'small'}>{label}</Text>
    </Box>
    </>
  )
}

export function Button({pad, disabled, onClick, label, loading, textSize, error, icon, round, background, ...rest}) {
  const [hover, setHover] = useState(false)
  return (
    <>
    {error && <ErrorPill error={error} />}
    <Box
      focusIndicator={false}
      onClick={disabled ? null : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      pad={pad || BUTTON_PAD}
      direction='row'
      gap='xsmall'
      align='center'
      justify='center'
      round={round || 'xsmall'}
      background={disabled ? 'light-6' : (background || 'action')}
      elevation={hover && !disabled ? 'small' : null}
      {...rest}>
      {loading && <BeatLoader color='white' size={8} />}
      {icon}
      <Text size={textSize || 'small'}>{label}</Text>
    </Box>
    </>
  )
}