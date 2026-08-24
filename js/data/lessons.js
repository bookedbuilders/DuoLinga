/* ============================================================
   DuoLinga lesson data
   ------------------------------------------------------------
   To add a lesson: push a new object onto LESSONS with a unique
   `id`, a `tip` (short grammar intro shown before question 1),
   an optional `xpToUnlock` (the "on track" XP milestone), and
   10–15 questions. Question types:

   choice    — multiple choice.
               { type, instruction, prompt, options[], correct }
   fill      — pick the word that completes the sentence.
               { type, sentence (use ___ for the blank), hint?,
                 options[], correct, translation }
   translate — build the translation from a word bank.
               { type, direction: 'en-es'|'es-en', prompt,
                 answer[] (tokens in order), alt?[][] (accepted
                 alternatives), extra[] (distractor tokens) }
   typing    — type the translation (accent/punctuation tolerant).
               { type, prompt, answer (string), alt?[] }
   listen    — tap the Spanish words you hear.
               { type, text (spoken + target), answer[], extra[],
                 translation }
   match     — match the pairs. { type, pairs: [[es, en], ...] }

   Every question may carry `explain` — a short teaching note
   revealed by the "Why?" button after answering.
   ============================================================ */

const LESSONS = [
  /* ---------------------------------------------------------
     Lesson 1 — Warm-up: present tense, ser/estar, questions
     --------------------------------------------------------- */
  {
    id: "repaso",
    title: "Warm-up review",
    subtitle: "Present tense · ser vs. estar",
    icon: "📗",
    tip: "Spanish has two verbs for “to be”: use SER for what something is (identity, profession, characteristics — “mi hermana es enfermera”) and ESTAR for how or where it is (feelings, conditions, location — “los niños están cansados”). This lesson also brushes up everyday present-tense verbs and question words.",
    questions: [
      {
        type: "choice",
        instruction: "What does this mean?",
        prompt: "Trabajo desde casa los viernes.",
        options: [
          "I work from home on Fridays.",
          "I walk to work on Fridays.",
          "I worked at home last Friday.",
        ],
        correct: 0,
        explain: "Trabajo is the present “I work” (the -o ending marks yo). Desde casa = “from home”, and “los viernes” with the article means “on Fridays”, every week — Spanish uses los + day for repeated events.",
      },
      {
        type: "fill",
        sentence: "Mi hermana ___ enfermera en un hospital grande.",
        hint: "ser or estar?",
        options: ["es", "está", "son", "estás"],
        correct: 0,
        translation: "My sister is a nurse in a big hospital.",
        explain: "Professions take SER because they describe what someone is, not a temporary state: mi hermana ES enfermera. Estar would suggest a condition or location instead.",
      },
      {
        type: "fill",
        sentence: "Los niños ___ cansados después de la escuela.",
        hint: "ser or estar?",
        options: ["están", "son", "es", "está"],
        correct: 0,
        translation: "The kids are tired after school.",
        explain: "Being tired is a temporary condition, so it takes ESTAR: los niños ESTÁN cansados. “Son cansados” would oddly claim tiredness is their permanent personality.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "We eat dinner at nine at night.",
        answer: ["Cenamos", "a", "las", "nueve", "de", "la", "noche"],
        extra: ["mañana", "comemos", "nosotros"],
        explain: "Cenar is its own verb — “to have dinner” — so “cenamos” says “we eat dinner” in one word. Times use a las: a las nueve. “De la noche” pins it to nighttime, like “at night / p.m.”",
      },
      {
        type: "match",
        pairs: [
          ["conocer", "to know (people, places)"],
          ["saber", "to know (facts, how to)"],
          ["pedir", "to ask for"],
          ["preguntar", "to ask (a question)"],
          ["llevar", "to carry / to wear"],
        ],
        explain: "Two classic pairs: SABER is knowing facts or skills, CONOCER is being familiar with people and places. PEDIR is requesting a thing; PREGUNTAR is asking a question.",
      },
      {
        type: "choice",
        instruction: "Choose the correct question word.",
        prompt: "¿___ cuesta el boleto de autobús?",
        options: ["Cuánto", "Cuándo", "Cómo", "Dónde"],
        correct: 0,
        explain: "Cuánto asks “how much” — the natural partner of costar (to cost): ¿Cuánto cuesta? Cuándo = when, cómo = how, dónde = where.",
      },
      {
        type: "listen",
        text: "¿A qué hora sales del trabajo?",
        answer: ["¿A", "qué", "hora", "sales", "del", "trabajo?"],
        extra: ["casa", "llegas", "cuándo"],
        translation: "What time do you leave work?",
        explain: "“¿A qué hora…?” is the set phrase for “At what time…?”. Sales is salir (to leave) in the tú form, and del is the required contraction of de + el.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Mis padres viven cerca de la playa.",
        answer: ["My", "parents", "live", "near", "the", "beach"],
        extra: ["far", "from", "lived", "house"],
        explain: "Cerca de = “near / close to” (its opposite is lejos de, “far from”). Padres means “parents” — a common false friend, since “relatives” is parientes.",
      },
      {
        type: "fill",
        sentence: "Yo no ___ cocinar muy bien, pero me gusta intentarlo.",
        hint: "saber or conocer?",
        options: ["sé", "conozco", "sabo", "sabes"],
        correct: 0,
        translation: "I don't know how to cook very well, but I like trying.",
        explain: "Saber + infinitive means “to know how to do something”: no sé cocinar. The yo form is irregular — sé, not “sabo”. Conocer is for knowing people and places, so it doesn't fit here.",
      },
      {
        type: "typing",
        prompt: "The house is very old.",
        answer: "La casa es muy vieja",
        explain: "Age and other lasting characteristics take SER: la casa ES vieja. Adjectives agree with the noun — casa is feminine, so vieja, not viejo. Don't worry about accents when typing; the app forgives them.",
      },
      {
        type: "choice",
        instruction: "What does this mean?",
        prompt: "Nos vemos el próximo martes.",
        options: [
          "See you next Tuesday.",
          "We saw each other last Tuesday.",
          "We watch TV on Tuesdays.",
        ],
        correct: 0,
        explain: "Nos vemos (literally “we see each other”) is the everyday way to say “see you!”. El próximo martes = next Tuesday; days of the week take el for a single upcoming date.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Do you want to go to the movies with me?",
        answer: ["¿Quieres", "ir", "al", "cine", "conmigo?"],
        extra: ["contigo", "vamos", "quiero", "teatro"],
        explain: "Querer + infinitive = “to want to do”: ¿Quieres ir…? Al is the contraction a + el. “With me” has its own special word — conmigo (and “with you” is contigo).",
      },
      {
        type: "listen",
        text: "Hace mucho calor hoy.",
        answer: ["Hace", "mucho", "calor", "hoy"],
        extra: ["frío", "ayer", "tiempo"],
        translation: "It's very hot today.",
        explain: "Weather uses hacer: hace calor (it's hot), hace frío (it's cold). Because calor is a noun (“heat”), the intensifier is mucho, not muy — hace MUCHO calor.",
      },
    ],
  },

  /* ---------------------------------------------------------
     Lesson 2 — The preterite (simple past)
     --------------------------------------------------------- */
  {
    id: "pasado",
    xpToUnlock: 100,
    title: "Talking about the past",
    subtitle: "Preterite · regular & key irregulars",
    icon: "⏰",
    tip: "The preterite tells what happened — completed past events. Regular endings: -ar verbs use -é, -aste, -ó, -amos, -aron (compré, compraste…); -er/-ir verbs use -í, -iste, -ió, -imos, -ieron. A handful of star irregulars are worth memorizing outright: fui (I went/was), hice (I did), tuve (I had), pude (I could), dije (I said), vine (I came).",
    questions: [
      {
        type: "fill",
        sentence: "Ayer ___ al mercado con mi abuela.",
        hint: "ir — yo",
        options: ["fui", "fue", "iba", "voy"],
        correct: 0,
        translation: "Yesterday I went to the market with my grandma.",
        explain: "Ir is wildly irregular in the preterite: fui, fuiste, fue, fuimos, fueron. Fui = “I went”; fue is he/she/it. (Oddly, ser shares these exact forms — context tells them apart.)",
      },
      {
        type: "choice",
        instruction: "What does this mean?",
        prompt: "Anoche comimos en un restaurante nuevo.",
        options: [
          "Last night we ate at a new restaurant.",
          "Tonight we are eating at a new restaurant.",
          "Last night we cooked at home.",
        ],
        correct: 0,
        explain: "Anoche = last night. Comimos is comer in the preterite nosotros form (-imos): “we ate”. For -er/-ir verbs, present and preterite nosotros differ: comemos (we eat) vs. comimos (we ate).",
      },
      {
        type: "fill",
        sentence: "Ellos ___ una película muy divertida el sábado.",
        hint: "ver — ellos",
        options: ["vieron", "veían", "ven", "vimos"],
        correct: 0,
        translation: "They watched a very funny movie on Saturday.",
        explain: "Ver in the preterite: vi, viste, vio, vimos, vieron — regular -er endings, just with no accents. Vieron matches ellos. Veían is the imperfect (“used to watch”), a different past tense.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "I bought a gift for my friend.",
        answer: ["Compré", "un", "regalo", "para", "mi", "amigo"],
        extra: ["compró", "por", "amiga", "el"],
        explain: "Comprar → compré, “I bought” — the -é ending (with accent) marks yo; compró (with -ó) would be he/she. “For” a recipient is para, not por.",
      },
      {
        type: "match",
        pairs: [
          ["hice", "I did / I made"],
          ["tuve", "I had"],
          ["estuve", "I was (estar)"],
          ["pude", "I could"],
          ["dije", "I said"],
        ],
        explain: "These are the big irregular preterites — hacer→hice, tener→tuve, estar→estuve, poder→pude, decir→dije. They share a pattern: an irregular stem plus unstressed endings (-e, -iste, -o…), with no accent marks.",
      },
      {
        type: "listen",
        text: "¿Dónde compraste esos zapatos?",
        answer: ["¿Dónde", "compraste", "esos", "zapatos?"],
        extra: ["cuándo", "compró", "estos"],
        translation: "Where did you buy those shoes?",
        explain: "Compraste is the tú preterite of comprar (-aste). Esos = “those” (near the listener); estos would be “these”. Spanish questions need no helper verb — “did you buy” is just compraste.",
      },
      {
        type: "fill",
        sentence: "Nosotros ___ que salir temprano esta mañana.",
        hint: "tener — nosotros",
        options: ["tuvimos", "tenemos", "tuvieron", "teníamos"],
        correct: 0,
        translation: "We had to leave early this morning.",
        explain: "Tener que + infinitive = “to have to”. In the preterite, tener uses the irregular stem tuv-: tuvimos que salir = “we had to leave” (a one-time obligation that happened).",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "El tren llegó tarde otra vez.",
        answer: ["The", "train", "arrived", "late", "again"],
        extra: ["early", "left", "bus", "arrives"],
        explain: "Llegó is llegar in the él/ella/it preterite (-ó): “it arrived”. Tarde = late (temprano = early), and otra vez — literally “another time” — is the everyday way to say “again”.",
      },
      {
        type: "choice",
        instruction: "Choose the correct form.",
        prompt: "¿Qué ___ tú el fin de semana pasado?",
        options: ["hiciste", "hizo", "haces", "hacías"],
        correct: 0,
        explain: "With tú in the past, hacer becomes hiciste: ¿Qué hiciste? = “What did you do?” Hizo is the él/ella form (note the c→z spelling change), and haces is present tense.",
      },
      {
        type: "typing",
        prompt: "We went to the beach yesterday.",
        answer: "Fuimos a la playa ayer",
        alt: ["Ayer fuimos a la playa"],
        explain: "Fuimos = “we went”, from ir's irregular preterite (fui, fuiste, fue, fuimos, fueron). Ayer can open or close the sentence — both orders are natural Spanish.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Last night I ate too much.",
        answer: ["Anoche", "comí", "demasiado"],
        extra: ["comió", "ayer", "mucho", "comida"],
        explain: "Comí (-í) is the yo preterite of comer; comió would be someone else. Demasiado = “too much” — stronger than mucho, which is just “a lot”.",
      },
      {
        type: "listen",
        text: "Mi hermano no vino a la fiesta.",
        answer: ["Mi", "hermano", "no", "vino", "a", "la", "fiesta"],
        extra: ["fue", "hermana", "cena"],
        translation: "My brother didn't come to the party.",
        explain: "Vino here is venir (to come) in the preterite — vine, viniste, vino… Yes, it's spelled like vino “wine”; context decides. Negation is simply no before the verb.",
      },
      {
        type: "fill",
        sentence: "La semana pasada ___ mucho en las montañas.",
        hint: "llover — it rained",
        options: ["llovió", "llueve", "llovía", "lloverá"],
        correct: 0,
        translation: "Last week it rained a lot in the mountains.",
        explain: "Weather verbs only use the it-form: llover → llovió, “it rained” (completed event, so preterite). Llueve = it rains/is raining; llovía = it was raining; lloverá = it will rain.",
      },
      {
        type: "choice",
        instruction: "What does this mean?",
        prompt: "Perdí las llaves y no pude entrar.",
        options: [
          "I lost my keys and couldn't get in.",
          "I found my keys and went in.",
          "I lose my keys and can't get in.",
        ],
        correct: 0,
        explain: "Perdí = “I lost” (perder), and pude is poder's irregular preterite — no pude entrar, “I couldn't get in”. In the preterite, no pude implies I tried and failed.",
      },
    ],
  },

  /* ---------------------------------------------------------
     Lesson 3 — At the restaurant
     --------------------------------------------------------- */
  {
    id: "restaurante",
    xpToUnlock: 250,
    title: "At the restaurant",
    subtitle: "Ordering · polite requests",
    icon: "🥘",
    tip: "Politeness in Spanish restaurants runs on two tools: QUISIERA (“I would like” — a softened form of quiero) and the usted form when addressing staff — ¿Me trae…? (“Could you bring me…?”) literally asks “do you bring me?”, and it's perfectly polite. You'll also want la cuenta (the check) and la propina (the tip).",
    questions: [
      {
        type: "choice",
        instruction: "What does this mean?",
        prompt: "Quisiera una mesa para dos, por favor.",
        options: [
          "I would like a table for two, please.",
          "I want two tables, please.",
          "We reserved a table for two.",
        ],
        correct: 0,
        explain: "Quisiera is the polite “I would like” — same verb as quiero (querer) but softened, like English “I'd like” vs. “I want”. Para dos = for two people.",
      },
      {
        type: "match",
        pairs: [
          ["la cuenta", "the check"],
          ["la propina", "the tip"],
          ["el plato fuerte", "the main course"],
          ["los cubiertos", "the silverware"],
          ["la bebida", "the drink"],
        ],
        explain: "Core restaurant kit: la cuenta is what you ask for at the end, la propina is what you leave on it. El plato fuerte — literally “the strong dish” — is the main course.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Can you bring me the menu, please?",
        answer: ["¿Me", "trae", "el", "menú,", "por", "favor?"],
        extra: ["traes", "la", "cuenta,", "gracias?"],
        explain: "¿Me trae…? uses the usted form (trae, not traes) — the polite way to address a waiter. The me in front is “to me”: literally “do you bring me the menu?”",
      },
      {
        type: "listen",
        text: "¿Qué me recomienda hoy?",
        answer: ["¿Qué", "me", "recomienda", "hoy?"],
        extra: ["recomiendas", "quiere", "ahora?"],
        translation: "What do you recommend today?",
        explain: "Recomienda is the usted form of recomendar (an e→ie stem-changer). Using it — instead of tú's recomiendas — keeps things courteous with restaurant staff.",
      },
      {
        type: "fill",
        sentence: "Para mí, el pescado, y para ella, ___ ensalada.",
        hint: "una or un?",
        options: ["una", "un", "unos", "el"],
        correct: 0,
        translation: "For me, the fish, and for her, a salad.",
        explain: "Ensalada is feminine, so it takes una. “Para mí… para ella…” is the standard way to order for a table: “for me…, for her…”. (Mí with an accent = me; mi without = my.)",
      },
      {
        type: "choice",
        instruction: "The waiter asks: «¿Algo más?» — What are they asking?",
        prompt: "¿Algo más?",
        options: [
          "Anything else?",
          "Something to drink?",
          "Was everything okay?",
        ],
        correct: 0,
        explain: "Algo = something/anything, más = more — so ¿Algo más? is the universal “Anything else?”. A handy reply: “No, nada más, gracias” — nothing else, thanks.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "La sopa está demasiado salada.",
        answer: ["The", "soup", "is", "too", "salty"],
        extra: ["very", "sweet", "salad", "was"],
        explain: "ESTÁ salada — estar, because the saltiness is the state of this particular soup. Demasiado = “too” (excess), stronger than muy (“very”). Watch the false friend: salada = salty, not salad (ensalada).",
      },
      {
        type: "fill",
        sentence: "¿Nos ___ la cuenta cuando pueda?",
        hint: "traer — usted",
        options: ["trae", "traes", "traigo", "traen"],
        correct: 0,
        translation: "Could you bring us the check when you get a chance?",
        explain: "Same polite pattern as ¿Me trae…?, but nos = “to us”. Trae is the usted form; traes would be informal tú. “Cuando pueda” — when you can — softens it further.",
      },
      {
        type: "listen",
        text: "Soy alérgico a los mariscos.",
        answer: ["Soy", "alérgico", "a", "los", "mariscos"],
        extra: ["las", "nueces", "estoy"],
        translation: "I'm allergic to shellfish.",
        explain: "Allergies are treated as a lasting trait, so SER: soy alérgico/alérgica (match your gender). The allergen takes a + article: a los mariscos, a las nueces (nuts).",
      },
      {
        type: "typing",
        prompt: "I would like a coffee, please.",
        answer: "Quisiera un café, por favor",
        alt: ["Quisiera un cafe por favor"],
        explain: "Quisiera + noun is the all-purpose polite order: Quisiera un café. It works for anything on the menu — quisiera la sopa, quisiera una mesa…",
      },
      {
        type: "choice",
        instruction: "Choose the most polite way to order.",
        prompt: "You want the chicken. What do you say?",
        options: [
          "Quisiera el pollo, por favor.",
          "Dame pollo.",
          "Yo pollo.",
        ],
        correct: 0,
        explain: "Quisiera… por favor is restaurant-polite. “Dame pollo” (give me chicken) is a blunt command — fine with close friends, brusque with a waiter. “Yo pollo” isn't a sentence, though servers will smile and understand.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Is the tip included?",
        answer: ["¿Está", "incluida", "la", "propina?"],
        extra: ["cuenta?", "incluido", "Es", "el"],
        explain: "Estar + past participle describes a state: está incluida. The participle agrees with propina (feminine) — incluida, not incluido. Worth asking: in Spain service is usually included; in Latin America often not.",
      },
    ],
  },

  /* ---------------------------------------------------------
     Lesson 4 — Travel & directions
     --------------------------------------------------------- */
  {
    id: "viaje",
    xpToUnlock: 400,
    title: "Getting around",
    subtitle: "Travel · directions · transport",
    icon: "🧭",
    tip: "Directions come as polite commands: siga derecho (keep going straight), doble a la izquierda/derecha (turn left/right). Distances are counted in cuadras (blocks) in Latin America. For “how do I get to…?” use ¿Cómo llego a…?, and remember location is always ESTAR: ¿Dónde está…?",
    questions: [
      {
        type: "choice",
        instruction: "What does this mean?",
        prompt: "Siga derecho y doble a la izquierda en el semáforo.",
        options: [
          "Go straight and turn left at the traffic light.",
          "Turn right and stop at the traffic light.",
          "Go back and turn left at the corner.",
        ],
        correct: 0,
        explain: "Siga and doble are polite (usted) commands from seguir and doblar. Tricky pair: derecho = straight ahead, but derecha = right. A la izquierda = to the left; el semáforo = the traffic light.",
      },
      {
        type: "match",
        pairs: [
          ["la esquina", "the corner"],
          ["la parada", "the (bus) stop"],
          ["el andén", "the platform"],
          ["la maleta", "the suitcase"],
          ["el vuelo", "the flight"],
        ],
        explain: "Transit vocabulary: la parada is where you wait for the bus, el andén is where you wait for the train. La esquina (corner) is the unit of street directions everywhere.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "How do I get to the train station?",
        answer: ["¿Cómo", "llego", "a", "la", "estación", "de", "tren?"],
        extra: ["voy", "el", "aeropuerto?", "llegas"],
        explain: "¿Cómo llego a…? — literally “how do I arrive at…?” — is the set phrase for asking directions. Compound nouns flip order in Spanish: “train station” becomes estación DE tren.",
      },
      {
        type: "listen",
        text: "El museo está a dos cuadras de aquí.",
        answer: ["El", "museo", "está", "a", "dos", "cuadras", "de", "aquí"],
        extra: ["tres", "calles", "cerca"],
        translation: "The museum is two blocks from here.",
        explain: "Location always takes ESTAR: el museo está… Distance uses the pattern a + number + unit: a dos cuadras (two blocks away), a diez minutos (ten minutes away).",
      },
      {
        type: "fill",
        sentence: "¿A qué hora ___ el próximo autobús?",
        hint: "salir — it",
        options: ["sale", "salen", "salgo", "salió"],
        correct: 0,
        translation: "What time does the next bus leave?",
        explain: "The bus is the subject, so third person singular: sale. Salen would be plural buses, salgo is “I leave”, and salió is past. Departures and schedules run on salir/llegar.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Perdimos el vuelo por el tráfico.",
        answer: ["We", "missed", "the", "flight", "because", "of", "the", "traffic"],
        extra: ["lost", "train", "missed,", "for"],
        explain: "Perder does double duty: losing things AND missing transport — perdimos el vuelo = we missed the flight. Por here gives the cause: “because of the traffic”.",
      },
      {
        type: "choice",
        instruction: "You need a round-trip ticket. What do you ask for?",
        prompt: "At the ticket window…",
        options: [
          "Un boleto de ida y vuelta, por favor.",
          "Un boleto de ida, por favor.",
          "Una vuelta en la ciudad, por favor.",
        ],
        correct: 0,
        explain: "Ida y vuelta — literally “going and return” — is round trip. De ida alone is one-way. (In Spain you'll hear billete instead of boleto; una vuelta by itself is just “a stroll”.)",
      },
      {
        type: "fill",
        sentence: "Está lejos; es mejor ___ un taxi.",
        hint: "infinitive",
        options: ["tomar", "toma", "tomamos", "tomé"],
        correct: 0,
        translation: "It's far; it's better to take a taxi.",
        explain: "After impersonal phrases like es mejor (it's better), the verb stays in the infinitive: es mejor tomar. Tomar covers taking transport — tomar un taxi, tomar el bus.",
      },
      {
        type: "listen",
        text: "¿Dónde puedo cambiar dinero?",
        answer: ["¿Dónde", "puedo", "cambiar", "dinero?"],
        extra: ["comprar", "cuándo", "puedes"],
        translation: "Where can I exchange money?",
        explain: "¿Dónde puedo + infinitive? is the traveler's Swiss Army knife: ¿Dónde puedo cambiar dinero / comprar boletos / encontrar un taxi? Cambiar = to change/exchange.",
      },
      {
        type: "typing",
        prompt: "Where is the train station?",
        answer: "¿Dónde está la estación de tren?",
        alt: ["Donde esta la estacion de tren"],
        explain: "Location = ESTAR, always: ¿Dónde está…? Even if you drop the accents and opening ¿ while typing, the pattern is the thing: dónde está + place.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "We arrived at the hotel at midnight.",
        answer: ["Llegamos", "al", "hotel", "a", "medianoche"],
        extra: ["mediodía", "en", "Llegaron", "la"],
        explain: "Llegar a = to arrive at; a + el contracts to al. For -ar verbs, nosotros looks the same in present and preterite — llegamos — so ayer/anoche does the time-telling. Medianoche = midnight; mediodía = noon.",
      },
      {
        type: "choice",
        instruction: "What does this mean?",
        prompt: "El vuelo está retrasado una hora.",
        options: [
          "The flight is delayed an hour.",
          "The flight leaves in an hour.",
          "The flight was canceled an hour ago.",
        ],
        correct: 0,
        explain: "Está retrasado — estar + participle for a current state: “is delayed”. Retrasado comes from tarde-family words (retraso = a delay). Canceled would be cancelado.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "¿Me puede ayudar con las maletas?",
        answer: ["Can", "you", "help", "me", "with", "the", "suitcases?"],
        extra: ["Could", "carry", "my", "bags?"],
        explain: "¿Me puede ayudar…? = “Can you help me…?” in the polite usted form. The me lands before the conjugated verb — Spanish object pronouns go in front: me puede ayudar, literally “me you-can help”.",
      },
    ],
  },

  /* ---------------------------------------------------------
     Lesson 5 — Plans & the near future
     --------------------------------------------------------- */
  {
    id: "planes",
    xpToUnlock: 550,
    title: "Making plans",
    subtitle: "ir a + infinitive · invitations",
    icon: "🗓️",
    tip: "The easiest future in Spanish needs no new tense: IR A + infinitive, exactly like English “going to”. Conjugate only ir — voy, vas, va, vamos, van — and leave the main verb alone: voy a viajar (I'm going to travel), vamos a cenar (we're going to have dinner). Perfect for invitations and plans.",
    questions: [
      {
        type: "choice",
        instruction: "What does this mean?",
        prompt: "Voy a visitar a mis primos este verano.",
        options: [
          "I'm going to visit my cousins this summer.",
          "I visited my cousins last summer.",
          "I want to live with my cousins this summer.",
        ],
        correct: 0,
        explain: "Voy a visitar = “I'm going to visit” (ir a + infinitive). The second a is the “personal a” — required before people as objects: visitar A mis primos. Este verano = this summer.",
      },
      {
        type: "fill",
        sentence: "Mañana ___ a llover, según el pronóstico.",
        hint: "ir — it",
        options: ["va", "voy", "vas", "van"],
        correct: 0,
        translation: "Tomorrow it's going to rain, according to the forecast.",
        explain: "Weather is third person singular: va a llover, “it's going to rain”. Ir a + infinitive works for any subject — even “it”. Según = according to.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "We are going to travel to Mexico in December.",
        answer: ["Vamos", "a", "viajar", "a", "México", "en", "diciembre"],
        extra: ["Van", "el", "vivir", "noviembre"],
        explain: "Vamos a viajar = “we're going to travel”. Note the two different a's: one belongs to the ir a pattern, the other means “to (a place)” — a México. Months are lowercase and take en: en diciembre.",
      },
      {
        type: "listen",
        text: "¿Qué vas a hacer este fin de semana?",
        answer: ["¿Qué", "vas", "a", "hacer", "este", "fin", "de", "semana?"],
        extra: ["semana,", "va", "el"],
        translation: "What are you going to do this weekend?",
        explain: "¿Qué vas a hacer? is the go-to “what are you up to?” question. Fin de semana — literally “end of week” — is the weekend; este fin de semana = this weekend.",
      },
      {
        type: "match",
        pairs: [
          ["la cita", "the appointment / date"],
          ["el plan", "the plan"],
          ["la reunión", "the meeting"],
          ["el cumpleaños", "the birthday"],
          ["la boda", "the wedding"],
        ],
        explain: "Calendar words: la cita covers both appointments and romantic dates — context decides. El cumpleaños (birthday) is singular despite the -s: literally “completes-years”.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Vamos a quedarnos en casa esta noche.",
        answer: ["We", "are", "going", "to", "stay", "home", "tonight"],
        extra: ["leave", "went", "house", "stayed"],
        explain: "Quedarse = “to stay” (reflexive). With ir a, the pronoun sticks to the infinitive and matches the subject: vamos a quedarNOS — “we're going to stay”. En casa = at home.",
      },
      {
        type: "choice",
        instruction: "A friend invites you out but you can't go. What do you say?",
        prompt: "«¿Vienes al concierto el jueves?»",
        options: [
          "Lo siento, no puedo. Tengo que trabajar.",
          "Sí, no quiero ir.",
          "Gracias, fui ayer contigo.",
        ],
        correct: 0,
        explain: "The polite decline formula: lo siento (I'm sorry) + no puedo (I can't) + a reason with tener que — tengo que trabajar, “I have to work”. The other options contradict themselves.",
      },
      {
        type: "fill",
        sentence: "¿___ a venir tus amigos a la cena?",
        hint: "ir — ellos",
        options: ["Van", "Va", "Vas", "Vamos"],
        correct: 0,
        translation: "Are your friends going to come to the dinner?",
        explain: "The subject is tus amigos (they), so ir takes van: ¿Van a venir…? Spanish questions can put the verb first — no “do/are” helper needed, just intonation and the ¿ ?",
      },
      {
        type: "listen",
        text: "Voy a empezar un trabajo nuevo en marzo.",
        answer: ["Voy", "a", "empezar", "un", "trabajo", "nuevo", "en", "marzo"],
        extra: ["mayo", "terminar", "el"],
        translation: "I'm going to start a new job in March.",
        explain: "Empezar = to start (its opposite, terminar, was a distractor). Adjectives usually follow the noun: un trabajo nuevo. Months take en and stay lowercase: en marzo.",
      },
      {
        type: "typing",
        prompt: "I am going to study tonight.",
        answer: "Voy a estudiar esta noche",
        alt: ["Esta noche voy a estudiar"],
        explain: "The full pattern from scratch: voy (ir, yo) + a + estudiar (bare infinitive). “Tonight” is esta noche — and like most time phrases it can also move to the front of the sentence.",
      },
      {
        type: "choice",
        instruction: "What does this mean?",
        prompt: "Tengo ganas de aprender a bailar salsa.",
        options: [
          "I feel like learning to dance salsa.",
          "I won a salsa dancing contest.",
          "I have to teach a salsa class.",
        ],
        correct: 0,
        explain: "Tener ganas de + infinitive = “to feel like doing something” — a very common idiom (ganas ≈ desire). Aprender A bailar: aprender links to a following verb with a.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "See you tomorrow at the café.",
        answer: ["Nos", "vemos", "mañana", "en", "el", "café"],
        extra: ["la", "Te", "veo,", "hoy"],
        explain: "Nos vemos — “we'll see each other” — is the standard friendly goodbye when there's a next time: nos vemos mañana, nos vemos el lunes. “At” a place is usually en: en el café.",
      },
    ],
  },
];
