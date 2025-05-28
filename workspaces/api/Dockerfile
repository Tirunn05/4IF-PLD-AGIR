FROM node:20-slim
WORKDIR /app

# Copier les fichiers package.json et package-lock.json uniquement nécessaires
COPY package.json package-lock.json ./
COPY workspaces/api/package.json ./workspaces/api/
COPY workspaces/shared/package.json ./workspaces/shared/

RUN npm install

# Copier tout le code source après installation des dépendances
COPY . .

RUN npm run build --workspace=@smart/api

EXPOSE 3000

CMD ["node", "workspaces/api/dist/api/src/main"]
