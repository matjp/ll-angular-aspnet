# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY ./ /app

# Install all the dependencies
RUN npm install
RUN npm install -g @angular/cli@latest

# Generate the build of the application
RUN ng build
#RUN ng build --configuration production --aot


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/ll-angular/browser /usr/share/nginx/html

#copying nginx config from local to image
COPY /nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80