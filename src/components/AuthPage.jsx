import React from 'react'

export function AuthPage(props) {
let login = '';
let password = '';

function tryAuth(){
    fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: login,
            password: password,
        }),
    })
    .then(response => {
        if(response.ok) {
            alert('Авторизация прошла успешно!')
        } else {
            alert('Ошибка! Возможно логин\пароль введен не верно!')
        }
    });
}

    return (
    <>
        <h3>Авторизация</h3>
        <div>
            <label>Логин: </label>
            <input type="text" onChange={(e) => login = e.target.value } placeholder="Login" /> <br />
            <label>Пароль: </label>
            <input type="password" onChange={(e) => password = e.target.value } placeholder="Password" /> <br/>
            <button onClick={() => tryAuth()}>Войти</button>
        </div>
    </>)
}