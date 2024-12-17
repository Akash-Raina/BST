import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { SignInPage } from "./pages/SignInPage"
import { SignUpPage } from "./pages/SignUpPage"
import { Home } from "./pages/Home"
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
