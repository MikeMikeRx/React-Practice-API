const App = () => {
  const url = "https://api.kanye.rest/"
  
  const getQuote = async () =>{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data["quote"])
  }
  
  getQuote()
  
  return (
   <h1>Nothing</h1> 
  )
}


export default App