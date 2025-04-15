# Etapa 1: Compilación
FROM node:20-alpine AS builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar TypeScript
RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine

WORKDIR /app

# Solo copiar lo necesario
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm install --only=production

EXPOSE 3001

CMD ["node", "dist/main"]