/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
	'use strict';

	var roomList = document.querySelector('room-list');

	// See https://github.com/Polymer/polymer/issues/1381
	window.addEventListener('WebComponentsReady', function() {
		roomList.rooms = JSON.parse(JSON.stringify([
			{type: "toilet", label: "frontend szoba - bal", inuse: false},
			{type: "toilet", label: "frontend szoba - jobb", inuse: false},
			{type: "meeting", label: "az egyetlnunk", inuse: true},
			{type: "toilet", label: "editor szoba - zuhany", inuse: true},
			{type: "toilet", label: "editor szoba - kicsi", inuse: false},
			{type: "meeting", label: "a jovobeli", inuse: false}
		]));
	});

})(document);
