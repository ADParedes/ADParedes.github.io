/* World Powers timeline: the great empires surrounding Israel, meant to be read
   alongside old-testament.js as a parallel track. Same grouped-era format. */

var WORLD_POWERS = [
    {
        era: "Egypt: the backdrop to Joseph & the Exodus",
        entries: [
            {
                id: "egypt", date: "c. 3100–1070 BC", uncertain: true,
                title: "Egypt: Old, Middle & New Kingdoms",
                desc: "The dominant power of the ancient Near East for most of the Old Testament's early history: the Egypt of Joseph's rise, Israel's bondage, and the Exodus.",
                people: []
            }
        ]
    },
    {
        era: "Assyria (c. 900–609 BC)",
        entries: [
            {
                id: "assyria", date: "c. 900–609 BC", uncertain: true,
                title: "The Assyrian Empire",
                desc: "A brutal military empire centered on Nineveh; conquered the northern kingdom of Israel in 722 BC, ending its independent existence.",
                people: []
            }
        ]
    },
    {
        era: "Babylon (c. 626–539 BC)",
        entries: [
            {
                id: "babylon", date: "605–562 BC", uncertain: false,
                title: "The Neo-Babylonian Empire",
                desc: "Under Nebuchadnezzar II, Babylon eclipses Assyria, destroys Jerusalem in 586 BC, and carries Judah into 70 years of exile.",
                people: ["nebuchadnezzar"]
            }
        ]
    },
    {
        era: "Persia (539–331 BC)",
        entries: [
            {
                id: "persia", date: "539–331 BC", uncertain: false,
                title: "The Persian Empire",
                desc: "Cyrus the Great conquers Babylon in 539 BC and permits the Jewish exiles to return home, the empire that oversees the Old Testament's final chapters.",
                people: ["cyrus"]
            }
        ]
    },
    {
        era: "Greece (336–63 BC)",
        entries: [
            {
                id: "greece", date: "336–323 BC", uncertain: false,
                title: "Alexander the Great & the Hellenistic World",
                desc: "Alexander conquers Persia and spreads Greek language and culture across the Near East. After his death his empire splits among his generals, setting the stage for the world Rome inherits.",
                people: ["alexander"]
            }
        ]
    },
    {
        era: "Rome (63 BC onward)",
        entries: [
            {
                id: "rome", date: "63 BC–4th c. AD", uncertain: false,
                title: "The Roman Republic & Empire",
                desc: "Rome absorbs Judea in 63 BC. Under Augustus the empire-wide Pax Romana begins, the political backdrop into which the New Testament opens.",
                people: ["augustus"]
            },
            {
                id: "rome-christianity", date: "1st–4th c. AD", uncertain: false,
                title: "Toward a Christian Empire",
                desc: "The empire that once persecuted the early church gradually turns toward it, a story picked up in full in the New Testament timeline. Skeleton entry, to be expanded.",
                people: []
            }
        ]
    }
];
