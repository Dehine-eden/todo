import React, {useState} from 'react';

const {Provider, Consumer} = React.createContext();

 function ThemeContextProvider(props) {
  const[theme, setTheme] = useState('light');
  const toggleTheme= () =>{
    setTheme{theme === 'light'? 'dark' : 'light'};
  };
  
  return <provider value={{theme, toggleTheme}}>
    {props.children}
     </provider>;
}

export {ThemeContextProvider, consumer as ThemeContextConsumer};