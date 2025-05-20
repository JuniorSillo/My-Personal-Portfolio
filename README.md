Moeketsi Junior Sillo's Personal Portfolio
Welcome to my personal portfolio website! This project showcases my skills as a full-stack developer, featuring a clean, modern design with interactive elements like a contact form and resume download. Built with Next.js and deployed on Vercel, it highlights my expertise in creating elegant digital experiences using modern web technologies.
Features

Responsive Design: Optimized for all devices, from mobile to desktop, using Tailwind CSS.
Contact Form: Allows users to send messages directly to my email via Formspree, with a user-friendly confirmation message.
Resume Download: Download my CV (PDF) with a single click, implemented with client-side JavaScript.
Interactive UI: Smooth animations powered by Framer Motion and intuitive components from a custom UI library.
SEO-Friendly: Built with Next.js App Router for server-side rendering and optimized performance.

Tech Stack

Framework: Next.js 15.1.5 (App Router)
Frontend: React, TypeScript, Tailwind CSS
Animations: Framer Motion
Form Handling: Formspree (https://formspree.io/f/xnndrwlw)
Icons: React Icons
Deployment: Vercel
Version Control: Git, GitHub

Getting Started
Prerequisites

Node.js (v18 or higher)
npm or yarn
A Formspree account for contact form submissions (optional for local testing)

Installation

Clone the Repository:
git clone https://github.com/JuniorSillo/My-Personal-Portfolio.git
cd My-Personal-Portfolio


Install Dependencies:
npm install


Set Up Formspree:

The contact form uses Formspree (https://formspree.io/f/xnndrwlw). To receive submissions, sign in to Formspree and ensure the form is linked to your email (sillojunior8@gmail.com).
No environment variables are required for Formspree in this setup.


Run Locally:
npm run dev

Open http://localhost:3000 in your browser to view the portfolio.


Deployment
To deploy the portfolio on Vercel:

Push the repository to GitHub:git push origin main


Import the repository into Vercel via the Vercel dashboard.
Configure the project with the following settings:
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next


Deploy the project. Vercel will handle dependency installation and build the Next.js app.
Test the contact form on the deployed site to ensure submissions reach your email or Formspree dashboard.

Usage

Home Page: View my introduction, skills, and download my resume (Sillo_resume.pdf) via the "Download CV" button.
Contact Page: Fill out the form with your name, email, phone, service type, and message. Submissions are sent to sillojunior8@gmail.com via Formspree, with a confirmation message displayed for 3 seconds.
Navigation: Use the navbar to switch between pages (Home, Contact, etc.).
Responsive Design: Test the site on different devices to experience the responsive layout.

Project Structure
My-Personal-Portfolio/
├── app/
│   ├── contact/
│   │   └── page.jsx       # Contact form page with Formspree integration
│   ├── page.jsx           # Home page with resume download and stats
│   └── layout.jsx         # Root layout for the app
├── public/
│   └── Sillo_resume.pdf   # Resume file for download
├── components/
│   ├── Photo.jsx          # Profile photo component
│   ├── Social.jsx         # Social media links component
│   ├── Stats.jsx          # Stats display component
│   └── ui/                # Custom UI components (Button, Input, Select, Textarea)
├── package.json           # Project dependencies and scripts
└── README.md              # This file

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure your code follows the project’s coding style and includes tests if applicable.
Contact

Email: sillojunior8@gmail.com
Phone: (+27) 799 9930
Location: Bloemfontein, South Africa
GitHub: JuniorSillo

Feel free to reach out via the contact form on the website or directly at the above email for collaboration or inquiries.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

Built with love for showcasing my full-stack development skills.
Thanks to Next.js, Tailwind CSS, and Formspree for powering this portfolio.

