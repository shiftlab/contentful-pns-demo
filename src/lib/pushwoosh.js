import Pushwoosh from 'pushwoosh-client';
import dotenv from 'dotenv';
dotenv.load();

const applicationCode = process.env.PUSHWOOSH_APPLICATION_CODE;
const apiToken = process.env.PUSHWOOSH_API_TOKEN;

export function notify(contentFields) {
  const pushwoosh = new Pushwoosh(
    applicationCode,
    apiToken
  );

  const message = contentFields.notificationPayload['en-US'];
  const options = {send_date: 'now', ignore_user_timezone: true};

  pushwoosh.sendMessage(message, options, function(error, response) {
    if (error) {
      console.log('Error: ', error);
    }

    console.log('Success:', response);
  });
}
