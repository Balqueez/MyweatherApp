# MyWeatherApp

**MyWeatherApp** is a React-based weather application that fetches and displays real-time weather data using the OpenWeatherMap API. It is built for learning and demonstrating full-stack development with modern frontend technologies, containerization using Docker, and continuous integration using Jenkins.

## Purpose

- To display live weather information by city name.
- To demonstrate Docker containerization for React apps.
- To set up Jenkins CI/CD pipeline triggered by GitHub pushes.
- To expose local Jenkins to GitHub using **ngrok** during development.

## Tech Stack

- **Frontend**: React.js
- **API**: OpenWeatherMap API
- **DevOps**:
  - Docker
  - Jenkins
  - GitHub Webhooks
  - ngrok (for local webhook testing)

##  How to Run Locally
  ### Prerequisites
- Node.js
- Docker
- Jenkins (locally or on a server)
- ngrok (for webhook tunneling)

### Steps

   Clone the Repository [https://github.com/Balqueez/MyweatherApp.git]
   Install dependencies (optional if testing outside Docker):
   Build and run with Docker [http://localhost:3000]

## CI/CD with Jenkins + ngrok
 ### Jenkins Pipeline Overview
     GitHub push triggers a webhook.
     Webhook reaches Jenkins (via ngrok).
     Jenkins builds and redeploys the app using Docker.

## Webhook Setup Using ngrok

Start ngrok to expose Jenkins (assuming it's on port 8080):
Copy the public URL shown, e.g., https://abcd1234.ngrok.io.

## Configure GitHub Webhook:

Go to the repo → Settings → Webhooks → Add webhook
Payload URL: https://abcd1234.ngrok.io/github-webhook/
Content type: application/json
Event: Push

