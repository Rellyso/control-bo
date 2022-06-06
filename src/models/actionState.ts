import { ROBOT_ACTION_PART } from "./enums/robotActionPart";

export type ActionStateType = {
  title: string,
  robotActionPart: ROBOT_ACTION_PART,
  states: string[],
  stateIndex: number,
  disabled: boolean,
}

// export const RobotStateActions = {
//   ARMS: {
//     title: "BRAÇOS",
//     description: "Controle dos movimentos dos braços do robô.",
//     content: {
//       LEFT_ELBOW: {
//         title: "Cotovelo Esquerdo",
//         states: [
//           'Em Repouso',
//           'Levemente contraído',
//           'Contraído',
//           'Fortemente contraído',
//         ],
//         stateIndex: 0,
//       },
//       RIGHT_ELBOW: {
//         title: "Cotovelo Direito",
//         states: [
//           'Em Repouso',
//           'Levemente contraído',
//           'Contraído',
//           'Fortemente contraído',
//         ],
//         stateIndex: 0,
//       },
//       LEFT_PULSE: {
//         title: "Pulso Esquerdo",
//         states: [
//           'Rotação para -90°',
//           'Rotação para -45°',
//           'Em Repouso',
//           'Rotação para 45°',
//           'Rotação para 90°',
//           'Rotação para 135°',
//           'Rotação para 180°',
//         ],
//         stateIndex: 0,
//       },
//       RIGHT_PULSE: {
//         title: "Pulso Direito",
//         states: [
//           'Rotação para -90°',
//           'Rotação para -45°',
//           'Em Repouso',
//           'Rotação para 45°',
//           'Rotação para 90°',
//           'Rotação para 135°',
//           'Rotação para 180°',
//         ],
//         stateIndex: 0,
//       },
//     }
//   },
//   HEAD: {
//     title: "CABEÇA",
//     description: "Controle dos movimentos da cabeça do robô.",
//     content: {
//       HEAD_ROTATION: {
//         title: "Cabeça",
//         states: [
//           'Em Repouso',
//           'Levemente contraído',
//           'Contraído',
//           'Fortemente contraído',
//         ],
//         stateIndex: 0,
//       },
//     }
//   }

// }