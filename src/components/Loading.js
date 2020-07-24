import React from 'react'
import { Box } from 'grommet'
import { ScaleLoader } from 'react-spinners'

export function Loading({height, width}) {
  return (
    <Box
      height={height || "100%"}
      width={width}
      direction='column'
      justify='center'
      align='center'>
      <ScaleLoader size={50} />
    </Box>
  )
}