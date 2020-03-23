import React, { useState } from 'react';
import{ Button, FormGroup, FormControl, ControlLabel } from 'react-bootsrap';
import './Login.css';

export default function Login(props) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId='name' bsSize='large'>
                    <ControlLabel>User Name</ControlLabel>
                    <FormControl
                        autoFocus
                        type='username'
                        value={username}
                        onChange={e => setUserName(e.target.value)}
                   />     
                </FormGroup>
                <FormGroup controlId='password' bsSize='large'>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />    
                </FormGroup>
                <Button block bsSize='large' disabled={!validateForm()} type='submit'>
                    Login
                </Button>
            </form>
        </div>
    )
}