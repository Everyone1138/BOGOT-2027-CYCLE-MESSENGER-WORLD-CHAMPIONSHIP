FOOD PREFERENCE / DIETARY NEEDS FIELD ADDED

What changed:
- Rider registration now includes:
  - Food Preference / Dietary Needs
  - Food Allergies / Notes
- Volunteer signup now includes:
  - Food Preference
  - Food Allergies / Notes
- The PHP handlers save these fields into the CSV files and admin dashboard.
- The CSV saving function now preserves old data while adding new columns if the CSV already exists.

Where the data appears:
- admin dashboard: /admin/login.php
- rider CSV: forms/data/rider-signups.csv
- volunteer CSV: forms/data/volunteer-signups.csv

Food options included:
- No preference
- Vegetarian
- Vegan
- Gluten-free
- Lactose-free
- Allergies / medical restriction
- Other

Upload note:
Upload the full folder contents to one.com. Do not upload only index.html.
