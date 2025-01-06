import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RegisterPage(props) {
    let login = '';
    let password = '';

    function tryRegister(){
        alert(`Регистрация прошла успешно!\r\n${login}\r\n${password}`);
    }

    return (
    <>
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h3>Регистрация</h3>
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
                            <Button type="button" onClick={() => tryRegister()}>Регистрация</Button>
                        </fieldset>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>)
}
