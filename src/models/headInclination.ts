import { ActionStateType } from "./actionState";
import { ROBOT_ACTION_PART } from "./enums/robotActionPart";

export function getNewHeadInclination(): ActionStateType {

  return {
    title: "Inclinação da Cabeça",
    robotActionPart: ROBOT_ACTION_PART.HEAD_INCLINATION,
    states: [
      'Para cima',
      'Em repouso', // padrão
      'Para baixo',
    ],
    stateIndex: 1,
    disabled: false,
  }
}

export function getHeadInclination(): ActionStateType {
  const action = localStorage.getItem(ROBOT_ACTION_PART.HEAD_INCLINATION)

  if (action)
    return JSON.parse(action) as ActionStateType

  return getNewHeadInclination()
}