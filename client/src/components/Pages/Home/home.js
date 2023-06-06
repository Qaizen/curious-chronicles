
import Circle from './circlePlaceholder.js'
import BigCircle from './BigCircle.js';


function Home() {
  return (
    <div>
      <div className='brownBox'>
        <BigCircle />
        <h2 className='subName'>Your Name!</h2>
        <div className='Badges'>

          <Circle />
          <Circle />

          <Circle />
          <Circle />

          <Circle />
          <Circle />

        </div>
      </div>

    </div>
  );
}

export default Home;