import { ActionStateType } from "./actionState";

export function getNewHeadRotation(): ActionStateType {
  return {
    title: "Cabeça",
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