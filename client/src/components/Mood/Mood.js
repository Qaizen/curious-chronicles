import $ from 'jquery';

function Mood(type) {
  return (
    <div className="circle">
      <img src={`./Photos/moods/${type}`} alt=":-)" />
    </div>
  );
}

export default Mood;