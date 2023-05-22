import { Login, Signup, ErrorPage } from "./components";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App