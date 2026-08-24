/* ============================================================
   DuoLinga — app engine
   Screens: home (lesson path) → lesson (quiz) → results
   Progress is saved in localStorage under "duolinga-v1".
   ============================================================ */

(() => {
  "use strict";

  const XP_PER_CORRECT = 10;
  const COMBO_BONUS = 2; // extra XP per correct once combo >= COMBO_THRESHOLD
  const COMBO_THRESHOLD = 3;
  const PERFECT_BONUS = 15;
  const GEMS_PER_LESSON = 5;
  const GEMS_PERFECT_BONUS = 5;
  const MAX_HEARTS = 5;

  /* ---------- characters ---------- */

  const CHARACTERS = [
    {
      name: "Rio",
      svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rio the parrot">
        <ellipse cx="60" cy="112" rx="30" ry="6" fill="#000" opacity="0.08"/>
        <ellipse cx="60" cy="62" rx="34" ry="40" fill="#58cc02"/>
        <ellipse cx="60" cy="74" rx="22" ry="24" fill="#89e219"/>
        <path d="M34 46 Q20 60 30 82 Q40 74 40 58 Z" fill="#1cb0f6"/>
        <path d="M86 46 Q100 60 90 82 Q80 74 80 58 Z" fill="#ffc800"/>
        <circle cx="47" cy="44" r="12" fill="#fff"/>
        <circle cx="73" cy="44" r="12" fill="#fff"/>
        <circle cx="49" cy="46" r="5" fill="#4b4b4b"/>
        <circle cx="71" cy="46" r="5" fill="#4b4b4b"/>
        <circle cx="50.5" cy="44.5" r="1.6" fill="#fff"/>
        <circle cx="72.5" cy="44.5" r="1.6" fill="#fff"/>
        <path d="M52 58 Q60 52 68 58 Q66 70 60 70 Q54 70 52 58 Z" fill="#ffc800"/>
        <path d="M54 66 Q60 72 66 66 L64 72 Q60 76 56 72 Z" fill="#ff9600"/>
        <path d="M48 100 l-4 10 M60 102 l0 10 M72 100 l4 10" stroke="#ff9600" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
    },
    {
      name: "Lupe",
      svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lupe the llama">
        <ellipse cx="60" cy="112" rx="30" ry="6" fill="#000" opacity="0.08"/>
        <path d="M42 20 Q38 6 48 10 Q52 12 50 22 Z" fill="#f4e9dc"/>
        <path d="M78 20 Q82 6 72 10 Q68 12 70 22 Z" fill="#f4e9dc"/>
        <ellipse cx="60" cy="58" rx="32" ry="42" fill="#f4e9dc"/>
        <ellipse cx="60" cy="80" rx="20" ry="18" fill="#fffaf3"/>
        <circle cx="48" cy="48" r="5" fill="#4b4b4b"/>
        <circle cx="72" cy="48" r="5" fill="#4b4b4b"/>
        <circle cx="49.5" cy="46.5" r="1.6" fill="#fff"/>
        <circle cx="73.5" cy="46.5" r="1.6" fill="#fff"/>
        <ellipse cx="60" cy="64" rx="9" ry="6" fill="#e8c8c8"/>
        <path d="M56 64 Q60 68 64 64" stroke="#b98b8b" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M40 34 Q34 30 36 24 M80 34 Q86 30 84 24" stroke="#e0d0be" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M44 96 Q40 78 36 60 M76 96 Q80 78 84 60" stroke="#ce82ff" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.55"/>
      </svg>`,
    },
    {
      name: "Chispa",
      svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chispa the axolotl">
        <ellipse cx="60" cy="112" rx="30" ry="6" fill="#000" opacity="0.08"/>
        <path d="M30 44 Q16 36 20 24 Q30 28 34 38 Z" fill="#ff86b6"/>
        <path d="M90 44 Q104 36 100 24 Q90 28 86 38 Z" fill="#ff86b6"/>
        <path d="M26 60 Q12 60 12 48 Q24 48 30 54 Z" fill="#ff86b6"/>
        <path d="M94 60 Q108 60 108 48 Q96 48 90 54 Z" fill="#ff86b6"/>
        <ellipse cx="60" cy="64" rx="34" ry="38" fill="#ffb3d1"/>
        <ellipse cx="60" cy="80" rx="22" ry="20" fill="#ffd1e3"/>
        <circle cx="47" cy="54" r="5.5" fill="#4b4b4b"/>
        <circle cx="73" cy="54" r="5.5" fill="#4b4b4b"/>
        <circle cx="48.5" cy="52.5" r="1.8" fill="#fff"/>
        <circle cx="74.5" cy="52.5" r="1.8" fill="#fff"/>
        <path d="M50 68 Q60 76 70 68" stroke="#d16a95" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="40" cy="66" r="5" fill="#ff86b6" opacity="0.7"/>
        <circle cx="80" cy="66" r="5" fill="#ff86b6" opacity="0.7"/>
      </svg>`,
    },
  ];

  const TROPHY_SVG = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trophy">
    <path d="M36 20 h48 v10 c0 22 -10 36 -24 36 c-14 0 -24 -14 -24 -36 Z" fill="#ffc800"/>
    <path d="M36 26 h-14 c0 16 8 24 18 26" stroke="#ffc800" stroke-width="7" fill="none"/>
    <path d="M84 26 h14 c0 16 -8 24 -18 26" stroke="#ffc800" stroke-width="7" fill="none"/>
    <rect x="54" y="64" width="12" height="14" fill="#e6a800"/>
    <rect x="42" y="78" width="36" height="10" rx="3" fill="#ffc800"/>
    <rect x="36" y="88" width="48" height="10" rx="3" fill="#e6a800"/>
    <path d="M55 32 l5 -10 5 10 -5 8 Z" fill="#fff" opacity="0.55"/>
    <g fill="#ffc800">
      <path d="M18 62 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 Z"/>
      <path d="M102 56 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 Z"/>
    </g>
  </svg>`;

  const SAD_SVG = CHARACTERS[1].svg;

  /* ---------- persistent state ---------- */

  const STORAGE_KEY = "duolinga-v1";

  function loadProfile() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return Object.assign(defaultProfile(), JSON.parse(raw));
    } catch (e) { /* corrupted or unavailable storage — start fresh */ }
    return defaultProfile();
  }

  function defaultProfile() {
    return { xp: 0, gems: 0, streak: 0, lastPracticeDay: null, lessonsDone: {}, bestScores: {} };
  }

  function saveProfile() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(profile)); } catch (e) { /* ignore */ }
  }

  let profile = loadProfile();

  /* ---------- speech (Spanish TTS) ---------- */

  const tts = {
    available: typeof window.speechSynthesis !== "undefined",
    voice: null,
    pickVoice() {
      if (!this.available) return;
      const voices = window.speechSynthesis.getVoices();
      this.voice =
        voices.find((v) => /^es[-_]/i.test(v.lang) && /ES|MX|US/i.test(v.lang)) ||
        voices.find((v) => /^es/i.test(v.lang)) ||
        null;
    },
    speak(text, rate = 0.92) {
      if (!this.available) return false;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "es-ES";
      u.rate = rate;
      if (this.voice) u.voice = this.voice;
      window.speechSynthesis.speak(u);
      return true;
    },
  };
  if (tts.available) {
    tts.pickVoice();
    window.speechSynthesis.onvoiceschanged = () => tts.pickVoice();
  }

  /* ---------- helpers ---------- */

  const $ = (id) => document.getElementById(id);

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function normalizeToken(t) {
    return t
      .toLowerCase()
      .normalize("NFC")
      .replace(/[¿?¡!.,;:"“”]/g, "")
      .trim();
  }

  function sameSentence(a, b) {
    const na = a.map(normalizeToken).filter(Boolean);
    const nb = b.map(normalizeToken).filter(Boolean);
    return na.length === nb.length && na.every((t, i) => t === nb[i]);
  }

  /* for typed answers: lowercase, drop accents and punctuation, squeeze spaces */
  function normalizeTyped(s) {
    return s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[¿?¡!.,;:"“”']/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function yesterdayKey() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function showScreen(name) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    $(`screen-${name}`).classList.add("active");
    window.scrollTo(0, 0);
  }

  /* ---------- home screen ---------- */

  function renderHome() {
    $("stat-streak").textContent = profile.streak;
    $("stat-xp").textContent = profile.xp;
    $("stat-gems").textContent = profile.gems;
    $("home-mascot").innerHTML = CHARACTERS[0].svg;

    const path = $("lesson-path");
    path.innerHTML = "";

    LESSONS.forEach((lesson, i) => {
      if (i > 0) {
        const conn = document.createElement("div");
        conn.className = "path-connector" + (profile.lessonsDone[LESSONS[i - 1].id] ? " done" : "");
        path.appendChild(conn);
      }

      const node = document.createElement("div");
      node.className = "path-node";

      const done = (profile.lessonsDone[lesson.id] || 0) > 0;
      // every lesson is playable; the XP milestone marks whether you're
      // "on track" (previous lesson finished, or enough XP earned anywhere)
      const prevDone = i === 0 || (profile.lessonsDone[LESSONS[i - 1].id] || 0) > 0;
      const xpNeeded = lesson.xpToUnlock || 0;
      const onTrack = prevDone || profile.xp >= xpNeeded;

      const best = profile.bestScores[lesson.id];
      const stars = best ? "★".repeat(starsFor(best.accuracy)) + "☆".repeat(3 - starsFor(best.accuracy)) : "";

      const btn = document.createElement("button");
      btn.className = "lesson-btn " + (done ? "done" : onTrack ? "unlocked" : "ahead");
      btn.innerHTML = `
        <div class="lesson-icon">${lesson.icon}</div>
        <div>
          <div class="lesson-title">${lesson.title}</div>
          <div class="lesson-sub">${lesson.subtitle}</div>
          ${best ? `<div class="lesson-best"><span class="stars">${stars}</span> Best +${best.xp} XP · ${best.accuracy}%</div>` : ""}
          ${done ? `<div class="lesson-crowns">👑 × ${profile.lessonsDone[lesson.id]}</div>` : ""}
          ${!onTrack ? `<div class="lesson-locked-note">On track at ⚡${xpNeeded} XP (you have ${profile.xp}) — or jump ahead</div>` : ""}
        </div>`;
      btn.addEventListener("click", () => startLesson(lesson));

      node.appendChild(btn);
      path.appendChild(node);
    });

    const note = document.createElement("p");
    note.className = "save-note";
    note.textContent = "Progress saves automatically on this device 💾";
    path.appendChild(note);
  }

  function starsFor(accuracy) {
    return accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1;
  }

  /* ---------- lesson session ---------- */

  let session = null;

  function startLesson(lesson) {
    session = {
      lesson,
      queue: lesson.questions.map((q, i) => ({ q, originalIndex: i, isRetry: false })),
      totalOriginal: lesson.questions.length,
      pos: 0,
      hearts: MAX_HEARTS,
      xp: 0,
      combo: 0,
      bestCombo: 0,
      firstTryCorrect: 0,
      answeredOriginal: 0,
      retried: new Set(),
      // per-question UI state:
      selected: null,
      answerTokens: null,
      matchState: null,
      solved: false,
      intro: !!lesson.tip,
    };
    showScreen("lesson");
    if (session.intro) renderIntro();
    else renderQuestion();
  }

  /* lesson intro: a short grammar tip before the first question */
  function renderIntro() {
    renderHearts();
    renderProgress();
    setFooterState(null);

    $("q-instruction").textContent = session.lesson.title;
    const charRow = $("q-character-row");
    charRow.classList.remove("hidden");
    $("q-character").innerHTML = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)].svg;
    $("q-bubble").innerHTML = `<span class="tip-label">💡 Before you start</span><span>${session.lesson.tip}</span>`;
    $("q-body").innerHTML = "";

    const checkBtn = $("btn-check");
    checkBtn.textContent = "Start lesson";
    checkBtn.disabled = false;
    checkBtn.classList.remove("wrong");
  }

  function currentItem() {
    return session.queue[session.pos];
  }

  function renderHearts() {
    $("hearts-box").innerHTML = `<span>❤️</span><span>${session.hearts}</span>`;
  }

  function renderProgress() {
    const answered = session.pos;
    const pct = Math.min(100, Math.round((answered / session.queue.length) * 100));
    $("progress-fill").style.width = pct + "%";
  }

  function setFooterState(state) {
    const footer = $("lesson-footer");
    footer.classList.remove("state-correct", "state-wrong");
    if (state) footer.classList.add(`state-${state}`);
  }

  function renderQuestion() {
    const { q } = currentItem();
    session.selected = null;
    session.answerTokens = null;
    session.matchState = null;
    session.solved = false;

    renderHearts();
    renderProgress();
    setFooterState(null);

    const checkBtn = $("btn-check");
    checkBtn.textContent = "Check";
    checkBtn.disabled = true;
    checkBtn.classList.remove("wrong");

    const charRow = $("q-character-row");
    const charBox = $("q-character");
    const bubble = $("q-bubble");
    const body = $("q-body");
    body.innerHTML = "";

    const character = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

    const showBubble = (html) => {
      charRow.classList.remove("hidden");
      charBox.innerHTML = character.svg;
      bubble.innerHTML = html;
    };
    const hideBubble = () => charRow.classList.add("hidden");

    const audioButton = (text) =>
      tts.available
        ? `<button class="audio-btn" data-say="${text.replace(/"/g, "&quot;")}" title="Listen">🔊</button>`
        : "";

    switch (q.type) {
      case "choice": {
        $("q-instruction").textContent = q.instruction;
        const looksSpanish = /[áéíóúñ¿¡]|(\b(el|la|los|las|un|una|es|está|que|de)\b)/i.test(q.prompt);
        showBubble(`${looksSpanish ? audioButton(q.prompt) : ""}<span>${q.prompt}</span>`);
        const list = document.createElement("div");
        list.className = "choice-list";
        q.options.forEach((opt, i) => {
          const b = document.createElement("button");
          b.className = "choice-btn";
          b.dataset.index = i;
          b.innerHTML = `<span class="choice-num">${i + 1}</span><span>${opt}</span>`;
          b.addEventListener("click", () => {
            if (session.solved) return;
            list.querySelectorAll(".choice-btn").forEach((x) => x.classList.remove("selected"));
            b.classList.add("selected");
            session.selected = i;
            checkBtn.disabled = false;
          });
          list.appendChild(b);
        });
        body.appendChild(list);
        break;
      }

      case "fill": {
        $("q-instruction").textContent = "Complete the sentence";
        hideBubble();
        const sentence = document.createElement("p");
        sentence.className = "fill-sentence";
        sentence.innerHTML = q.sentence.replace("___", `<span class="fill-blank" id="fill-blank">&nbsp;</span>`);
        body.appendChild(sentence);
        if (q.hint) {
          const hint = document.createElement("p");
          hint.className = "fill-hint";
          hint.textContent = `Hint: ${q.hint}`;
          body.appendChild(hint);
        }
        const list = document.createElement("div");
        list.className = "choice-list";
        shuffle(q.options.map((opt, i) => ({ opt, i }))).forEach(({ opt, i }, n) => {
          const b = document.createElement("button");
          b.className = "choice-btn";
          b.dataset.index = i;
          b.innerHTML = `<span class="choice-num">${n + 1}</span><span>${opt}</span>`;
          b.addEventListener("click", () => {
            if (session.solved) return;
            list.querySelectorAll(".choice-btn").forEach((x) => x.classList.remove("selected"));
            b.classList.add("selected");
            $("fill-blank").textContent = opt;
            session.selected = i;
            checkBtn.disabled = false;
          });
          list.appendChild(b);
        });
        body.appendChild(list);
        break;
      }

      case "translate": {
        const toSpanish = q.direction === "en-es";
        $("q-instruction").textContent = toSpanish ? "Translate into Spanish" : "Translate into English";
        showBubble(`${toSpanish ? "" : audioButton(q.prompt)}<span>${q.prompt}</span>`);
        buildWordBank(body, q.answer.concat(q.extra || []), checkBtn);
        break;
      }

      case "typing": {
        $("q-instruction").textContent = "Type the Spanish translation";
        showBubble(`<span>${q.prompt}</span>`);
        const input = document.createElement("input");
        input.type = "text";
        input.className = "typing-input";
        input.placeholder = "Escribe en español…";
        input.autocomplete = "off";
        input.autocapitalize = "off";
        input.spellcheck = false;
        input.addEventListener("input", () => {
          checkBtn.disabled = input.value.trim().length === 0;
        });
        body.appendChild(input);
        const note = document.createElement("p");
        note.className = "typing-note";
        note.textContent = "Accents and ¿¡ punctuation are optional — we'll show the full spelling.";
        body.appendChild(note);
        setTimeout(() => input.focus(), 50);
        break;
      }

      case "listen": {
        $("q-instruction").textContent = "Tap what you hear";
        if (tts.available) {
          showBubble(`${audioButton(q.text)}<span style="color:var(--ink-soft);font-size:15px">Tap to listen again</span>`);
        } else {
          // No TTS in this browser — degrade to reading the sentence.
          $("q-instruction").textContent = "Assemble the sentence you read";
          showBubble(`<span>${q.text}</span>`);
        }
        buildWordBank(body, q.answer.concat(q.extra || []), checkBtn);
        if (tts.available) setTimeout(() => tts.speak(q.text), 350);
        break;
      }

      case "match": {
        $("q-instruction").textContent = "Match the pairs";
        hideBubble();
        buildMatch(body, q, checkBtn);
        break;
      }
    }

    // wire audio buttons
    bubble.querySelectorAll(".audio-btn").forEach((b) =>
      b.addEventListener("click", () => tts.speak(b.dataset.say))
    );
  }

  /* word-bank builder for translate/listen questions */
  function buildWordBank(body, tokens, checkBtn) {
    session.answerTokens = [];

    const answerArea = document.createElement("div");
    answerArea.className = "answer-area";
    const bank = document.createElement("div");
    bank.className = "word-bank";

    shuffle(tokens).forEach((tok) => {
      const b = document.createElement("button");
      b.className = "token";
      b.textContent = tok;
      b.addEventListener("click", () => {
        if (session.solved) return;
        if (b.parentElement === bank) {
          bank.removeChild(b);
          answerArea.appendChild(b);
          session.answerTokens.push(b);
        } else {
          answerArea.removeChild(b);
          bank.appendChild(b);
          session.answerTokens = session.answerTokens.filter((x) => x !== b);
        }
        checkBtn.disabled = session.answerTokens.length === 0;
      });
      bank.appendChild(b);
    });

    body.appendChild(answerArea);
    body.appendChild(bank);
  }

  /* match-the-pairs builder; completes itself without the Check button */
  function buildMatch(body, q, checkBtn) {
    const grid = document.createElement("div");
    grid.className = "match-grid";

    const left = shuffle(q.pairs.map(([es], i) => ({ text: es, pair: i })));
    const right = shuffle(q.pairs.map(([, en], i) => ({ text: en, pair: i })));

    session.matchState = { selectedLeft: null, selectedRight: null, matched: 0, total: q.pairs.length, mistakes: 0 };

    const makeCol = (items, side) =>
      items.map((item) => {
        const b = document.createElement("button");
        b.className = "match-btn";
        b.textContent = item.text;
        b.dataset.pair = item.pair;
        b.dataset.side = side;
        b.addEventListener("click", () => onMatchClick(b));
        return b;
      });

    const leftBtns = makeCol(left, "left");
    const rightBtns = makeCol(right, "right");
    for (let i = 0; i < leftBtns.length; i++) {
      grid.appendChild(leftBtns[i]);
      grid.appendChild(rightBtns[i]);
    }
    body.appendChild(grid);

    function onMatchClick(btn) {
      if (btn.classList.contains("matched") || session.solved) return;
      const st = session.matchState;
      const key = btn.dataset.side === "left" ? "selectedLeft" : "selectedRight";
      const other = btn.dataset.side === "left" ? "selectedRight" : "selectedLeft";

      if (st[key] === btn) {
        btn.classList.remove("selected");
        st[key] = null;
        return;
      }
      if (st[key]) st[key].classList.remove("selected");
      st[key] = btn;
      btn.classList.add("selected");

      if (st[key] && st[other]) {
        const a = st[key], b = st[other];
        if (a.dataset.pair === b.dataset.pair) {
          [a, b].forEach((x) => {
            x.classList.remove("selected");
            x.classList.add("matched");
            x.disabled = true;
          });
          if (tts.available && /left/.test(a.dataset.side + b.dataset.side)) {
            const esBtn = a.dataset.side === "left" ? a : b;
            tts.speak(esBtn.textContent, 1);
          }
          st.matched++;
          if (st.matched === st.total) {
            // matching mistakes don't cost hearts, but 3+ spoils "perfect"
            gradeAnswer(st.mistakes < 3, { skipHeartLoss: true, detail: "Pairs matched!" });
          }
        } else {
          st.mistakes++;
          [a, b].forEach((x) => {
            x.classList.add("shake");
            setTimeout(() => x.classList.remove("shake", "selected"), 350);
          });
        }
        st[key] = null;
        st[other] = null;
      }
    }

    checkBtn.disabled = true; // match completes on its own
  }

  /* ---------- checking answers ---------- */

  function checkCurrent() {
    const { q } = currentItem();
    switch (q.type) {
      case "choice":
      case "fill": {
        const ok = session.selected === q.correct;
        // reveal correct/incorrect styling on the options
        document.querySelectorAll(".choice-btn").forEach((b) => {
          const i = Number(b.dataset.index);
          if (i === q.correct) b.classList.add("correct");
          else if (i === session.selected && !ok) b.classList.add("incorrect");
          b.disabled = true;
        });
        const right = q.type === "fill" ? q.options[q.correct] : q.options[q.correct];
        const detail = ok
          ? q.translation || ""
          : `Correct answer: ${right}` + (q.translation ? ` — ${q.translation}` : "");
        gradeAnswer(ok, { detail });
        break;
      }
      case "translate":
      case "listen": {
        const given = session.answerTokens.map((b) => b.textContent);
        const target = q.answer;
        const alts = q.alt || [];
        const ok = sameSentence(given, target) || alts.some((a) => sameSentence(given, a));
        const detail = ok
          ? q.translation || ""
          : `Correct answer: ${target.join(" ")}` + (q.translation ? ` — ${q.translation}` : "");
        gradeAnswer(ok, { detail });
        break;
      }
      case "typing": {
        const input = document.querySelector(".typing-input");
        const given = normalizeTyped(input.value);
        const targets = [q.answer].concat(q.alt || []);
        const ok = targets.some((t) => normalizeTyped(t) === given);
        input.disabled = true;
        input.classList.add(ok ? "typed-correct" : "typed-wrong");
        const detail = ok
          ? `Full spelling: ${q.answer}`
          : `Correct answer: ${q.answer}`;
        gradeAnswer(ok, { detail });
        break;
      }
    }
  }

  const PRAISE = ["¡Excelente!", "¡Muy bien!", "¡Perfecto!", "¡Genial!", "Nice!"];

  function gradeAnswer(ok, { detail = "", skipHeartLoss = false } = {}) {
    session.solved = true;
    const item = currentItem();

    if (!item.isRetry) session.answeredOriginal++;

    if (ok) {
      session.combo++;
      session.bestCombo = Math.max(session.bestCombo, session.combo);
      let gained = XP_PER_CORRECT;
      if (session.combo >= COMBO_THRESHOLD) gained += COMBO_BONUS;
      session.xp += gained;
      if (!item.isRetry) session.firstTryCorrect++;

      setFooterState("correct");
      const praise = PRAISE[Math.floor(Math.random() * PRAISE.length)];
      $("feedback-title").textContent =
        session.combo >= COMBO_THRESHOLD ? `${praise} 🔥 ${session.combo} in a row! +${gained} XP` : `${praise} +${gained} XP`;
      $("feedback-detail").textContent = detail;
    } else {
      session.combo = 0;
      if (!skipHeartLoss) session.hearts--;
      renderHearts();

      setFooterState("wrong");
      $("feedback-title").textContent = "Not quite…";
      $("feedback-detail").textContent = detail;

      // requeue the missed question once, Duolingo-style
      if (!item.isRetry && !session.retried.has(item.originalIndex)) {
        session.retried.add(item.originalIndex);
        session.queue.push({ q: item.q, originalIndex: item.originalIndex, isRetry: true });
      }
    }

    // "Why?" button: reveal the teaching note for this question
    const explainBtn = $("btn-explain");
    const explainPanel = $("explain-panel");
    explainPanel.hidden = true;
    explainPanel.textContent = "";
    if (item.q.explain) {
      explainBtn.hidden = false;
      explainBtn.textContent = "💡 Why? Explain this";
      explainBtn.onclick = () => {
        explainPanel.textContent = item.q.explain;
        explainPanel.hidden = !explainPanel.hidden;
        explainBtn.textContent = explainPanel.hidden ? "💡 Why? Explain this" : "Hide explanation";
      };
      // a wrong answer is a teaching moment — open the explanation right away
      if (!ok) explainBtn.onclick();
    } else {
      explainBtn.hidden = true;
    }

    const checkBtn = $("btn-check");
    checkBtn.textContent = "Continue";
    checkBtn.disabled = false;
    checkBtn.classList.toggle("wrong", !ok);

    if (!ok && session.hearts <= 0) {
      checkBtn.textContent = "See results";
    }
  }

  function advance() {
    if (session.hearts <= 0) return endLesson(false);
    session.pos++;
    if (session.pos >= session.queue.length) return endLesson(true);
    renderQuestion();
  }

  /* ---------- results ---------- */

  function endLesson(passed) {
    if (tts.available) window.speechSynthesis.cancel();

    const accuracy = Math.round((session.firstTryCorrect / session.totalOriginal) * 100);
    const perfect = passed && session.firstTryCorrect === session.totalOriginal;

    let gems = 0;
    let newRecord = false;
    let unlockedNow = [];
    if (passed) {
      if (perfect) session.xp += PERFECT_BONUS;
      gems = GEMS_PER_LESSON + (perfect ? GEMS_PERFECT_BONUS : 0);

      const xpBefore = profile.xp;
      const prevBest = profile.bestScores[session.lesson.id];
      newRecord = !prevBest || session.xp > prevBest.xp || accuracy > prevBest.accuracy;
      profile.bestScores[session.lesson.id] = {
        xp: Math.max(prevBest ? prevBest.xp : 0, session.xp),
        accuracy: Math.max(prevBest ? prevBest.accuracy : 0, accuracy),
      };

      profile.xp += session.xp;

      unlockedNow = LESSONS.filter(
        (l) =>
          l.xpToUnlock &&
          xpBefore < l.xpToUnlock &&
          profile.xp >= l.xpToUnlock &&
          !(profile.lessonsDone[l.id] > 0)
      ).map((l) => l.title);
      profile.gems += gems;
      profile.lessonsDone[session.lesson.id] = (profile.lessonsDone[session.lesson.id] || 0) + 1;

      const today = todayKey();
      if (profile.lastPracticeDay !== today) {
        profile.streak = profile.lastPracticeDay === yesterdayKey() ? profile.streak + 1 : 1;
        profile.lastPracticeDay = today;
      }
      saveProfile();
    }

    $("results-mascot").innerHTML = passed ? TROPHY_SVG : SAD_SVG;
    $("results-title").textContent = passed
      ? perfect
        ? "¡Perfecto! Flawless lesson!"
        : "Lesson complete!"
      : "Out of hearts!";
    $("results-title").style.color = passed ? "var(--gold)" : "var(--red)";
    const subParts = [];
    if (passed) {
      subParts.push(
        perfect
          ? `You aced “${session.lesson.title}” without a single miss.`
          : `You finished “${session.lesson.title}”.`
      );
      if (newRecord) subParts.push("🏅 New personal best — saved!");
      if (unlockedNow.length) subParts.push(`🔓 Unlocked: ${unlockedNow.join(", ")}!`);
      if (!newRecord && !unlockedNow.length) subParts.push("Keep the streak alive!");
    } else {
      subParts.push("No worries — review the tricky ones and try again.");
    }
    $("results-sub").textContent = subParts.join(" ");

    $("res-xp").textContent = passed ? `+${session.xp}` : "0";
    $("res-acc").textContent = `${accuracy}%`;
    $("res-combo").textContent = session.bestCombo;
    $("res-gems").textContent = passed ? `+${gems}` : "0";

    $("btn-results-retry").textContent = passed ? "Practice again" : "Try again";
    showScreen("results");
  }

  /* ---------- wiring ---------- */

  $("btn-check").addEventListener("click", () => {
    if (session.intro) {
      session.intro = false;
      renderQuestion();
    } else if (session.solved) {
      advance();
    } else {
      checkCurrent();
    }
  });

  // two-tap quit: native confirm() can be blocked in sandboxed iframes
  let quitArmed = null;
  $("btn-quit").addEventListener("click", () => {
    const btn = $("btn-quit");
    if (quitArmed) {
      clearTimeout(quitArmed);
      quitArmed = null;
      btn.textContent = "✕";
      btn.style.color = "";
      if (tts.available) window.speechSynthesis.cancel();
      renderHome();
      showScreen("home");
    } else {
      btn.textContent = "Quit?";
      btn.style.color = "var(--red)";
      quitArmed = setTimeout(() => {
        quitArmed = null;
        btn.textContent = "✕";
        btn.style.color = "";
      }, 2500);
    }
  });

  $("btn-results-continue").addEventListener("click", () => {
    renderHome();
    showScreen("home");
  });

  $("btn-results-retry").addEventListener("click", () => startLesson(session.lesson));

  // keyboard shortcuts: 1-4 select options, Enter checks/continues
  document.addEventListener("keydown", (e) => {
    if (!$("screen-lesson").classList.contains("active")) return;
    if (e.key === "Enter" && !$("btn-check").disabled) {
      e.preventDefault();
      $("btn-check").click();
    } else if (e.target.tagName === "INPUT") {
      return; // digits are text while typing an answer
    } else if (/^[1-4]$/.test(e.key)) {
      const btns = document.querySelectorAll(".choice-btn:not(:disabled)");
      const n = Number(e.key) - 1;
      // buttons are rendered in display order; the visible number is n+1
      const target = Array.from(btns).find((b) => b.querySelector(".choice-num")?.textContent === e.key);
      if (target) target.click();
      else if (btns[n]) btns[n].click();
    }
  });

  renderHome();
  showScreen("home");
})();
