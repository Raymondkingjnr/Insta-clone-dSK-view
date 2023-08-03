//import { useDispatch } from "react-redux";
import "./App.css";
import Homepage from "./Homepage";
import Authentication from "./auth/Authentication";
//import { useEffect } from "react";
// import { auth } from "./firbase";
// import { loginUser, setLoading } from "./features/userSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  //const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch(
  //         loginUser({
  //           uid: authUser.uid,
  //           userName: authUser.displayName,
  //           email: authUser.email,
  //         })
  //       );
  //       dispatch(setLoading(false));
  //     } else {
  //       console.log("User is not logged in");
  //     }
  //   });
  // }, [dispatch]);
  // const user = useSelector((state) => state.data.user.user);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />

          <Route path="authPage" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//{user ? <Homepage /> : <Authentication />}

export default App;
