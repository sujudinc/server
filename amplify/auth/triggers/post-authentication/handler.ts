import type {
  PostAuthenticationTriggerEvent,
  PostAuthenticationTriggerHandler,
} from "aws-lambda";

export const handler: PostAuthenticationTriggerHandler = async (
  event: PostAuthenticationTriggerEvent
) => {
  return event;
};
