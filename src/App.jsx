
import { useState  } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
function handleClick (){
// blahblah logic blah blah
}

  console.log ("puppyList", puppyList)
  return (
    <div className='App'>
      {puppies.map((puppy) => {
          return (<p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}
          </p>
          );
      })}
      <p>
      </p>
    </div>
  );
}

export default App
