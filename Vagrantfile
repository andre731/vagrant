# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"  
  # config.vm.hostname = 'virtual-env'
  # config.vm.define 'virtual-env'

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "512" 
    vb.cpus = 2        
  end

  config.vm.network "forwarded_port", guest: 81, host: 8081

  config.vm.provision "shell", path: "provision.sh"
end
