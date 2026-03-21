import Header from "./components/Header"
import CreateBook from "./pages/CreateBook";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import Register from "./pages/Register";
function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<CreateBook />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
