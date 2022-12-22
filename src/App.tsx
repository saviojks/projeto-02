import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { DefaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button variant='primary' />
      <Button variant='secondary' />
      <Button variant='danger' />
      <Button variant='success' />
    </ThemeProvider>
  )
}