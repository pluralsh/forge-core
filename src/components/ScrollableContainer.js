import React from 'react'

export function ScrollableContainer({children}) {
  return (
    <div style={{height: '100%', overflow: 'auto'}}>
      {children}
    </div>
  )
}