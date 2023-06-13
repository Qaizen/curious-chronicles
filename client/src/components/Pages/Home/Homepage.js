import BrownBox from "./BrownBox/BrownBox.js";
import Circle from "./BrownBox/circlePlaceholder";
import MoodLine from "./MoodLine.js";
import { GET_ME } from "../../../utils/queries.js"
import { useQuery } from '@apollo/client';
import SingleEntry from "../../SingleEntry/SingleEntry.js";

//import Child from "../../../../../server/models/Child.js";

function Home() {

    const { data: meData } = useQuery(GET_ME);
    const user = meData?.me;


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

                {user?.savedChildren.length > 0 && (
                    <div style={{ margin: "10px", border: "black 2px solid" }}>
                        {user.savedChildren.map(child => {
                            return (
                                <div key={child._id}>
                                    <h4>{child.name}</h4>
                                    {child.entries.map(entry => {
                                        return (
                                            <SingleEntry key={entry._id} entry={entry} />
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                )}

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

