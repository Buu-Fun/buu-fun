import { TGenResponseStatus } from "../redux/features/chat-types";

export function isInProgress(status: TGenResponseStatus) {
  return status === "InProgress";
}

export function isError(status: TGenResponseStatus) {
  return status === "Error";
}
