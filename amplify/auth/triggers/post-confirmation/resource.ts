import { defineFunction } from "@aws-amplify/backend"

const postConfirmation = defineFunction({
	name: "post-confirmation",
	environment: {
		GROUP_NAME: "JAMAAH",
	},
})

export default postConfirmation
