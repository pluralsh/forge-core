import React from 'react'
import { Box, Text } from 'grommet'
import { Alert } from 'grommet-icons'

export function Error({error}) {
  return (
    <Box direction='row' gap='xsmall' justify='center' align='center'>
      <Alert size="15px"/>
      <Text style={{lineHeight: '15px'}}>
        {error.replace("_", ' ')}
      </Text>
    </Box>
  )
}

export function Errors({errors: {graphQLErrors}, limit: l, ...props}) {
  let limit = l || 1
  let errors = graphQLErrors || [{message: (props.default || 'something went wrong')}]
  return (
    <Box direction='column' gap='xsmall'>
      {errors.slice(0, limit).map(error => <Error error={error.message} />)}
    </Box>
  )
}
