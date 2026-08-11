/* Theology topic rendering engine. Plain global script, no build step.
   One function per content block; every theology topic page reuses all four.
   Edit content in a data file, never here. */

var Theology = (function () {

    // Generic table renderer, used for the document-type glossary, the
    // version-history table, and the key-people table. `columns` is
    // [{ key, label }]; `rows` is an array of plain objects.
    function renderTable(mountId, rows, columns) {
        var mount = document.getElementById(mountId);
        if (!mount) return;
        var thead = '<tr>' + columns.map(function (c) {
            return '<th>' + c.label + '</th>';
        }).join('') + '</tr>';
        var tbody = rows.map(function (row) {
            return '<tr>' + columns.map(function (c) {
                return '<td>' + (row[c.key] || '') + '</td>';
            }).join('') + '</tr>';
        }).join('');
        mount.innerHTML = '<div class="table-wrap"><table class="doc-table"><thead>' + thead +
            '</thead><tbody>' + tbody + '</tbody></table></div>';
    }

    // Flat date/event timeline, a dense reference list, not the narrative
    // era-grouped style used by /learning/history/.
    function renderTimeline(mountId, entries) {
        var mount = document.getElementById(mountId);
        if (!mount) return;
        mount.innerHTML = '<div class="flat-timeline">' + entries.map(function (e) {
            return '<div class="flat-entry"><div class="flat-date">' + e.date + '</div>' +
                '<div class="flat-event">' + e.event + '</div></div>';
        }).join('') + '</div>';
    }

    // Term/definition list (section 1 style: "what is this line of thinking called").
    function renderTerms(mountId, terms) {
        var mount = document.getElementById(mountId);
        if (!mount) return;
        mount.innerHTML = terms.map(function (t) {
            return '<div class="term-entry"><span class="term-name">' + t.name + '</span>' +
                '<span class="term-def">' + t.def + '</span></div>';
        }).join('');
    }

    // Reference / bibliography list.
    function renderReferences(mountId, refs) {
        var mount = document.getElementById(mountId);
        if (!mount) return;
        mount.innerHTML = '<ul class="ref-list">' + refs.map(function (r) {
            return '<li>' + r + '</li>';
        }).join('') + '</ul>';
    }

    // Builds key-people table rows by looking slugs up in a shared PEOPLE object
    // (data/people.js), so a person is written once and reused across topics.
    function keyPeopleRows(slugs, people) {
        return slugs.map(function (slug) {
            var p = people[slug] || { name: slug, era: '', contribution: '' };
            return { name: p.name, era: p.era, contribution: p.contribution };
        });
    }

    return {
        renderTable: renderTable,
        renderTimeline: renderTimeline,
        renderTerms: renderTerms,
        renderReferences: renderReferences,
        keyPeopleRows: keyPeopleRows
    };
})();
