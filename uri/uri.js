// Large object with descriptions of each URI scheme, some values taken from official spec
const presetinfo = {
  about: {
    desc: "Widely used by Web browsers and some other applications to designate access to their internal resources, such as settings, application information, hidden built-in functionality, and so on.",
    examples: [
      "about:blank",
      "about:newtab",
      "about:settings"
    ],
    syntax: '"about:" about-token [ about-query ] [ about-fragment ]',
    spec: "RFC-6694",
    specURL: "https://tools.ietf.org/html/rfc6694"
  },
  data: {
    desc: "",
    examples: [
      "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==",
      "data:text/plain,hello%20world",
      "data:text/plain;charset=utf-8;base64,fs"
    ],
    syntax: 'data:[<mediatype>][;base64],<data>',
    spec: "RFC-2397",
    specURL: "https://tools.ietf.org/html/rfc2397"
  }
}

function setpreset(id, presetinfo) {
  console.log(presetinfo.id);
}

const presetbuttons = document.getElementsByClassName("uri")

for (let i = 0; i < presetbuttons.length; i++) {
  presetbuttons[i].addEventListener("click", function() {
    setpreset(presetbuttons[i].id, presetinfo);
  });
}
