FROM node:16.17.1 as build-stage

WORKDIR /usr/share/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /usr/share/app/dist /usr/share/nginx/html
RUN cd /usr/share/nginx/html && ls
