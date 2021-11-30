export default function Square({ value, onClick }) {
  const style = value ? `squares-${value}` : `squares`
  // const style = value ? `square` : `squares`
  return (
    <button onClick={onClick} className={style}>
      {value}
    </button>
  )
}
