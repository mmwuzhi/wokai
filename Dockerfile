# apline版本的node会小很多
FROM node:alpine

# ENV PROJ_ROOTDIR=/usr/src/wokai
WORKDIR /usr/src/wokai

COPY ./package.json ./yarn.lock ./
# 安装依赖
RUN yarn install
# 安装PM2
RUN npm install pm2 -g

# 拷贝后端代码
COPY ./dist ./dist
COPY ./.env ./process.yml ./
CMD ["pm2-runtime", "--no-daemon", "start", "./process.yml"]

# 暴露容器端口
EXPOSE 3333 5000