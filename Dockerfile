FROM node:10-alpine
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
# COPY --chown=node . .
COPY --chown=node package*.json ./
# COPY  --chown=node config/ ./config/
# COPY  --chown=node data/ ./data/
# COPY  --chown=node devops/ ./devops/
COPY  --chown=node src/ ./src/
COPY  --chown=node tsconfig.json ./
COPY  --chown=node tsconfig.build.json ./
RUN npm install

ENV HOST=0.0.0.0 PORT=3000 DEBUG_PORT=9229
EXPOSE ${PORT}
EXPOSE ${DEBUG_PORT}

CMD [ "npm", "start" ]
