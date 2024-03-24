#!/bin/bash

# Navigate to the Home Assistant configuration directory
cd /config

# Run Home Assistant's backup service
ha backup create --name "Backup $(date +"%Y-%m-%d")"

# Add changes to Git
git add .

# Commit changes with a timestamp
git commit -m "Automated backup $(date +"%Y-%m-%d %H:%M:%S")"

# Push changes to your GitHub repository
git push https://github.com/moez-nejah/homeAssistant.git master
