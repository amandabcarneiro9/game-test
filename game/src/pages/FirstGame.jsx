import { useState } from 'react'
import Board from '../components/BoardTic'
import CalculateWinner from '../components/Winner'
import '../styles/firstgame.scss'

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)
  const winner = CalculateWinner(history[stepNumber])
  const xo = xIsNext ? 'x' : 'o'

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1)
    const current = historyPoint[stepNumber]
    const squares = [...current]
    //return if won or occupied
    if (winner || squares[i]) return

    squares[i] = xo
    setHistory([...historyPoint, squares])
    setStepNumber(historyPoint.length)
    setXisNext(!xIsNext)
  }

  const jumpTo = (step) => {
    setStepNumber(step)
    setXisNext(step % 2 === 0)
  }

  const renderMoves = () => {
    return history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : 'Go to start'
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      )
    })
  }
  return (
    <div>
      <h1>React tic tac toe with Hooks(tried)</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info">
        <div>
          <h3>History</h3>
          {history.length}
          <ul>{renderMoves()}</ul>
        </div>

        <h3>{winner ? 'Winner:' + winner : 'Next Player' + xo}</h3>
      </div>
    </div>
  )
}
