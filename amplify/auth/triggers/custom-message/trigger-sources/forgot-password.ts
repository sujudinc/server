import { CustomMessageForgotPasswordTriggerEvent } from "aws-lambda"

import { EventProccesor, Locale } from "../types"
import { forgotPasswordResponse } from "../responses"

export default class ForgotPasswordEventProccesor
	implements EventProccesor<CustomMessageForgotPasswordTriggerEvent>
{
	private event: CustomMessageForgotPasswordTriggerEvent

	constructor(event: CustomMessageForgotPasswordTriggerEvent) {
		this.event = event
	}

	processEvent(): CustomMessageForgotPasswordTriggerEvent {
		const { event } = this

		const response = forgotPasswordResponse({
			locale: event.request.userAttributes["locale"] as Locale,
			name: event.request.userAttributes["name"],
			code: event.request.codeParameter,
		})

		event.response = response

		return event
	}
}
