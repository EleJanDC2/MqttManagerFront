import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/login/login.component.tsx";
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import MainScrren from "./components/mainScreen/mainScreen.component.tsx"
import Registration from "./components/registration/registration.component.tsx";
import {useState} from "react";
import styles from "./app.module.css"
function App() {
    const [isDark, setIsDark] = useState(true);

  return (
        <div className={styles.app} data-theme={isDark ? "dark" : "light"}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />}> </Route>
                    <Route path="/registration" element={<Registration />}> </Route>
                    <Route element={<AuthOutlet fallbackPath='/login' />}>
                        <Route path='/mainScreen' element={<MainScrren/>} />
                    </Route>
                </Routes>
            </Router>
        </div>
  )
}

export default App
