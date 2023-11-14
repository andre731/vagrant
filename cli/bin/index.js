#!/usr/bin/env node

const readline = require('readline');
const program = require('commander');
const fs = require('fs')
const path = require('path');
const { exec } = require('child_process');


program
  .version('1.0.0')
  .description('A LIB DO GRUPO EAGLE');

  program
  .command('install')
  .description('Run a file')
  .action(() => {
    try {
      const absolutePath = path.resolve('install_vagrant.sh');

      fs.readFileSync(absolutePath, 'utf-8');
 
      // Execute the shell script
      console.log('executando...')


      exec(`bash ${absolutePath}`, (error, stdout, stderr) => {        
        if (error) {
          console.error(`Error executing shell script: ${error.message}`);
          return;
        }
        console.log(stdout);
      });
    } catch (error) {
      console.error(`Error reading file "${'/Documents/projects/vagrant/run.sh'}": ${error.message}`);
    }
  });

program
  .command('up-vm')
  .description('Run a file')
  .action((filename = '../../run.sh') => {
    try {
      const absolutePath = path.resolve('run.sh');

      fs.readFileSync(absolutePath, 'utf-8');
 
      // Execute the shell script
      console.log('executando...')


      exec(`bash ${absolutePath}`, (error, stdout, stderr) => {        
        if (error) {
          console.error(`Error executing shell script: ${error.message}`);
          return;
        }
        console.log(stdout);
      });
    } catch (error) {
      console.error(`Error reading file "${'/Documents/projects/vagrant/run.sh'}": ${error.message}`);
    }
  });

program.parse(process.argv);
