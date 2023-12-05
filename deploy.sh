#!/bin/bash
cd ~/services/komponents-backend
pnpm i
pm2 restart ecosystem.config.js
