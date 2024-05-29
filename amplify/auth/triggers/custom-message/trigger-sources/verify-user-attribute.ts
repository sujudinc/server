import { CustomMessageVerifyUserAttributeTriggerEvent } from "aws-lambda"

import { verifyUserAttributeResponse } from "../responses"
import { EventProccesor, Locale } from "../types"

export default class VerifyUserAttributeEventProccesor
	implements EventProccesor<CustomMessageVerifyUserAttributeTriggerEvent>
{
	private event: CustomMessageVerifyUserAttributeTriggerEvent

	constructor(event: CustomMessageVerifyUserAttributeTriggerEvent) {
		this.event = event
	}

	processEvent(): CustomMessageVerifyUserAttributeTriggerEvent {
		const { event } = this

		const response = verifyUserAttributeResponse({
			locale: event.request.userAttributes["locale"] as Locale,
			name: event.request.userAttributes["name"],
			code: event.request.codeParameter,
		})

		event.response = response

		return event
	}
}
