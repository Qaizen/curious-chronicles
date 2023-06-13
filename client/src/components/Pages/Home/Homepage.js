import BrownBox from "./BrownBox/BrownBox.js";
import Circle from "./BrownBox/circlePlaceholder";
import MoodLine from "./MoodLine.js";

import business from '../../../assets/icons/business.png'
import calendar from '../../../assets/icons/calendar.png'

function Home() {
    return (
        <div className='backgroundHome rowFront'>
            <BrownBox />
            <div className='col'>

                <MoodLine />

                <img className="imgBook" src='./Photos/Elephant.png' alt="A Elephant" />
                <a href="/QMood">
                    <button className="BtnRed">All Done!</button>
                </a>
            </div>
            <div>
                <div className="brownBox">
                    <div className="circle moodIcon">
                        <img src={business} alt=":-)" className='moodIcon' />
                    </div>
                    <h3 className='fontsizeHome'>Store</h3>

                </div>
                <div className="Streak">
                    <div >

                        <h3>Streak!</h3>
                        <h3>Great Job!</h3>
                    </div>
                    <div className="circle moodIcon">
                        <h2 className='moodIcon StreakNum'>12</h2>
                    </div>
                </div>

                <a className="brownBox" href="/Calender">
                    <div className="circle moodIcon">
                        <img src={calendar} alt=":-)" className='moodIcon' />
                    </div>
                    <h3 className='fontsizeHome'>Calendar</h3>

                </a>
                <a href='/Login'>

                    <div className="greyBox">

                        <h3>Grownup</h3>
                        <h3>Area</h3>

                    </div>
                </a>

            </div>
        </div>



    )
}

export default Home;

