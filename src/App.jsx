import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PostBrochure } from "./components/PostBrochure";
import { GetBrochures } from "./components/GetBrochures";
import { Header } from "./components/Header";
import { Detail } from "./components/Detail";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Update } from "./components/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postbrochure" element={<PostBrochure />} />
          <Route path="/getbrochures" element={<GetBrochures />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
