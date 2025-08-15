import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Navbar() {
    const location = useLocation();
    const [user, setUser] = useState(null);

    // Get user data from localStorage on component mount
    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    return (
        <nav className="shadow-xl overflow-hidden bg-gradient-to-r from-neutral-900/50 via-[#2b241b]/60 to-neutral-900/60">
            <div className="lg:px-4 md:px-4 px-2 flex justify-between items-center lg:h-14 md:h-14 h-16 relative border-b border-neutral-900/10 group">
                {/* Title button */}
                <div className="flex-shrink-0 lg:block md:block hidden">
                    <Link to="/home" className="text-white text-3xl font-bold hover:text-neutral-200">
                        ShelfLife
                    </Link>
                </div>

                {/* Navigation Buttons*/}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-1 bg-neutral-800/70 backdrop-blur-sm rounded-md px-3 py-1.5 whitespace-nowrap transition-all duration-200 ease-in-out shadow-lg">
                    <Link
                        to="/home"
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${location.pathname === '/home'
                            ? 'bg-neutral-500/40 text-white shadow-md'
                            : 'text-neutral-300 hover:text-white hover:bg-neutral-600'
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/inventory"
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${location.pathname === '/inventory'
                            ? 'bg-neutral-600/90 text-white shadow-md'
                            : 'text-neutral-300 hover:text-white hover:bg-neutral-600'
                            }`}
                    >
                        Inventory
                    </Link>
                    <Link
                        to="/recipes"
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${location.pathname === '/recipes'
                            ? 'bg-neutral-600/90 text-white shadow-md'
                            : 'text-neutral-300 hover:text-white hover:bg-neutral-600'
                            }`}
                    >
                        Recipes
                    </Link>
                    <Link
                        to="/stats"
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${location.pathname === '/stats'
                            ? 'bg-neutral-600/90 text-white shadow-md'
                            : 'text-neutral-300 hover:text-white hover:bg-neutral-600'
                            }`}
                    >
                        Stats
                    </Link>

                </div>
                {/* User Info */}
                <div className="flex-shrink-0 lg:block md:block hidden">
                    <Link to="/settings" className="text-white text-xl font-medium hover:text-neutral-200">
                        {user ? `${user.username}` : 'User Settings'}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;