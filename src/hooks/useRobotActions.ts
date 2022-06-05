import { useContext } from "react";
import { RobotActionsContext } from "../contexts/RobotActionsProvider";

export function useRobotActions() {
  const value = useContext(RobotActionsContext)

  return value;
}