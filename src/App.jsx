
import { useState  } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // blah blah logic blah blah
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App
