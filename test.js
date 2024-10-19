const changes = require  "./src/data/matching-section.json";

for (key in changes) {
    highlightedPhrases2.push(
        ...changes[key].highlighted_phrases_from_version_2
    );
}