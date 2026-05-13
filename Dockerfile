FROM node:22.15.0 AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g pnpm
ENV CI=true
RUN pnpm install || pnpm approve-builds --all && pnpm install

COPY . .

RUN pnpm exec tsc && pnpm exec vite build
RUN pnpm exec vitepress build docs

FROM nginx:alpine

COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]