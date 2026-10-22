import {useState} from 'react';
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';
import { initStorage, getItem, resetGameStorage } from './logic/storage/index.js';
import './App.css'




function App() {

  const [board,setBoard] = useState(() => 
    {
      if(window.localStorage.getItem('board')) return getItem('board')
      return Array(9).fill(null)
    })

  const [turn, setTurn] = useState(() => 
    {
      if(window.localStorage.getItem('turn')) return getItem('turn')
      return TURNS.X
    })

  const [winner, setWinner] = useState(null)

  const resetGame = () => 
    {
      setBoard(Array(9).fill(null))
      setTurn(TURNS.X)
      setWinner(null)
      resetGameStorage()
    }

  const updateBoard = (index) => 
    {
      if(board[index] || winner ) return
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
      initStorage(newBoard, newTurn)
      //initStorageFromLocalStorage({board: newBoard, turn: newTurn})
      const newWinner = checkWinner(newBoard)
      if(newWinner)
        {
          confetti()
          setWinner(newWinner)
        } 
      else if(checkEndGame(newBoard))
        {
          setWinner(false)
        }
    }

  useEffect(()=>
    {
      console.log('Esto se ejecutará por primera vez al montar el componente y no se volverá a ejecutar')
    },[])

  useEffect(codigoAbitrario, listaDeDependencias)
  return(
    <main className="board">
      <h1>TaTeTi</h1>
      <button onClick={resetGame}> Reiniciar partida</button>
      <section className="game">
        {
          board.map((_, index) => 
            {
              return(
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                  >
                    {board[index]}
                </Square>
              )
            })
        }
      </section>

    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
        </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
    <WinnerModal winner={winner} resetGame={resetGame}/>
  </main>   
  )
}

export default App
