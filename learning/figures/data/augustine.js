/* Solo figure page. Every figures page reads a global `STUDY` object with
   this shape: a `people` array (length 1 for a solo profile, length 2+ only
   on vs/ comparison pages) plus an optional `disambiguation` note. */

var STUDY = {

    slug: "augustine",
    title: `Saint Augustine of Hippo`,
    subtitle: `354–430 AD`,

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
                { date: `386`, event: `Famous conversion experience in a Milan garden ("tolle lege," "take up and read")` },
                { date: `387`, event: `Baptized by Ambrose` },
                { date: `388`, event: `Returns to North Africa` },
                { date: `391`, event: `Ordained a priest in Hippo Regius` },
                { date: `396`, event: `Becomes Bishop of Hippo` },
                { date: `397–400`, event: `Writes Confessions` },
                { date: `410`, event: `Sack of Rome by the Visigoths, triggers the theological crisis that produces City of God` },
                { date: `413–426`, event: `Writes City of God` },
                { date: `411–430`, event: `Engaged in major doctrinal battles: against the Donatists (Church purity/schism), the Pelagians (grace vs. free will), and Manichaeism` },
                { date: `430`, event: `Dies in Hippo as the Vandals besiege the city` }
            ],
            principles: [
                { name: `Original Sin`, def: `Formulated the doctrine that all humanity inherits a fallen, corrupted nature from Adam's sin, foundational to Western Christian anthropology.` },
                { name: `Grace and Free Will`, def: `Against Pelagius, argued humans cannot achieve salvation through will or good works alone; grace is unmerited and essential. This became bedrock Catholic doctrine and later fueled Reformation debates.` },
                { name: `Predestination`, def: `Held that God elects who will be saved, a concept later radicalized by Calvin.` },
                { name: `The Two Cities`, def: `In City of God, distinguished the "City of God" (oriented to eternal, divine love) from the "City of Man" (oriented to self-love and earthly power), shaping Christian political theology for a millennium.` },
                { name: `Just War Theory`, def: `Articulated early criteria for when war can be morally justified, still referenced in Catholic and secular ethics.` },
                { name: `Trinity`, def: `His De Trinitate was a defining systematic treatment of Trinitarian doctrine in the West.` },
                { name: `Epistemology of Faith`, def: `"Credo ut intelligam," I believe so that I may understand, placing faith prior to and enabling reason.` }
            ],
            impact: [
                `Named a Doctor of the Church; arguably the single most influential theologian in Western Christianity after Paul.`,
                `His framework on grace, sin, and salvation underlies Catholic sacramental theology (why baptism, penance, and grace-through-the-Church matter).`,
                `Shaped medieval scholasticism: Aquinas engages Augustine constantly, even while diverging via Aristotelian method.`,
                `His City of God shaped centuries of Church–state relations and Christian political thought.`,
                `Ironically, his writings on grace and predestination became a primary textual foundation for the Protestant Reformation: both Martin Luther (an Augustinian friar) and John Calvin drew heavily on Augustine to challenge later Catholic emphasis on merit and works. Augustine is thus claimed as a foundational authority by both Catholic and Reformed traditions.`
            ]
        }
    ],

    disambiguation: {
        title: `On "Saint Augustus" / Augustine of Canterbury`,
        text: `If you meant Augustine of Canterbury (died c. 604) rather than Augustine of Hippo: he was a Benedictine monk sent by Pope Gregory the Great in 596 to evangelize Anglo-Saxon England, became the first Archbishop of Canterbury, and is considered the "Apostle to the English." He's a distinct, much less theologically prolific figure than Augustine of Hippo: his significance is missionary and institutional (founding the English Church hierarchy), not doctrinal.`
    }
};
