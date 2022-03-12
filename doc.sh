#!/bin/bash

jsdoc -c jsdoc.json tree.mjs --readme README.md
xdg-open out/index.html