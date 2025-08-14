import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    return (

        
        <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-blue-300">
            <h1>Login Page woohoo</h1>
        </div>
    );
}

export default LoginPage;