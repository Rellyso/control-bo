import { ActionStateType } from "./actionState";
import { ROBOT_ACTION_PART } from "./enums/robotActionPart";

export function getNewHeadRotation(): ActionStateType {
  return {
    title: "Rotação da Cabeça",
    robotActionPart: ROBOT_ACTION_PART.HEAD_ROTATION,
    states: [
      'Rotação para -90°',
      'Rotação para -45°',
      'Em Repouso', // padrão
      'Rotação para 45°',
      'Rotação para 90°',
    ],
    stateIndex: 2,
    disabled: false,
  }
}

export function getHeadRotation(): ActionStateType {
  const action = localStorage.getItem(ROBOT_ACTION_PART.HEAD_ROTATION)

  if (action)
    return JSON.parse(action) as ActionStateType

  return getNewHeadRotation()
}