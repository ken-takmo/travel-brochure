import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PostBrochure } from "./components/PostBrochure";
import { GetBrochures } from "./components/GetBrochures";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/postbrochure" element={<PostBrochure />}></Route>
          <Route path="/getbrochures" element={<GetBrochures />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
