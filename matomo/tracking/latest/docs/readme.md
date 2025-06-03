Last upated: 3-5-2025
## About Matomo analytics repo


Here you will find the events the business would like to capture and a breakdown what infromaiton each event must also send to Matomo analytics to enable the business to continuously monitor and optimize site and marketing performance via Matomo insights.

### Links to the different tracked events requirements (MUST Haves):
1. [pageviews]


### Usesul links
* Matomo channel grouping
* mtm or utm?
    * [mtm takes priority](https://matomo.org/faq/reports/how-to-build-campaign-tracking-urls/)
    * <a href="https://matomo.org/faq/reports/how-to-build-campaign-tracking-urls/">mtm takes priority</a>
    * [Azure DDOS Protection Standard](https://learn.microsoft.com/en-us/azure/virtual-network/ddos-protection-overview)

## Tracked event: page view


These are the tracking requirements for page view


 1. ***Name*** Page View
 2. ***description*** When a new page load including SPA pages
 3. ***trigger*** On page load or history change for SPA
 4. ***required_dimension***
     1. 'page_url': Full page URL
     2. 'page_title': Full page title
     3. marketihng_information
    
## Tracked event: link click


These are the tracking requirements for link click


 1. ***Name*** Link Click
 2. ***description*** When generic links are clicked
 3. ***trigger*** OnClick of link of any type
 4. ***required_dimension***
     1. 'link_name': link Name
     2. 'link_position': link Index
     3. 'feature_name': feature name
    

## here is a list of jsons

[page](https://github.com/lucytruong/examples/blob/main/schemas/page/1_0_0.json)
