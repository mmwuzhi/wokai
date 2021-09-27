# apline版本的node会小很多
FROM node:alpine
WORKDIR /usr/src/wokai

COPY ./server/package.json ./server/yarn.lock ./
# 安装依赖
RUN yarn install
# 安装PM2
RUN npm install pm2 -g
# 拷贝后端代码
COPY ./dist ./dist
# 拷贝pm2设置 运行pm2
COPY ./process.yml ./
# 这里--no-daemon一定要放前面 不然的话会导致不前台运行pm2使容器无限重启
CMD ["pm2-runtime", "--no-daemon", "start", "./process.yml"]
# 暴露容器端口
EXPOSE 5001 5002