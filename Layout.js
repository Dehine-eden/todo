import React from 'react';
import Body from './Body';
import {ThemeContextConsumer} from './ThemeContext';

export default function Layout(props) {
  return (
    <ThemeContextConsumer>
        {(context) => ( 
            <div>
           <div className={context.theme}>
              <Body />
              </div>
 {props.children}
            </div>
      )}
    </ThemeContextConsumer>
  )
}
