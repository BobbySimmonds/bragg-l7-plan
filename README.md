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

The board is one page. `index.html` is the layout. `book.js` is the behaviour. `/go` and `/pilot` open that same page. `go.html` only sends old links back to `/`.

| Change | Edit |
| --- | --- |
| Who can log in | The admin screen. `ROSTER` in `api/bookings.js` is only the starting list. |
| Pilot dates and how far ahead | `START`, `END` and `ADVANCE_DAYS` in `api/bookings.js`. The page has its own copy: `START`, `END` and `ADVANCE` at the top of `book.js`. |
| Permanent desks | The admin screen. `PINNED_RULES` in `api/bookings.js` is only the starting set. |
| Desks that stay out of use | The admin screen. The starting set is WS7.01–22, WS7.129 and WS7.130. |
| Levels on or off | `FLOORS` in `api/bookings.js` and in `book.js`. |
| Village split on level 7 | `L7_VILLAGES` in `book.js`. Colours on the plan are in `map.js`. |
| Admin override | `ADMIN_PIN` at the top of `api/bookings.js`. Send it as the `X-Admin-Pin` header. Change this before the repo goes to anyone who should not have it. It is in the source today. |

## Admin

Open `/admin` on the same site. The PIN is `ADMIN_PIN` at the top of `api/bookings.js`. Change that before you hand the repo on.

From that screen you can:

- Add a HADID, or remove one. Removing someone cancels their future bookings and their standing desk.
- Book a desk for someone, on any weekday from today through the end of the pilot. The 7-weekday limit does not apply here. If they already have a desk that day, they are moved.
- Cancel a booking. Cancelling one day of a standing booking skips that day only.
- Set or remove a standing booking.
- Mark a desk out of use, or put it back. Marking it out of use clears future bookings on it.

The public booking page reads the live list. Someone you add can sign in without a new deploy. Someone you remove is signed out on their next refresh.

These edits are stored with the bookings. Without the Redis variables they live in the running server only, and the admin screen says so.

## Pages

- `/` booking board (`index.html`)
- `/admin` the management screen (`admin.html`)
- `/go` and `/pilot` same board
- `/map` floor plan

