import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/login/login.component.tsx";
// import RequireAuth from "react-auth-kit"
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import MainScrren from "./components/menu/mainScreen.component.tsx"
import Registration from "./components/registration/registration.component.tsx";
function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}> </Route>
                <Route path="/registration" element={<Registration />}> </Route>
                <Route element={<AuthOutlet fallbackPath='/login' />}>
                    <Route path='/menu' element={<MainScrren/>} />
                </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
