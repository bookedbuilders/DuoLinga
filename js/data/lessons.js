/* ============================================================
   DuoLinga lesson data
   ------------------------------------------------------------
   To add a lesson: push a new object onto LESSONS with a unique
   `id`, and 10–15 questions. Question types:

   choice    — multiple choice.
               { type, instruction, prompt, spoken?, options[], correct }
               `spoken: true` reads `prompt` aloud with Spanish TTS.
   fill      — pick the word that completes the sentence.
               { type, sentence (use ___ for the blank), hint?,
                 options[], correct, translation }
   translate — build the translation from a word bank.
               { type, direction: 'en-es'|'es-en', prompt,
                 answer[] (tokens in order), alt?[][] (accepted
                 alternatives), extra[] (distractor tokens) }
   listen    — tap the Spanish words you hear.
               { type, text (spoken + target), answer[], extra[],
                 translation }
   match     — match the pairs. { type, pairs: [[es, en], ...] }
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
      },
      {
        type: "fill",
        sentence: "Mi hermana ___ enfermera en un hospital grande.",
        hint: "ser or estar?",
        options: ["es", "está", "son", "estás"],
        correct: 0,
        translation: "My sister is a nurse in a big hospital.",
      },
      {
        type: "fill",
        sentence: "Los niños ___ cansados después de la escuela.",
        hint: "ser or estar?",
        options: ["están", "son", "es", "está"],
        correct: 0,
        translation: "The kids are tired after school.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "We eat dinner at nine at night.",
        answer: ["Cenamos", "a", "las", "nueve", "de", "la", "noche"],
        extra: ["mañana", "comemos", "nosotros"],
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
      },
      {
        type: "choice",
        instruction: "Choose the correct question word.",
        prompt: "¿___ cuesta el boleto de autobús?",
        options: ["Cuánto", "Cuándo", "Cómo", "Dónde"],
        correct: 0,
      },
      {
        type: "listen",
        text: "¿A qué hora sales del trabajo?",
        answer: ["¿A", "qué", "hora", "sales", "del", "trabajo?"],
        extra: ["casa", "llegas", "cuándo"],
        translation: "What time do you leave work?",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Mis padres viven cerca de la playa.",
        answer: ["My", "parents", "live", "near", "the", "beach"],
        extra: ["far", "from", "lived", "house"],
      },
      {
        type: "fill",
        sentence: "Yo no ___ cocinar muy bien, pero me gusta intentarlo.",
        hint: "saber or conocer?",
        options: ["sé", "conozco", "sabo", "sabes"],
        correct: 0,
        translation: "I don't know how to cook very well, but I like trying.",
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
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Do you want to go to the movies with me?",
        answer: ["¿Quieres", "ir", "al", "cine", "conmigo?"],
        extra: ["contigo", "vamos", "quiero", "teatro"],
      },
      {
        type: "listen",
        text: "Hace mucho calor hoy.",
        answer: ["Hace", "mucho", "calor", "hoy"],
        extra: ["frío", "ayer", "tiempo"],
        translation: "It's very hot today.",
      },
    ],
  },

  /* ---------------------------------------------------------
     Lesson 2 — The preterite (simple past)
     --------------------------------------------------------- */
  {
    id: "pasado",
    title: "Talking about the past",
    subtitle: "Preterite · regular & key irregulars",
    icon: "⏰",
    questions: [
      {
        type: "fill",
        sentence: "Ayer ___ al mercado con mi abuela.",
        hint: "ir — yo",
        options: ["fui", "fue", "iba", "voy"],
        correct: 0,
        translation: "Yesterday I went to the market with my grandma.",
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
      },
      {
        type: "fill",
        sentence: "Ellos ___ una película muy divertida el sábado.",
        hint: "ver — ellos",
        options: ["vieron", "veían", "ven", "vimos"],
        correct: 0,
        translation: "They watched a very funny movie on Saturday.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "I bought a gift for my friend.",
        answer: ["Compré", "un", "regalo", "para", "mi", "amigo"],
        extra: ["compró", "por", "amiga", "el"],
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
      },
      {
        type: "listen",
        text: "¿Dónde compraste esos zapatos?",
        answer: ["¿Dónde", "compraste", "esos", "zapatos?"],
        extra: ["cuándo", "compró", "estos"],
        translation: "Where did you buy those shoes?",
      },
      {
        type: "fill",
        sentence: "Nosotros ___ que salir temprano esta mañana.",
        hint: "tener — nosotros",
        options: ["tuvimos", "tenemos", "tuvieron", "teníamos"],
        correct: 0,
        translation: "We had to leave early this morning.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "El tren llegó tarde otra vez.",
        answer: ["The", "train", "arrived", "late", "again"],
        extra: ["early", "left", "bus", "arrives"],
      },
      {
        type: "choice",
        instruction: "Choose the correct form.",
        prompt: "¿Qué ___ tú el fin de semana pasado?",
        options: ["hiciste", "hizo", "haces", "hacías"],
        correct: 0,
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Last night I ate too much.",
        answer: ["Anoche", "comí", "demasiado"],
        extra: ["comió", "ayer", "mucho", "comida"],
      },
      {
        type: "listen",
        text: "Mi hermano no vino a la fiesta.",
        answer: ["Mi", "hermano", "no", "vino", "a", "la", "fiesta"],
        extra: ["fue", "hermana", "cena"],
        translation: "My brother didn't come to the party.",
      },
      {
        type: "fill",
        sentence: "La semana pasada ___ mucho en las montañas.",
        hint: "llover — it rained",
        options: ["llovió", "llueve", "llovía", "lloverá"],
        correct: 0,
        translation: "Last week it rained a lot in the mountains.",
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
      },
    ],
  },

  /* ---------------------------------------------------------
     Lesson 3 — At the restaurant
     --------------------------------------------------------- */
  {
    id: "restaurante",
    title: "At the restaurant",
    subtitle: "Ordering · polite requests",
    icon: "🥘",
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
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Can you bring me the menu, please?",
        answer: ["¿Me", "trae", "el", "menú,", "por", "favor?"],
        extra: ["traes", "la", "cuenta,", "gracias?"],
      },
      {
        type: "listen",
        text: "¿Qué me recomienda hoy?",
        answer: ["¿Qué", "me", "recomienda", "hoy?"],
        extra: ["recomiendas", "quiere", "ahora?"],
        translation: "What do you recommend today?",
      },
      {
        type: "fill",
        sentence: "Para mí, el pescado, y para ella, ___ ensalada.",
        hint: "una or un?",
        options: ["una", "un", "unos", "el"],
        correct: 0,
        translation: "For me, the fish, and for her, a salad.",
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
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "La sopa está demasiado salada.",
        answer: ["The", "soup", "is", "too", "salty"],
        extra: ["very", "sweet", "salad", "was"],
      },
      {
        type: "fill",
        sentence: "¿Nos ___ la cuenta cuando pueda?",
        hint: "traer — usted",
        options: ["trae", "traes", "traigo", "traen"],
        correct: 0,
        translation: "Could you bring us the check when you get a chance?",
      },
      {
        type: "listen",
        text: "Soy alérgico a los mariscos.",
        answer: ["Soy", "alérgico", "a", "los", "mariscos"],
        extra: ["las", "nueces", "estoy"],
        translation: "I'm allergic to shellfish.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "The food was delicious.",
        answer: ["La", "comida", "estuvo", "deliciosa"],
        alt: [["La", "comida", "estaba", "deliciosa"]],
        extra: ["estaba", "es", "bebida", "rica"],
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
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Is the tip included?",
        answer: ["¿Está", "incluida", "la", "propina?"],
        extra: ["cuenta?", "incluido", "Es", "el"],
      },
    ],
  },

  /* ---------------------------------------------------------
     Lesson 4 — Travel & directions
     --------------------------------------------------------- */
  {
    id: "viaje",
    title: "Getting around",
    subtitle: "Travel · directions · transport",
    icon: "🧭",
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
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "How do I get to the train station?",
        answer: ["¿Cómo", "llego", "a", "la", "estación", "de", "tren?"],
        extra: ["voy", "el", "aeropuerto?", "llegas"],
      },
      {
        type: "listen",
        text: "El museo está a dos cuadras de aquí.",
        answer: ["El", "museo", "está", "a", "dos", "cuadras", "de", "aquí"],
        extra: ["tres", "calles", "cerca"],
        translation: "The museum is two blocks from here.",
      },
      {
        type: "fill",
        sentence: "¿A qué hora ___ el próximo autobús?",
        hint: "salir — it",
        options: ["sale", "salen", "salgo", "salió"],
        correct: 0,
        translation: "What time does the next bus leave?",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Perdimos el vuelo por el tráfico.",
        answer: ["We", "missed", "the", "flight", "because", "of", "the", "traffic"],
        extra: ["lost", "train", "missed,", "for"],
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
      },
      {
        type: "fill",
        sentence: "Está lejos; es mejor ___ un taxi.",
        hint: "infinitive",
        options: ["tomar", "toma", "tomamos", "tomé"],
        correct: 0,
        translation: "It's far; it's better to take a taxi.",
      },
      {
        type: "listen",
        text: "¿Dónde puedo cambiar dinero?",
        answer: ["¿Dónde", "puedo", "cambiar", "dinero?"],
        extra: ["comprar", "cuándo", "puedes"],
        translation: "Where can I exchange money?",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "We arrived at the hotel at midnight.",
        answer: ["Llegamos", "al", "hotel", "a", "medianoche"],
        extra: ["mediodía", "en", "Llegaron", "la"],
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
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "¿Me puede ayudar con las maletas?",
        answer: ["Can", "you", "help", "me", "with", "the", "suitcases?"],
        extra: ["Could", "carry", "my", "bags?"],
      },
    ],
  },

  /* ---------------------------------------------------------
     Lesson 5 — Plans & the near future
     --------------------------------------------------------- */
  {
    id: "planes",
    title: "Making plans",
    subtitle: "ir a + infinitive · invitations",
    icon: "🗓️",
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
      },
      {
        type: "fill",
        sentence: "Mañana ___ a llover, según el pronóstico.",
        hint: "ir — it",
        options: ["va", "voy", "vas", "van"],
        correct: 0,
        translation: "Tomorrow it's going to rain, according to the forecast.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "We are going to travel to Mexico in December.",
        answer: ["Vamos", "a", "viajar", "a", "México", "en", "diciembre"],
        extra: ["Van", "el", "vivir", "noviembre"],
      },
      {
        type: "listen",
        text: "¿Qué vas a hacer este fin de semana?",
        answer: ["¿Qué", "vas", "a", "hacer", "este", "fin", "de", "semana?"],
        extra: ["semana,", "va", "el"],
        translation: "What are you going to do this weekend?",
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
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Vamos a quedarnos en casa esta noche.",
        answer: ["We", "are", "going", "to", "stay", "home", "tonight"],
        extra: ["leave", "went", "house", "stayed"],
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
      },
      {
        type: "fill",
        sentence: "¿___ a venir tus amigos a la cena?",
        hint: "ir — ellos",
        options: ["Van", "Va", "Vas", "Vamos"],
        correct: 0,
        translation: "Are your friends going to come to the dinner?",
      },
      {
        type: "listen",
        text: "Voy a empezar un trabajo nuevo en marzo.",
        answer: ["Voy", "a", "empezar", "un", "trabajo", "nuevo", "en", "marzo"],
        extra: ["mayo", "terminar", "el"],
        translation: "I'm going to start a new job in March.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Are you going to invite your whole family?",
        answer: ["¿Vas", "a", "invitar", "a", "toda", "tu", "familia?"],
        extra: ["todos", "Van", "mi", "amigos?"],
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
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "See you tomorrow at the café.",
        answer: ["Nos", "vemos", "mañana", "en", "el", "café"],
        extra: ["la", "Te", "veo,", "hoy"],
      },
    ],
  },
];
