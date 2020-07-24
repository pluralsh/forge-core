import React from 'react'
import {Box, Anchor, Text} from 'grommet'
import { useHistory } from 'react-router-dom'
import { lookahead } from '../utils/array'

export function Breadcrumbs({crumbs}) {
  let history = useHistory()
  const children = Array.from(lookahead(crumbs, (crumb, next) => {
    if (next.url) {
      return [
        <Anchor key={crumb.url} size='small' onClick={() => history.push(crumb.url)}>{crumb.text}</Anchor>,
        <Text key={crumb.url + 'next'} size='small'>/</Text>
      ]
    }
    return <Text key={crumb.url} size='small' color='dark-2'>{crumb.text}</Text>
  })).flat()

  return (
    <Box
      direction='row'
      gap='xsmall'
      pad={{horizontal: 'medium', vertical: 'small'}}
      align='center'>
      {children}
    </Box>
  )
}
