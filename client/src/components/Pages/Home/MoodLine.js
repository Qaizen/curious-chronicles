import Mood from "../../Mood/Mood";



function MoodLine() {
    return <div className="Mali MoodLine">
        <div>
            <h6>Sat</h6>
            <Mood type={'sad.png'} />
        </div>
        <div>
            <h6>Sun</h6>
            <Mood type={'sad.png'} />
        </div>
        <div>
            <h6>Mon</h6>
            <Mood type={'sad.png'} />
        </div>
        <div>
            <h6>Tue</h6>
            <Mood type={'sad.png'} />
        </div>
        <div>
            <h6>Wed</h6>
            <Mood type={'sad.png'} />
        </div>
    </div>;
}

export default MoodLine