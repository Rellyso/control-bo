import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { RobotControl } from "./components/RobotControl"

function App() {
  return (
    <>
      <Header />

      <div id="content" className="bg-slate-900 min-h-screen pb-20">
        <RobotControl />
      </div>

      <Footer />
    </>
  )
}

export default App
