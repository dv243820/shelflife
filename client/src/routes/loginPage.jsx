import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Error and loading states for login
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });

            const data = await response.json();

            // Check if login was successful
            if (response.ok) {
                // Store the JWT token
                localStorage.setItem('authToken', data.token);
                // Store the user information
                localStorage.setItem('user', JSON.stringify(data.user));

                // Redirect to home page
                navigate('/home');
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Network error. Please try again.');
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-5.0rem)] items-center justify-center bg-gradient-to-r from-neutral-900/30 via-[#2b241b]/30 to-neutral-900/30">
            <div className="bg-white/75 p-8 rounded-lg shadow-lg w-full max-w-sm overflow-hidden">
                <h1 className="text-2xl font-bold text-center mb-3 text-gray-800">Sign into your account</h1>

                {/*Error message if something goes wrong*/}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}
                {/*Loading indicator */}
                {loading && (
                    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
                        Logging you in...
                    </div>
                )}


                <form onSubmit={handleLogin} className="space-y-4 pb-3 pt-3 pl-2 pr-2 bg-white/80 rounded-md border-gray-900/10 border">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a7e5b]"
                            placeholder="youremail@domain.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a7e5b]"
                            placeholder="Your password"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-[#8a7151]/95 via-[#9a7e5b]/80 to-[#8a7151]/95 hover:bg-[#5a4b39]/80 hover:duration-200 font-semibold text-white py-2 px-4 rounded-md transition-colors"
                    >
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?
                        <button
                            onClick={() => navigate('/register')}
                            className="text-[#a38053] hover:text-[#705c42] ml-1 underline"
                        >
                            Register here
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;