import { CustomMessageAuthenticationTriggerEvent } from "aws-lambda"

import { authenticationResponse } from "../responses"
import { EventProccesor, Locale } from "../types"

export default class AuthenticationEventProccesor
	implements EventProccesor<CustomMessageAuthenticationTriggerEvent>
{
	private event: CustomMessageAuthenticationTriggerEvent

	constructor(event: CustomMessageAuthenticationTriggerEvent) {
		this.event = event
	}

	processEvent(): CustomMessageAuthenticationTriggerEvent {
		const { event } = this

		const response = authenticationResponse({
			locale: event.request.userAttributes["locale"] as Locale,
			name: event.request.userAttributes["name"],
			code: event.request.codeParameter,
		})

		event.response = response

		return event
	}
}
