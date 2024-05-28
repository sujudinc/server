import { CustomMessage, Locale } from "../types";

const response = (params: {
  locale: Locale;
  name: string;
  code: string;
}): CustomMessage => {
  const { locale, name, code } = params;

  return {
    en: {
      emailSubject: "Reset my password",
      emailMessage: `Hello ${name}, your new one-time code is ${code}.`,
      smsMessage: `Hello ${name}, your new one-time code is ${code}`,
    },
    ar: {
      emailSubject: "إعادة تعيين كلمة المرور",
      emailMessage: `مرحبًا ${name}، رمزك الجديد لمرة واحدة هو ${code}.`,
      smsMessage: `مرحبًا ${name}، رمزك الجديد لمرة واحدة هو ${code}`,
    },
  }[locale];
};

export default response;
