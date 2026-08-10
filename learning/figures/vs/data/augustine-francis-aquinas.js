/* Comparison-only page. Every vs/ page reads a global `COMPARISON` object:
   title/subtitle, a comparison table, a closing synthesis paragraph, and
   links back to the full solo profiles (never duplicate a person's
   timeline/principles/impact here — those live once, on their own page). */

var COMPARISON = {

    slug: "augustine-francis-aquinas",
    title: `Saint Augustine of Hippo vs. Saint Francis of Assisi vs. Saint Thomas Aquinas`,
    subtitle: `A comparative breakdown covering timeline, theology, and impact on the Catholic Church and Christian thought.`,

    links: [
        { href: "../augustine.html", label: "Full profile: Augustine of Hippo" },
        { href: "../francis.html", label: "Full profile: Francis of Assisi" },
        { href: "../aquinas.html", label: "Full profile: Thomas Aquinas" }
    ],

    comparisonColumns: [
        { key: "dimension", label: "Dimension" },
        { key: "augustine", label: "Augustine of Hippo" },
        { key: "francis", label: "Francis of Assisi" },
        { key: "aquinas", label: "Thomas Aquinas" }
    ],

    comparisonRows: [
        { dimension: `Era`, augustine: `Late Roman Empire (4th–5th c.)`, francis: `High Middle Ages (12th–13th c.)`, aquinas: `High Middle Ages (13th c.)` },
        { dimension: `Primary mode`, augustine: `Systematic theology, philosophy`, francis: `Lived example, spirituality, preaching`, aquinas: `Systematic philosophy-theology synthesis` },
        { dimension: `Philosophical lens`, augustine: `Platonism / Neoplatonism`, francis: `Not philosophically systematic`, aquinas: `Aristotelianism` },
        { dimension: `Core contribution`, augustine: `Doctrine of grace, sin, Trinity, political theology`, francis: `Poverty, imitation of Christ, creation spirituality`, aquinas: `Faith/reason synthesis, natural law, Five Ways` },
        { dimension: `Church title`, augustine: `Doctor of the Church`, francis: `Patron saint of animals/ecology; founder of a major order`, aquinas: `Doctor of the Church ("Angelic Doctor")` },
        { dimension: `Order founded/joined`, augustine: `None (Augustinian order later named after him)`, francis: `Founded the Franciscans (Friars Minor)`, aquinas: `Joined the Dominicans (Order of Preachers)` },
        { dimension: `Legacy in Reformation`, augustine: `Cited heavily by both Catholics and Protestants`, francis: `Minimal direct Reformation influence`, aquinas: `Largely a Catholic-specific legacy; less claimed by Reformers` },
        { dimension: `Modern echo`, augustine: `Catholic doctrine, political theology`, francis: `Laudato Si', environmental theology, Pope Francis's namesake`, aquinas: `Catholic natural law arguments, seminary curriculum, bioethics` },
        { dimension: `Style`, augustine: `Intellectual, introspective (Confessions is arguably the first Western autobiography)`, francis: `Simple, poetic, embodied (Canticle of the Sun)`, aquinas: `Rigorous, systematic, scholastic (Summa Theologiae)` }
    ],

    closingArc: `A useful way to see the arc: Augustine (4th–5th c.) establishes the theological grammar of grace, sin, and the two cities. Francis (12th–13th c.) reacts against a wealthy, institutionalized Church by re-embodying the Gospel in radical poverty and lived simplicity. Aquinas (13th c., overlapping with Francis) takes the opposite tack from Francis — not embodiment but intellectual synthesis — fusing newly rediscovered Aristotelian philosophy with Augustinian theology to produce the Church's most comprehensive systematic framework. Notably, Aquinas was himself a Dominican, a mendicant order founded in direct competition/parallel with the Franciscans, so he and Francis's spiritual heirs were contemporaries shaping the 13th-century Church from different angles — one through poverty and preaching, the other through the university and systematic reason.`
};
