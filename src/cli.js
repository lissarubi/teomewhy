#!/usr/bin/env node

const meow = require('meow');
const teomewhy = require('./index')

// TODO: when tail call optimization is implemented on NodeJS, simplify this.
const cliMode = async ({ flags }) => {
  while(true)
    await teomewhy()
}

const cliInterface = meow({})
cliMode(cliInterface)
