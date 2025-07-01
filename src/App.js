import { useState, useEffect } from "react"

const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"
  const [latitude, setLatitude] = useState ("")
  const [longitude, setLongitude] = useState ("")
  const [urlMap, setUrlMap] = useState ("")

  const getCoordinates = async() => {
    const response = await fetch (url)
    const data = await response.json()
    // console.log(data["iss_position"]["latitude"])
    // console.log(data["iss_position"]["longitude"])
    setLatitude(data["iss_position"]["latitude"])
    setLongitude(data["iss_position"]["longitude"])
    const iss_lat = (data["iss_position"]["latitude"])
    const iss_long = (data["iss_position"]["longitude"])    
    setUrlMap(`https://www.google.com/maps/@53.3150024,-1.3398423,7.46z?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D`)
  }

  useEffect(()=>{
    getCoordinates()
  }, [])

  
 

  return (
    <div>
    <h1>International Space Station:</h1>
    <h2>Latitude</h2>
    <p>{latitude}</p>
    <h2>Longitude</h2>
    <p>{longitude}</p>
    </div>
  )
}
  
  
  
export default App