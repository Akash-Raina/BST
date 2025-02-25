import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import SignInPage from "./views/auth/SignIn"
import SignUpPage from "./views/auth/SignUp"
import Home  from "./views/home"
import Ranking from "./views/ranking"
import Admin from "./views/admin"
import CreateTeam  from "./views/admin/components/CreateTeam"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/signin" element= {<SignInPage/>}/>
        <Route path="/signup" element= {<SignUpPage/>}/>
        <Route path="/ranking" element={<Ranking/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/createteam" element={<CreateTeam/>}/>
      </Routes>
    </Router>
  )
}

export default App
