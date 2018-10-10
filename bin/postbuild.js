#!/usr/bin/env node

const fs = require('fs');
const pkg = require(__dirname + '/../package');
const distPkg = require(__dirname + '/../dist/package');

for(const key of [ 'version', 'description', 'repository', 'author', 'license' ]) {
    distPkg[key] = pkg[key];
}

fs.writeFileSync(__dirname + '/../dist/package.json', JSON.stringify(distPkg, null, 2));
fs.writeFileSync(__dirname + '/../dist/README.md', fs.readFileSync(__dirname + '/../README.md'));
fs.writeFileSync(__dirname + '/../dist/neoskop.png', fs.readFileSync(__dirname + '/../neoskop.png'));
