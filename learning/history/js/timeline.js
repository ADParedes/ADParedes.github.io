/* History Library rendering engine.
   Plain global script (no build step, no modules) — matches the rest of the site.
   Data files (data/*.js) define plain objects/arrays; this file turns them into DOM.
   Edit content by editing a data file. Never edit markup here to change a timeline's content. */

var HistoryTimeline = (function () {

    function personLink(slug, people) {
        var p = people && people[slug];
        var name = p ? p.name : slug;
        return '<a href="people.html#' + slug + '">' + name + '</a>';
    }

    function renderEntry(entry, people) {
        var uncertainTag = entry.uncertain
            ? '<span class="hx-uncertain">date disputed</span>'
            : '';
        var peopleLinks = (entry.people || [])
            .map(function (slug) { return personLink(slug, people); })
            .join('');
        var mapHtml = '';
        if (entry.map) {
            mapHtml = '<figure class="hx-map">' +
                '<img src="' + entry.map.src + '" alt="' + (entry.map.alt || entry.title) + '" loading="lazy">' +
                (entry.map.caption ? '<figcaption>' + entry.map.caption + '</figcaption>' : '') +
                '</figure>';
        }
        return '' +
            '<div class="hx-entry" id="' + (entry.id || '') + '">' +
            '<div class="hx-date">' + entry.date + uncertainTag + '</div>' +
            '<div class="hx-title">' + entry.title + '</div>' +
            '<div class="hx-desc">' + entry.desc + '</div>' +
            (peopleLinks ? '<div class="hx-people">' + peopleLinks + '</div>' : '') +
            mapHtml +
            '</div>';
    }

    function renderGroup(group, people) {
        var label = group.era ? '<div class="era-label">' + group.era + '</div>' : '';
        var entries = group.entries.map(function (e) { return renderEntry(e, people); }).join('');
        return '<div class="era-track">' + label + '<div class="hx-timeline">' + entries + '</div></div>';
    }

    // render(mountId, groups, opts) — groups: [{ era, entries: [...] }], opts.people: PEOPLE object
    function render(mountId, groups, opts) {
        opts = opts || {};
        var mount = document.getElementById(mountId);
        if (!mount) return;
        mount.innerHTML = groups.map(function (g) { return renderGroup(g, opts.people || {}); }).join('');
    }

    // renderParallel(mountId, tracks, opts) — tracks: [{ label, groups }], side-by-side comparison view
    function renderParallel(mountId, tracks, opts) {
        opts = opts || {};
        var mount = document.getElementById(mountId);
        if (!mount) return;
        var people = opts.people || {};
        mount.innerHTML = tracks.map(function (track) {
            var body = track.groups.map(function (g) { return renderGroup(g, people); }).join('');
            return '<div class="hx-parallel-track"><h3>' + track.label + '</h3>' + body + '</div>';
        }).join('');
    }

    // renderPeople(mountId, people) — builds the shared figures library page from data/people.js
    function renderPeople(mountId, people) {
        var mount = document.getElementById(mountId);
        if (!mount) return;
        var slugs = Object.keys(people).sort(function (a, b) {
            return (people[a].order || 0) - (people[b].order || 0);
        });
        mount.innerHTML = slugs.map(function (slug) {
            var p = people[slug];
            var appears = (p.timelines || [])
                .map(function (t) { return '<a href="' + t.href + '">' + t.label + '</a>'; })
                .join('');
            return '' +
                '<div class="person-entry" id="' + slug + '">' +
                '<span class="person-name">' + p.name + '</span>' +
                '<span class="person-era">' + (p.era || '') + '</span>' +
                '<div class="person-blurb">' + p.blurb + '</div>' +
                (appears ? '<div class="person-appears">' + appears + '</div>' : '') +
                '</div>';
        }).join('');
    }

    return { render: render, renderParallel: renderParallel, renderPeople: renderPeople };
})();
