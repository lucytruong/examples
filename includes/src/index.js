const { mkdir, readFileSync, writeFileSync } = require('fs');
const json2md = require('json2md');
const docs = require('../src/dictionary.json');
var eventlists = '';
const eventstracked = docs.eventtrack;
console.log(docs.eventtrack);

const generateReqDims = (dims) => {
    let reqsDim = '';
    let reqDimArray = [];
    for(const dim of dims) {
        reqDimArray.push(dim);
        reqsdim = json2md({ol: reqDimArray});
    }
    return reqsdim;
}

eventstracked.forEach(buildlists);

function buildlists(item) {
    let require_event_dim = '';
    if(item.Required_Dimensions.length > 0) {
        require_event_dim = generateReqDims(item.Required_Dimensions);
    }
    eventlists += json2md([
        {
            ol: [
                '***Name*** ' + item.name,
                '***description*** ' + item.description,
                '***trigger*** ' + item.trigger,
                '***required_dimension '+ require_event_dim
            ]
        }
    ])
}


const config = {
    docPath: '../../matomo/tracking/latest/docs',
    intro: '../src/intro.md',
};



const createLatestEventDictionary = () => {
//const input = docs;
mkdir(config.docPath, { recursive: true }, (err) => {
    const heading = 'Last upated: 3rd June 2025';//+new Date().toIsoString().tosubstring(0,10);
const intro = readFileSync(config.intro, 'utf8');

try {
    writeFileSync(
        config.docPath+'/readme.md',
        heading + '\n' + intro + '\n' + eventlists,
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
    createLatestEventDictionary
}