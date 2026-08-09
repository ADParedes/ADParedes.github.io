/* Shared figures library. Add a person once here; reference by slug (the object key)
   from any timeline entry's `people: []` array and a footnote link is generated automatically.
   `order` controls display order on people.html (roughly chronological). */

var PEOPLE = {

    adam: {
        name: "Adam & Eve", order: 1, era: "Primeval History",
        blurb: "The first man and woman in the Genesis account, formed by God and placed in Eden. Traditional dating is not historically determinable.",
        timelines: [{ href: "old-testament.html#eden", label: "Old Testament" }]
    },
    noah: {
        name: "Noah", order: 2, era: "Primeval History",
        blurb: "Builder of the Ark who survived the Flood with his family, preserving humanity and the animal kinds.",
        timelines: [{ href: "old-testament.html#flood", label: "Old Testament" }]
    },
    abraham: {
        name: "Abraham", order: 3, era: "Patriarchs, c. 2100–1900 BC",
        blurb: "Called by God out of Ur to Canaan; father of the covenant people, promised descendants as numerous as the stars.",
        timelines: [{ href: "old-testament.html#abraham", label: "Old Testament" }]
    },
    jacob: {
        name: "Jacob (Israel)", order: 4, era: "Patriarchs",
        blurb: "Grandson of Abraham, renamed Israel; father of the twelve tribes.",
        timelines: [{ href: "old-testament.html#patriarchs", label: "Old Testament" }]
    },
    joseph: {
        name: "Joseph", order: 5, era: "Patriarchs, c. 1900 BC",
        blurb: "Son of Jacob, sold into slavery by his brothers and taken to Egypt; rose to become second to Pharaoh and later brought his family into Egypt.",
        timelines: [{ href: "old-testament.html#joseph", label: "Old Testament" }]
    },
    moses: {
        name: "Moses", order: 6, era: "Exodus, c. 1446 BC",
        blurb: "Raised in Pharaoh's household; led Israel out of Egyptian bondage, received the Law at Sinai, and led the people for 40 years in the wilderness.",
        timelines: [{ href: "old-testament.html#exodus", label: "Old Testament" }]
    },
    aaron: {
        name: "Aaron", order: 7, era: "Exodus",
        blurb: "Moses' brother and spokesman; became Israel's first high priest, founding the Aaronic priesthood.",
        timelines: [{ href: "old-testament.html#exodus", label: "Old Testament" }]
    },
    joshua: {
        name: "Joshua", order: 8, era: "Conquest, c. 1406 BC",
        blurb: "Moses' successor; led Israel across the Jordan and into the conquest of Canaan, the promised land.",
        timelines: [{ href: "old-testament.html#conquest", label: "Old Testament" }]
    },
    saul: {
        name: "Saul", order: 9, era: "United Monarchy, c. 1050 BC",
        blurb: "Israel's first king, anointed by the prophet Samuel in response to the people's demand for a king like the other nations.",
        timelines: [{ href: "old-testament.html#monarchy", label: "Old Testament" }]
    },
    david: {
        name: "David", order: 10, era: "United Monarchy, c. 1010–970 BC",
        blurb: "Second king of Israel; united the twelve tribes into one kingdom, established Jerusalem as capital, and received God's covenant promise of an eternal throne.",
        timelines: [{ href: "old-testament.html#monarchy", label: "Old Testament" }]
    },
    solomon: {
        name: "Solomon", order: 11, era: "United Monarchy, c. 970–931 BC",
        blurb: "David's son; built the First Temple in Jerusalem and led Israel's golden age before the kingdom split after his death.",
        timelines: [{ href: "old-testament.html#monarchy", label: "Old Testament" }]
    },
    nebuchadnezzar: {
        name: "Nebuchadnezzar II", order: 12, era: "Neo-Babylonian Empire, r. 605–562 BC",
        blurb: "King of Babylon who destroyed Jerusalem and the First Temple in 586 BC and carried Judah into exile.",
        timelines: [
            { href: "old-testament.html#exile", label: "Old Testament" },
            { href: "world-powers.html#babylon", label: "World Powers" }
        ]
    },
    cyrus: {
        name: "Cyrus the Great", order: 13, era: "Persian Empire, r. 559–530 BC",
        blurb: "Founder of the Persian Empire; conquered Babylon and issued the decree permitting the Jewish exiles to return and rebuild the Temple.",
        timelines: [
            { href: "old-testament.html#return", label: "Old Testament" },
            { href: "world-powers.html#persia", label: "World Powers" }
        ]
    },
    alexander: {
        name: "Alexander the Great", order: 14, era: "Macedon, r. 336–323 BC",
        blurb: "King of Macedon who conquered the Persian Empire and spread Greek (Hellenistic) language and culture across the Near East, reshaping the world Rome would later inherit.",
        timelines: [{ href: "world-powers.html#greece", label: "World Powers" }]
    },
    augustus: {
        name: "Augustus Caesar", order: 15, era: "Roman Empire, r. 27 BC–14 AD",
        blurb: "First Roman emperor; established the Pax Romana, the stable empire-wide peace into which Christ was born.",
        timelines: [
            { href: "world-powers.html#rome", label: "World Powers" },
            { href: "new-testament.html#incarnation", label: "New Testament" }
        ]
    },
    jesus: {
        name: "Jesus of Nazareth", order: 16, era: "c. 4 BC–30 AD",
        blurb: "Central figure of the New Testament — born in Bethlehem, ministered, taught, was crucified, and, in Christian belief, rose from the dead.",
        timelines: [{ href: "new-testament.html#incarnation", label: "New Testament" }]
    },
    peter: {
        name: "Peter", order: 17, era: "1st century AD",
        blurb: "Leading apostle among the Twelve; became a foundational leader of the early church in Jerusalem and Rome.",
        timelines: [{ href: "new-testament.html#early-church", label: "New Testament" }]
    },
    paul: {
        name: "Paul of Tarsus", order: 18, era: "1st century AD",
        blurb: "Former persecutor of Christians turned apostle; his missionary journeys and letters carried the Gospel across the Roman world.",
        timelines: [{ href: "new-testament.html#missions", label: "New Testament" }]
    }

};
