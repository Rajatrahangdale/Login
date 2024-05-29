import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import CreateAccount from "./Components/CreateAccount";
import { useState } from "react";

const App = () => {
  const [val, setVal] = useState(true);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login val={val} setVal={setVal} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/register"
          element={<CreateAccount val={val} setVal={setVal} />}
        />
      </Routes>
    </div>
  );
};

export default App;
