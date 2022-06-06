import { useContext } from "react";
import { useContextSelector } from "use-context-selector"
import { RobotActionsContext } from "../contexts/RobotActionsProvider";

export function useChangeRobotAction() {
  const changeRobotAction = useContextSelector(RobotActionsContext, robotActions => robotActions.changeRobotActionState)


  return { changeRobotAction };
}