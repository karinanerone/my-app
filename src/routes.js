import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Registrar from './Registrar';
import Login from './Login';
import Principal from './Principal';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/registrar" />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/principal" element={<Principal />} />
    </Routes>
  </Router>
);

export default AppRoutes;
