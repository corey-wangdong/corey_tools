import { Router } from 'preact-router'
import './app.css'
import Home from './pages/Home';
import KeyMapValue from './pages/key-map-value';
import ShowToast from './pages/show-toast';

export function App() {
  return (
    <>
      <Router>
        <Home path="/" />
        <KeyMapValue path="/key-map-value" />
        <ShowToast path="/show-toast" />
      </Router>
    </>
  )
}
