import SendSMS from 'react-native-sms';
export const sendSms = (number, body) => {
  SendSMS.send({
    body: body,
    recipients: [number],
    successTypes: ['sent', 'queued'],
    allowAndroidSendWithoutReadPermission: true,
  });
};
