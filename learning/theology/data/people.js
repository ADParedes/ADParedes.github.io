/* Shared theology figures library — Church Fathers, popes, councils, and
   theologians referenced across theology topics. Separate from
   /learning/history/data/people.js (that one is scoped to biblical figures).
   Reference a person from any topic's `keyPeopleSlugs` array by the object key. */

var THEOLOGY_PEOPLE = {

    cyprian: {
        name: `Cyprian of Carthage`, order: 1, era: `3rd century`,
        contribution: `Coined "Extra Ecclesiam Nulla Salus"`
    },
    augustine: {
        name: `Augustine of Hippo`, order: 2, era: `4th–5th century`,
        contribution: `Grace, original sin, and predestination framework underlying the whole debate`
    },
    "boniface-viii": {
        name: `Pope Boniface VIII`, order: 3, era: `13th–14th century`,
        contribution: `Issued the strictest historical formulation (Unam Sanctam)`
    },
    vitoria: {
        name: `Francisco de Vitoria`, order: 4, era: `16th century`,
        contribution: `School of Salamanca; natural law reasoning that begins softening rigid exclusivism`
    },
    bellarmine: {
        name: `Robert Bellarmine`, order: 5, era: `16th–17th century`,
        contribution: `Distinguished formal/visible Church membership from membership "by desire"`
    },
    "pius-ix": {
        name: `Pope Pius IX`, order: 6, era: `19th century`,
        contribution: `First pope to formally articulate invincible ignorance as a real exception`
    },
    feeney: {
        name: `Fr. Leonard Feeney`, order: 7, era: `20th century`,
        contribution: `Negative case study — excommunicated for rejecting invincible ignorance outright, prompting the Holy Office to clarify the actual doctrine`
    },
    "vatican-ii-popes": {
        name: `Pope John XXIII / Pope Paul VI`, order: 8, era: `20th century`,
        contribution: `Convened and promulgated the Second Vatican Council`
    },
    rahner: {
        name: `Karl Rahner, SJ`, order: 9, era: `20th century`,
        contribution: `Proposed the influential but non-official "anonymous Christian" theory`
    },
    balthasar: {
        name: `Hans Urs von Balthasar`, order: 10, era: `20th century`,
        contribution: `Prominent theological critic of Rahner's framing`
    },
    "john-paul-ii": {
        name: `Pope John Paul II`, order: 11, era: `20th century`,
        contribution: `Redemptoris Missio — reaffirmed missionary urgency`
    },
    ratzinger: {
        name: `Cardinal Joseph Ratzinger (Pope Benedict XVI)`, order: 12, era: `20th–21st century`,
        contribution: `Dominus Iesus — doctrinal guardrails against relativism`
    },
    francis: {
        name: `Pope Francis`, order: 13, era: `21st century`,
        contribution: `Continued emphasis on interreligious dialogue within the existing doctrinal framework`
    }

};

var THEOLOGY_PEOPLE_COLUMNS = [
    { key: "name", label: "Person" },
    { key: "era", label: "Era" },
    { key: "contribution", label: "Contribution" }
];
