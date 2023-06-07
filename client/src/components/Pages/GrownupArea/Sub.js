import BigCircle from '../Home/BrownBox/BigCircle.js'



function Sub() {
    return (
        <div className="background row">
            <div className='greyBox'>

                <BigCircle />
                <h2>Basic</h2>
                <ul>
                    <li>-10 themes</li>
                    <li>-Manual Backups</li>
                    <li>-All Pre-made
                        Prompts </li>
                </ul>
            </div>
            <div className='greyBox'>

                <BigCircle />
                <h2>Hero</h2>
                <ul>
                    <li>-All themes</li>
                    <li>-Automatic Backups</li>
                    <li>-Advanced Statistics </li>
                    <li>-Custom Prompts </li>
                </ul>
                <button className='BtnRed'>Join</button>
            </div>

        </div>

    );
}
export default Sub;