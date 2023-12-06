import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/routing/PrivateRoutes";

import PrivateScreen from "./components/screens/privateScreen/PrivateScreen";
import LoginScreen from "./components/screens/loginScreen/LoginScreen";
import RegisterScreen from "./components/screens/registerScreen/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/forgotPasswordScreen/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/resetPasswordScreen/ResetPasswordScreen";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<LoginScreen />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<PrivateScreen/>} />
          </Route>
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPasswordScreen />}
          />
          <Route
            exact
            path="/resetpassword/:resetToken"
            element={<ResetPasswordScreen />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
