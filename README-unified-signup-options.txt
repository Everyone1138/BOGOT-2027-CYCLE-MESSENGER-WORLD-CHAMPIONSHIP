UNIFIED SIGN UP SECTION

What changed:
- Rider registration, volunteer signup, and sponsor signup now live inside one Sign Up section.
- Visitors choose between RIDER / VOLUNTEER / SPONSOR tabs.
- The old standalone Volunteer and Sponsor sections were removed.
- English/Spanish switching was updated for the new tab labels and rider panel text.

Where to edit:
- index.html -> search for: id="signup"
- style.css -> search for: /* Unified Sign Up Options */
- script.js -> search for: // ===== UNIFIED SIGNUP TABS =====

Important:
- These forms still save only to the visitor’s browser using localStorage. They do not send emails or save to a server yet.
