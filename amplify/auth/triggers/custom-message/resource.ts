import { defineFunction } from '@aws-amplify/backend';

const customMessage = defineFunction({
  name: 'custom-message',
});

export default customMessage;