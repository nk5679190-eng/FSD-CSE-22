
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Counter from './components/Counter'
import "./App.css"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/stopwatch" element={<h1>Stopwatch App</h1>}></Route>
        <Route path="*" element={<h1>Error: Page not found</h1>}></Route>
        </Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
