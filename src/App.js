import { WorldMap } from "./components/WorldMap";
import { Marks } from "./components/Marks";
import "./App.css";

const width = 960;
const height = 500;

function App() {
  const worldMap = WorldMap();

  if (!worldMap) {
    return <pre>Loading...</pre>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Book Routes</p>
      </header>
      <svg className="map-container" width={width} height={height}>
        <Marks worldMap={worldMap} />
      </svg>
    </div>
  );
}

export default App;
