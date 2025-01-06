import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { SetUser, UnsetUser } from "../redux/UsersAction";

export function AuthPage(props) {
    let login = '';
    let password = '';
    let rememberMe = false;

    const dispatch = useDispatch();


    const handleLogin = (userData) => {
        let mockUser;
        if(userData != null)
            mockUser = {id:userData.identity.id, name:userData.identity.login}
        dispatch(SetUser(mockUser));
    }

    const handleLogout = () => {
        dispatch(UnsetUser());
    }

    function tryAuth(){
        fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: login,
                password: password,
                remember: rememberMe
            }),
        })
        .then(response => {
            if(response.ok) {
                response.json().then(data => {
                    handleLogin(data);
                });
                alert('Авторизация прошла успешно!')
            } else {
                handleLogout();
                alert('Ошибка! Возможно логин/пароль введен не верно!')
            }
        });
    }

    return (
    <>
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h3>Авторизация</h3>
                    <Form>
                        <fieldset>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="login">Логин</Form.Label>
                                <Form.Control id="login" placeholder="Login" onChange={(e) => login = e.target.value } />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="password">Пароль</Form.Label>
                                <Form.Control type="password" id="password" placeholder="Password" onChange={(e) => password = e.target.value } />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="switch"
                                    id="remember_me"
                                    label="Запомнить меня"
                                    onChange={(e) => rememberMe = e.target.checked }
                                />
                            </Form.Group>
                            <Button type="button" onClick={() => tryAuth()}>Войти</Button>
                        </fieldset>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>)
}
