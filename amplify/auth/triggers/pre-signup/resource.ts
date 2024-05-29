import { defineFunction } from "@aws-amplify/backend"

const preSignUp = defineFunction({
	name: "pre-sign-up",
	environment: {
		ALLOW_DOMAIN: "mohd.ca",
	},
})

export default preSignUp
