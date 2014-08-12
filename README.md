sails-rigged
==================

[![Build Status](https://travis-ci.org/tjwebb/sails-rigged.svg)](https://travis-ci.org/tjwebb/sails-rigged)

A reliable callback handler for loading an external Sails.js app via require()

## Install

```sh
$ npm install sails-rigged --save
```

```js
var rigger = require('sails-rigged');
var app = require('sails-todomvc');
```

## Usage

```js
rigger.lift(app, function (sails) {
  // sails.models, sails.controllers, etc. are available here
});

```
