/*sql from percentag
round((safe_divide(${ED.coalesceSchemaProperty('video','player_time','1-0-0')},
                   ${ED.coalesceSchemaProperty('video','video_duration','1-0-0')})
                   *100),0)
                   */

//query selector 
const stackdiv = document.querySelectorAll('div#list-1 > div.stack > div.stack > div.stack');
for (let i = 0; i < stackdiv.length; i++) {
    var isyoumight = document.querySelectorAll('div#list-1 > div.stack > div.stack > div.stack')[i].outerText;
    isyoumight = isyoumight.toLowerCase();
    if(isyoumight == 'you might like') {
        i = i + 2;
        var clickel = '#list-1 . div > div . div:nth-child('+i+') > div > a';
        document.querySelectorAll(clickel).click(); 
    }
}

//scroll to function 
let newscroll = (el) => { el.scrollIntoView();}
newscroll(document.querySelector('div.classValue'));

let newscroll2 = (x,y) => {window.scrollTo(x,y);}
newscroll2(0,document.body.scrollHeight);