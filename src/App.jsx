import { useEffect, useMemo } from "react";
import {HashRouter as Router} from "react-router-dom"
import Main from 'main'
import Store from 'store'
import { createTheme,  ThemeProvider} from '@mui/material/styles';


import './style.scss'

import {Provider as ScrollAreaProvider} from 'components/ScrollArea/state'
const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#EEEEEE'
    },
  }
})

function Stored(){

   const page = useMemo(() => {
    return <Router>
      <Main/>   
    </Router>
  }, [])

  return page
}


export default function App(){


    return (
      <ThemeProvider theme={mainTheme}>
        <Store>
            <ScrollAreaProvider>
              <Stored/>
            </ScrollAreaProvider>
        </Store>
    </ThemeProvider>
  );

}