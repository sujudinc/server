import type {
  CustomMessageTriggerEvent,
  CustomMessageTriggerHandler,
} from "aws-lambda";

import TriggerSourceStrategy from "./trigger-sources";

export const handler: CustomMessageTriggerHandler = async (
  event: CustomMessageTriggerEvent
) => {
  return new TriggerSourceStrategy().build(event).processEvent();
};
