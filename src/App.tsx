import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { TestNavbar } from "./components/TestNavbar";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

export const App = () => {
  const routes = [
    { name: "Home", path: "/", component: <Home /> },
    { name: "Register", path: "/register", component: <Register /> },
    { name: "Login", path: "/login", component: <Login /> },
  ];

  return (
    <>
      <TestNavbar />
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={route.component}
            key={route.name}
          ></Route>
        ))}
      </Routes>
    </>
  );
};

export default App;
