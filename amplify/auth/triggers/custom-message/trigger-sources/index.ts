import { CustomMessageTriggerEvent } from "aws-lambda"

import AdminCreateUserEventProccesor from "./admin-create-user"
import AuthenticationEventProccesor from "./authentication"
import ForgotPasswordEventProccesor from "./forgot-password"
import ResendCodeEventProccesor from "./resend-code"
import SignupEventProccesor from "./signup"
import UpdateUserAttributeEventProccesor from "./update-user-attribute"
import VerifyUserAttributeEventProccesor from "./verify-user-attribute"

import { EventProccesor, Strategy } from "../types"

export default class EventProccesorStrategy
	implements Strategy<CustomMessageTriggerEvent, CustomMessageTriggerEvent>
{
	build(
		param: CustomMessageTriggerEvent,
	): EventProccesor<CustomMessageTriggerEvent> {
		switch (param.triggerSource) {
			case "CustomMessage_AdminCreateUser":
				return new AdminCreateUserEventProccesor(param)
			case "CustomMessage_Authentication":
				return new AuthenticationEventProccesor(param)
			case "CustomMessage_ForgotPassword":
				return new ForgotPasswordEventProccesor(param)
			case "CustomMessage_ResendCode":
				return new ResendCodeEventProccesor(param)
			case "CustomMessage_SignUp":
				return new SignupEventProccesor(param)
			case "CustomMessage_UpdateUserAttribute":
				return new UpdateUserAttributeEventProccesor(param)
			case "CustomMessage_VerifyUserAttribute":
				return new VerifyUserAttributeEventProccesor(param)
		}
	}
}
