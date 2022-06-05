import { RobotControl } from "./components/RobotControl"
import { RobotActionsProvider } from "./contexts/RobotActionsProvider"

function App() {
  return (
    <RobotActionsProvider>
      <RobotControl />
    </RobotActionsProvider>
  )
}

export default App
