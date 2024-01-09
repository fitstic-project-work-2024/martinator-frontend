import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { TestNavbar } from "./components/TestNavbar";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

const Layout = () => (
  <>
    <TestNavbar />
    <Outlet />
  </>
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id" element="DetailCamera" />
        <Route path="favorites" element="FavoriteCamera" />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
