import { useRobotActions } from "../hooks/useRobotActions";

import { ControlCard } from "./ControlCard";


export function RobotControl() {

  const { leftElbow, rightElbow, leftPulse, rightPulse, headInclination, headRotation } = useRobotActions()

  return (
    <div className="container">

      <main className="relative overflow-auto p-4">

        <article className="flex flex-col mt-20">
          <h2 className="dark:text-white text-3xl font-bold">Braços</h2>
          <p className="text-slate-400 text-xl font-normal mb-6">Controle dos movimentos dos braços do robô</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ControlCard
              robotAction={leftElbow}
            />
            <ControlCard
              robotAction={rightElbow}
            />
            <ControlCard
              robotAction={leftPulse}
            />
            <ControlCard
              robotAction={rightPulse}
            />
          </div>
        </article>

        <article className="flex flex-col mt-20">
          <h2 className="dark:text-white text-3xl font-bold">Cabeça</h2>
          <p className="text-slate-400 text-xl font-normal mb-6">Controle dos movimentos da cabeça do robô</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ControlCard
              robotAction={headInclination}
            />
            <ControlCard
              robotAction={headRotation}
            />
          </div>
        </article>


      </main>
    </div >
  )
}