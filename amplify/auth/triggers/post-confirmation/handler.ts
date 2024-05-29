import type {
	PostConfirmationTriggerEvent,
	PostConfirmationTriggerHandler,
} from "aws-lambda"

export const handler: PostConfirmationTriggerHandler = async (
	event: PostConfirmationTriggerEvent,
) => {
	return event
}
