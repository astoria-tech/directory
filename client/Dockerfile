FROM node:10-alpine

WORKDIR /srv

# Add the project files and install
ADD package.json ./
RUN yarn install
ADD . ./

# Start the dev server by default
CMD yarn start
