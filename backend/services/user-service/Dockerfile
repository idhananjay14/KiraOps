# ---------- Build Stage ----------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ---------- Production Stage ----------
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev && npm cache clean --force

COPY --from=builder /app/dist ./dist

RUN addgroup -S nodejs && adduser -S nodejs -G nodejs

USER nodejs

EXPOSE 3005

CMD ["node", "dist/index.js"]