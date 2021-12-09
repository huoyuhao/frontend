FROM node:12.16.3 AS builder
LABEL maintainer="liamhuo<liamhuo@tencent.com>"

ARG BRANCH

# 将当前文件复制到工作目录
COPY . /

RUN npm install && npm run build

FROM node:latest

# 暴露端口
EXPOSE 8080

COPY ./docker/nginx/conf.d /etc/nginx/conf.d
COPY --from=builder dist dist
