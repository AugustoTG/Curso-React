import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? "reverse" : '';

  const handleClick =()=>{
    setReverse(!reverse);
  };

  // componentDidUpdate - executa toda vez que o component é atualizado

  useEffect(()=>{
    console.log('componentDidUpdate')
  });
 // componentDidMount - executa 1x

 useEffect(()=>{
  console.log('componentDidMount')
},[]);

// com dependência - executa toda vez que a dependência mudar

useEffect(()=>{
  console.log('dependencia count mudou' )
},[count]);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={`logo react ${reverseClass}`} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleClick}>
          Reverse
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
