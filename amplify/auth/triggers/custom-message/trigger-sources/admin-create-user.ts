import { CustomMessageAdminCreateUserTriggerEvent } from "aws-lambda";

import { adminCreateUserResponse } from "../responses";
import { EventProccesor, Locale } from "../types";

export default class AdminCreateUserEventProccesor
  implements EventProccesor<CustomMessageAdminCreateUserTriggerEvent>
{
  private event: CustomMessageAdminCreateUserTriggerEvent;

  constructor(event: CustomMessageAdminCreateUserTriggerEvent) {
    this.event = event;
  }

  processEvent(): CustomMessageAdminCreateUserTriggerEvent {
    const { event } = this;

    const response = adminCreateUserResponse({
      locale: event.request.userAttributes["locale"] as Locale,
      name: event.request.userAttributes["name"],
      code: event.request.codeParameter,
    })

    event.response = response;

    return event;
  }
}
