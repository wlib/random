/*
 *  Custom URI creator
 *  Made to generate and give information about various schemes
 *  Find schemes here : https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml
 *  By Daniel Ethridge
 */

const schemes = [
  "file",
  "data",
  "sms",
  "tel",
  "mailto",
  "ftp",
  "fax",
  "imap",
  "irc",
  "pop",
  "rtsp",
  "telnet",
  "view-source",
  "about",
  "ws",
  "wss"
]

// This holds all the schemes in an organized way
const schemePresets = {
  Common: [
    schemes[0],
    schemes[1],
    schemes[2],
    schemes[3],
    schemes[4],
    schemes[5],
    schemes[6],
    schemes[7],
    schemes[8],
    schemes[9],
    schemes[10],
    schemes[11],
    schemes[12],
    schemes[13],
    schemes[14],
    schemes[15]
  ]
}

// currentSchemeList holds an array of schemes to show in the schemes div
let currentSchemeList = schemePresets.Common;
// currentScheme is the active scheme right now
let currentScheme = schemes[1];

// Large object with descriptions of each URI scheme, some values taken from official spec
const schemeInfo = {
  file: {
    short: "file: resolve local file system path",
    description: "",
    examples: [
      "file:/",
      "file:/usr/bin/file",
      "file:/etc/hosts"
    ],
    syntax: '"file:" ( [ ("localhost" or [ userinfo "@"] host) or ( ALPHA ":" or "|") ] file-path or file-absolute )',
    inputs: [
      {
        name: "path",
        label: "/path/to/file",
        required: true
      }
    ],
    clickable: false,
    spec: "RFC-6694",
    specURL: "https://tools.ietf.org/html/rfc6694"
  },
  data: {
    short: "data: decode data and load it",
    description: "Some applications that use URLs also have a need to embed (small) media type data directly inline. This works for 'immediate addressing'.",
    examples: [
      "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==",
      "data:text/plain,hello%20world",
      "data:text/plain;charset=utf-8;base64,fs"
    ],
    syntax: '"data:" [ [ mediatype "/" subtype ] *( ";" parameter ) ] [ ";base64" ] "," data',
    inputs: [
      {
        name: "MIME",
        label: "mediatype/subtype",
        required: false
      },
      {
        name: "parameters",
        label: ";key=value;parameter",
        required: false
      },
      {
        name: "base64",
        label: ";base64",
        required: false
      },
      {
        name: "data",
        label: ",data",
        required: true
      }
    ],
    clickable: true,
    spec: "RFC-2397",
    specURL: "https://tools.ietf.org/html/rfc2397"
  },
  sms: {
    short: "sms: send a text message",
    description: "SMS messages are two-way paging messages that can be sent from and received by a mobile phone or a suitably equipped networked device. SMS messages have a maximum length of 160 characters (7-bit characters from the GSM character set [SMS-CHAR]), or 140 octets.",
    examples: [
      "sms:(xxx)xxx-xxxx",
      "sms:123-456-7890,anotherNumber?body=hello%20world"
    ],
    syntax: '"sms:" sms-recipient *( "," sms-recipient ) [ "?" sms-field *( "&" sms-field ) ]',
    inputs: [
      {
        name: "phones(s)",
        label: "123-456-7890",
        required: true
      },
      {
        name: "sms-field",
        label: "?body=bodyOnlyCanBeDeclaredOnce",
        required: false
      }
    ],
    clickable: true,
    spec: "RFC-5724",
    specURL: "https://tools.ietf.org/html/rfc5724"
  }
}

// Update the scheme buttons to hold currentSchemeList
function updateButtons(currentSchemeList, schemeInfo) {
  // Clear the schemes div
  buttonDiv = document.getElementById("schemes");
  while (buttonDiv.hasChildNodes()) {
    buttonDiv.removeChild(buttonDiv.lastChild);
  }
  for (let i = 0; i < currentSchemeList.length; i++) {
    // Generate and append the new buttons
    let button = document.createElement("button");
    let id = currentSchemeList[i];
    button.setAttribute("id", id);
    button.innerText = schemeInfo[id].short;
    buttonDiv.appendChild(button);
    // Add a click listener to each button
    button.addEventListener("click", function() {
      console.log(schemeInfo[id]);
    });
  }
}