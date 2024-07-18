

const Button = ({ increment, onClickFunction }) => {
  const handleClick = (increment) => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}

export default Button