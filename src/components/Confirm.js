import React from 'react'
import { Layer, Box } from 'grommet'
import { Button, SecondaryButton } from './Button'
import { Alert, AlertStatus } from './Alert'

export function Confirm({submit, loading, label, header, cancel, description}) {
  return (
    <Layer onClickOutside={cancel} onEsc={cancel}>
      <Box width='40vw' pad='medium' gap='medium'>
        <Alert 
          status={AlertStatus.INFO}
          header={header || 'Are you sure?'} 
          description={description} />
        <Box direction='row' align='center' justify='end' gap='xsmall'>
          <SecondaryButton label='Cancel' onClick={cancel} />
          <Button 
            label={label || 'Continue'} 
            onClick={submit} 
            loading={loading} />
        </Box>
      </Box>
    </Layer>
  )
}