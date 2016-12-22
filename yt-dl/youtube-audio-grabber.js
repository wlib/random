/* Thank you @svnpenn for insight - http://superuser.com/a/773998 */

function parse(query) {
    const allpairs = query.split("&");
    const out = {};
    for (let i = 0; i < allpairs.length; i++) {
      let pair = allpairs[i].split("=");
      let key = pair[0];
      let val = pair[1];
      out[key] = val;
    }
  return out;
}

function getAudio(objects, mime = "webm") {
  const regex = new RegExp("audio/" + mime + ".+");
  const output = [];
  for (let i = 0; i < objects.length; i++) {
    const streamType = decodeURIComponent(objects[i].type);
    if ( streamType.match(regex) ) {
      output.push(objects[i]);
    }
  }
  return output;
}

const info = ytplayer.config.args.adaptive_fmts;
const infoArray = info.split(",");
let objects = [];

for (let i = 0; i < infoArray.length; i++) {
  objects.push( parse(infoArray[i]) );
  objects[i].url = decodeURIComponent(objects[i].url) + "&ratebypass=yes&ratebypass";
}

if (objects[0].s) {
  //
}
