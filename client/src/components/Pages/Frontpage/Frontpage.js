

// import book from './public/Photos/Book.png';

function Frontpage() {
    return (
        <div className="about-page">
            <h1 className="logoMark">Curious Chronicles</h1>
            <h2 className="Subtitle">Welcome to a world of understand and creativity!</h2>
            <img className="imgBook" src='./public/Photos/Book.png' alt="Logo" />

            <h3 className="subName">Make sure to get a grownup before you start!</h3>
            <a href='/ParentSignup'>
                <button className="BtnRed">Let's get started!</button>
            </a>
        </div>
    );
}

export default Frontpage;