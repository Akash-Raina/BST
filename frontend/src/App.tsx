import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import SignInPage from "./views/auth/SignIn"
import SignUpPage from "./views/auth/SignUp"
import Home  from "./views/home"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/signin" element= {<SignInPage/>}/>
        <Route path="/signup" element= {<SignUpPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
