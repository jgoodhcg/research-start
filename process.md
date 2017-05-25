# GVSU Demo

## docker setup
- docker-compose with node:latest
- get a shell with `docker-compose run gvsu-test /bin/bash`

## Initially running
- Following [this guide](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f):
- install _create-react-app_ with `npm install -g create-react-app`
- install dependencies `yarn add redux react-redux react-router react-router-redux redux-thunk`
- `~/project/gvsu-test$ mv gvsu-test/* .` moved the redundant file
- start the webpack dev server `docker-compose run gvsu-test yarn start`
- visit at _http://172.17.0.2:3000/_ 

## Middleware
- research [thunk](https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3)
- add [logger](https://github.com/evgenyrodionov/redux-logger)

## Fetch API
- attempted to use the fetch api and ran into this error:

```
Fetch API cannot load https://prod.library.gvsu.edu/labs/researchstart/researchstart.json. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://gvsulibrary.com:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

As a security feature it seems browsers enforce that javascript Fetch api or XMLHTTP requests use a true origin value for whatever domain is running the script. When a server does not have `Access-Control-Allow-Origin` set for that origin value in the request then it will not return the resource. The response in this case was a `304`. CURL and A reglar browser GET request work for the resource because curl does not place an origin domain and the browser uses the domain for the request as the origin.  

**Solution:** temporarily host a copy of the file locally. If the script were to be served from the same domain as the resource it would work fine, if not then the `Access-Control-Allow-Origin` would have to be set for whatever domain it was hosted on.

## Accessiblity
**Keybaord Navigation** is something that callMall has been [focusing on](https://github.com/callemall/material-ui/issues/61) in material ui since 2014
**Alternative text** was put in important navigation and interactive elements

## Search
- fuse
- searches everything

## Routing

## Todo
- refactor into more components
    - render calls are ugly in routes
- maybe don't use combine reducers (i like reframe's approach two whole state all the time)