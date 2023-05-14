import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Member from "./components/Member";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="bg-green-400 flex justify-center">
        <h2 className="text-white font-semibold py-2">
          Tailwind Working now...
        </h2>
      </div>
      <Header />
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/member" element={<Member />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
