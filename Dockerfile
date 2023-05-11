ARG NODE_VERSION='16.20.0'
ARG CHROME_VERSION='113.0.5672.92-1'
ARG FIREFOX_VERSION='113.0'

FROM cypress/factory

WORKDIR /tests

COPY . .

RUN npm i

ENTRYPOINT ["npx", "cypress", "run"]