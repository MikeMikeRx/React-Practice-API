const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"
  const latitude = ""
  const longitude = ""

  const getCoordinates = async() => {
    const response = await fetch (url)
    const data = await response.json()
    console.log(typeof(data["iss_position"]["latitude"]))
    console.log(data["iss_position"]["longitude"])
  }

  getCoordinates()

  return (
    <h1>API</h1>
  )
}
  
  
  
export default App