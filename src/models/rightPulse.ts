import { ActionStateType } from "./actionState";

export function getNewRightPulse(): ActionStateType {
  return {
    title: "Pulso Direito",
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