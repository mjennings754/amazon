import Header from "./components/Header"
import CreateBook from "./pages/CreateBook";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<CreateBook />} />
      <Route path="/book/:id" element={<BookPage />} />
    </Routes>
    </>
  )
}

export default App
