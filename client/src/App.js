import "./App.css";

function App() {
  const name = "Raul Maya";
  const age = 27;
  return (
    <div>
      <h1>Hello there</h1>
      <h3>General Kenobi</h3>
      <h5>Hi, my name is {name}, and I'm {age} year old</h5>
      <input type="number" min={5} max={10} placeholder="7" style={{border: '1px solid blue'}}/>
      <textarea autoFocus={true} />
    </div>
  );
}

export default App;
