FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/baby-sitting-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]