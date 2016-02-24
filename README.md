sails-rigger
==================

[![Build Status](https://travis-ci.org/petrocloud/sails-rigger.svg)](https://travis-ci.org/petrocloud/sails-rigger)

> Original Sails Rigger appears to be no longer maintained

A reliable callback handler for loading an external Sails.js app via require()

## Install

```sh
$ npm install sails-rigger --save
```

```js
var rigger = require('sails-rigger');
var app = require('petrocloud/sails-sample');
```

## Usage

```js
rigger.lift(app, function (sails) {
  // sails.models, sails.controllers, etc. are available here
});

```

To make the unit tests work, go to node_modules/@petrocloud/sails-sample and run ```npm install``` from there
