import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ShoppingCart from './components/ShoppingCart'

function App() {
  const [count, setCount] = useState<number>(0)

    const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  return (
    <>
      <Counter
        count={count}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
      <ShoppingCart /> 
    </>
  )
}

export default App
