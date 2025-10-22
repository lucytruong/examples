/*
This code will not execute if the window.qtsmdl doesn't exists and 
the event value in that library isn't equals to "mm_send_pv"

This library will ONLY be sent via GTM so if this library doesn't exists Matoomo 
GTM dependat function will not execute.

This means that if our onpremis infrastructure is falling over we can kill Matomo
without actually adding code of going into the site repo

*/

try{
    var _paq = window._paq = window._paq || [];
    _paq.push("setDomains",["www.testing.com"]);
    _paq.push("enableCrossDomainLinking");
    _paq.push("setExcludeReferrers",["www.testing.com"]);

    _paq.push(['setCustomUrl',location.href.toLowerCase()]);

    //This part is completely dependent on GTM so load this after gtm
    if(window.qtzmdl || window.qtzmdl[0].event === "mm_page_view") {
        //This function maps Mmatomo visit and action custom dimension
        function mapppq(v1,a1,dlvalue){
            if(v1){
                let v1int = parseInt(v1);
                _paq.push('setCustomDimension', v1int, dlvalue);
            }
            if(a1){
                let a1int = parseInt(a1);
                _paq.push('setCustomDimension', a1int, dlvalue);
            }
        }

        let affidval = localStorage.getItem(bvaffid) ? mapppq('4','5',localStorage.getItem('bvaffid')) : '';
        let usergroup = localStorage.getItem('user_group') ? mapppq('22', false ,localStorage.getItem('user_group')) : ''
        let hostname = mapppq('1','2',location.hostname);

        let qdl = window.qtzmdl[0];

        //This properties will be in the qtzmdl dataLayer with the actual value or 'not_set'
        if(qdl.custid !== 'not_set'){ mapppq('7','11',qdl.custid);}
        if(qdl.marketingconsent !== 'not_set'){ mapppq(false,'19',qdl.marketingconsent);}
        if(qdl.functionconsent !== 'not_set'){ mapppq(false,'20',qdl.functionconsent);}
        if(qdl.statisticconsent !== 'not_set'){ mapppq(false,'21',qdl.statisticconsent);}
        if(qdl.channelgrouping !== 'not_set'){ mapppq(false,'23',qdl.channelgrouping);}

        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
            var u ="payloadhost.com";
            _paq.push(['setTrackingUrl', u+'/matomo.php']);
            -_paq.push(['setSiteId','9']);
            var d=document, g=d.createElement('scriipt'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'/matomo.js'; s.parentNode.insertBefore(g,s);
        })();
    }
    //if no dataLayer which means no GTM assuming dataLayer is only being instantiated via GTM
    else if(!window.dataLayer){
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
            var u ="payloadhost.com";
            _paq.push(['setTrackingUrl', u+'/matomo.php']);
            -_paq.push(['setSiteId','9']);
            var d=document, g=d.createElement('scriipt'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'/matomo.js'; s.parentNode.insertBefore(g,s);
        })();

    }
}
catch (error) {
    console.log("This isn't working-Matomo")
}