import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { TestNavbar } from "./components/TestNavbar";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

export const App = () => {
  return (
    <>
      <TestNavbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":id" element="DetailCamera" />
          <Route path="favorites" element="FavoriteCamera" />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
