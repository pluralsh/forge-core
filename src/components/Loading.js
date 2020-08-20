import React from 'react'
import { Box } from 'grommet'
import { ScaleLoader } from 'react-spinners'

export function Loading({height, width, color}) {
  return (
    <Box
      height={height || "100%"}
      width={width}
      direction='column'
      justify='center'
      align='center'>
      <ScaleLoader color={color} size={50} />
    </Box>
  )
}