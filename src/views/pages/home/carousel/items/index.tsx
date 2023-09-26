import { Button, Paper } from '@mui/material'
import React from 'react'

const Item = (props : any) => {
  return (
      <Paper>
          <img src={props.item.url} alt="" style={{
              width: '100%',
              height: '200px',
              objectFit: 'contain',
              imageRendering: 'pixelated'
         }} />
    </Paper>
  )
}

export default Item;