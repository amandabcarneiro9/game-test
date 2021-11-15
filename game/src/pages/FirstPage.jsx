import { Link } from 'react-router-dom'

export default function main() {
  return (
    <div>
      <h1>Welcome to the funniest Game!</h1>
      <p>
        You probably have already play this kind of game before. This game will have are well-known games around the
        world divided in 3 phases.To complete this game you need to pass all 3 phases.Each phase will give you a clue
        for the treasure at final.
      </p>
      <Link to="/first-game">Let's Play!</Link>
    </div>
  )
}
