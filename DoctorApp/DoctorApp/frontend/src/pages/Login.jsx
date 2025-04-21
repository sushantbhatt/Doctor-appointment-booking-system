import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [state, setState] = useState('Sign Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const saveUserData = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const getUserData = () => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    };

    const setLoggedIn = () => {
        localStorage.setItem('isLoggedIn', 'true'); // Set a flag in localStorage
    };

    const handleSignUp = () => {
        if (!name || !email || !password) {
            setErrorMessage('Please fill in all the fields.');
            return;
        }

        const existingUser = getUserData();
        if (existingUser && existingUser.email === email) {
            setErrorMessage('Email already exists. Please use a different email or log in.');
            return;
        }

        const newUser = { name, email, password };
        saveUserData(newUser);
        setErrorMessage('Account created successfully! You can now log in.');
        setState('Login'); // Switch to the login form after successful signup
    };

    const handleLogin = () => {
        if (!email || !password) {
            setErrorMessage('Please enter both email and password.');
            return;
        }

        const storedUser = getUserData();
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            setErrorMessage('Login successful!');
            setLoggedIn(); // Set the logged-in flag
            setTimeout(() => {
                navigate('/'); // Redirect to your dashboard route
                window.location.reload();
            }, 1000);
        } else {
            setErrorMessage('Invalid email or password.');
        }
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setErrorMessage(''); // Clear any previous error messages
        if (state === 'Sign Up') {
            handleSignUp();
        } else {
            handleLogin();
        }
    };

    return (
        <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
                <p className="text-2xl font-semibold">
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </p>
                <p>
                    Please {state === 'Sign Up' ? 'sign up' : 'login'} to book an appointment
                </p>

                {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                {state === 'Sign Up' && (
                    <div className="w-full">
                        <p>Full Name</p>
                        <input
                            className="border border-zinc-300 rounded w-full p-2 mt-1"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                )}

                <div className="w-full">
                    <p>Email</p>
                    <input
                        className="border border-zinc-300 rounded w-full p-2 mt-1"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>

                <div className="w-full">
                    <p>Password</p>
                    <input
                        className="border border-zinc-300 rounded w-full p-2 mt-1"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>

                <button className="bg-blue-600 text-white w-full py-2 rounded-md text-base">
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </button>

                {state === 'Sign Up' ? (
                    <p>
                        Already have an account?{' '}
                        <span
                            onClick={() => {
                                setState('Login');
                                setErrorMessage(''); // Clear error message when switching
                            }}
                            className="text-blue-600 underline cursor-pointer"
                        >
                            Login Here
                        </span>
                    </p>
                ) : (
                    <p>
                        Create a new account?{' '}
                        <span
                            onClick={() => {
                                setState('Sign Up');
                                setErrorMessage(''); // Clear error message when switching
                            }}
                            className="text-blue-600 underline cursor-pointer"
                        >
                            Click here
                        </span>
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;