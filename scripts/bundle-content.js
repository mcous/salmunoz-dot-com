#!/usr/bin/env node
'use strict'

const fs = require('fs')
const bulk = require('bulk-require')

module.exports = function bundleContent (dirname, glob, output) {
  const content = collectIndexValues(bulk(dirname, glob))

  fs.writeFileSync(output, JSON.stringify(content))
}

if (require.main === module) {
  const args = process.argv.slice(2)

  module.exports(...args)
}

function collectIndexValues (object) {
  const keys = Object.keys(object)

  return keys.reduce((result, key) => {
    const value = object[key]

    if (key === 'schema') {
      return result
    }

    if (key === 'index') {
      return Object.assign(result, value)
    }

    if (typeof value === 'object' && !Array.isArray(value)) {
      return Object.assign(result, {[key]: collectIndexValues(value)})
    }

    return Object.assign(result, {[key]: value})
  }, {})
}
