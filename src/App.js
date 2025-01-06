import React from 'react';
import './App.css';
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { AuthPage } from './pages/AuthPage';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutPage from './pages/LogoutPage';
import { useSelector } from "react-redux"
import { Button } from 'react-bootstrap';

const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));

function App() {
  
  const user = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React Homework</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/'}>Главная</Nav.Link>
              <Nav.Link as={Link} to={'/not_found'}>404</Nav.Link>
              {user ? '' : <Nav.Link as={Link} to={'/register_page'}>Регистрация</Nav.Link>}
              <NavDropdown title="Меню" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={'/'}>Главная</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/not_found2'}>Error 404</NavDropdown.Item>
                {user ? '' : <NavDropdown.Item as={Link} to={'/register_page'}>Регистрация</NavDropdown.Item>}
              <NavDropdown.Divider />
              {user ? <NavDropdown.Item as={Link} to={'/logout'}>Выйти</NavDropdown.Item> : <NavDropdown.Item as={Link} to={'/auth_page'}>Войти</NavDropdown.Item>}
              </NavDropdown>
            </Nav>
            <Nav>
              {user ? <Nav.Link style={{color: 'blue', fontWeight: 'bold'}}>{user.id} {user.name}</Nav.Link> : ''}
              {user ? <Button as={Link} to={'/logout'} variant="danger">Выйти</Button> : <Button as={Link} to={'/auth_page'}>Войти</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="auth_page" element={<AuthPage />} />
            <Route path="register_page" element={
              <React.Suspense fallback={<span><h1>Loading users page</h1></span>}>
                <RegisterPage />
              </React.Suspense>} />
            <Route path="*" element={<ErrorPage></ErrorPage>} />
            <Route path="logout" element={<LogoutPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
