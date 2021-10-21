import React, { useState } from 'react'
import { Box, Text } from 'grommet'
import { Copy, Close, Check as Checkmark } from './icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Pill } from './Pill'

const MAX_LINK_LENGTH = 40

function trimmed(link) {
  if (link.length > MAX_LINK_LENGTH) {
    return `${link.substring(0, MAX_LINK_LENGTH)}...`
  }
  return link
}

function CopiedPill({text, close}) {
  return (
    <Pill background='white' onClose={close} border={{color: 'tone-light'}}>
      <Box direction='row' align='center' gap='small'>
        <Checkmark size='15px' color='success' />
        <Text size='small' weight={500}>{text}</Text>
        <Box flex={false} pad='xsmall' round='xsmall' align='center' justify='center'
             onClick={close} hoverIndicator='tone-light'>
          <Close size='15px' />
        </Box>
      </Box>
    </Pill>
  )
}

export function WithCopy({children, text, pillText}) {
  const [display, setDisplay] = useState(false)
  return (
    <>
    <CopyToClipboard text={text} onCopy={() => setDisplay(true)}>
      {children}
    </CopyToClipboard>
    {display && <CopiedPill text={pillText} close={() => setDisplay(false)} />}
    </>
  )
}

export function Copyable({text, pillText, displayText}) {
  const [display, setDisplay] = useState(false)
  const [hover, setHover] = useState(false)
  return (
    <>
    <CopyToClipboard text={text} onCopy={() =>  setDisplay(true)}>
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{cursor: 'pointer'}}
        direction='row'
        align='center'
        round='xsmall'
        gap='xsmall'>
        <Text size='small'>{trimmed(displayText || text)}</Text>
        {hover && (
          <Box animation={{type: 'fadeIn', duration: 200}}>
            <Copy size='12px' />
          </Box>
        )}
      </Box>
    </CopyToClipboard>
    {display && <CopiedPill text={pillText} close={() => setDisplay(false)} />}
    </>
  )
}