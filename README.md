# SBHacks Submission: Campus-Marketplace
 Your college essentials marketplace to share and find and reuse electronics, furniture, textbooks, iclickers, and more within your campus community.

![Home page](/web-client/public/main-img.jpg)

Technology Used:

- TypeScript
- Next.js
- Express.js
- Docker
- FFmpeg
- Firebase Auth
- Firebase Functions
- Firebase Firestore
- Google Cloud Storage
- Google Cloud Pub/Sub
Google Cloud Run

Technology Used:

TypeScript
Next.js
Express.js
Docker
FFmpeg
Firebase Auth
Firebase Functions
Firebase Firestore
Google Cloud Storage
Google Cloud Pub/Sub
Google Cloud Run

A. Video Processing
service:

    1. Initialized Video ProcessingService
    2. Processed Videos Locally
    3. Containerized Video Processing Service
    4. Converted Videos Hosted on Google Cloud Storage


B. Google Cloud:

    1. Deployed Video Processing Service
    2. Created Pub/Sub Topic and Subscription
    3. Created Cloud Storage Buckets Web App
    4. Created Next App
    5. Created Navbar
    6. Added Firebase SDK with Authorization
    7. Added Sign In with Google

C. Firebase:

    1. Created Firestore
    2. Added Create User Function Upload and Watch Videos
    3. Added Upload Video Function
    4.  Added Upload Video Feature to Web App
    5. Added Videos to Firestore
    6. Added Get Videos Function
    7. Displayed Videos in Web App

Basic pipeline:

- Cloud Storage will store the raw and processed videos uploaded by users.
- Pub/Sub will send messages to the video processing service.
- Cloud Run will host a non-public video processing service. After it transcodes videos, they will be uploaded to Cloud Storage.
- Cloud Firestore will store the metadata for the videos.
- Cloud Run will host a Next.js app, which will serve as the Youtube web client.
- The Next.js app will make API calls to Firebase Functions.
- Firebase Functions will fetch videos from Cloud Firestore and return them.