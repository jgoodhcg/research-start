# GVSU Demo

## docker setup
- docker-compose with node:latest
- get a shell with `docker-compose run gvsu-test /bin/bash`

Following [this guide](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f): 
- install _create-react-app_ with `npm install -g create-react-app`
- install dependencies `yarn add redux react-redux react-router react-router-redux redux-thunk`
- `~/project/gvsu-test$ mv gvsu-test/* .` moved the redundant file
- start the webpack dev server `docker-compose run gvsu-test yarn start`
- visit at _http://172.17.0.2:3000/_ 


