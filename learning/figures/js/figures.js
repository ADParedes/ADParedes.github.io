/* Figures Library rendering engine. Plain global script, no build step.
   Works for a study of 1 person or many — renderStudy just maps over
   whatever `people` array a data file provides. Edit content in a data
   file; never here. */

var Figures = (function () {

    function tableHtml(rows, columns) {
        var thead = '<tr>' + columns.map(function (c) {
            return '<th>' + c.label + '</th>';
        }).join('') + '</tr>';
        var tbody = rows.map(function (row) {
            return '<tr>' + columns.map(function (c) {
                return '<td>' + (row[c.key] || '') + '</td>';
            }).join('') + '</tr>';
        }).join('');
        return '<div class="table-wrap"><table class="fig-table"><thead>' + thead +
            '</thead><tbody>' + tbody + '</tbody></table></div>';
    }

    function timelineHtml(entries) {
        return '<div class="flat-timeline">' + entries.map(function (e) {
            return '<div class="flat-entry"><div class="flat-date">' + e.date + '</div>' +
                '<div class="flat-event">' + e.event + '</div></div>';
        }).join('') + '</div>';
    }

    function termListHtml(terms) {
        return terms.map(function (t) {
            return '<div class="term-entry"><span class="term-name">' + t.name + '</span>' +
                '<span class="term-def">' + t.def + '</span></div>';
        }).join('');
    }

    function bulletListHtml(items) {
        return '<ul class="fig-list">' + items.map(function (i) {
            return '<li>' + i + '</li>';
        }).join('') + '</ul>';
    }

    function profileHtml(person) {
        var principlesNote = person.principlesNote
            ? '<p class="figure-note">' + person.principlesNote + '</p>' : '';
        return '' +
            '<div class="figure-profile" id="' + person.slug + '">' +
            '<h3 class="figure-name">' + person.name +
            ' <span class="figure-dates">(' + person.dates + ')</span></h3>' +
            '<h4 class="figure-subhead">Timeline</h4>' + timelineHtml(person.timeline) +
            '<h4 class="figure-subhead">Theological Principles</h4>' + termListHtml(person.principles) + principlesNote +
            '<h4 class="figure-subhead">Influence &amp; Impact</h4>' + bulletListHtml(person.impact) +
            '</div>';
    }

    // renderStudy(mountId, people) — one or more person profiles, each with
    // its own timeline, principles, and impact sections.
    function renderStudy(mountId, people) {
        var mount = document.getElementById(mountId);
        if (!mount) return;
        mount.innerHTML = people.map(profileHtml).join('<hr class="figure-divider">');
    }

    // renderComparison(mountId, rows, columns) — cross-person summary table,
    // only used when a study compares more than one figure.
    function renderComparison(mountId, rows, columns) {
        var mount = document.getElementById(mountId);
        if (!mount) return;
        mount.innerHTML = tableHtml(rows, columns);
    }

    return { renderStudy: renderStudy, renderComparison: renderComparison };
})();
