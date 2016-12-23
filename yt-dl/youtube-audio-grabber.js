function uniq(item, pos, self) {
  return self.indexOf(item) == pos;
}

function getStreams() {
  const ytPlayerApi = yt.player.Application.create("player-api", ytplayer.config);
  ytPlayerApi.dispose();
  const videoData = JSON.stringify(ytPlayerApi.getVideoData());
  const streamUrls = videoData.match( /https:[^"]+videoplayback[^"]+/g ).filter(uniq);
  const signatures = videoData.match( /[0-9A-F.]+(?=")/g ).filter(z => z.length > 20).filter(uniq);
  return streamUrls.map((url, i) => url + "&signature=" + signatures[i]);
}

function getAudioUrl(streams, mime = "mp4") {
  const audioRegex = new RegExp( "mime=audio%2f" + mime, "i" );
  for (let i = 0; i < streams.length; i++) {
    if (streams[i].match(audioRegex)) {
      return streams[i];
    }
  }
}

const streams = getStreams();
const audioUrl = getAudioUrl(streams);

console.log(audioUrl);
