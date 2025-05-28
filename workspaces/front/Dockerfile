# Étape de build
FROM node:20-slim as build

WORKDIR /app

COPY package*.json ./
COPY workspaces/front/package*.json ./workspaces/front/
COPY workspaces/shared/package*.json ./workspaces/shared/

# Installe les dépendances des workspaces
RUN npm install

# Copie le code source
COPY . .

# Build du front
RUN npm run build --workspace=@smart/front


# Étape de production avec un serveur HTTP léger
FROM nginx:1.25-alpine

# Copie les fichiers construits par Vite vers le dossier nginx
COPY --from=build /app/workspaces/front/dist /usr/share/nginx/html

# Copie un fichier de configuration nginx si besoin (optionnel)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
