import { defineFunction } from '@aws-amplify/backend';

const preAuthentication = defineFunction({
  name: 'pre-authentication',
});

export default preAuthentication;