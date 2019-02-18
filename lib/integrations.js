/* eslint quote-props: off */
'use strict';

/*
   Add all integrations you want registered here.
   Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
   Make sure the integrations added are also installed and saved in the package.json
   */
module.exports = {
    'webdata': require('@astronomerio/analytics.js-integration-astronomer')
};
