FROM node:20-slim AS build

WORKDIR /opt/app

COPY . .

RUN yarn install && yarn test && yarn bun

ENTRYPOINT "/bin/bash"

FROM node:20-alpine

WORKDIR /opt/app
COPY --from=build ["/opt/app/dist/bundle.js", "/opt/app/package.json", "/opt/app"]

CMD ["node", "bundle.js"]
