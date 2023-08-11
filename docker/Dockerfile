# syntax=docker/dockerfile:1.4

FROM mcr.microsoft.com/devcontainers/base:ubuntu

ENV container=docker

RUN sudo apt-get update > /dev/null \
	# Node.js
	&& wget -qO- https://deb.nodesource.com/setup_lts.x | sudo sh \
	# Common
	&& sudo apt-get install -y dos2unix file nodejs

COPY --chmod=755 ./entrypoint.sh /entrypoint.sh

RUN dos2unix /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
