# contentful-pns-demo
REST API for Contentful PNS demo

## Getting started

1. Install node.js[node.js](https://nodejs.org/en/download/)
2. Clone this repository: `git clone git@github.com:shiftlab/contentful-pns-demo.git`
3. Change to project directory: `cd ./contentful-pns-demo`
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
for information on how to use the API.

If you want to work with the API directly, or develop the functionality in the demo app further, it is recommended developers use a tool like [Postman](https://www.getpostman.com/) to simulate REST requests and responses.

## Deployments
The easiest way to deploy this example app is [Heroku](https://devcenter.heroku.com/articles/creating-apps), with [deployments using git](https://devcenter.heroku.com/articles/git). Once the app is created, you should be able to deploy this applciation using `git push heroku master`.

Heroku will handle installing the dependencies on its own and the `./Procfile` will start the app automatically. Be sure to [add the necessary environment variables](https://devcenter.heroku.com/articles/config-vars) outlined in `./env.sample` to your Heroku app.

The example app is configured to work with [Pushwoosh's Heroku add-on](https://elements.heroku.com/addons/pushwoosh). Once you provision the Pushwoosh add-on to your application, you will have access to your application tokens/keys and the ability to [set up push notificiations](http://docs.pushwoosh.com) for a variety of operating systems and browsers.
