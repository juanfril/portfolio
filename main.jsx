import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import './src/index.css'

const root = createRoot(document.getElementById('app'))
root.render(<App />)
