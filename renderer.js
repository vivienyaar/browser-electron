var ById = function (id) {
	return document.getElementById(id);
}

var jsonfile = require('jsonfile');
var favicon = require('favicon-getter').default;
var path = require('path');
var uuid = require('uuid');
var bookmarks = path.join(__dirname, 'bookmarks.json');

var back = ById('back');
var forward = ById('forward');
var refresh = ById('refresh');
var omni = ById('url');
var dev = ById('console');
var fave = ById('fave');
var list = ById('list');
var popup = ById('fave-popup');
var view = ById('view');