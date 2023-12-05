#!/bin/bash
fnm install 20
fnm default 20
npm i -g pm2
pm2 restart ecosystem.config.js
