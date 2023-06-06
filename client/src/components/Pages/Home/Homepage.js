import BrownBox from "./BrownBox/BrownBox.js";
import Circle from "./BrownBox/circlePlaceholder";
import MoodLine from "./MoodLine.js";


function Home() {
    return (
        <div className='backgroundHome'>
            <BrownBox />
            <div className='col'>

                <MoodLine />

                <img className="imgBook" src='./Photos/Elephant.png' alt="A Elephant" />
                <a href="#">
                    <button className="BtnRed">All Done!</button>
                </a>
            </div>
            <div>
                <div className="brownBox">
                    <Circle />
                    <h3>Store</h3>

                </div>
                <div className="brownBox">
                    <h3>Streak!</h3>
                    <h3>Great Job!</h3>
                    <Circle />
                </div>

                <div className="brownBox">
                    <Circle />
                    <h3>Calendar</h3>

                </div>

            </div>
        </div>



    )
}

export default Home;

