import { HashRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Contacts from './pages/Contacts'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </>
  )
}

