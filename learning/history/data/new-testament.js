/* New Testament timeline — high-level skeleton, meant to be expanded with more
   entries (ministry details, individual epistles, church councils, etc.) later. */

var NEW_TESTAMENT = [
    {
        era: "The Incarnation",
        entries: [
            {
                id: "incarnation", date: "c. 4 BC", uncertain: true,
                title: "Birth of Christ",
                desc: "Jesus is born in Bethlehem during the reign of Augustus, under the peace and infrastructure of the Roman Empire — the world set up in the World Powers timeline.",
                people: ["jesus", "augustus"]
            }
        ]
    },
    {
        era: "Public Ministry",
        entries: [
            {
                id: "ministry", date: "c. 27–30 AD", uncertain: true,
                title: "Ministry, Teaching & Miracles",
                desc: "Jesus' public ministry in Galilee and Judea — teaching, healing, and gathering the Twelve. Skeleton entry, to be expanded.",
                people: ["jesus"]
            }
        ]
    },
    {
        era: "Passion & Resurrection",
        entries: [
            {
                id: "resurrection", date: "c. 30 AD", uncertain: true,
                title: "Crucifixion, Resurrection & Ascension",
                desc: "Jesus is crucified in Jerusalem under Pontius Pilate; the central Christian claim is his resurrection three days later, followed by the ascension.",
                people: ["jesus"]
            }
        ]
    },
    {
        era: "The Early Church",
        entries: [
            {
                id: "early-church", date: "c. 30 AD onward", uncertain: true,
                title: "Pentecost & the Jerusalem Church",
                desc: "The Spirit descends at Pentecost; the apostles, led by Peter, establish the first church in Jerusalem.",
                people: ["peter"]
            }
        ]
    },
    {
        era: "Apostolic Missions",
        entries: [
            {
                id: "missions", date: "c. 46–67 AD", uncertain: true,
                title: "Paul's Missionary Journeys",
                desc: "Paul, once a persecutor of the church, carries the Gospel across the Roman world through several missionary journeys and writes much of the New Testament's letters.",
                people: ["paul"]
            }
        ]
    },
    {
        era: "Fall of Jerusalem & the Canon",
        entries: [
            {
                id: "70ad", date: "70 AD", uncertain: false,
                title: "Destruction of the Second Temple",
                desc: "Rome destroys Jerusalem and the Temple, ending Second Temple Judaism and reshaping both Judaism and the young church. Skeleton entry, to be expanded — includes eventual formation of the New Testament canon.",
                people: []
            }
        ]
    }
];
