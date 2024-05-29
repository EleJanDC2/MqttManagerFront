import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/login/login.component.tsx";
// import RequireAuth from "react-auth-kit"
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import Menu from "./components/menu/menu.component.tsx"
function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}> </Route>
                <Route element={<AuthOutlet fallbackPath='/login' />}>
                    <Route path='/menu' element={<Menu/>} />
                </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
