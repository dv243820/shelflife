import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-violet-300">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to ShelfLife</h1>
            <p className="text-lg mb-8 text-gray-600">This is the home page. Features to be added!</p>
            <button 
                onClick={handleLoginClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            >
                Go to Login
            </button>
        </div>
    );
}

export default HomePage;