
// export default Header
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';

const Header = () => {
    const { accessToken } = useAuth();

    return (
        <header>
            <h1>My App</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {!accessToken && (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                    {accessToken && (
                        <>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/recipes">Recipes</Link></li>
                            <li><Link to="/favorites">My Favorites</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;


