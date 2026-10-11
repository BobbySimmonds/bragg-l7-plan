# Bragg Centre desk booking

Live board: https://bragg-centre-desks.vercel.app/

This repo is the whole app. There is no build step. Vercel serves the HTML, the floor-plan images, and one Node function at `api/bookings.js`.

Giving someone this GitHub repo is the right handoff. It is not a copy of the live bookings. Those sit on the running site, not in git. A new deploy starts with the rules below and an empty board, plus a few old September seed rows in `BOOTSTRAP`.

## Take over the existing site

Keep the current Vercel project (`bragg-centre-desks`). Do not create a second project unless you mean to start again. The repo is already connected to that project. Pushing `main` deploys it.

## Deploy a new copy

1. Import this repo into Vercel. Framework preset: Other. No build command. Output is the repo root.
2. Before anyone books, add a Redis REST database and set both env vars:
   - `KV_REST_API_URL` (or `UPSTASH_REDIS_REST_URL`)
   - `KV_REST_API_TOKEN` (or `UPSTASH_REDIS_REST_TOKEN`)
3. Redeploy.

Without those two variables, bookings live in the server process memory. A cold start, a second instance, or a new deploy can drop them or split them across copies. The storage key is `bragg:bookings`.

`npx vercel dev` from this folder runs it locally the same way.

The function is a normal Node handler (`module.exports = async function handler(req, res)`). Any host that serves this folder as static files and routes `/api/bookings` to that file will work. The pages call that path. They do not call Vercel by name.

## Current bookings

`data/bookings-snapshot.json` is a copy of the normal bookings on the live site, taken 12 October 2026. Permanent holds are not in that file. Nothing loads the snapshot on its own. It is the backup if the live process memory is lost.

To put it into Redis, store this JSON as the value of `bragg:bookings`:

```json
{ "initialised": true, "bookings": [ ...rows from the snapshot... ], "tombs": {} }
```

Use the `bookings` array only. Leave out the export wrapper (`exportedAt`, `note`, `count`).

## Rules already switched on

- Sign in with a HADID on the list. There is no password and no name on the page.
- One desk per person per day.
- People can book 7 weekdays ahead. Weekends are not bookable. The window is 21 Sep 2026 through 18 Dec 2026.
- A booking can be cancelled on the day. Past days stay locked.
- Permanent, and not cancellable in the app:
  - `nrashe03` has WS7.136 every Tuesday, Wednesday and Thursday.
  - `bsimmo01` has WS7.147 every weekday from 9 Oct 2026.
- Out of use, nobody can book them: WS7.01–22, WS7.129, WS7.130.
- Level 7 is the floor in use. Levels 6 and 8 are switched off. Level 5 is still in the data as overflow.

## Where to change things

The pages do not share one script. `index.html` and `go.html` are full copies. `go.html` is what `/go` used to be; both are the same board now. Change both, or they drift. `book.js` is an old copy of that script. The pages do not load it.

| Change | Edit |
| --- | --- |
| Who can log in | `ROSTER` in `api/bookings.js`, and the same list inside `index.html` and `go.html`. The footer count is typed by hand. |
| Pilot dates and how far ahead | `START`, `END`, `ADVANCE_DAYS` at the top of `api/bookings.js`. The page has its own copy of the 7-weekday limit. Search `ADVANCE` in the HTML. |
| Permanent desks | `PINNED_RULES` in `api/bookings.js`. `dows` is 0 Sunday through 6 Saturday. `from` is the first date. |
| Desks that stay out of use | `HELD_DESKS` and the WS7.01–22 check in `deskHeld()` in `api/bookings.js`, `index.html` and `go.html`. The plan uses `heldWs()` in `map.js`. |
| Levels on or off | `FLOORS` in `api/bookings.js`. The level buttons are in the HTML. |
| Village split on level 7 | `L7_VILLAGES` in the HTML. Colours on the plan are in `map.js`. |
| Admin override | `ADMIN_PIN` at the top of `api/bookings.js`. Send it as the `X-Admin-Pin` header. Change this before the repo goes to anyone who should not have it. It is in the source today. |

## Pages

- `/` booking board (`index.html`)
- `/go` and `/pilot` same board
- `/map` floor plan
