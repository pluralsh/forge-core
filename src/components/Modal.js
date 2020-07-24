import React, {useState} from 'react'
import {Layer, Box, Text} from 'grommet'
import {FormClose} from 'grommet-icons'

export function ModalHeader({text, round, setOpen}) {
  const [hover, setHover] = useState(false)
  return (
    <Box
      direction='row'
      border='bottom'
      elevation='xxsmall'
      round={round || {size: '4px', corner: 'top'}}
      pad='small'>
      <Box direction='row' fill='horizontal' align='center'>
        <Text size='small' weight='bold'>{text}</Text>
      </Box>
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        background={hover ? 'light-3' : null}
        width='30px'
        round='xsmall'
        align='center'
        justify='center'>
        <FormClose style={{cursor: 'pointer'}} onClick={() => setOpen(false)} />
      </Box>
    </Box>
  )
}

export function Modal(props) {
  const [open, setOpen] = useState(!!props.open)

  return (
    <>
      <span onClick={() => {
        props.onOpen && props.onOpen()
        setOpen(true)
      }}>
      {props.target}
      </span>
      {open && (
        <Layer
          modal
          position={props.position || 'center'}
          onClickOutside={() => props.disableClickOutside ? null : setOpen(false)}
          onEsc={() => setOpen(false)} >
          {props.children(setOpen)}
        </Layer>
      )}
    </>

  )
}
