# contentful-pns-demo
A REST API for Contentful PNS demo

## Presentation Deck
Download the [Push notifications with Contentful Webhooks in under 30 minutes](http://shift-lab.s3.amazonaws.com/contentful-pns-deck.pdf) presentation.

## Getting started

1. Install [node.js](https://nodejs.org/en/download/)
2. Clone this repository: `git clone git@github.com:shiftlab/contentful-pns-demo.git`
3. Change to project directory: `cd ./contentful-pns-demo`
4. Rename `./.env.sample` to `./.env` and paste in your Pushwoosh tokens.
4. Install project dependencies: `npm install`
5. Run the project:

```sh
# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```

The example app should now be running at [http://localhost:8080/api](http://localhost:8080/api).

## API
See [API Documentation](https://github.com/shiftlab/contentful-pns-demo/wiki/API-Documentation)
for information on how to use the demo application API.

If you want to work or experiment with the API, or further develop functionality in the demo
application, it is recommended developers use a tool like [Postman](https://www.getpostman.com/)
to simulate RESTful `GET` and `POST` requests and responses.

## Deployments
The easiest way to deploy this example app is
[Heroku](https://devcenter.heroku.com/articles/creating-apps)
with [deployments using git](https://devcenter.heroku.com/articles/git). Once the app is created,
you should be able to deploy using `git push heroku master`.

Heroku will handle installing the dependencies on its own. The `./Procfile` will start the app
automatically post-deploy. Be sure to
[add the necessary environment variables](https://devcenter.heroku.com/articles/config-vars)
outlined in `./env.sample` to your Heroku app.

The example app is configured to work with
[Pushwoosh's Heroku add-on](https://elements.heroku.com/addons/pushwoosh). Once you provision
the Pushwoosh add-on to your application, you will have access to your application tokens/keys
and the ability to [set up push notificiations](http://docs.pushwoosh.com) for a variety of
operating systems and browsers.

## Questions/Issues
If you have any questions or issues working with the demo application, please feel free to
email me at jeremy@shiftlabny.com.
