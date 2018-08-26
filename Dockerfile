FROM node:carbon

# Create app directory
WORKDIR /usr/src/app/

RUN npm install -g --unsafe-perm decentraland

# Setup the directory and base files.
RUN mkdir /usr/src/app/.decentraland

COPY .dclinfo /root/
COPY .dclignore /usr/src/app/
COPY build.json /usr/src/app/
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
COPY scene.json /usr/src/app/
COPY scene.tsx /usr/src/app/
COPY tsconfig.json /usr/src/app/
COPY .decentraland/ /usr/src/app/.decentraland/

# Install the dependencies
RUN npm install

# Reset the permissions
RUN chown -R node:node /usr/src/app/

EXPOSE 8000:8000

CMD [ "/usr/local/lib/node_modules/decentraland/bin/dcl", "start" ]
