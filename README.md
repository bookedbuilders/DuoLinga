# DuoLinga 🦜🇪🇸

A lightweight, Duolingo-style web app for English speakers learning Spanish.
No frameworks, no build step — just open it in a browser.

This MVP is pitched at a **returning / lower-intermediate learner** (think:
~40 hours of Duolingo, or high-school Spanish a while back). It skips
"hola, me llamo…" and starts with a quick review, then moves into the past
tense, real restaurant conversations, travel, and making plans.

## Running it

```bash
# from the repo root — any static server works
python3 -m http.server 8000
# then open http://localhost:8000
```

Or simply open `index.html` directly in a browser.

## What's inside

**5 lessons, 12–13 questions each:**

1. **Warm-up review** — present tense, ser vs. estar, question words
2. **Talking about the past** — preterite, regular verbs + key irregulars (fui, hice, tuve…)
3. **At the restaurant** — ordering, polite requests, paying
4. **Getting around** — directions, transport, travel problems
5. **Making plans** — ir a + infinitive, invitations

**Question types** (mixed within every lesson):

- Multiple choice (Spanish → English comprehension, grammar picks)
- Fill in the blank (conjugation choices with hints)
- Translate — build the sentence from a tap-a-word bank (both directions)
- Listening — "tap what you hear," using the browser's Spanish text-to-speech
  (degrades gracefully to reading if TTS isn't available)
- Match the pairs (vocabulary)

**Game systems, Duolingo-style:**

- ⚡ **XP** — 10 per correct answer, +2 combo bonus at 3+ in a row,
  +15 for a perfect lesson
- ❤️ **Hearts** — 5 per lesson; wrong answers cost one, run out and the
  lesson ends (match mistakes are free)
- 🔥 **Daily streak** — practice on consecutive days to grow it
- 💎 **Gems** — earned per completed lesson, bonus for perfect runs
- 👑 **Crowns** — track how many times you've completed each lesson
- Missed questions are re-queued at the end of the lesson, like Duolingo
- Progress is saved in `localStorage`, so it survives page reloads

**Characters:** Rio the parrot, Lupe the llama, and Chispa the axolotl
(hand-drawn SVGs) take turns asking the questions.

## Adding lessons

All content lives in [`js/data/lessons.js`](js/data/lessons.js). Each lesson
is a plain object — add a new one to the `LESSONS` array and it appears on
the path automatically (locked until the previous lesson is completed):

```js
{
  id: "unique-id",
  title: "Lesson title",
  subtitle: "What it covers",
  icon: "🎯",
  questions: [ /* 10–15 questions */ ],
}
```

The question schema for all five types is documented at the top of that file.
No other changes are needed — the engine, path, unlocking, and scoring all
pick up new lessons automatically. The intended curriculum arc is
Spanish 101 → intermediate, so append lessons in difficulty order.

## Project layout

```
index.html          app shell (home / lesson / results screens)
css/styles.css      all styling
js/data/lessons.js  lesson content (edit this to add lessons)
js/app.js           quiz engine, scoring, streaks, TTS, characters
```
