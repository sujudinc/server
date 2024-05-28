import { CustomMessageSignUpTriggerEvent } from "aws-lambda";

import { signupResponse } from "../responses";
import { EventProccesor, Locale } from "../types";

export default class SignupEventProccesor
  implements EventProccesor<CustomMessageSignUpTriggerEvent>
{
  private event: CustomMessageSignUpTriggerEvent;

  constructor(event: CustomMessageSignUpTriggerEvent) {
    this.event = event;
  }

  processEvent(): CustomMessageSignUpTriggerEvent {
    const { event } = this;

    const response = signupResponse({
      locale: event.request.userAttributes["locale"] as Locale,
      name: event.request.userAttributes["name"],
      code: event.request.codeParameter,
    })

    event.response = response;

    return event;
  }
}
