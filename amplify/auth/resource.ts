import { defineAuth } from "@aws-amplify/backend"
import {
	customMessage,
	postAuthentication,
	postConfirmation,
	preAuthentication,
	preSignUp,
} from "./triggers"

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
	loginWith: {
		email: true,
	},
	groups: ["JAMAAH", "ADMINS"],
	userAttributes: {
		address: {
			mutable: true,
			required: false,
		},
		birthdate: {
			mutable: true,
			required: false,
		},
		email: {
			mutable: true,
			required: true,
		},
		familyName: {
			mutable: true,
			required: true,
		},
		gender: {
			mutable: true,
			required: false,
		},
		locale: {
			mutable: true,
			required: true,
		},
		middleName: {
			mutable: true,
			required: false,
		},
		nickname: {
			mutable: true,
			required: false,
		},
		phoneNumber: {
			mutable: true,
			required: false,
		},
		profilePicture: {
			mutable: true,
			required: false,
		},
		preferredUsername: {
			mutable: true,
			required: false,
		},
		profilePage: {
			mutable: true,
			required: false,
		},
		timezone: {
			mutable: true,
			required: false,
		},
		lastUpdateTime: {
			mutable: true,
			required: true,
		},
		website: {
			mutable: true,
			required: false,
		},
	},
	multifactor: {
		mode: "OPTIONAL",
		totp: true,
		sms: true,
	},
	triggers: {
		customMessage,
		postAuthentication,
		postConfirmation,
		preAuthentication,
		preSignUp,
	},
	access: (allow) => {
		return [allow.resource(postConfirmation).to(["addUserToGroup"])]
	},
})
