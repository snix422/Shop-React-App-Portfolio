FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g json-server

COPY . . 
RUN npm run build

FROM nginx:alpine

WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/db.json /app/db.json


COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80
EXPOSE 3000

CMD ["/start.sh"]
