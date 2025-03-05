
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './pages/Auth/LoginForm';
import SingUpForm from './pages/Auth/SingUpForm';
import Expense from './pages/Dashboard/Expense';
import Income from './pages/Dashboard/Income';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Rout />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signUp" element={<SingUpForm />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/income" element={<Expense />} />
          <Route path="/expense" element={<Income />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App