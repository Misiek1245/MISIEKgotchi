#!/bin/sh
tsc --watch js/script.ts & sass --watch css/style.scss css/style.css & live-server
