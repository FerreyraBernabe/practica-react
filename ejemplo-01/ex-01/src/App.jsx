import { useState, useEffect } from 'react'

function App() 
{
  const [loading, setLoading] = useState(true); 
  const [data, setData] = useState(null);
  const [click, setClick] = useState(false);

  useEffect(() => 
  {
    console.log('Este componente fue renderizado!')
    setTimeout(() => 
      {
        fetch('./src/data/data.json')
        .then(response => response.json())
        .then(data =>{
          setData(data)
          setLoading(false)})
      },2000)
    },[click])

    const handleReRenderTest = () => 
      {
        setClick(true);
      }
    return (
      <>
      <h1>Simulación de Fetch de Datos</h1>
       {loading ? <span>Recuperando datos...</span> : 
        data && 
         <ul>
          {data.map((element) => {return <li key={element.name}>{element.name} - {element.edad}</li>} )}
         </ul>
       }
       <button onClick={handleReRenderTest}>Botón de re-renderizado</button>
      </>
      )
}

export default App
