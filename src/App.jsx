import { HookStateArray, HookUseState, HookUseStateObject } from './components'

// style 
import "./App.css"

function App() {

  return (
    <div style={container}>
      {/* <HookUseState /> */}
      {/* <HookUseStateObject /> */}
      <HookStateArray />
    </div>
  )
}

export default App

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,137,137,1) 100%)",
}
