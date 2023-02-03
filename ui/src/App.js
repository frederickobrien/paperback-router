import './App.css';
import { Globe } from './components/globe';
import aroundTheWorldInEightyDays from './data/80-days.json'
import tracks from './data/tracks.json'

function App() {
  return (
    <Globe {...aroundTheWorldInEightyDays} />
  );
}

export default App;
