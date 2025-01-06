import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import SignInPage from "./views/auth/SignIn"
import SignUpPage from "./views/auth/SignUp"
import Home  from "./views/home"
import Ranking from "./views/ranking"
import Admin from "./views/admin"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/signin" element= {<SignInPage/>}/>
        <Route path="/signup" element= {<SignUpPage/>}/>
        <Route path="/ranking" element={<Ranking/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  )
}

export default App
