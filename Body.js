import React from 'react'
import {ThemeContextConsumer} from './ThemeContext'


export default function Body() {
  return (
    <ThemeContextConsumer>
        {(context) => ( 
        <div class="content">
      <button onClick={context.toggleTheme}>Change Theme</button>
      </div>
      )}
    </ThemeContextConsumer>
    )
}
