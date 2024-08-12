import { useState } from 'react'


import MainPage from './Pages/mainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-screen">
        <MainPage />
      </div>
    </>
  )
}

export default App
