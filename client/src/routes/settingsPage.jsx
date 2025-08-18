import { useNavigate } from 'react-router-dom';
import '../App.css'

function SettingsPage() {
    const navigate = useNavigate();
    const handleLogoutClick = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        navigate('/');
    };


    return (
        <div className="flex flex-col h-[calc(100vh-5.0rem)] items-center justify-center bg-gradient-to-r from-neutral-900/30 via-[#2b241b]/30 to-neutral-900/30">
            <div className="bg-white/75 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center w-full max-w-md h-[90%]">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 amaranth-bold">Manage User Settings</h1>
                <p className="text-lg mb-8 text-gray-600">User settings</p>
                <button
                    onClick={handleLogoutClick}
                    className="w-full logout-btn-clr hover:to-[#8a5551]/95 font-semibold text-white py-2 px-4 rounded-md mt-auto">
                    Logout
                </button>
            </div>
        </div>
    );
}

export default SettingsPage;