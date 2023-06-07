import BigCircle from '../Home/BrownBox/BigCircle.js'


function GrownupArea() {
    return (
        <div className='col' >
            <div className="greyBox ">

                <h3>Grownup</h3>
                <h3>Area</h3>

            </div>

            <div className='row' >
                <div className='col ' >
                    <div className='Mali AddChild'>
                        <div className='circle' ></div>
                        <h3>Add child</h3>
                    </div >
                    <div className=' kidcenter '>
                        <div className='col'>
                            <div className='padding' >

                                <BigCircle />
                            </div>
                            <h2 className='padding'>Kid 1</h2>
                        </div>
                        <div className='col'>
                            <div className='padding' >

                                <BigCircle />
                            </div>
                            <h2 className='padding'>Kid 2</h2>
                        </div>

                    </div>
                    <div className='subName'>Select the child you want to change!</div>


                    <button className='BtnBrown'>Go Back</button>
                </div>
                <div className='Mali'>
                    <h1 className='GrownupSubTitle'>Subscription tier: </h1>
                    <a href='/Sub' className='LongGreyBox SubBoxLink'>
                        <h2 >Basic</h2>
                        <div className='row SubBoxLinkCir'>
                            <div className='circle SBmargin' ></div>
                            <h3>learn more...</h3>
                        </div>
                    </a>
                    <div className='LongGreyBox' >
                        <h2>Notifications</h2>
                    </div>
                    <div className='LongGreyBox' >
                        <h2>Backups</h2>
                    </div>
                    <div className='LongGreyBox' >
                        <h2>PIN Lock</h2>
                    </div>
                    <div className='LongGreyBox' >
                        <h2>Settings</h2>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default GrownupArea;