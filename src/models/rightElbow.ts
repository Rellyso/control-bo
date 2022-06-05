import { ActionStateType } from "./actionState";

export function getNewRightElbow(): ActionStateType {
  return {
    title: "Cotovelo Direito",
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