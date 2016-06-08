var fs = require('fs');
var ytdl = require('ytdl-core');

ytdl.getInfo('http://www.youtube.com/watch?v=A02s8omM_hI', function (err, data) {
  fs.writeFile('info.json', JSON.stringify(data, null, 4), function (err2) {
    if (err2) {
      console.log(err2);
    } else {
      console.log("JSON saved to info.js");
    }
  });
});