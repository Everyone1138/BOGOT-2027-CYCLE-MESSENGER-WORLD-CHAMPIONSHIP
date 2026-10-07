VOLUNTEER + SPONSOR SIGNUP SECTIONS

What was added:
- A Volunteer Sign Up section (#volunteer)
- A Sponsor Sign Up section (#sponsor-apply)
- Header, mobile menu, and footer links
- English/Spanish language switcher support
- Local browser storage for submitted volunteer and sponsor forms

Important:
These forms save submissions into the visitor browser localStorage for now. They do not send emails or save to a server yet.

Storage keys:
- cmwc_volunteer_signups
- cmwc_sponsor_applications

To connect them later:
Replace the submit handlers near the bottom of script.js with a fetch() call to your backend, Google Form, Formspree, Netlify Forms, or another form service.
