/* Topic: Catholic Theology of Religions — Salvation, Grace, and the Fate of
   the Non-Evangelized. Every theology topic page reads a global `TOPIC`
   object with this same shape — copy this file's structure for the next one. */

var TOPIC = {

    slug: "salvation-non-evangelized",
    title: `Catholic Theology of Religions`,
    subtitle: `Salvation, Grace, and the Fate of the Non-Evangelized`,
    intro: `A history and reference document tracing the Catholic Church's evolving position on whether, and how, people outside the visible Church can be saved — with a glossary of Church document types, a version history, a timeline, key figures, and references.`,

    terms: [
        {
            name: `Theology of Religions`,
            def: `The broad theological subfield asking how Christianity relates to, and evaluates, other religious traditions.`
        },
        {
            name: `Soteriology`,
            def: `The theology of salvation generally (the mechanics of how anyone is saved).`
        },
        {
            name: `Ecclesiology of Salvation / Extra Ecclesiam Nulla Salus Debates`,
            def: `The specific question of whether formal Church membership is required for salvation.`
        },
        {
            name: `Inclusivism`,
            def: `The position the Catholic Church currently holds: Christ and the Church are the normative, intended means of salvation, but grace can reach people outside the Church's visible boundaries through no fault of their own. This sits between Exclusivism (only explicit Christian faith saves) and Pluralism (all religions are roughly equal paths to God, a position the Church rejects).`
        }
    ],

    cleanPhrase: `If you want one clean phrase for this whole line of thinking: "Catholic soteriological inclusivism" — or simply, "the development of doctrine on salvation outside the Church."`,

    versions: [
        {
            version: `v1.0 — Early Rigorism`, era: `3rd century`,
            position: `Formal Church membership treated as necessary for salvation, largely in the context of schism (addressing Christians who left the Church), not other religions`,
            marker: `Cyprian of Carthage coins "Extra Ecclesiam Nulla Salus" (c. 251 AD)`
        },
        {
            version: `v1.5 — Augustinian Framing`, era: `4th–5th century`,
            position: `Humanity as a "mass of the damned" (massa damnata); salvation by grace and Church sacraments; strong emphasis on the necessity of the visible Church and baptism`,
            marker: `Augustine's anti-Pelagian writings, c. 396–430 AD`
        },
        {
            version: `v2.0 — Medieval Hardening`, era: `13th–15th century`,
            position: `Strict, near-absolute formulation: explicit formal membership required for salvation, stated in the most severe terms of the whole tradition`,
            marker: `Boniface VIII's Unam Sanctam (1302); Council of Florence's Cantate Domino (1442)`
        },
        {
            version: `v3.0 — Age of Discovery Crisis`, era: `16th–17th century`,
            position: `Encounter with populations in the Americas and Asia who never had any chance to hear the Gospel forces theologians to soften the strict formula; early invincible ignorance reasoning develops`,
            marker: `Francisco de Vitoria and the School of Salamanca; later Robert Bellarmine's writings distinguishing formal membership from a "desire" for it`
        },
        {
            version: `v4.0 — Invincible Ignorance Formalized`, era: `19th century`,
            position: `The Church officially states that those in invincible ignorance of the Gospel, who sincerely seek God and follow their conscience, are not culpable and can be saved`,
            marker: `Pius IX, Singulari Quadam (1854) and Quanto Conficiamur Moerore (1863)`
        },
        {
            version: `v5.0 — Vatican II Inclusivism`, era: `1962–1965`,
            position: `Full, positive articulation: sincere seekers of God outside the Church, including explicitly named non-Christian religions, can attain salvation; Christ and the Church remain the "ordinary means," not the only possible means`,
            marker: `Lumen Gentium §16 (1964); Nostra Aetate (1965), which names Buddhism, Hinduism, Islam, and Judaism specifically`
        },
        {
            version: `v5.5 — Missionary Reaffirmation`, era: `1990`,
            position: `Explicitly answers the "why evangelize then?" objection; affirms that the possibility of salvation outside the Church does not reduce the urgency or necessity of mission work`,
            marker: `John Paul II, Redemptoris Missio (1990)`
        },
        {
            version: `v6.0 — Doctrinal Guardrails / Clarification`, era: `2000`,
            position: `A corrective, cautionary document reasserting that Christ and the Catholic Church retain unique, unrepeatable significance — pushing back against a drift toward relativism/pluralism among some post-Vatican II theologians`,
            marker: `Cardinal Ratzinger (CDF), Dominus Iesus (2000)`
        },
        {
            version: `v7.0 — Current Synthesis`, era: `1992–present`,
            position: `The standing, official teaching: single predestination of the elect (not double), grace as necessary but requiring free cooperation, invincible ignorance as a real exception, Church and sacraments as the "ordinary" (not exclusive) means, mission as an act of obedience/love rather than fire-insurance calculus`,
            marker: `Catechism of the Catholic Church (1992, editio typica 1997), §§846–848, 600, 1037`
        }
    ],

    versionColumns: [
        { key: "version", label: "Version" },
        { key: "era", label: "Era" },
        { key: "position", label: "Position" },
        { key: "marker", label: "Key Marker" }
    ],

    timeline: [
        { date: `c. 251 AD`, event: `Cyprian of Carthage writes "Extra Ecclesiam Nulla Salus" in the context of schism/heresy, not other world religions` },
        { date: `396–430 AD`, event: `Augustine of Hippo develops doctrines of grace, original sin, and predestination against Pelagius; frames unredeemed humanity as a massa damnata` },
        { date: `1215`, event: `Fourth Lateran Council includes language affirming one universal Church of the faithful outside of which no one is saved` },
        { date: `1302`, event: `Pope Boniface VIII issues Unam Sanctam, stating subjection to the Roman Pontiff is necessary for salvation — the most absolute historical formulation` },
        { date: `1442`, event: `Council of Florence issues Cantate Domino, restating the strict formula in explicit terms, including regarding pagans, Jews, heretics, and schismatics` },
        { date: `1500s`, event: `Spanish encounter with indigenous peoples of the Americas forces theological reckoning; Francisco de Vitoria and the School of Salamanca begin developing natural law and just-treatment arguments that indirectly soften strict exclusivism` },
        { date: `1586–1621 (approx.)`, event: `Robert Bellarmine's theological writings distinguish being a member of the Church "in voto" (by desire) from formal, visible membership — an early version of what becomes "baptism of desire"` },
        { date: `1854`, event: `Pope Pius IX, Singulari Quadam: begins articulating that those in invincible ignorance are not to be held guilty in God's eyes` },
        { date: `1863`, event: `Pope Pius IX, Quanto Conficiamur Moerore: reaffirms that those in invincible ignorance who live an upright life per their conscience are not necessarily excluded from eternal salvation` },
        { date: `1949`, event: `The "Boston Heresy Case" — Fr. Leonard Feeney is excommunicated for teaching an extremely rigid, literal reading of Extra Ecclesiam Nulla Salus, rejecting invincible ignorance entirely; the Holy Office issues a formal letter (Suprema Haec Sacra, 1949) correcting him and clarifying the Church's actual position` },
        { date: `1962–1965`, event: `Second Vatican Council convened by John XXIII, concluded/promulgated under Paul VI` },
        { date: `1964`, event: `Lumen Gentium promulgated — §16 addresses non-Christians and invincible ignorance directly and positively` },
        { date: `1965`, event: `Nostra Aetate promulgated — the Church's declaration on relations with non-Christian religions, explicitly naming Hinduism, Buddhism, Islam, and Judaism with respect` },
        { date: `1965`, event: `Ad Gentes (Decree on the Church's Missionary Activity) promulgated — frames the theological rationale for continuing mission work post-Vatican II` },
        { date: `1984 (approx.)`, event: `Karl Rahner's "anonymous Christian" theory becomes widely discussed (developed across his works from the 1960s–80s) — influential but never adopted as official doctrine, and criticized by some theologians including Hans Urs von Balthasar` },
        { date: `1990`, event: `John Paul II issues Redemptoris Missio, explicitly defending the continued necessity and urgency of missionary evangelization` },
        { date: `1992`, event: `Catechism of the Catholic Church promulgated (Apostolic Constitution Fidei Depositum), consolidating the current synthesis` },
        { date: `2000`, event: `Cardinal Joseph Ratzinger (as head of the CDF) issues Dominus Iesus, reasserting the uniqueness of Christ and the Church against theological drift toward religious pluralism` },
        { date: `2013–present`, event: `Pope Francis continues emphasizing interreligious dialogue (e.g., the 2019 Document on Human Fraternity, signed jointly with the Grand Imam of Al-Azhar) without altering the doctrinal substance established at Vatican II` }
    ],

    keyPeopleSlugs: [
        "cyprian", "augustine", "boniface-viii", "vitoria", "bellarmine",
        "pius-ix", "feeney", "vatican-ii-popes", "rahner", "balthasar",
        "john-paul-ii", "ratzinger", "francis"
    ],

    references: [
        `Catechism of the Catholic Church, §§598–600, 846–848, 1037 (available at vatican.va)`,
        `Second Vatican Council, Lumen Gentium (1964), especially §16`,
        `Second Vatican Council, Nostra Aetate (1965)`,
        `Second Vatican Council, Ad Gentes (1965)`,
        `Pope Pius IX, Singulari Quadam (1854) and Quanto Conficiamur Moerore (1863)`,
        `Holy Office, Suprema Haec Sacra (1949) — the letter correcting Fr. Feeney`,
        `Pope John Paul II, Redemptoris Missio (1990)`,
        `Congregation for the Doctrine of the Faith, Dominus Iesus (2000)`,
        `Augustine, Confessions and anti-Pelagian writings (e.g., On Nature and Grace)`,
        `Karl Rahner, Theological Investigations (various volumes, for the "anonymous Christian" concept)`
    ],

    referencesNote: `These are real, identifiable documents — nothing here is fabricated. Verify exact section numbers and dates against vatican.va or the Catechism directly before citing formally; this was compiled from memory, not the live text.`,

    summary: `The Catholic Church currently holds a position best described as inclusivism: Christ and the Catholic Church remain the full, intended, "ordinary" means of salvation, and evangelization remains a binding command rooted in obedience and love rather than a rescue calculation. At the same time, someone who never had a genuine, culpable opportunity to encounter and freely reject the Gospel — and who sincerely seeks God and lives according to their conscience — is not, by that fact alone, excluded from salvation. This is distinct from religious pluralism (which the Church rejects) and from the older, stricter exclusivism that dominated the medieval Church. The tension — "if they can be saved anyway, why evangelize" — is a real and openly acknowledged one inside Catholic theology, addressed most directly in Redemptoris Missio, and not fully resolved to universal theological satisfaction even today.`
};
