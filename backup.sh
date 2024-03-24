#!/bin/bash

# GitHub credentials
GITHUB_USERNAME="moez-nejah"
GITHUB_TOKEN="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"

# Number of backups to keep
BACKUPS_TO_KEEP=4

# Navigate to the Home Assistant configuration directory
cd /config

# Run Home Assistant's backup service
ha backup create --name "Backup $(date +"%Y-%m-%d")"

# Add changes to Git
git add .

# Commit changes with a timestamp
git commit -m "Automated backup $(date +"%Y-%m-%d %H:%M:%S")"

# Delete older backups if there are more than the specified number to keep
backup_count=$(git rev-list --count HEAD)
if [ "$backup_count" -gt "$BACKUPS_TO_KEEP" ]; then
    backups_to_delete=$((backup_count - BACKUPS_TO_KEEP))
    git rev-list --reverse HEAD | tail -$backups_to_delete | xargs git rm
fi

# Force push changes to your GitHub repository using personal access token
git push --force https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/moez-nejah/homeAssistant.git master
