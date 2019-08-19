"use strict";

const Spig = require('./spig/spig');
require('require-dir')('./spig/tasks');

Spig
  .on('/**/*.{md,njk}')
  ._("INIT")
  .pageCommon()
  ._("RENDER")
  .render()
  .applyTemplate()
  .htmlMinify()
;


// IMAGES

Spig
  .on('/**/*.{png,jpg,gif}')
  ._("INIT")
  .assetCommon()
  ._("IMG")
  .imageMinify()
;

