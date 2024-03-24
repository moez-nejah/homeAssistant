#!/bin/bash

# GitHub credentials
GITHUB_USERNAME="moez-nejah"
GITHUB_TOKEN="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"

# Navigate to the Home Assistant configuration directory
cd /config

# Run Home Assistant's backup service
ha backup create --name "Backup $(date +"%Y-%m-%d")"

# Add changes to Git
git add .

# Commit changes with a timestamp
git commit -m "Automated backup $(date +"%Y-%m-%d %H:%M:%S")"

# Push changes to your GitHub repository using personal access token
git push https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/moez-nejah/homeAssistant.git master
