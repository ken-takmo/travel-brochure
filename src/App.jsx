import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PostForm } from "./components/PostForm";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Detail } from "./components/Detail";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { UpdateForm } from "./components/UpdateForm";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Profile } from "./components/Profile";
import { Mypage } from "./components/Mypage";
import { RequireSignin } from "./components/RequireSignin";
import { RequireSignOut } from "./components/RequireSignOut";
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
