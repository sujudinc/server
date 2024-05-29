import type {
	PreAuthenticationTriggerEvent,
	PreAuthenticationTriggerHandler,
} from "aws-lambda"

export const handler: PreAuthenticationTriggerHandler = async (
	event: PreAuthenticationTriggerEvent,
) => {
	return event
}
