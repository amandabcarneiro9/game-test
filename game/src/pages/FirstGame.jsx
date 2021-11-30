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
      // const style = "button"
      return (
        <li className="__list" key={move}>
          <button className="__button" onClick={() => jumpTo(move)}>
            {destination}
          </button>
        </li>
      )
    })
  }
  return (
    <div className="first-game">
      <h1 className="__title">React tic tac toe with Hooks</h1>
      <div className="__game">
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="__infos">
          <h3>History</h3>
          {history.length}
          <ul>{renderMoves()}</ul>
          <h3>{winner ? 'Winner:' + winner : 'Next Player: ' + xo}</h3>
        </div>
      </div>
    </div>
  )
}
