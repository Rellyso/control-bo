import { useContext } from "react";
import { useContextSelector } from "use-context-selector"
import { RobotActionsContext } from "../contexts/RobotActionsProvider";

export function useRobotActions() {
  const leftElbow = useContextSelector(RobotActionsContext, robotActions => robotActions.leftElbow)
  const rightElbow = useContextSelector(RobotActionsContext, robotActions => robotActions.rightElbow)
  const leftPulse = useContextSelector(RobotActionsContext, robotActions => robotActions.leftPulse)
  const rightPulse = useContextSelector(RobotActionsContext, robotActions => robotActions.rightPulse)
  const headInclination = useContextSelector(RobotActionsContext, robotActions => robotActions.headInclination)
  const headRotation = useContextSelector(RobotActionsContext, robotActions => robotActions.headRotation)

  return {
    leftElbow,
    rightElbow,
    leftPulse,
    rightPulse,
    headInclination,
    headRotation,
  };
}