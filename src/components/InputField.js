import React from 'react'
import { Box, Text, TextInput } from 'grommet'
import styled from 'styled-components';
import { normalizeColor } from 'grommet/utils';

const BORDER = 'input-border'

const InputContainer = styled.td`
  &:focus-within {
    outline: none;
    border-color: ${props => normalizeColor('brand', props.theme)};
  }
  border: 1px solid ${props => normalizeColor(BORDER, props.theme)};
  border-radius: 0px 3px 3px 0px;
  width: 99%;
`;

const LabelContainer = styled.td`
  border-color: ${props => normalizeColor(BORDER, props.theme)};
  border-width: 1px 0px 1px 1px;
  border-style: solid;
  background-color: ${props => normalizeColor('label', props.theme)};
  white-space: nowrap;
  border-radius: 3px 0px 0px 3px;
`

export function ResponsiveInput({label, name, type, value, placeholder, onChange}) {
  return (
    <tr>
      <LabelContainer>
        <Box pad={{horizontal: 'small'}}>
          <Text weight={500} size='small'>{label}</Text>
        </Box>
      </LabelContainer>
      <InputContainer>
        <TextInput
          name={name || 'name'}
          plain
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange} />
      </InputContainer>
    </tr>
  )
}

export function ResponsiveInputContainer({label, content}) {
  return (
    <tr>
      <td style={{whiteSpace: 'nowrap'}}>
        <Text size='small' weight='bold'>{label}</Text>
      </td>
      <td style={{width: '99%'}}>
        {content}
      </td>
    </tr>
  )
}

export function InputCollection({children}) {
  return (
    <table width='100%' style={{borderCollapse: 'separate', borderSpacing: '0px 8px'}}>
      <tbody>{children}</tbody>
    </table>
  )
}

export function InputField(props) {
  return (
    <Box direction='row' align='center'>
      <Box width={props.labelWidth || '50px'}>
        <Text size='small' margin={{right: 'small'}} weight='bold'>{props.label}</Text>
      </Box>
      <TextInput
        name='name'
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        />
    </Box>
  )
}