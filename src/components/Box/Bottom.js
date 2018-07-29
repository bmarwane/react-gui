import React from 'react'

import Box from './'

export default function BottomBox({children}) {
  const outerBox = {
    position: 'relative',
    top: 144 + 'px'
  }
  return (
    <div style={outerBox}>
      <Box
        boxHeight={50+'px'}
      >
        {children}
      </Box>
    </div>
  )
}
