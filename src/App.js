import { useState, useEffect } from "react"

const App = () => {
  const [quote, setQuote] = useState ("default Text")
  
  const url = "https://api.kanye.rest/"

  useEffect(()=>{
  },[])

  const getQuote = async () =>{
    const response = await fetch(url)
    const data = await response.json()
    const finalQuote = data["quote"]
    setQuote(finalQuote)
  }

  useEffect(()=>{
    getQuote()
  },[]) //<--- Prevent refreshing 
  
  
  
  return (
    <div>
      <h1>{quote}</h1>
   </div> 
  )
}


export default App