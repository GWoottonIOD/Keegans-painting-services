import './App.css'
import AppContext from './contexts/AppContext'

function App() {

  return (
    <>
      <div className="roller-container">

        {/* Paint strokes */}
        <div className="stroke stroke-1"></div>
        <div className="stroke stroke-2"></div>
        <div className="stroke stroke-3"></div>
        <div className="stroke stroke-4"></div>
        <div className="stroke stroke-5"></div>

        {/* Paint roller */}
        <div className="paint-roller">
          <div className="roller-handle"></div>
          <div className="roller-head"></div>

        </div>
        <AppContext />
      </div>

    </>
  )
}

export default App