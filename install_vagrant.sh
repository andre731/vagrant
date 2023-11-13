#!/bin/bash

echo 'Instalando Virtualbox... 🚀'

# Install Virtualbox provider
sudo apt install virtualbox

# Add HashiCorp GPG key

echo 'Adicionando chave GPG... 🔑'

wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list

'Instalando Vagrant... 🚀'

sudo apt update && sudo apt install vagrant

