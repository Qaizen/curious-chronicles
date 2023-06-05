

// import book from './public/Photos/Book.png';

function Frontpage() {
    return (
        <div className="about-page">
            <h1 className="logoMark">Curious Chronicles</h1>
            <h2 className="Subtitle">Welcome to a world of understand and creativity!</h2>
            <div className="row">

                <img className="imgBook" src='./Photos/bunny.png' alt="A bunny" />
                <img className="imgBook" src='./Photos/Book.png' alt="A book" />
                <img className="imgBook" src='./Photos/giraffe.png' alt="A g" />
            </div>
            <div className="divGir">

                <h3 className="subName">Make sure to get a grownup before you start!</h3>
            </div>
            <a href='/ParentSignup'>
                <button className="BtnRed">Let's get started!</button>
            </a>
        </div>
    );
}

export default Frontpage;