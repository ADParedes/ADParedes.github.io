/* Old Testament timeline. Grouped by era — each group renders under an era-label heading.
   To add/edit an event: add/edit an object in the relevant group's `entries` array.
   To add a new era: push a new { era, entries } group. No HTML/CSS changes needed. */

var OLD_TESTAMENT = [
    {
        era: "Primeval History",
        entries: [
            {
                id: "eden", date: "Undated", uncertain: true,
                title: "Creation, Adam & Eve",
                desc: "The Genesis account of the first humans and the Fall. Traditional chronologies (e.g. Ussher) propose dates, but this period is not historically determinable.",
                people: ["adam"]
            },
            {
                id: "flood", date: "Undated", uncertain: true,
                title: "The Flood & Noah's Ark",
                desc: "Noah, his family, and the animal kinds are preserved through a global flood judgment; humanity begins again through Noah's sons.",
                people: ["noah"]
            }
        ]
    },
    {
        era: "The Patriarchs — c. 2100–1900 BC",
        entries: [
            {
                id: "abraham", date: "c. 2091 BC", uncertain: true,
                title: "Abraham Called from Ur",
                desc: "God calls Abraham out of Ur of the Chaldeans to Canaan, promising land, descendants, and blessing — the founding covenant of the Old Testament.",
                people: ["abraham"]
            },
            {
                id: "patriarchs", date: "c. 2006–1900 BC", uncertain: true,
                title: "Isaac, Jacob & the Twelve Tribes",
                desc: "The covenant passes through Isaac to Jacob, renamed Israel, whose twelve sons become the twelve tribes of Israel.",
                people: ["jacob"]
            },
            {
                id: "joseph", date: "c. 1898 BC", uncertain: true,
                title: "Joseph Sold into Egypt",
                desc: "Jacob's son Joseph is sold into slavery by his brothers, taken to Egypt, and rises to become second only to Pharaoh — positioning his family to survive famine.",
                people: ["joseph"]
            }
        ]
    },
    {
        era: "Egyptian Bondage — c. 1876–1446 BC",
        entries: [
            {
                id: "bondage", date: "c. 1876–1446 BC", uncertain: true,
                title: "Israel in Egypt",
                desc: "Jacob's family settles in Egypt during Joseph's lifetime, multiplies over generations, and is eventually enslaved by a Pharaoh who 'did not know Joseph.'",
                people: []
            }
        ]
    },
    {
        era: "Exodus & Wilderness — c. 1446–1406 BC",
        entries: [
            {
                id: "exodus", date: "c. 1446 BC", uncertain: true,
                title: "Moses & the Exodus",
                desc: "Moses confronts Pharaoh, Israel is delivered from Egypt through the plagues and the Red Sea, and receives the Law at Mount Sinai. Aaron, Moses' brother, is established as high priest.",
                people: ["moses", "aaron"]
            },
            {
                id: "wilderness", date: "c. 1446–1406 BC", uncertain: true,
                title: "Forty Years in the Wilderness",
                desc: "Due to the people's unbelief at Kadesh Barnea, Israel wanders the wilderness for a generation before entering the promised land.",
                people: ["moses"]
            }
        ]
    },
    {
        era: "Conquest & Judges — c. 1406–1050 BC",
        entries: [
            {
                id: "conquest", date: "c. 1406 BC", uncertain: true,
                title: "Joshua & the Conquest of Canaan",
                desc: "Moses' successor Joshua leads Israel across the Jordan and into the conquest of the promised land, dividing it among the twelve tribes.",
                people: ["joshua"]
            },
            {
                id: "judges", date: "c. 1375–1050 BC", uncertain: true,
                title: "The Age of the Judges",
                desc: "Without a king, Israel is led by a series of judges (Deborah, Gideon, Samson, and others) in a repeating cycle of unfaithfulness, oppression, and deliverance.",
                people: []
            }
        ]
    },
    {
        era: "United Monarchy — c. 1050–931 BC",
        entries: [
            {
                id: "monarchy", date: "c. 1050–931 BC", uncertain: true,
                title: "Saul, David & Solomon — One Nation",
                desc: "Israel demands a king. Saul reigns first, then David unites the twelve tribes and establishes Jerusalem as capital, and Solomon builds the First Temple before the kingdom splits after his death.",
                people: ["saul", "david", "solomon"]
            }
        ]
    },
    {
        era: "Divided Kingdom — c. 931–586 BC",
        entries: [
            {
                id: "divided", date: "c. 931–586 BC", uncertain: true,
                title: "Israel & Judah Divide",
                desc: "The kingdom splits into Israel (north) and Judah (south). Israel falls to Assyria in 722 BC; Judah survives longer but drifts toward the judgment of exile.",
                people: []
            }
        ]
    },
    {
        era: "Babylonian Captivity & Return — 605–445 BC",
        entries: [
            {
                id: "exile", date: "586 BC", uncertain: false,
                title: "Fall of Jerusalem & the Babylonian Captivity",
                desc: "Nebuchadnezzar II destroys Jerusalem and the First Temple, carrying Judah into exile in Babylon.",
                people: ["nebuchadnezzar"]
            },
            {
                id: "return", date: "538–445 BC", uncertain: false,
                title: "The Return & Rebuilding",
                desc: "Cyrus the Great of Persia decrees the exiles may return; the Temple is rebuilt under Zerubbabel, and the walls of Jerusalem under Nehemiah, closing the Old Testament narrative.",
                people: ["cyrus"]
            }
        ]
    }
];
