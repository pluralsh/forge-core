import React from 'react'
import { Box, Text, TextInput } from 'grommet'

export function FormField({label, children, width, modifier, textAttrs}) {
  return (
    <Box gap='xsmall' width={width || '300px'}>
      <Box direction='row' align='center'>
        <Box fill='horizontal'>
          <Text size='small' color='dark-4' {...(textAttrs || {})}>{label}</Text>
        </Box>
        <Box flex={false}>
          {modifier}
        </Box>
      </Box>
      {children}
    </Box>
  )
}

export function LabelledInput({label, value, onChange, placeholder, width, type, modifier, textAttrs}) {
  return (
    <FormField label={label} width={width} modifier={modifier} 
               textAttrs={textAttrs}>
      <TextInput
        name={label}
        type={type}
        value={value || ''}
        onChange={onChange && (({target: {value}}) => onChange(value))}
        placeholder={placeholder} />
    </FormField>
  )
}