import { useState, useEffect } from "react"
const url = "http://api.open-notify.org/iss-now.json"


const App = () => {
  const [loading, setLoading] = useState(false)
  const [latitude, setLatitude] = useState ("")
  const [longitude, setLongitude] = useState ("")

  useEffect(()=>{
    fetch(url)
      .then( (response) => response.json() )
      .then( (data) => data["iss_position"] )
      .then( (position) => {
                // console.log(position["latitude"])
                // console.log(position["longitude"])
                setLatitude(position["latitude"])
                setLongitude(position["longitude"])
      })
  },[])

  if (loading){
    return <h2>Loading Website...</h2>
  } 
  
  return <>
    <h2>Latitude:</h2>
    <p>{latitude}</p>
    <h2>Longitude:</h2>
    <p>{longitude}</p>
  </>

  
}

export default App
