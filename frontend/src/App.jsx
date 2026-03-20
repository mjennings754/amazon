import Header from "./components/Header"
import CreateBook from "./pages/CreateBook";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<CreateBook />} />
    </Routes>
    </>
  )
}

export default App
