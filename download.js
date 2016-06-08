var ytdl = require('ytdl-core');
global.setImmediate = require('timers').setImmediate;
var Dexie = require("dexie");


console.log('starting with database');

var db = new Dexie("Vids");
db.version(1).stores({
    videos: "++id,data"
});

console.log('database created');


$.getJSON("info.json", function (json) {
    var info = json;

    db.videos.add({
        data:
        ytdl.downloadFromInfo(info)
    });

    console.log('data added');
});

