#!/bin/sh
ng build br-date --prod --output-hashing=none && cat dist/br-date/runtime-es5.js dist/br-date/polyfills-es5.js dist/br-date/scripts.js dist/br-date/main-es5.js > dist/br-date/index.js