const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"

  const getCoordinates = () => {
    const response = fetch (url)
    const data = response.json()
  }

  return (
    <h1>API</h1>
  )
}
  
  
  
export default App