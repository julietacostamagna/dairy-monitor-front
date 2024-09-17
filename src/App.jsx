import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import Home from './modules/Home/views/index'
import { useContext, useEffect, useState } from 'react'
import { MainContext } from './context/MainContext'
import MainContent from "./modules/core/views";
import Alerts from './modules/Alerts/views/index'
import Binnacle from './modules/Binnacle/views/index'
import Grafics from './modules/Establecimiento/views/index'
import Map from './modules/map/views/index'

function App() {
  const userRoutes = [
    { path: '/*', element: <Home /> },
    { path: '/Alert', element: <Alerts /> },
    { path: '/binnacle', element: <Binnacle /> },
    { path: '/Grafics', element: <Grafics /> },
    { path: '/Map', element: <Map /> },
  ]
  const { darkMode } = useContext(MainContext)
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  })
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  const [theme, setTheme] = useState(!darkMode ? darkTheme : lightTheme)
  useEffect(() => {
    setTheme(!darkMode ? lightTheme : darkTheme)
  }, [darkMode])

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        {/* {loginRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route element={<MainContent />}>
          {userRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
  )
}

export default App
