#!/bin/bash

npm install

npm set strict-ssl false

adonis key:generate

adonis serve --dev
