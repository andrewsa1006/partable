# Welcome to Partable.com!

This project was created as a proof-of-concept for a friend so he could present some innovative ideas to his company. This is not intended to be a fully functional or fully flushed out application at this time.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

![Application Flow chart](https://docs.google.com/presentation/d/179xxH0yH0I0P3VvPtEmVdWm8L4u9hc4GgPDrfEEr_BM/edit?usp=sharing "Application Flow")

The application uses AWS Amplify, which should handle auto scaling automatically. Since we don’t need login functionality and its a simple nearly static site, nothing more complex needed for configuration.

Requests made from the site will be sent to API gateway (this includes initial page load to fetch items in database). Images for parts will be stored in S3 with a link to the bucket stored in RDS (the database). From API gateway, requests will then be forwarded to AWS Lambda to run various serverless functions (creating new items, updating inventory). A separate function will handle generating and sending the email out to an external email client (like support@partable.com) using SES.
