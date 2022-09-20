import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Form from './pages/form';
import Login from './pages/login';
import Register from './pages/register';

function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/form' exact element={<Form />} />
        <Route exact path='/' exact element={<Login />} />
        <Route exact path='/register' exact element={<Register />} />
    </Routes>
    </Router>
);
}
  
export default App;