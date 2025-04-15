FROM node:23-slim@sha256:dfb18d8011c0b3a112214a32e772d9c6752131ffee512e974e59367e46fcee52
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start:prod"]