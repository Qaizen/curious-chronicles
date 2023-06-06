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
                <a href="/QOne">
                    <button className="BtnRed">All Done!</button>
                </a>
            </div>
            <div>
                <div className="brownBox">
                    <Circle />
                    <h3 className='fontsizeHome'>Store</h3>

                </div>
                <div className="Streak">
                    <div >

                        <h3>Streak!</h3>
                        <h3>Great Job!</h3>
                    </div>
                    <Circle />
                </div>

                <div className="brownBox">
                    <Circle />
                    <h3 className='fontsizeHome'>Calendar</h3>

                </div>
                <div className="greyBox">

                    <h3>Grownup</h3>
                    <h3>Area</h3>

                </div>

            </div>
        </div>



    )
}

export default Home;

