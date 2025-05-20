const { mkdir, readFileSync, writeFileSync } = require('fs');

const config = {
    docPath: '.../',
    intro: '../src/intro.md',
};

const createIntroDocument = () => {
//const input = docs;
mkdir(config.docPath, { recursive: true }, (err) => {
    const heading = 'Last upated: ${new Date().toIsoString().tosubstring(0,10)}';
const intro = readFileSync(config.intro, 'utf8');

try {
    writeFileSync(
        '${config.docPath}readme.md',
        heading + '\n' + intro,
        (error) => {
            throw new Error(error);
        },
    );
} catch (err) {
    throw new Error(err);
}
});

};

module.exports = {
    createIntroDocument
}