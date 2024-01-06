FROM node AS builder
WORKDIR /App

COPY package.json .
RUN npm i
COPY . ./

RUN npm run build


FROM nginx

COPY --from=builder /App/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
