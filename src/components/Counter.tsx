




interface CounterProps {
    increment: () => void,
    decrement: () => void,
    count: number
}

    const Counter = ({increment, decrement, count}: CounterProps) => {
  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
