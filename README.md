# Server Side Rendering

A good approach is to separate he business logic and data layer into it's own server, then have your render server to produce the HTML.

For an application with a lot of business logic, you can scale those servers w/o having to scale the render.

For an application with a lot of React components and complexities, you can scale the render server and leave the business logic server on 1 instance.

**Business Logic and Data Layer - (Api Server)**

* DB Access
* Validation
* Authentication
* Authorization
* Logging

**View Layer - (Render Server)**

* Take Data, Produce HTML

## Setup

You can run all of them at once:

```
$ npm run dev

```

This is what it's doing:

* You need to run Webpack and Babel in order to compile the JSX used in React.
* You need to convert convert components to HTML (renderToString)

Creates the build folder.

```
$ npm run dev:build-server

```
Runs the Express server and has the React components and reboots every time the  build folder changes

```
$ npm run dev:server

```

Build the client file

```
$ npm run dev:build-client

```

## SSR, Universal Javascript, Isomorphic Javascript

All of the below is essentially the same terms. If engineers argue the exact definition of these words the are **bikeshedding**: when people waste time on trivial details  while important matters are inadequately attended

* Server Side Rendering - Generate HTML on the server
* Universal Javascript - The same code runs on the server and the browser
* Isomorphic Javascript - The same code runs on the server and the browser

Isomorphic style is when you can use the exact same coding style on the client side and the server side.


## Lifecycle of our application

1. App rendered on the server into some div in the 'template'
2. Rendered app sent to the user's browser
3. Browser renders HTML file on the screen, then loads client bundle
4. Client bundle boots up
5. We manually render the React app a second time into the 'same' div
6. React renders our app on the client side, and compares the new HTML to what already exists in the document
7. React 'takes over' the existing rendered app, binds event handlers etc


Basically the initial html is sent down but it is completely static, then the bundle.js comes in and it checks what already has been rendered and what has not. It breaths life into the app.

## Challenges when working with SSR and Redux

* Redux needs different configs on browser vs server
* Aspects of auth need to be handled on the server, normally this is only on browser
* Need a way to detect when all initial data load action creators are complete on the server
* Need state rehydration on the browser


### Waiting for data from Redux

One problem with SSR is that we want to instantly send down HTML, but some of the data in Redux is async so it's not available right away.

* `react-router-config` - library to help out with SSR.

Pros:

* Only render the application once
* Make data requirements clear for each component

Cons:

* A ton of extra code

## Authentication

Authentication can be thought of as a sort of contract between a browser and a server
