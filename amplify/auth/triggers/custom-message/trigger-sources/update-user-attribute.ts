import { CustomMessageUpdateUserAttributeTriggerEvent } from "aws-lambda";

import { updateUserAttributeResponse } from "../responses";
import { EventProccesor, Locale } from "../types";

export default class UpdateUserAttributeEventProccesor
  implements EventProccesor<CustomMessageUpdateUserAttributeTriggerEvent>
{
  private event: CustomMessageUpdateUserAttributeTriggerEvent;

  constructor(event: CustomMessageUpdateUserAttributeTriggerEvent) {
    this.event = event;
  }

  processEvent(): CustomMessageUpdateUserAttributeTriggerEvent {
    const { event } = this;

    const response = updateUserAttributeResponse({
      locale: event.request.userAttributes["locale"] as Locale,
      name: event.request.userAttributes["name"],
      code: event.request.codeParameter,
    })

    event.response = response;

    return event;
  }
}
