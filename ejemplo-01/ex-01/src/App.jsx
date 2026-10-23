import { useState, useEffect } from 'react'

function App() 
{
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = () => 
    {
      setLoading(true);
      fetch('./data.json')
      .then(response => response.json)
      .then(data => data.array.map(element => 
        {
          console.log(`Nombre: ${element.name} - Edad: ${element.edad}`)
        }))
    }
  useEffect(() => 
    {
      if(loading) console.log("Buscando datos")
    },[loading])

    return (
      <>
      <h1>Simulación de Fetch de Datos</h1>
      <button onClick={fetchData}>Realizar fetch</button>
       {loading && <span>Buscando datos</span>}
      </>
      )
}

export default App
