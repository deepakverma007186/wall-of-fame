import { Routes, Route } from "react-router-dom";
import Header from "./components/Footer";
import Member from "./components/Member";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <div className="bg-green-400 flex justify-center">
        <h2 className="text-white font-semibold py-2">
          Tailwind Working now...
        </h2>
      </div>
      <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<Member />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
