import React, {useState, useEffect} from 'react'
import './App.css'
import Loading from './loading'
import Tours from './tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    console.log("reached");
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
    // console.log("re+s+");
    console.log(newTours);
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      console.log(tours);
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  
    useEffect(() => {
      fetchTours();
    },[])

  if(tours.length===0)
  {
    return(
      <button onClick={()=> fetchTours}>refresh</button>
    )
  }

 
  if(loading)
  {
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  return(
    <main>
      <Tours tours={tours}
      removeTour={removeTour}
      />
    </main>
  )

  
}

export default App;
