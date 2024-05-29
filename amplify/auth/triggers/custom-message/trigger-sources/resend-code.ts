import { CustomMessageResendCodeTriggerEvent } from "aws-lambda"

import { resendCodeResponse } from "../responses"
import { EventProccesor, Locale } from "../types"

export default class ResendCodeEventProccesor
	implements EventProccesor<CustomMessageResendCodeTriggerEvent>
{
	private event: CustomMessageResendCodeTriggerEvent

	constructor(event: CustomMessageResendCodeTriggerEvent) {
		this.event = event
	}

	processEvent(): CustomMessageResendCodeTriggerEvent {
		const { event } = this

		const response = resendCodeResponse({
			locale: event.request.userAttributes["locale"] as Locale,
			name: event.request.userAttributes["name"],
			code: event.request.codeParameter,
		})

		event.response = response

		return event
	}
}
