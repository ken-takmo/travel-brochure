import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PostForm } from "./components/PostForm";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Detail } from "./components/Detail";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { UpdateForm } from "./components/UpdateForm";
import { SignUp } from "./components/SignUp";
import { SingIn } from "./components/SingIn";
import { Profile } from "./components/Profile";
import { Mypage } from "./components/Mypage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postform" element={<PostForm />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/updateform/:id" element={<UpdateForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
