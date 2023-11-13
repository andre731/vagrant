#!/bin/bash

# Update package list
sudo apt update

# Install a sample package (e.g., Nginx)
sudo apt install -y nginx

# Start Nginx service
sudo systemctl start nginx

