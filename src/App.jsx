import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PostBrochure } from "./components/PostBrochure";
import { GetBrochures } from "./components/GetBrochures";
import { Header } from "./components/Header";
import { Detail } from "./components/Detail";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/postbrochure" element={<PostBrochure />}></Route>
          <Route path="/getbrochures" element={<GetBrochures />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
