#!/bin/bash

# Require arg
if [  $# -eq 0 ]; then
    echo "Must run script w/ one arg, either 'qa' or 'prod'"
    exit 1
fi

# Source/load nvm
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh;

# Client
cd client; 

nvm use;
npm i;

pm2 stop 'make-foia-work-client'; 

if [ "$1" == "prod" ]; then
    npm run build;
else
    npm run build-qa;
fi

pm2 start 'make-foia-work-client';

# Server
cd ../server;
nvm use;
npm i;
pm2 restart 'make-foia-work-server';
