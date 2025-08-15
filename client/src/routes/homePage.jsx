import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-start h-[calc(100vh-3.5rem)] bg-gradient-to-r from-neutral-900/30 via-[#2b241b]/30 to-neutral-900/30">
            <div className="bg-gray-300/65 p-4 rounded-lg shadow-lg flex flex-col items-center mt-[20vh]">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to ShelfLife</h1>
                <p className="text-lg mb-8 text-gray-600">This is the home page. Features to be added!</p>
                <button
                    onClick={handleLoginClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
}

export default HomePage;