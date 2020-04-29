/* eslint quote-props: off */
'use strict';

/*
   Add all integrations you want registered here.
   Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
   Make sure the integrations added are also installed and saved in the package.json
   */
module.exports = {
    'acquisio': require('@astronomerio/analytics.js-integration-acquisio'),
    'adobe-analytics': require('@astronomerio/analytics.js-integration-adobe-analytics'),
    'adwords': require('@astronomerio/analytics.js-integration-adwords'),
    'amplitude': require('@astronomerio/analytics.js-integration-amplitude'),
    'astronomer': require('@astronomerio/analytics.js-integration-astronomer'),
    'bing-ads': require('@astronomerio/analytics.js-integration-bing-ads'),
    'bloom-reach': require('@astronomerio/analytics.js-integration-bloomreach'),
    'clicky': require('@astronomerio/analytics.js-integration-clicky'),
    'criteo': require('@astronomerio/analytics.js-integration-criteo'),
    'customerio': require('@astronomerio/analytics.js-integration-customerio'),
    'doubleclick': require('@astronomerio/analytics.js-integration-doubleclick-floodlight'),
    'drift': require('@astronomerio/analytics.js-integration-drift'),
    'facebook-pixel': require('@astronomerio/analytics.js-integration-facebook-pixel'),
    'google-analytics': require('@astronomerio/analytics.js-integration-google-analytics'),
    'google-tag-manager': require('@astronomerio/analytics.js-integration-google-tag-manager'),
    'heap': require('@astronomerio/analytics.js-integration-heap'),
    'hotjar': require('@astronomerio/analytics.js-integration-hotjar'),
    'hubspot': require('@astronomerio/analytics.js-integration-hubspot'),
    'intercom': require('@astronomerio/analytics.js-integration-intercom'),
    'keen-io': require('@astronomerio/analytics.js-integration-keen-io'),
    'kenshoo': require('@astronomerio/analytics.js-integration-kenshoo'),
    'kenshoo-infinity-pixel': require('@astronomerio/analytics.js-integration-kenshoo-infinity'),
    'kissmetrics': require('@astronomerio/analytics.js-integration-kissmetrics'),
    'klaviyo': require('@astronomerio/analytics.js-integration-klaviyo'),
    'lucky-orange': require('@astronomerio/analytics.js-integration-lucky-orange'),
    'lytics': require('@astronomerio/analytics.js-integration-lytics'),
    'marin': require('@astronomerio/analytics.js-integration-marin'),
    'mixpanel': require('@astronomerio/analytics.js-integration-mixpanel'),
    'netmining': require('@astronomerio/analytics.js-integration-netmining'),
    'optimizely': require('@astronomerio/analytics.js-integration-optimizely'),
    'outbrain': require('@astronomerio/analytics.js-integration-outbrain'),
    'pebble-post': require('@astronomerio/analytics.js-integration-pebble-post'),
    'pinterest-conversions': require('@astronomerio/analytics.js-integration-pinterest-conversions'),
    'resonate': require('@astronomerio/analytics.js-integration-resonate'),
    'retention-science': require('@astronomerio/analytics.js-integration-retention-science'),
    'rubicon': require('@astronomerio/analytics.js-integration-rubicon'),
    'sailthru': require('@astronomerio/analytics.js-integration-sailthru'),
    'snapchat-pixel': require('@astronomerio/analytics.js-integration-snapchat-pixel'),
    'taboola': require('@astronomerio/analytics.js-integration-taboola'),
    'twitter-ads': require('@astronomerio/analytics.js-integration-twitter-ads'),
    'vero': require('@astronomerio/analytics.js-integration-vero'),
    'visual-website-optimizer': require('@astronomerio/analytics.js-integration-visual-website-optimizer'),
    'woopra': require('@astronomerio/analytics.js-integration-woopra')
};
