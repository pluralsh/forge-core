import React, { useState, useContext } from 'react'
import { Box } from 'grommet'

const TabContext = React.createContext({})
const HOVER_BORDER = {side: 'bottom', color: 'dark-6', size: '2px'}
const ACTIVE_BORDER = {side: 'bottom', color: 'brand', size: '2px'}

export function TabHeaderItem({name, children, border}) {
  const [hover, setHover] = useState(false)
  const {setTab, tab} = useContext(TabContext)
  const borderAttrs = border || {}
  return (
    <Box
      focusIndicator={false}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setTab(name)}
      direction='row'
      pad='small'
      border={tab === name ? {...ACTIVE_BORDER, ...borderAttrs} : (hover ? {...HOVER_BORDER, ...borderAttrs} : null)}>
      {children}
    </Box>
  )
}

export function TabHeader({children}) {
  return (
    <Box width='row' direction='row'>
      {children}
    </Box>
  )
}

export function TabContent({name, children}) {
  const {tab} = useContext(TabContext)
  if (name !== tab) return null

  return children
}

export function Tabs({onTabChange, defaultTab, headerEnd, children, border}) {
  const [tab, setTabInner] = useState(defaultTab)
  function setTab(tab) {
    onTabChange && onTabChange(tab)
    setTabInner(tab)
  }

  return (
    <TabContext.Provider value={{tab, setTab}}>
      <Box fill>
        <Box
          style={{minHeight: '46px'}}
          direction='row'
          border={{side: 'bottom', color: border}}
          pad={{right: 'xsmall'}}
          align='center'>
          <Box width='100%' direction='row' gap='small'>
            {children[0]}
          </Box>
          {headerEnd}
        </Box>
        <Box fill>
          {children.slice(1)}
        </Box>
      </Box>
    </TabContext.Provider>
  )
}