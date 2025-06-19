# Google OAuth Setup Instructions

To enable Google login for Math Master, follow these steps:

## 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note your project ID

## 2. Enable APIs
1. In the Cloud Console, go to "APIs & Services" > "Library"
2. Search for and enable "Google+ API" or "People API"

## 3. Create OAuth Credentials
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application" as the application type
4. Set the authorized redirect URI to:
   ```
   https://your-replit-url.replit.app/api/auth/google/callback
   ```
5. Copy the Client ID and Client Secret

## 4. Add Environment Variables
In your Replit environment, add these secrets:
- `GOOGLE_CLIENT_ID`: Your OAuth Client ID
- `GOOGLE_CLIENT_SECRET`: Your OAuth Client Secret

## 5. Update Redirect URI for Production
When you deploy, update the authorized redirect URI in Google Cloud Console to match your production domain.

## Current Status
The app is currently configured with a demo login that creates a test user. Once you add the Google OAuth credentials, the system will automatically switch to real Google authentication.