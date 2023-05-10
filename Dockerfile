FROM cypress/base:18.16.0

WORKDIR /tests

COPY ./package.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT ["npm", "run", "cy:run"]