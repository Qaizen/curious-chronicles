import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';

function Header() {

    const { data } = useQuery(GET_ME);
    const username = data?.me.name;

    const handleSignOut = () => {
        Auth.logout();
    };
    console.log(Auth.loggedIn())
    console.log(data)
    return (
        <header>
            <div className="header-left">
                <Link to="/Home" className="header-link">Home</Link>
            </div>
            <div className="header-right">
                {/* {Auth.loggedIn() && ( */}
                <>
                    <span className="header-greeting">{username ? `Welcome,${username}` : "no user"}</span>
                    <button className="header-logout" onClick={handleSignOut}>Sign Out</button>
                </>
                {/* )} */}
            </div>
        </header>
    );
}

export default Header;
