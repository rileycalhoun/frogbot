[guilds]: 10

# Frog Bot
### An open source Discord bot that sends an image of a frog every day at the same time.

[![Invite Frog Bot](https://img.shields.io/badge/Invite%20Frog%20Bot-Click%20Me-blue?style=for-the-badge)](https://discord.com/oauth2/authorize/?permissions=67144704&scope=bot&client_id=1058149602609598564)

## This bot has no commands!
### FrogBot is a simple bot that is meant to only be used for sending an image of a frog every day at the same time. It has no commands, and is meant to be as simple as possible.

## Features
- Simple dashboard for managing your server's settings
- Change the time of day the image is sent
- Change the channel the image is sent to
- Change the timezone that the bot uses for your server
- Change the bot's nickname

## Self Hosting
### Requirements
- Git
- Docker
- A Supabase account
- A MongoDB database

### If you want to self host FrogBot, you can do so by following these steps:
1. Clone the repository and cd into it
```bash
git clone https://github.com/rileycalhoun/frogbot && cd frogbot
``` 

3. CD into the frontend directory and copy the .env.example file to .env
```bash
cd frontend && cp .env.example .env
```

4. Edit the .env file and edit the necessary variables (nano or your favorite text editor will work)
```bash
nano .env
```

5. CD into the backend directory and copy the .env.example file to .env
```bash
cd ../backend && cp .env.example .env
```

6. Edit the .env file and edit the necessary variables (nano or your favorite text editor will work)
```bash
nano .env
```

7. Build the docker image
```bash
docker-compose build --no-cache
```

8. Use docker-compose to start the container
```bash
docker-compose up -d
```