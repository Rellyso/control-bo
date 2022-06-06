import { ActionStateType } from "./actionState";
import { ROBOT_ACTION_PART } from "./enums/robotActionPart";

export function getNewRightPulse(): ActionStateType {
  return {
    title: "Pulso Direito",
    robotActionPart: ROBOT_ACTION_PART.RIGHT_PULSE,
    states: [
      'Rotação para -90°',
      'Rotação para -45°',
      'Em Repouso', // padrão
      'Rotação para 45°',
      'Rotação para 90°',
      'Rotação para 135°',
      'Rotação para 180°',
    ],
    stateIndex: 2,
    disabled: false,
  }
}

export function getRightPulse(): ActionStateType {
  const action = localStorage.getItem(ROBOT_ACTION_PART.RIGHT_PULSE)

  if (action)
    return JSON.parse(action) as ActionStateType

  return getNewRightPulse()
}