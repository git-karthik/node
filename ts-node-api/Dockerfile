FROM node:12-alpine

#create the app directory
WORKDIR /usr/src/app

#install app dependencies.
# A wildcard * is used to copy the package.json and package-lock.json
COPY package*.json ./

#Installs the dependencies mentioned in package.json
RUN npm install

#Bundle the app source
COPY . .

#Expose PORT
EXPOSE 3000

#Execute the container!!!
CMD [ "npm", "start" ]

