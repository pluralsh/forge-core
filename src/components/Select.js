import { normalizeColor } from 'grommet/utils';
import React, { useContext } from 'react'
import SelectInner from 'react-select';
import { ThemeContext } from 'styled-components';

function themeMerge(select, plrl, mappings) {
  return Object.entries(mappings).reduce((prev, [from, to]) => ({
    ...prev, [from]: normalizeColor(to, plrl)
  }),select)
}

export function Select({colors: added, ...props}) {
  const plrlTheme = useContext(ThemeContext)
  const colors = {'primary25': 'tone-light', 'primary': 'brand', ...(added || {})}
  return (
    <SelectInner
      theme={theme => ({
        ...theme, colors: themeMerge(theme.colors, plrlTheme, colors)
      })} 
      {...props}
    />
  )
}