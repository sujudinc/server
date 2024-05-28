export type Locale = 'en' | 'ar';

export type CustomMessage = {
  emailSubject: string;
  emailMessage: string;
  smsMessage: string;
}

export type EventProccesor<R> = {
  processEvent(): R;
};

export type Strategy<P, R> = {
  build(param: P): EventProccesor<R>;
};
