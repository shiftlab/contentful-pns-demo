// import Pushwoosh from 'pushwoosh-client';
// import dotenv from 'dotenv';
// dotenv.load();

// const applicationCode = process.env.PUSHWOOSH_APPLICATION_CODE;
// const apiToken = process.env.PUSHWOOSH_API_TOKEN;

// export function notify(contentFields) {
//   const pushwoosh = new Pushwoosh(
//     applicationCode,
//     apiToken
//   );

//   const message = contentFields.content['en-US'];
//   const options = getNotificationOptions(contentFields);

//   pushwoosh.sendMessage(message, options, function(error, response) {
//     if (error) {
//       console.log('Some error occurs: ', error);
//     }

//     console.log('Pushwoosh API response is', response);
//   });
// }

// function getNotificationOptions(contentFields) {
//   const linkType = contentFields.linkType ? contentFields.linkType['en-US'] : null;
//   const linkValue = contentFields.linkValue ? contentFields.linkValue['en-US'] : null;
//   const isDeepLinkedNotification = (linkType && linkValue);

//   let options = {
//     send_date: 'now',
//     ignore_user_timezone: true
//   };

//   if (isDeepLinkedNotification) {
//     console.log('Sending a deep linked notification.');

//     options = {
//     send_date: 'now',
//       ignore_user_timezone: true,
//       data: JSON.parse(`{"${linkType}": "${linkValue}"}`)
//     };
//   } else {
//     console.log('Sending a generic notification.');
//   }

//   return options;
// }
