import { defineAuth } from "@aws-amplify/backend";
import {
  customMessage,
  postAuthentication,
  postConfirmation,
  preAuthentication,
  preSignUp,
} from "./triggers";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
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
});
