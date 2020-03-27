FROM node:12.13.0
ADD . /opt/socket
WORKDIR /opt/socket
RUN npm install
CMD ["npm", "run", "start:container"]
