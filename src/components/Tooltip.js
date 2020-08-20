import React, { useState, useRef } from 'react'
import { Box, Drop } from 'grommet'
import './tooltip.css'

export function TooltipContent({children, background, align, targetRef, side, ...props}) {
  return (
    <Drop
      plain
      stretch={false}
      className={`tooltip ${side || 'bottom'}`}
      align={align || {bottom: 'top'}}
      target={targetRef.current}>
      <Box
        direction='row'
        align='center'
        justify='center'
        round='xsmall'
        background={background || 'dark-1'}
        pad='xsmall'
        {...props}>
        {children}
      </Box>
    </Drop>
  )
}

export function Tooltip(props) {
  const targetRef = useRef()
  const [open, setOpen] = useState(false)

  const target = props.children[0]
  const dropContents = props.children.slice(1)
  return (
    <>
      <span
        ref={targetRef}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}>
        {target}
      </span>
      {open && (
        <TooltipContent align={props.align} targetRef={targetRef} background={props.background}>
          {dropContents}
        </TooltipContent>
      )}
    </>
  )
}