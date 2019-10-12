import React from 'react';


export const Container: React.FC = ({children}) => (
  <div style={containerStyle}>{children}</div>
)
const containerStyle = {
    maxWidth: 1160, 
    margin: '0 auto'
  }
