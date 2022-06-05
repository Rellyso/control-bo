import { ActionStateType } from "./actionState";

export function getNewLeftElbow(): ActionStateType {
  return {
    title: "Cotovelo Esquerdo",
    states: [
      'Em Repouso',
      'Levemente contraído',
      'Contraído',
      'Fortemente contraído',
    ],
    stateIndex: 0,
    disabled: false,
  }
}