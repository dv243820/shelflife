import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/home');
    };

    return (
        <div className="flex flex-col h-[calc(100vh-5.0rem)] items-center justify-center bg-gradient-to-r from-neutral-900/30 via-[#2b241b]/30 to-neutral-900/30">
            <div className="bg-gray-300/65 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center w-auto">
                <h1 className="text-4xl font-bold mb-4 text-red-800">404 Error</h1>
                <p className="text-lg mb-2 font-semibold text-red-800">The page you are looking for does not exist.</p>
                <p className="text-sm mb-1 text-gray-700">If a site link brought you here, please contact me so I can fix it!</p>
                <a
                    href="mailto:dv243820@ohio.edu"
                    className="text-blue-600 text-sm underline mb-4"
                >
                    dv243820@ohio.edu
                </a>
                <button
                    onClick={handleHomeClick}
                    className="w-1/2 bg-gradient-to-r from-[#8a7151]/95 via-[#9a7e5b]/80 to-[#8a7151]/95 hover:bg-[#5a4b39]/80 hover:duration-200 font-semibold text-white py-2 px-4 rounded-md transition-colors"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}

export default ErrorPage;