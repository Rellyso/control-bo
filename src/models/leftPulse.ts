import { ActionStateType } from "./actionState";

export function getNewLeftPulse(): ActionStateType {
  return {
    title: "Pulso Esquerdo",
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