import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col h-[calc(100vh-5.0rem)] items-center justify-center bg-gradient-to-r from-neutral-900/30 via-[#2b241b]/30 to-neutral-900/30">
            <div className="bg-white/75 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center w-full max-w-md">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to ShelfLife</h1>
                <p className="text-lg mb-8 text-gray-600">This is the home page. Features to be added!</p>
                <button
                    onClick={handleLoginClick}
                    className="w-2/5 bg-gradient-to-r from-[#8a7151]/95 via-[#9a7e5b]/80 to-[#8a7151]/95 hover:bg-[#5a4b39]/80 hover:duration-200 font-semibold text-white py-2 px-4 rounded-md transition-colors"
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
}

export default HomePage;