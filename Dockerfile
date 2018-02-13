From node

MAINTAINER mohammad

WORKDIR /src

VOLUME /c/Users/moein/moda:/src

RUN npm install

EXPOSE 8000

CMD ["npm","start"]