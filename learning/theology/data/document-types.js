/* Shared glossary of Church document types, reusable across every theology
   topic page, not specific to any one topic. Add a row once here. */

var DOCUMENT_TYPES = [
    {
        type: `Apostolic Constitution`,
        what: `The Pope's highest-level legislative document; used for the most solemn matters (defining dogma, establishing law, promulgating the Catechism)`,
        weight: `Highest juridical weight`,
        example: `Fidei Depositum (1992, promulgating the Catechism)`
    },
    {
        type: `Dogmatic Constitution`,
        what: `An Ecumenical Council's most authoritative teaching document, defining core doctrine`,
        weight: `Very high, conciliar and doctrinal`,
        example: `Lumen Gentium (Vatican II, on the Church)`
    },
    {
        type: `Pastoral Constitution`,
        what: `A Council document addressing the Church's relationship to the modern world; doctrinal but pastorally applied`,
        weight: `High`,
        example: `Gaudium et Spes (Vatican II)`
    },
    {
        type: `Encyclical`,
        what: `A formal papal letter addressed to the whole Church (sometimes "to all people of good will"), teaching on doctrine, morals, or discipline`,
        weight: `High, authoritative but generally not defining new dogma unless stated as such`,
        example: `Redemptoris Missio (John Paul II, 1990)`
    },
    {
        type: `Papal Bull`,
        what: `A formal, solemn proclamation historically sealed with a lead seal ("bulla"); used for major legal/doctrinal acts, especially in earlier centuries`,
        weight: `High, historically used for the most solemn declarations`,
        example: `Unam Sanctam (Boniface VIII, 1302); Cantate Domino (Council of Florence, 1442)`
    },
    {
        type: `Declaration`,
        what: `A shorter conciliar or curial document addressing a specific topic, often relational (e.g., other religions, religious freedom)`,
        weight: `Moderate-high depending on origin (conciliar vs. curial)`,
        example: `Nostra Aetate (Vatican II, 1965); Dominus Iesus (CDF, 2000)`
    },
    {
        type: `Decree`,
        what: `A conciliar document giving practical/pastoral direction on a specific issue`,
        weight: `Moderate-high`,
        example: `Ad Gentes (Vatican II, on missionary activity)`
    },
    {
        type: `Apostolic Letter / Motu Proprio`,
        what: `A papal letter, sometimes issued "on his own initiative" (motu proprio), often addressing a narrower administrative or doctrinal point`,
        weight: `Moderate`,
        example: `Varies widely by document`
    },
    {
        type: `Epistle`,
        what: `Refers to the New Testament letters (Paul, Peter, James, John, etc.), Scripture itself, not a Church-issued teaching document. Not to be confused with an "Apostolic Letter."`,
        weight: `Scriptural, foundational, not a Magisterial document type`,
        example: `Paul's Epistle to the Romans`
    },
    {
        type: `Catechism`,
        what: `An official compendium/summary of Church doctrine for teaching purposes`,
        weight: `Authoritative reference, not itself a new doctrinal act`,
        example: `Catechism of the Catholic Church (CCC), 1992`
    },
    {
        type: `Council Canons / Conciliar Documents`,
        what: `Formal statements and rulings from an Ecumenical Council (a gathering of the world's bishops with the Pope)`,
        weight: `Very high, the fullest expression of the Magisterium alongside the Pope`,
        example: `Council of Trent, Council of Florence, Vatican I, Vatican II`
    },
    {
        type: `CDF Document (now DDF)`,
        what: `Statements from the Congregation (now Dicastery) for the Doctrine of the Faith, the Vatican's doctrinal office`,
        weight: `Authoritative on doctrinal clarification, approved by the Pope`,
        example: `Dominus Iesus (2000)`
    }
];

var DOCUMENT_TYPES_COLUMNS = [
    { key: "type", label: "Document Type" },
    { key: "what", label: "What It Is" },
    { key: "weight", label: "Authority / Weight" },
    { key: "example", label: "Example" }
];
