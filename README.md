# ethanandfriends

A simple Europe-only senior trip planner for Ethan, Angela, Doria, and Justin.

The app helps the group:

- Search likely Europe destinations with autocomplete.
- Use separate flight, hotel, and activity search forms.
- Review flight and hotel options sorted by estimated lowest price.
- Open hotel searches with the selected destination, dates, and people filled in.
- Discover popular activities for the selected city and date.
- Add timed plans by clicking days on a real May-July 2027 calendar.
- Use the calendar for any month or date.
- Keep the group comment panel visible while planning.

## Deploying on Render

This repo includes `render.yaml` for a Render static site.

1. Push this repository to GitHub.
2. Open Render and create a new Blueprint from the GitHub repo.
3. Render will use `render.yaml` and serve the site as a static app.

No API key is required for the current version. Prices are shown live on the airline, hotel, or activity provider page after opening the booking link. Keep any future real travel, AI, or shared-comments API keys in Render environment variables, not in the frontend code.
