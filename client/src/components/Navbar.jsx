import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    return (
        <nav className="bg-gray-600 shadow-xl overflow-hidden ">
            <div className="lg:px-4 md:px-4 px-2 flex justify-between items-center lg:h-14 md:h-14 h-16 relative">
                {/* Title button */}
                <div className="flex-shrink-0 lg:block md:block hidden">
                    <Link to="/home" className="text-white text-xl font-bold hover:text-gray-200">
                        ShelfLife
                    </Link>
                </div>

                {/* Navigation Buttons*/}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-1 bg-gray-700 rounded-md px-3 py-1.5 whitespace-nowrap">
                    <Link
                        to="/home"
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === '/home'
                            ? 'bg-gray-600 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/inventory"
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === '/inventory'
                            ? 'bg-gray-600 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                            }`}
                    >
                        Inventory
                    </Link>
                    <Link
                        to="/recipes"
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === '/recipes'
                            ? 'bg-gray-600 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                            }`}
                    >
                        Recipes
                    </Link>
                    <Link
                        to="/stats"
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === '/stats'
                            ? 'bg-gray-600 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                            }`}
                    >
                        Stats
                    </Link>

                </div>
                {/* User Settings */}
                <div className="flex-shrink-0 lg:block md:block hidden">
                    <Link to="/settings" className="text-white text-xl font-bold hover:text-gray-200">
                        User Settings
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;