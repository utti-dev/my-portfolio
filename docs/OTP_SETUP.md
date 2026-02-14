# OTP Setup (Firebase Email Magic Link)

## Environment Variables

Add these in Vercel Project Settings and in your local environment:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID` (optional)

## Features

- Email magic link via Firebase Auth (free tier).
- Visitor logging to Firestore (`visitors` collection).

## Notes

- Add your domain to Firebase Auth → Authorized Domains.
- For production, tighten Firestore rules and add rate limits.

