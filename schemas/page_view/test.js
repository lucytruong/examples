const Ajv = require('ajv');
const _ajv = new Ajv();
const schemadoc = require('../page_view/1_0_0.json');
const schema = schemadoc.data;

const validate = _ajv.compile(schema);

//The AJV package hasn't been installed so if opening in an iDE to test please install ajv using npm i ajv
//Here we check what we are about to send as a dataLyaer puhs meets the required data rules for page view
const data = {
    "event" : "page_view",
    "event_name" : "testing_load",
    "customer_id" : "ffee344354",
    "page_name" : "main_home",
    "page_type" : "home",
    "page_login_status" : "logged",
    "schema_version" : "01_01_01"
}
const data_a = {
    "event" : "page_view",
    "event_name" : "testing_load",
    "customer_id" : "ffee344354",
    "page_name" : "main_home",
    "page_type" : "home",
    "page_login_status" : "logged"
}
const dataLayer = [];

const valid = validate(data);
console.log('Here is the schema: '+schemadoc.title+'/'+schemadoc.version);
if(!valid) {console.log(validate.errors);}
else if(valid) {dataLayer.push(data);
    console.log("all working as expected",dataLayer);}