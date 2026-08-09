/* Study: Saint Augustine of Hippo vs. Saint Francis of Assisi vs. Saint
   Thomas Aquinas. Every figures study page reads a global `STUDY` object
   with this shape — copy this file's structure for the next one (a single
   person's deep-dive just uses a `people` array of length 1 and omits
   `comparison`). */

var STUDY = {

    slug: "augustine-francis-aquinas",
    title: `Saint Augustine of Hippo vs. Saint Francis of Assisi vs. Saint Thomas Aquinas`,
    subtitle: `A comparative breakdown covering timeline, theology, and impact on the Catholic Church and Christian thought.`,

    people: [
        {
            slug: "augustine",
            name: `Saint Augustine of Hippo`,
            dates: `354–430 AD`,
            timeline: [
                { date: `354`, event: `Born in Thagaste, Roman North Africa (modern Algeria), to a pagan father (Patricius) and Christian mother (Monica)` },
                { date: `370s`, event: `Studies rhetoric in Carthage; lives a self-described dissolute youth; takes a concubine, has a son (Adeodatus)` },
                { date: `373`, event: `Reads Cicero's Hortensius; becomes drawn to philosophy` },
                { date: `373–383`, event: `Adheres to Manichaeism, a dualistic religious philosophy` },
                { date: `384`, event: `Moves to Milan as a professor of rhetoric; encounters Bishop Ambrose` },
                { date: `386`, event: `Famous conversion experience in a Milan garden ("tolle lege" — "take up and read")` },
                { date: `387`, event: `Baptized by Ambrose` },
                { date: `388`, event: `Returns to North Africa` },
                { date: `391`, event: `Ordained a priest in Hippo Regius` },
                { date: `396`, event: `Becomes Bishop of Hippo` },
                { date: `397–400`, event: `Writes Confessions` },
                { date: `410`, event: `Sack of Rome by the Visigoths — triggers the theological crisis that produces City of God` },
                { date: `413–426`, event: `Writes City of God` },
                { date: `411–430`, event: `Engaged in major doctrinal battles: against the Donatists (Church purity/schism), the Pelagians (grace vs. free will), and Manichaeism` },
                { date: `430`, event: `Dies in Hippo as the Vandals besiege the city` }
            ],
            principles: [
                { name: `Original Sin`, def: `Formulated the doctrine that all humanity inherits a fallen, corrupted nature from Adam's sin — foundational to Western Christian anthropology.` },
                { name: `Grace and Free Will`, def: `Against Pelagius, argued humans cannot achieve salvation through will or good works alone; grace is unmerited and essential. This became bedrock Catholic doctrine and later fueled Reformation debates.` },
                { name: `Predestination`, def: `Held that God elects who will be saved — a concept later radicalized by Calvin.` },
                { name: `The Two Cities`, def: `In City of God, distinguished the "City of God" (oriented to eternal, divine love) from the "City of Man" (oriented to self-love and earthly power) — shaping Christian political theology for a millennium.` },
                { name: `Just War Theory`, def: `Articulated early criteria for when war can be morally justified, still referenced in Catholic and secular ethics.` },
                { name: `Trinity`, def: `His De Trinitate was a defining systematic treatment of Trinitarian doctrine in the West.` },
                { name: `Epistemology of Faith`, def: `"Credo ut intelligam" — I believe so that I may understand — placing faith prior to and enabling reason.` }
            ],
            impact: [
                `Named a Doctor of the Church; arguably the single most influential theologian in Western Christianity after Paul.`,
                `His framework on grace, sin, and salvation underlies Catholic sacramental theology (why baptism, penance, and grace-through-the-Church matter).`,
                `Shaped medieval scholasticism — Aquinas engages Augustine constantly, even while diverging via Aristotelian method.`,
                `His City of God shaped centuries of Church–state relations and Christian political thought.`,
                `Ironically, his writings on grace and predestination became a primary textual foundation for the Protestant Reformation: both Martin Luther (an Augustinian friar) and John Calvin drew heavily on Augustine to challenge later Catholic emphasis on merit and works. Augustine is thus claimed as a foundational authority by both Catholic and Reformed traditions.`
            ]
        },
        {
            slug: "francis",
            name: `Saint Francis of Assisi`,
            dates: `1181/1182–1226 AD`,
            timeline: [
                { date: `1181/82`, event: `Born Giovanni di Pietro di Bernardone in Assisi, Italy, to a wealthy cloth merchant` },
                { date: `~1202`, event: `Fights in a war between Assisi and Perugia; taken prisoner for about a year` },
                { date: `1204–1205`, event: `Serious illness and a vision redirect him spiritually` },
                { date: `1205`, event: `Hears a voice from the crucifix at San Damiano: "Rebuild my Church"` },
                { date: `1206`, event: `Public renunciation of his father's wealth; strips off his clothes in the town square` },
                { date: `1208`, event: `Hears the Gospel reading on apostolic poverty (Matthew 10); adopts a life of radical poverty and preaching` },
                { date: `1209`, event: `Founds the Order of Friars Minor (Franciscans); Pope Innocent III gives verbal approval` },
                { date: `1212`, event: `Clare of Assisi joins him, leading to the founding of the Poor Clares` },
                { date: `1219`, event: `Travels to Egypt during the Fifth Crusade; meets Sultan al-Kamil to seek peace and preach — notable for interfaith dialogue rather than combat` },
                { date: `1223`, event: `Rule of the Order formally approved by Pope Honorius III; stages the first known Nativity scene (crèche) at Greccio` },
                { date: `1224`, event: `Receives the stigmata on Mount La Verna — wounds matching Christ's crucifixion` },
                { date: `1225`, event: `Composes the Canticle of the Sun (Canticle of the Creatures)` },
                { date: `1226`, event: `Dies in Assisi` },
                { date: `1228`, event: `Canonized by Pope Gregory IX — just two years after death, remarkably fast` }
            ],
            principles: [
                { name: `Radical Poverty`, def: `Poverty wasn't asceticism for its own sake but a direct imitation of Christ's own self-emptying (kenosis) and a rejection of the era's rising commercial wealth.` },
                { name: `Imitation of Christ (Imitatio Christi)`, def: `Francis's spirituality centered on literally living out the Gospel — not primarily through doctrine but through lived simplicity, humility, and suffering (culminating in the stigmata).` },
                { name: `Creation Theology`, def: `In the Canticle of the Sun, treated the natural world (sun, moon, "Brother Fire," "Sister Water") as kin and as revelatory of God — an early and unusually developed theology of creation.` },
                { name: `Peacemaking`, def: `His meeting with Sultan al-Kamil during the Crusades reflected a theology of dialogue and reconciliation rather than conquest, unusual for his time.` },
                { name: `Humility and Anti-Clericalism (mild)`, def: `Emphasized lay holiness and simplicity over ecclesiastical hierarchy and scholastic complexity, without formally breaking with Church authority.` }
            ],
            principlesNote: `Francis wrote comparatively little systematic theology — his authority comes from lived example, not doctrinal treatises.`,
            impact: [
                `Founded the Franciscan Order (Friars Minor), one of the largest and most influential religious orders in Church history, alongside the Poor Clares and the Third Order (lay Franciscans).`,
                `Reoriented much of medieval Catholic piety toward poverty, humility, and direct Gospel imitation, influencing subsequent mendicant movements (Dominicans emerged in a similar spirit around the same period).`,
                `His creation-centered spirituality directly inspired Pope Francis's 2015 encyclical Laudato Si' on environmental ethics — the Pope took his papal name specifically in reference to Francis of Assisi.`,
                `Canonized only two years after death — a sign of how immediately and powerfully his life was perceived as sanctity in action.`,
                `Influenced Catholic art and devotional practice broadly, including the tradition of the Nativity crèche, which he originated.`,
                `His stigmata became a template for later mystical experience in Catholic spirituality (imitatio Christi taken to a bodily extreme).`
            ]
        },
        {
            slug: "aquinas",
            name: `Saint Thomas Aquinas`,
            dates: `1225–1274 AD`,
            timeline: [
                { date: `1225`, event: `Born near Aquino, Kingdom of Sicily (Italy), into a noble family` },
                { date: `1230–1239`, event: `Educated by Benedictine monks at Monte Cassino` },
                { date: `1239–1244`, event: `Studies liberal arts at the University of Naples; encounters Aristotle's works, newly available via Arabic and Latin translations` },
                { date: `1244`, event: `Joins the Dominican Order (Order of Preachers) against his family's wishes; family reportedly imprisons him for about a year to try to stop him` },
                { date: `1245`, event: `Released; sent to study in Paris and Cologne` },
                { date: `1245–1252`, event: `Studies under Albert the Great, a key mentor who introduced him to systematic engagement with Aristotle` },
                { date: `1256`, event: `Becomes a master of theology at the University of Paris` },
                { date: `1259–1265`, event: `Teaches in Italy at the papal court; begins the Summa Contra Gentiles` },
                { date: `1265–1268`, event: `Begins the Summa Theologiae, his central and unfinished masterwork` },
                { date: `1268–1272`, event: `Second Paris regency; engages controversies over Aristotelian philosophy and "Latin Averroism"` },
                { date: `1272–1273`, event: `Returns to Naples to teach` },
                { date: `1273`, event: `Has a mystical experience during Mass (December 6) after which he stops writing, reportedly saying his work seemed like "straw" compared to what he had seen` },
                { date: `1274`, event: `Dies en route to the Second Council of Lyon, at Fossanova Abbey` },
                { date: `1323`, event: `Canonized by Pope John XXII` },
                { date: `1567`, event: `Declared a Doctor of the Church by Pope Pius V` },
                { date: `1879`, event: `Pope Leo XIII's encyclical Aeterni Patris names Thomistic philosophy the official framework for Catholic theological education` }
            ],
            principles: [
                { name: `Faith and Reason in Harmony`, def: `His central project was showing that reason (especially Aristotelian philosophy) and Christian revelation are not in conflict but complementary — reason can prove some truths (God's existence, natural law) while others (Trinity, Incarnation) require revelation.` },
                { name: `The Five Ways`, def: `Offered five philosophical arguments for God's existence (from motion, causation, contingency, gradation, and design/final causes) in the Summa Theologiae — still taught in philosophy of religion today.` },
                { name: `Natural Law`, def: `Developed a systematic natural law theory — that moral truths are accessible to human reason through the created order, not only through revelation. This became foundational to Catholic moral theology and later influenced secular legal and ethical thought.` },
                { name: `Synthesis with Aristotle`, def: `Where Augustine worked largely through a Platonic/Neoplatonic lens, Aquinas reworked Christian theology through Aristotelian categories (substance, form/matter, act/potency, causation) — a major methodological shift in Western theology.` },
                { name: `Analogy of Being (Analogia Entis)`, def: `Argued human language about God is neither purely literal nor purely metaphorical but analogical — we can speak truly but imperfectly about God.` },
                { name: `Virtue and the Human Good`, def: `Integrated Aristotelian virtue ethics with the theological virtues (faith, hope, charity), producing a comprehensive moral framework balancing habituated virtue with grace.` },
                { name: `Transubstantiation`, def: `Gave the Eucharist its precise philosophical formulation using Aristotelian substance/accident language — this became the Church's official explanation, affirmed at the Council of Trent.` }
            ],
            impact: [
                `Named a Doctor of the Church (the "Angelic Doctor") and is arguably the most authoritative theologian in Catholic history — his Summa Theologiae remains a core text of Catholic seminary education.`,
                `Thomism became, and largely remains, the Catholic Church's semi-official theological and philosophical framework, cemented by Leo XIII's 1879 encyclical Aeterni Patris.`,
                `Central to the Church's positions on natural law, which underlies Catholic teaching on ethics, bioethics, and social doctrine to this day.`,
                `His Eucharistic theology (transubstantiation via Aristotelian metaphysics) was formally adopted at the Council of Trent (16th century) as the Church's official explanation of the Real Presence.`,
                `Provided the intellectual toolkit later used at the Second Vatican Council and in modern Catholic natural law arguments (e.g., in debates on just war, sexual ethics, and human dignity).`,
                `Unlike Augustine, whose authority is also strongly claimed by Protestants, Aquinas's influence is comparatively more concentrated within Catholicism and Eastern rite Catholic thought, though Anglican and some Protestant scholastic traditions also engage him.`,
                `His harmonization of faith and reason shaped the Church's long-term posture toward science and philosophy — the idea that truth cannot ultimately contradict truth, whether reached by reason or revelation.`
            ]
        }
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

    closingArc: `A useful way to see the arc: Augustine (4th–5th c.) establishes the theological grammar of grace, sin, and the two cities. Francis (12th–13th c.) reacts against a wealthy, institutionalized Church by re-embodying the Gospel in radical poverty and lived simplicity. Aquinas (13th c., overlapping with Francis) takes the opposite tack from Francis — not embodiment but intellectual synthesis — fusing newly rediscovered Aristotelian philosophy with Augustinian theology to produce the Church's most comprehensive systematic framework. Notably, Aquinas was himself a Dominican, a mendicant order founded in direct competition/parallel with the Franciscans, so he and Francis's spiritual heirs were contemporaries shaping the 13th-century Church from different angles — one through poverty and preaching, the other through the university and systematic reason.`,

    disambiguation: {
        title: `On "Saint Augustus" / Augustine of Canterbury`,
        text: `If you meant Augustine of Canterbury (died c. 604) rather than Augustine of Hippo: he was a Benedictine monk sent by Pope Gregory the Great in 596 to evangelize Anglo-Saxon England, became the first Archbishop of Canterbury, and is considered the "Apostle to the English." He's a distinct, much less theologically prolific figure than Augustine of Hippo — his significance is missionary and institutional (founding the English Church hierarchy), not doctrinal.`
    }
};
