import React from 'react';
import TopMenu from './components/TopMenu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';
import Todos from './components/todos/Todos';
import NewTodo from './components/todos/NewTodo';
import UpdateTodo from './components/todos/UpdateTodo';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
      <TopMenu />
      <Routes>
        <Route path='/todos/update/:id' element={<UpdateTodo />} />
        <Route path='/todos/add' element={<NewTodo />} />
        <Route path='/todos/:page' element={<Todos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
