import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Header from '../../Header/header';
import BrownBox from './BrownBox/BrownBox';
import Circle from './BrownBox/circlePlaceholder';
import MoodLine from './MoodLine';
import { GET_ME } from '../../../utils/queries';
import SingleEntry from '../../SingleEntry/SingleEntry';

import business from '../../../assets/icons/business.png';
import calendar from '../../../assets/icons/calendar.png';

function Home() {
    const navigate = useNavigate();
    const { data: meData, loading, error } = useQuery(GET_ME);
    const user = meData?.me;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log(error);
        navigate('/login');
        return null;
    }

    const handleSignOut = () => {
        // Perform sign-out logic here
        // For example, clear local storage, reset user state, etc.

        // Redirect to the login page after sign-out
        navigate('/login');
    };

    if (!user) {
        navigate('/login');
        return null;
    }

    return (
        <div>
            <Header />
            <div className="backgroundHome rowFront">
                <BrownBox />
                <div className="col">
                    <MoodLine />
                    <img className="imgBook" src="./Photos/Elephant.png" alt="An Elephant" />
                    <a href="/QMood">
                        <button className="BtnRed">Write a Story!</button>
                    </a>
                </div>
                <div>
                    <div className="brownBox">
                        <div className="circle moodIcon">
                            <img src={business} alt=":-)" className="moodIcon" />
                        </div>
                        <h3 className="fontsizeHome">Store</h3>
                    </div>
                    <div className="Streak">
                        <div>
                            <h3>Streak!</h3>
                            <h3>Great Job!</h3>
                        </div>
                        <div className="circle moodIcon">
                            <h2 className="moodIcon StreakNum">12</h2>
                        </div>
                    </div>
                    <a className="brownBox" href="/Calender">
                        <div className="circle moodIcon">
                            <img src={calendar} alt=":-)" className="moodIcon" />
                        </div>
                        <h3 className="fontsizeHome">Calendar</h3>
                    </a>
                    <a href="/Login">
                        <div className="greyBox">
                            <h3>Grownup</h3>
                            <h3>Area</h3>
                        </div>
                    </a>
                </div>
            </div>

            {user?.savedChildren.length > 0 && (
                <div style={{ margin: '10px', border: 'black 2px solid' }}>
                    {user.savedChildren.map((child) => {
                        return (
                            <div key={child._id}>
                                <h4>{child.name}</h4>
                                {child.entries.map((entry) => {
                                    return <SingleEntry key={entry._id} entry={entry} />;
                                })}
                            </div>
                        );
                    })}
                </div>
            )}

        </div>
    );
}

export default Home;
