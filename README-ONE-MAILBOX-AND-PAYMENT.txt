ONE MAILBOX + OPTIONAL PAYMENT LINKS

The single sender and notification mailbox is signup@cmwc2027bogota.com.
Create/activate that mailbox in one.com before publishing.

Forms: Rider, Volunteer and Sponsor receive their own acknowledgment email from signup@. Signup notifications also arrive in that inbox. The contact form recipient has also been unified.

PAYMENT LINKS: In forms/config.php, update $RIDER_PAYMENT_URL with your team's final HTTPS checkout URL. Until then, the rider confirmation email says payment information will come later. Volunteer and sponsor payment URLs are intentionally empty: add them ONLY if the team decides to charge these types.

IMPORTANT: Payment state is not automatically verified. Entries are saved to CSV and remain pending; staff must confirm payment through the chosen provider before marking a participant as paid. Do not treat an email sent as confirmation of payment.

On one.com: Upload the full website tree over SFTP, including images, Manuel Rodriguez, DIEGOSOSA and IVANNIETO folders. Do not overwrite existing live signup CSV files. Test with one registration and check both the participant mailbox and signup@ inbox. If one.com mail() does not deliver reliably, configure authenticated SMTP as a subsequent improvement (mailout.one.com port 587 STARTTLS).

Local VS Code/Live Server mode still only simulates emails and saves demo data. No real email is sent there.

SECURITY: Replace the default admin password before launch, and secure forms/data from public access.
