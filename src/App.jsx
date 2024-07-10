// App.jsx is exported to main.jsx. use route and router
import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState("#ffffe7")

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "red"}}
          >RED</button>

          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "green"}}
          >GREEN</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "blue"}}
          >BLUE</button>
          
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
          style={{backgroundColor: "yellow"}}
          >YELLOW</button>

        </div>
      </div>
     </div>
    </>
  )
}

export default App
