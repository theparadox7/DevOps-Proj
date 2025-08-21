#official packsgesges
FROM node:18-alpine
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
#install depen
RUN npm install --production
COPY . .
EXPOSE 3000


CMD ["node", "index.js"]
