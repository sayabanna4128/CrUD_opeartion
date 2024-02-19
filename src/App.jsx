import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./CRUD/Home";
import CreateUser from ".src/CRUD/CreateUser";
import User from ".src/CRUD/User"
import EditUser from ".src/CRUD/EditUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home/>
        <Routes>
          <Route element={<CreateUser />} path="/" />
          <Route element={<User />} path="/users" />
          <Route element={<EditUser />} path="/edit/:abc" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
