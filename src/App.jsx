import { Routes, Route } from "react-router-dom";
import Member from "./pages/Member";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NoMembers from "./components/NoMembers";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:id" element={<Member />} />
        <Route path="*" element={<NoMembers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
