# ethanandfriends

A simple Europe-only senior trip planner for Ethan, Angela, Doria, and Justin.

The app helps the group:

- Search likely Europe destinations with autocomplete.
- Review direct airline and hotel brand options sorted by estimated lowest price.
- Discover popular activities for the selected city.
- Add and remove plans by clicking days on a real May-July 2027 calendar.

## Deploying on Render

This repo includes `render.yaml` for a Render static site.

1. Push this repository to GitHub.
2. Open Render and create a new Blueprint from the GitHub repo.
3. Render will use `render.yaml` and serve the site as a static app.

No API key is required for the current version. The price cards are transparent estimates and direct booking shortcuts, not live fares. Keep any future real travel or AI API keys in Render environment variables, not in the frontend code.
