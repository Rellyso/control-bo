import { CaretDown, CaretUp } from "phosphor-react";
import { useRobotActions } from "../hooks/useRobotActions";

import { ControlCard } from "./ControlCard";
import { ActionButtonControlCard } from "./ControlCard/ActionButtonControlCard";
import { Header } from "./Header";


export function RobotControl() {

  const { headInclination } = useRobotActions()

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />

      <div className="container mx-4 text-xl font-middle">
        <h2 className="mt-4 text-slate-50">
          Controle de ações projeto Robô
        </h2>
      </div>

      <main className="relative overflow-auto m-4">

        <article className="">
          <h2>Cabeça</h2>
          <p>Controle dos movimentos dos braços do robô</p>
          <ControlCard
            robotAction={headInclination}
          />
        </article>


      </main>
    </div >
  )
}