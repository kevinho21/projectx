import React, { useState }  from 'react';
import { useNavigate }      from 'react-router-dom';
import Button               from '../atoms/Button';
import Form                 from '../organisms/Form';
import TextInput            from '../molecules/TextInput';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            if (username === 'kevin' && password === 'swag') {
                console.log('Login successful');
                setUsername('');
                setPassword('');
                setError('');
                navigate("/");
            } else {
                setError('Invalid email or password');
            }
        }, 1000);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <TextInput
                type="text"
                id="username"
                label="Username:"
                value={username}
                onChange={handleUsernameChange}
            />
            <TextInput
                type="password"
                id="password"
                label="Password:"
                value={password}
                onChange={handlePasswordChange}
            />
            <Button
                type={"submit"}
                onClick={handleSubmit}
                disabled={!username && ! password ? true : false}
            >
                Login
            </Button>
            {error && <div>{error}</div>}
        </Form>
        
    );
};

export default Login;