FROM node

ENV PROJ_SVDIR=/home/wokai/server PROJ_ROOTDIR=/home/wokai

RUN mkdir -p $PROJ_ROOTDIR
WORKDIR $PROJ_ROOTDIR

COPY .env ./package.json ./yarn.lock $PROJ_ROOTDIR
# 安装依赖
RUN yarn install

# 拷贝后端代码
COPY ./dist $PROJ_SVDIR

# 暴露容器端口
EXPOSE 3333 5000