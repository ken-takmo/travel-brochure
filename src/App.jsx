import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PostForm } from "./pages/PostForm";
import { List } from "./pages/List";
import { Header } from "./pages/Header";
import { Detail } from "./pages/Detail";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";
import { UpdateForm } from "./pages/UpdateForm";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Profile } from "./pages/Profile";
import { Mypage } from "./pages/Mypage";
import { RequireSignin } from "./pages/RequireSignin";
import { RequireSignOut } from "./pages/RequireSignOut";
import { useAuth } from "./providers/AuthContext";
function App() {
  const [isAuth, loading, error] = useAuth();
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          {error ? (
            <p>エラー</p>
          ) : (
            <div className="App">
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  {isAuth ? (
                    <>
                      <Route path="/postform" element={<PostForm />} />
                      <Route path="/list" element={<List />} />
                      <Route path="/detail/:id" element={<Detail />} />
                      <Route path="/updateform/:id" element={<UpdateForm />} />
                      <Route path="/signup" element={<RequireSignOut />} />
                      <Route path="/signin" element={<RequireSignOut />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/mypage" element={<Mypage />} />
                    </>
                  ) : (
                    <>
                      <Route path="/postform" element={<RequireSignin />} />
                      <Route path="/list" element={<List />} />
                      <Route path="/detail/:id" element={<Detail />} />
                      <Route
                        path="/updateform/:id"
                        element={<RequireSignin />}
                      />
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/signin" element={<SignIn />} />
                      <Route path="/profile" element={<RequireSignin />} />
                      <Route path="/mypage" element={<RequireSignin />} />
                    </>
                  )}
                </Routes>
                <Footer />
              </BrowserRouter>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
