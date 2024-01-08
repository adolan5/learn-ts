FROM node:20-slim AS build

WORKDIR /opt/app

COPY . .

RUN yarn install && yarn test

ENTRYPOINT "/bin/bash"

FROM node:20-alpine

WORKDIR /opt/app
COPY --from=build /opt/app/dist /opt/app
COPY --from=build ["/opt/app/package.json", "/opt/app/yarn.lock", "/opt/app"]

CMD ["yarn", "start"]
