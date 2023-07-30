# Étape de construction
FROM node:18 as build

WORKDIR /app

# Copier les fichiers package.json et yarn.lock
COPY package.json yarn.lock ./

# Installer les dépendances
RUN yarn install


COPY . .


RUN yarn build


FROM node:14-alpine

WORKDIR /app


COPY --from=build /app/.nuxt ./.nuxt
COPY --from=build /app/.output ./.output
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json



EXPOSE 5001


CMD ["node", "./.output/server/index.mjs"]
