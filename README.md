# Overview

My website is a company website for Refusionsportalen (RP), where I work. It is a daughter company of Payview (PV); the services we provide in RP are similar but distinct enough to warrant its own website.

## Analysis

I first analyzed the use case of the website, the typical user and their needs. 
- The primary use case is to gain information about Refusionsportalen, in regards to its services as well as its employees. It is also crucial that the user can establish contact with RP - this is done via the contact page. 
- The typical user is an individual in a professional setting, scouting for reimbursement services on behalf of their employer.
- The needs of this user probably include getting to know more about the services of RP and its employees and a way to contact us.

## Design

I wanted to create a minimal design with fast loading times and a simple interface with easy navigation by use of buttons. This is done with a combination of html, css and js; the website serves only static pages, while some pages have the client run javascript on their side.

In terms of file structure, there is one html file for each of the main pages of the website. There is one style document that every html file refers to. There is one js document which the contact html file refers to. The images are located in their own folder to avoid confusion.

In the contact formula, I make the feature as interactive as I could while serving static pages. There are hard-coded time slots available for booking, and the selected slot will be included in an e-mail template that the user must send to the company in order to get in contact.

## Development and deployment

To implement and test the project I simply opened my files in firefox, my browser. This only allows me to serve static pages, which is consistent with my publishing method, Github pages. Firefox also allowed me to inspect elements and troubleshoot my css and javascript as well as resize my browser to emulate viewing the page on a smaller device. I also used my phone for a more intuitive feeling of the responsive design. During this time, I used Git for version control. It works great, is industry standard, and integrates nicely with Github pages.
