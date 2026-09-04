# The Board

Every lever I can actually pull, and what December looks like if I do.

A single-page cash flow console for one person: retainer clients, ads that
turn into clients with a lag, a VA, a house rented out in blocks, an apartment
in Hermosillo, 30k of card debt, a bank loan, a business card and a line of
credit. Pull a fader and the next 6 or 12 months of cash redraw in the same
frame. The page tells you the lowest point, when you hit the floor, and which
levers close the gap, ranked by how little they change your life.

No framework, no build, no backend. One HTML file. State lives in
`localStorage` under `board.v1`, three scenario slots.

## Run it

Open `index.html` in a browser, or:

```bash
python3 -m http.server 8000
# http://localhost:8000/the-board/
```

## Move it to its own repo

This folder is self-contained. To make it its own repository:

```bash
mkdir the-board && cp -r /path/to/DuoLinga/the-board/* the-board/
cd the-board && git init && git add . && git commit -m "The Board v1"
```

## Seed numbers

Sept 2026 through Aug 2027. Cash lands in the month it is collected. Deposits
are not counted. Taxes are not modeled. Everything below is a lever on the page
or a field in the Advanced drawer.

| Item | Seed |
|---|---|
| Cash today | 10,000 |
| Floor | 3,000 (one month of housing) |
| Housing (mortgage + HOA + HELOC) | 3,000 / mo |
| House utilities, owner-paid | 250 / mo (verify) |
| HOA arrears | 1,200 in Sept |
| Signed rent | 3,000 Sept, 3,000 Oct, 600 Nov, 3,867 Jan to Mar |
| Hermosillo rent | 1,000 / mo from Oct |
| Living | 1,000 / mo |
| Credit cards | 30,000 balance, 24% APR, 1,000 / mo payment |
| Bank loan | 300 / mo |
| Software | 1,000 / mo |
| Agency | 500 / mo |
| Ads | 50 / day, one client per 2,000 spent, two-month lag |
| VA | 45 hrs / wk at 5.50 |
| Electrician | 2,000 / mo |
| Plumber | 1,300 Sept and Oct, then 2,000 / mo |
| Audit client | 2,000 / mo from Oct |
| Line of credit | up to 6,500, 30% fee over six months, weekly |
| Capital on Tap | 8,000, pending approval, 0% for six months |

## Model notes

- Ads produce clients deterministically: spend accumulates, each time it
  crosses the cost per client a client signs, and it starts paying after the
  lag. Conservative mode doubles the cost and haircuts income 20%.
- The credit line is modeled as a fee (30 cents on the dollar) repaid in six
  equal monthly slices of the weekly schedule. It is deliberately the most
  expensive money on the page.
- Structural surplus is retainers minus fixed, business and card payments,
  excluding rent. Rent covers the house; it is not profit.
- Sweep mode pays anything above floor plus buffer into the cards at month end.
- Tap an open month to book it. Tap a booked or signed month to set that
  month's rent or let it go. Booked months without a rate use the open rate.
