FROM node:14-slim

COPY dist /nodejs/Project/page-tja/
RUN npm install -g serve
WORKDIR /nodejs/Project

ENV TZ=Asia/Taipei
CMD ["serve", "-s", "page-tja"]
