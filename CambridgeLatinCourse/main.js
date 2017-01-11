function bm() {
    var b, d, e;
    b = document, d = b.body, e = b.createElement("div"), e.innerHTML = "<br>" + a, d.innerHTML = c, d.appendChild(e)
}

function bn(a) {
    return document.getElementById(a)
}

function bo(a, b) {
    bn(a).innerHTML = b
}

function bp(a, b) {
    bn(a).style.cssText += ";" + b
}

function bq(a) {
    bn(a).style.cssText = ""
}

function br(a, b) {
    bn(a).style.width = b
}

function bs(a, b) {
    bn(a).style.height = b
}

function bt(a, b) {
    bn(a).style.display = b || ""
}

function bu(a) {
    bn(a).style.display = "none"
}

function bv(a, b, c) {
    a.attachEvent ? (a["e" + b + c] = c, a[b + c] = function() {
        a["e" + b + c](window.event)
    }, a.attachEvent("on" + b, a[b + c])) : a.addEventListener(b, c, !1)
}

function bx(a) {
    var b;
    return a.target ? b = a.target : a.srcElement && (b = a.srcElement), b.nodeType === 3 && (b = b.parentNode), b.id
}

function by(a) {
    typeof a.stopPropagation == "function" && a.stopPropagation(), typeof a.cancelBubble != "undefined" && (a.cancelBubble = !0), typeof a.preventDefault == "function" && a.preventDefault()
}

function bz() {
    var a, b, c, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A = 780 / 530,
        B;
    typeof window.innerWidth == "number" ? (a = window.innerWidth, b = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (a = document.documentElement.clientWidth, b = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (a = document.body.clientWidth, b = document.body.clientHeight), m = a / b, m < A ? (c = a, l = a / A, n = a / 780) : (l = b, c = b * A, n = b / 530);
    if (J) u = 0, v = 105, w = 55, x = 670, y = 340, z = 655, bt("bgimg"), bt("hdr"), bt("act"), be === 0 && bt("frmbtn"), bt("chkbtn"), bu("ctlbar"), br("bgimg", c + "px"), bs("bgimg", l + "px"), bp("hdr", "top:" + d * n + "px;left:" + e * n + "px;width:" + f * n + "px;height:" + g * n + "px;"), bp("act", "top:" + h * n + "px;left:" + i * n + "px;width:" + j * n + "px;height:" + k * n + "px;"), bp("bdy", "font-size:" + Q * n + "%"), bn("tab") && bp("tab", "font-size:" + n + "rem"), bn("tab2") && bp("tab2", "font-size:" + n + "rem"), o = v * n, p = w * n, q = x * n, s = y * n - u, bp("ctlbar", "top:" + s + "px;left:0px;width:" + 780 * n + "px;"), bp("innr", "top:" + o + "px;left:" + p + "px;width:" + q + "px;height:" + s + "px;"), bp("vtrev", "top:" + o + "px;left:" + p + "px;width:" + q + "px;height:" + s + "px;"), bp("typein", "top:" + o + "px;left:" + p + "px;width:" + q + "px;height:" + s + "px;"), q = z * n, r = s * .7, t = p = 10 * n, bp("lat", "top:" + t + "px;left:" + p + "px;width:" + q + "px;height:" + r + "px;"), o = t + r + (t >> 1), bp("prs", "top:" + o + "px;left:" + p + "px;width:" + q + "px;height:" + (s - (o + 2)) + "px;"), bp("frmbtn", "top:" + 449 * n + "px;left:" + 670 * n + "px;"), bp("bakbtn", "top:" + 449 * n + "px;left:" + 70 * n + "px;"), bp("chkbtn", "top:" + 449 * n + "px;left:" + 70 * n + "px;"), bp("tstbtn", "top:" + 449 * n + "px;left:" + 180 * n + "px;"), bp("stopbtn", "top:" + 449 * n + "px;left:" + 70 * n + "px;");
    else {
        bu("bgimg"), bu("hdr"), bu("act"), bu("frmbtn"), bu("chkbtn"), L || bt("ctlbar"), bp("bdy", "font-size:" + Q * n * 1.2 + "%"), bp("ctlbar", "font-size:16px"), u = bn("shobtn").clientHeight + 4, s = b - u, bp("ctlbar", "top:" + s + "px;left:0;width:" + a + "px;height:" + u + "px;"), bp("innr", "top:0;left:0;width:" + a + "px;height:" + s + "px;"), bp("hlp", "top:0;left:0;width:" + a + "px;height:" + b + "px;"), B = bJ("prs");
        var C = ~~(B * 3.5),
            D = s - C;
        t = ~~(10 * n), q = a - 2 * t, r = D - 2 * t, bp("lat", "top:" + t + "px;left:" + t + "px;width:" + q + "px;height:" + r + "px;"), bp("prs", "top:" + D + "px;left:" + t + "px;width:" + q + "px;height:" + C + "px;")
    }
}

function bA() {
    var c = !1,
        d = !1,
        e = !1,
        f = navigator.userAgent.toLowerCase();
    c = f.indexOf("iphone") !== -1 || f.indexOf("ipod") !== -1 ? !0 : !1, I = f.indexOf("ipad") !== -1 ? !0 : !1, d = f.indexOf("chrome") !== -1 ? !0 : !1;
    var g = document.createElement("div");
    g.setAttribute("ontouchmove", "return;"), !I && !c && (a = a.replace(/<\/style>/, b)), typeof g.ontouchmove == "function" ? (e = !0, d ? H = "click" : c ? H = "touchstart" : H = "touchstart") : (e = !1, H = "mousedown")
}

function bB(a, b) {
    var c = document.getElementsByTagName("head")[0],
        d = document.createElement("script");
    d.type = "text/javascript", d.readyState ? d.onreadystatechange = function() {
        if (d.readyState === "loaded" || d.readyState === "complete") d.onreadystatechange = null, b()
    } : d.onload = function() {
        b()
    }, d.src = a, c.appendChild(d)
}

function bC(a) {
    var b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    b.open("POST", "../../ws2_php/badmagnum.php", !0), b.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), b.send("data=" + encodeURIComponent(a))
}

function bD(a) {
    var b, c, d, e, f, g = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    g.onreadystatechange = function() {
        if (g.readyState === 4 && g.status === 200) {
            f = g.responseText, b = f.split("_"), d = b.length;
            for (c = 0, e = !1; !e && c < d; c++) a === b[c] && (e = !0);
            e || bC(f + "__" + a + "_EX")
        }
    }, g.open("GET", "../../ws2_php/magicnumbers.php", !0), g.send()
}

function bE() {
    var a, b, d, e = {},
        f;
    n = "ets2uk20", o = "", p = "";
    if (window.location.search.length > 1) {
        a = window.location.search.substr(1).split("&"), d = a.length;
        while (d--) b = a[d].split("="), e[b[0]] = b[1];
        e.hasOwnProperty("fn") && (n = e.fn), e.hasOwnProperty("mn") && (o = e.mn), e.hasOwnProperty("magic") && (o = e.magic), e.hasOwnProperty("id") && (p = e.id)
    }
    A = n.length - 1, f = n.charAt(3), F = n.charAt(4), n.length === 7 && f === "1" && +n.charAt(6) < 3 && (z = !0, y = !1), F === "n" && f === "4" && (f = "5"), c = c.replace(/xxxx/, "tlc" + f), n.charAt(A) === "y" && (y = !0, n = n.substring(0, A)), n += ".js", bD(o), bA(), bm(), bp("bakbtn", "display:none"), bp("tstbtn", "display:none"), bp("stopbtn", "display:none"), bB(n, function() {
        bG()
    })
}

function bF(a) {
    var b = [],
        c = a.split(""),
        d = a.length,
        e = 128,
        f = 122,
        g = -1,
        h, i, j = {};
    while (--e > 0) e !== 10 && e !== 13 && e !== 34 && e !== 92 && (j[String.fromCharCode(e)] = f--);
    e = 0;
    while (e < d) {
        h = j[c[e++]];
        if (h < 29)
            while (h--) b[++g] = c[e++];
        else {
            h < 57 ? (h -= 30, i = g - (j[c[e++]] * 123 + j[c[e++]])) : (h -= 59, i = g - (j[c[e++]] + (h >> 3) * 123), h &= 7);
            do b[++g] = b[++i]; while (h--)
        }
    }
    return b.join("")
}

function bG() {
    var a, b, c, d, e, f, g, h, i, j;
    j = bF(dat), j = j.split("@"), D = j[0], (d = D.indexOf("|")) !== -1 && (b = D.substr(0, d), G = +b, G !== 15 && G !== 20 && G !== 25 && (G = 25), D = D.substr(d + 1)), a = /Stage ([0-9]+)/.exec(D), E = +a[1], l = j[2].split("#");
    if (j[3] !== "") {
        t = j[3].split("#"), u = t.length;
        for (f = 0; f < u; f++) {
            w = t[f].split("+"), x = w[0], x = x.split(","), c = x.length;
            for (e = 0; e < c; e++) v[x[e]] = f
        }
    }
    g = 0, h = j[1].replace(/a\.\.\./g, "___"), h = h.replace(/[A-Za-zĀĒĪŌŪāēīōūȳ]+(-[A-Za-zĀĒĪŌŪāēīōūȳ]+)?/g, function(a) {
        return "{" + g++ + a + "}"
    }), i = h, h = h.replace(/^([^=%|]+)/, "<<$1>>"), h = h.replace(/___/g, "a..."), s = g - 1, h = h.replace(/\$\$\$\$\$\$(=[0-9]+)/g, "$1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"), h = h.replace(/\$(=[0-9]+)/g, "$1&nbsp;&nbsp;&nbsp;&nbsp;"), h.indexOf("|") !== -1 && (h = h.replace(/\|\|/g, "|&nbsp;|"), h = h.replace(/\|([^|]+)\|([^#]+)/g, "<span class=left" + G + ">$1</span><span>$2</span>")), h = h.replace(/ =/g, "#="), h = h.replace(/=([0-9]*[05])([^0-9])/g, "<span class=lnum>$1&nbsp;&nbsp;</span>$2"), h = h.replace(/=[0-9]+/g, ""), h = h.replace(/<<([^>]+)>>/, "<div id=ttl>$1</div>"), h = h.replace(/\[\[/g, "<u>"), h = h.replace(/\]\]/g, "</u>"), h = h.replace(/\[/g, "<i>"), h = h.replace(/\]/g, "</i>"), h = h.replace(/=1/, "1"), h = h.replace(/#=[0-9]+/g, "<br>"), h = h.replace(/#/g, "<br>"), h = h.replace(/_/g, "<br>"), h = h.replace(/ ?=[0-9]+/g, "<br>"), h = h.replace(/\{([0-9]+)([^}]+)\}/g, "<span class=w id=w$1>$2</span>"), h = h.replace(/\{/g, "<i>"), h = h.replace(/\}/g, "</i>"), h = h.replace(/\$/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    var k = n.match(/uk/) ? "This activity is designed for the UK 4th Edition." : "This activity is designed for the North American 4th Edition.";
    D = D.replace(/  /g, "&nbsp;&nbsp;"), bv(document, "selectstart", function(a) {
        return a = a || window.event, by(a), !1
    }), bv(document, "mousedown", function(a) {
        return a = a || window.event, by(a), !1
    }), document.body.onselectstart = function() {
        return !1
    }, N = h + "<div id=ender>— <span id=endtxt>◊</span> —</div>", h = i.replace(/^([^=|]+)/, "<div id=ttl>$1</div>"), h = h.replace(/___/g, "a..."), h = h.replace(/#\$/g, "<br>&nbsp;&nbsp;&nbsp;&nbsp;"), h = h.replace(/##/g, "<br><br>"), h.indexOf("|") !== -1 && (h = h.replace(/\|\|/g, " "), h = h.replace(/\|([^|]+)\|/g, "<div class=pers>$1</div>&nbsp;&nbsp;&nbsp;&nbsp;")), g = 0, h = h.replace(/=([0-9]+)/g, function(a, b) {
        return b === g + 1 && g++, "<span class=lno id=ln" + b + ">%1" + b + "%2</span>"
    }), P = g, h = h.replace(/\{([0-9]+)([^}]+)\}/g, "<span class=w id=w$1>$2</span>"), h = h.replace(/\{/g, "<i>"), h = h.replace(/\}/g, "</i>"), h = h.replace(/\[/g, "<i>"), h = h.replace(/\]/g, "</i>"), h = h.replace(/%1/g, "["), h = h.replace(/%2/g, "]"), h = h.replace(/\$/g, "&nbsp;&nbsp;&nbsp;&nbsp;"), O = h.replace(/#/g, " "), bo("lat", N), bo("hlp", $), I ? bo("prs", "<div class=prmpt>Tap a word to see its meaning. Scroll the text by sliding your finger up or down.<br>If you have not upgraded to iOS 5 you need to use two fingers to scroll.</div><div class=ed>" + k + "</div>") : bo("prs", "<div class=prmpt>Click a word to see its meaning, or select a word with the arrow keys.</div><div class=ed>" + k + "</div>"), y ? bo("hdr", D + B) : bo("hdr", D), bo("act", "EXPLORE THE STORY"), bz(), bv(document, H, function(a) {
        var b, c, d, e;
        a = a || window.event, c = bx(a);
        if (L) L = !1, bu("hlp"), bt("innr"), bt("ctlbar"), bz();
        else if (c.match(/^w[0-9]+/)) d = c.substr(1), bK(d);
        else if (c.match(/^ana/)) bL();
        else if (c === "chkbtn") bT();
        else if (c.match(/^bakbtn/)) bN();
        else if (c.match(/^tstbtn/)) bQ();
        else if (c.match(/^stopbtn/)) bP();
        else if (c === "frmbtn") J = !1, K = !0, M = !0, bo("lat", N), Q = 100, e = "background:" + R[T] + ";", bp("innr", e), e += "color:" + W[Y] + ";", e += Z === 1 ? "word-spacing:1.1em;" : "word-spacing:0;", bp("lat", e), bp("prs", e), bu("lnobtn"), bu("smabtn"), bu("bigbtn"), bz(), m >= 0 && bK(m);
        else if (c === "shobtn") J = !0, M = !0, K = !0, bo("lat", N), bp("innr", "background:#fff;"), e = "background:#fff;color:#000000;word-spacing:0;", bp("lat", e), bp("prs", e), Q = 100, bz(), m >= 0 && bK(m);
        else if (c === "hlpbtn") L = !0, bt("hlp", "block"), bu("innr"), bu("ctlbar");
        else if (c === "wrabtn") Q = 100, K = !0, M = !M, bo("lat", M ? N : O), M ? (bu("lnobtn"), bu("smabtn"), bu("bigbtn")) : (bt("lnobtn", "inline-block"), bt("smabtn", "inline-block"), bt("bigbtn", "inline-block")), bz();
        else if (c === "lnobtn") {
            if (!J && !M) {
                K = !K, e = K ? "display:inline" : "display:none";
                for (b = 1; b <= P; b++) bp("ln" + b, e);
                bz()
            }
        } else c === "smabtn" ? !J && !M && (Q > 50 && (Q -= 10), bz()) : c === "bigbtn" ? !J && !M && (Q < 200 && (Q += 10), bz()) : c === "bg1btn" ? J || (T--, T < 0 && (T = S - 1), e = "background:" + R[T] + ";", bp("innr", e), bp("lat", e), bp("prs", e), bp("hlp", e)) : c === "bg2btn" ? J || (T++, T >= S && (T = 0), e = "background:" + R[T] + ";", bp("innr", e), bp("lat", e), bp("prs", e), bp("hlp", e)) : c === "tc1btn" ? J || (Y--, Y < 0 && (Y = X - 1), e = "color:" + W[Y] + ";", bp("lat", e), bp("prs", e), bp("hlp", e), m >= 0 && bK(m)) : c === "tc2btn" ? J || (Y++, Y >= X && (Y = 0), e = "color:" + W[Y] + ";", bp("lat", e), bp("prs", e), bp("hlp", e), m >= 0 && bK(m)) : c === "spcbtn" && (J || (Z === 0 ? Z = 1 : Z = 0, e = Z === 1 ? "word-spacing:1.1em;" : "word-spacing:0;", bp("lat", e), bp("prs", e)));
        return !1
    }), bv(document, "keydown", function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, n, o, p, q, r;
        a = a || window.event, a.keyCode ? k = a.keyCode : a.which && (k = a.which);
        if (be === 2) {
            if (k === 13) return bd ? (bd = !1, bO()) : (q = bn("typeans").value, q = q.replace(/[!?]/g, "").toLowerCase(), p = bj[bc], bo("qans", p), bd = !0, p = p.replace(/[!?]/g, ""), p = p.replace(/ \([^)]+\)/g, ""), p = p.toLowerCase(), p = ":" + p.replace(/, /g, ":") + ":", q !== "" && p.indexOf(":" + q + ":") !== -1 ? (r = "<div id=yes>YES</div>", bb++) : r = "<div id=no>NO</div>", bo("score", bb + " / " + ba), bo("typetick", r), p = p.replace(/^:/, ""), p = p.replace(/:$/, ""), bo("qalte", "<br><span class=prmpt1>Accepted answers:</span><br>&nbsp;&nbsp;<span class=altwds>" + p.replace(/:/g, "<br>&nbsp;&nbsp;") + "</span><br><br><span class=prmpt2>Press the Enter key to continue.</span>")), by(a), !1
        } else if (be === 0) {
            l = m;
            switch (k) {
                case 35:
                    m = s;
                    break;
                case 36:
                    m = 0;
                    break;
                case 37:
                    m > 0 && --m;
                    break;
                case 39:
                    m < s && ++m;
                    break;
                case 38:
                    if (m > 0) {
                        d = m, n = bH(d);
                        while (d > 0) d--, o = bH(d), o < n && (n = o, m = d, d = 0);
                        d = m;
                        while (d > 0) d--, o = bH(d), o < n && (m = d + 1, d = 0)
                    }
                    break;
                case 40:
                    if (m < s) {
                        d = m, n = bH(d);
                        while (d < s) d++, o = bH(d), o > n && (m = d, d = s)
                    }
            }
            if (m !== l) return bK(m), c = bn("w" + m), b = bn("lat"), e = b.offsetHeight, g = bI("lat"), h = g + e, f = b.scrollTop, i = bI("w" + m) - f, j = i + c.offsetHeight, j > h ? b.scrollTop = f + (j - h) : i < g && (b.scrollTop = f - (g - i)), by(a), !1
        }
    })
}

function bH(a) {
    return bn("w" + a).offsetTop
}

function bI(a) {
    var b = 0,
        c = document.getElementById(a);
    do b += c.offsetTop; while ((c = c.offsetParent) !== null);
    return b
}

function bJ(a) {
    var b = bn(a),
        c, d = document.createElement(b.nodeName);
    return d.setAttribute("style", "margin:0;padding:0;font-family:" + b.style.fontFamily + ";font-size:" + b.style.fontSize), d.innerHTML = "test", d = b.parentNode.appendChild(d), c = d.clientHeight, c === 0 && (c = d.offsetHeight), d.parentNode.removeChild(d), c
}

function bK(a) {
    var b, c;
    c = J ? "color:#000000;" : "color:" + W[Y] + ";";
    for (b = 0; b < r; b++) bq("w" + q[b]);
    bp("w" + a, J ? "color:#c00000;" : "color:" + U[Y] + ";"), q[0] = a, r = 1, m = a, bM()
}

function bL() {
    y ? (y = !1, bo("hdr", D + C)) : (y = !0, bo("hdr", D + B)), m !== -1 && bM()
}

function bM() {
    var a, b, c, d = "",
        e, f, g, h, i, j, k;
    h = bS(m), j = J ? "#c00000" : U[Y], k = J ? "#1868c8" : V[Y];
    if (v[m] !== undefined) {
        e = t[v[m]].split("+"), e[1] !== "" && (h += e[2] === "" ? "{" + e[1] + "}" : "{" + e[1] + "} " + e[2]), f = e[0].split(","), g = f.length, i = "color:" + j + ";";
        for (a = 0; a < g; a++) b = f[a], b !== m && (bp("w" + b, i), q[r++] = b)
    }
    h = h.replace(/\[/g, "<span style='color:" + k + "'>"), h = h.replace(/\]/g, "</span>"), h = h.replace(/\{/g, "<br>&nbsp;&nbsp;&nbsp;<span style='color:" + j + "'>"), h = h.replace(/\} /g, "</span>&nbsp;&nbsp;"), h = h.replace(/\}/g, "</span>"), c = h.split("^"), i = "<span style='color:" + j + "'>" + c[3] + "</span>&nbsp;&nbsp;" + c[4], y && (d = bw.expand(c[2], E, F), d !== "" && (i += "<div style='color:" + k + "'>" + d + "</div>")), bo("prs", i), bg[m] = 1
}

function bN() {
    bp("chkbtn", "display:inline"), bp("bakbtn", "display:none"), bp("tstbtn", "display:none"), bp("stopbtn", "display:none"), bp("innr", "display:block"), bp("vtrev", "display:none"), bp("typein", "display:none"), bt("frmbtn"), bo("prs", ""), m = -1;
    for (var a = 0; a < r; a++) bp("w" + q[a], "color:" + W[Y] + ";");
    r = 0, be = 0
}

function bO() {
    var a, b, c;
    a = c = Math.floor(Math.random() * _);
    while (bh[a] === 1) {
        a++, a >= _ && (a = 0);
        if (a === c)
            for (b = 0; b < _; b++) bh[b] = 0
    }
    bh[a] = 1, bc = a, bo("qtyp", bi[a] + "<span class=qpos>&nbsp;&nbsp;(" + bl[bk[a]] + ")</span>"), bo("qans", "&nbsp;"), bo("typetick", ""), bo("qalte", "<br>Type your answer then hit Enter to check it."), bn("typeans").value = "", bn("typeans").focus(), ba++
}

function bP() {
    bN()
}

function bQ() {
    be = 2, bp("chkbtn", "display:none"), bp("bakbtn", "display:none"), bp("tstbtn", "display:none"), bp("stopbtn", "display:block"), bp("typein", "display:block"), bp("vtrev", "display:none"), ba = 0, bb = 0, bO()
}

function bR(a) {
    var b, c, d, e, f, g, h, i, j, k, m;
    c = l[a].split("^"), e = c[2], b = c[3], g = c[4], f = e.charAt(0), bf[f] = 1, /<i>m\.<\/i>a Sabine/.test(b) && (b = b.replace(/a Sabine/, ""), g = "a Sabine"), g = g.replace(/[:{].+/, ""), b = b.replace(/:.+/, ""), b = b.replace(/!/g, ""), b = b.replace(/ \([^)]+\)/g, ""), b = b.replace(/[\[\]]/g, ""), b = b.replace(/<[^>]+>/g, ""), b = b.replace(/m\.\/f\./, "m.f."), h = /^[A-Z]([a-z'])?\./.test(b);
    if (f === "n" && e.charAt(1) !== "i" && !h) {
        b = b.replace(/deus \[dei_, di_ \(nom\. pl\.\)\]/, "deus, dei_"), b = b.replace(/tripodes, tripodum, m\.pl\. \(acc\.pl\. tripodas\)/, "tripodes, tripodum, m.pl."), b = b.replace(/vi_s, vis/, "vi_s"), b = b.replace(/um m\./, "rum, m."), b = b.replace(/,,/g, ","), b = b.replace(/,$/g, ""), b = b.replace(/, gen\./, ", "), c = b.split(/, ?/), d = c.length, i = c[0], j = k = "", m = d === 1, d === 2 && (j = c[1], m = !0), d === 3 && c[2].charAt(1) === "." && (j = c[1], k = c[2], m = !0);
        if (m && d > 1) {
            E < 17 && (b = i, k !== "" && (b += ", " + k));
            if (F === "n" && E < 15 || F === "u" && E < 18) b = b.replace(/, [fmn]\..*/, "")
        }
    }
    return b + " == " + g + "#" + f
}

function bS(a) {
    var b, c, d, e, f, g, h, i, j, k, m;
    return c = l[a].split("^"), b = c[3], f = c[2].charAt(0), g = c[2].charAt(1), /<i>m\.<\/i>a Sabine/.test(b) && (b = b.replace(/a Sabine/, ""), c[4] = english), b = b.replace(/deus \[dei_, di_ \(nom\. pl\.\)\]/, "deus, dei_"), b = b.replace(/tripodes, tripodum, m\.pl\. \(acc\.pl\. tripodas\)/, "tripodes, tripodum, m.pl."), b = b.replace(/vi_s, vis/, "vi_s"), b = b.replace(/um m\./, "rum, m."), b = b.replace(/!/g, ""), h = /^[A-Z]([a-z'])?\./.test(b), f === "n" && g !== "i" && !h && (b = b.replace(/ \([^)]+\)/g, ""), b = b.replace(/[\[\]]/g, ""), b = b.replace(/<[^>]+>/g, ""), b = b.replace(/m\.\/f\./, "m.f."), b = b.replace(/,,/g, ","), b = b.replace(/,$/g, ""), d = b.split(/, ?/), e = d.length, i = d[0], j = k = "", m = e === 1, e === 2 && (j = d[1], m = !0), e === 3 && d[2].charAt(1) === "." && (j = d[1], k = d[2], m = !0), m && e > 1 && (E > 12 && E < 17 && (b = i, k !== "" && (b += ", " + k)), E > 12 && (F === "n" && E < 15 || F === "u" && E < 18) && (b = b.replace(/, [fmn]\..*/, "")))), c[3] = b, c.join("^")
}

function bT() {
    var a = [],
        b = [],
        c = [],
        d, e = "",
        f = "",
        g = 0,
        h = {},
        i, j = "",
        k = "",
        l = 0;
    bf = {};
    for (d = 0; d <= s; d++) bg[d] === 1 && (f = bR(d), h[f] = 1, g++);
    if (g === 0)
        for (d = 0; d <= s; d++) f = bR(d), h[f] = 1, g++;
    b = [];
    for (var m in bf) bf.hasOwnProperty(m) && b.push(m);
    b.sort();
    for (var n in h) h.hasOwnProperty(n) && (f = n, f = f.replace(/\u0100/g, "a"), f = f.replace(/\u0101/g, "a"), f = f.replace(/\u0112/g, "e"), f = f.replace(/\u0113/g, "e"), f = f.replace(/\u012A/g, "i"), f = f.replace(/\u012B/g, "i"), f = f.replace(/\u014C/g, "o"), f = f.replace(/\u014D/g, "o"), f = f.replace(/\u016A/g, "u"), f = f.replace(/\u016B/g, "u"), f = f.replace(/\u0233/g, "y"), a[l++] = f + "::" + n);
    _ = l, a.sort(), j = "<table id=tab>";
    for (d = 0; d < l; d++) b = a[d].replace(/^[^:]+::/, "").split(" == "), k = b[0], c = b[1].split("#"), e = c[0], i = c[1], k = k.replace(/\[/g, "<i>"), k = k.replace(/\]/g, "</i>"), bi[d] = k, bj[d] = e, bk[d] = i, bh[d] = 0, j += "<tr><td class=lat>" + k + "</td><td class=pos>" + bl[i] + "</td><td class=eng>" + e + "</td></tr>";
    j += "</table>", bp("innr", "display:none"), bp("vtrev", "display:block"), bo("vtrev", j), bp("chkbtn", "display:none"), bp("bakbtn", "display:inline"), bp("tstbtn", "display:inline"), bp("stopbtn", "display:none"), be = 1, bu("frmbtn"), bz()
}
"use strict";
var a = "<style>*{margin:0;padding:0}body{font-size:100%;font-family:Arial,'Arial Unicode MS',Helvetica,'Lucida Grande','Lucida Sans Unicode','Microsoft Sans Serif',Tahoma,sanserif;overflow:hidden;}div{-webkit-tap-highlight-color:rgba(0,0,0,0);-moz-tap-highlight-color:rgba(0,0,0,0);}#ender{text-align:center;}#endtxt{font-size:80%;}#ttl{margin-bottom:.3em;text-align:center;font-weight:bold}#bb{position:absolute;top:491px;left:730px}#act{position:absolute;top:35px;left:316px;width:262px;height:22px;text-align:center;line-height:150%;margin:0;padding:0;overflow:hidden}#hdr{position:absolute;top:73px;left:55px;width:670px;height:30px;line-height:190%;margin:0;padding:0;overflow:hidden}#hlp{position:absolute;top:0px;left:0px;width:670px;height:30px;line-height:150%;margin:0;padding:0;overflow:auto;display:none;cursor:pointer;}.hlppar{line-height:150%;margin:0;padding:.3em 1em 0 1em;}#hlpend{line-height:150%;margin:0;padding:2em 1em 0 1em;text-align:center;font-style:italic;}#innr{position:absolute;top:105px;left:55px;width:670px;height:340px;background:#fff;line-height:150%;margin:0;padding:0;overflow:hidden;}#lat{position:absolute;top:10px;left:10px;width:650px;height:240px;background:#fff;line-height:150%;margin:0;padding:0;overflow:auto;}#prs{position:absolute;top:240px;left:10px;width:650px;height:80px;border-top:1px solid #c0c0c0;background:#fff;line-height:150%;margin:0;padding:0.1em 0 0 0;overflow:auto;}#ctlbar{position:absolute;display:block;font-size:0.8em;height:1.8em;line-height:1.8em;padding:1 0 0 0;background-color:#efe8e0;color:#fff;margin:0;}.abtn{position:absolute;display:block;font-size:0.9em;padding:0.1em 0.2em;background-color:#666;color:#fff;border:1px solid #444;margin:0.1em 0 0 0;text-align:center;cursor:pointer;}#bgimg{position:absolute}.prmpt{text-align:center;margin-top:.2em;font-style:italic;}.ed{text-align:center;margin-top:.2em;font-style:italic;}.w{text-decoration:none;outline:none;padding:.3em .2em .3em .2em;cursor:pointer}.hili{color:#fff;background:#546c85;font-size:85%;padding:0 .2em 0 .2em}.loli{color:#a0a0a0;background:#404040;font-size:85%;padding:0 .2em 0 .2em}.showana{color:#606060;float:right;cursor:pointer;margin-right:1em}.lnum{color:#808080;float:right}.left15{float:left;display:inline-block;width:15%}.left20{float:left;display:inline-block;width:20%}.left25{float:left;display:inline-block;width:25%}.lno {padding: 0 .2em 0 .2em;}.btn{display:block;padding:0 0.3em;min-width:2em;background-color:#6f6860;color:#fff;margin:0 0 0 1.0em;text-align:center;cursor:pointer;float:left;}table{width:98%;margin:0;padding:0;}tr{margin:0;}td{margin:0;padding:0.1em 1.5em 0.1em 0.5em;}td{vertical-align:top;}td.lat{color:#800000;padding-left:1.5em;text-indent:-1.0em;}td.pos{color:#008000;padding-left:1.5em;text-indent:-1.0em;font-style:italic;}td.eng{color:#000080;}.btn{position:absolute;display:none;font-size:80%;background:#e4e4e4;color:#c00;text-align:center;text-decoration:none;border:1px #666 solid;padding:2px 0.5em 1px 0.5em;line-height:150%;}.btn:active{background:#fff;color:#000;}.btn2{display:inline-block;cursor:pointer;font-size:80%;background:#e4e4e4;color:#000;text-align:center;text-decoration:none;border:1px #666 solid;padding:2px 0.5em 1px 0.5em;margin:0 0 0 .5em;line-height:150%;}.btn2:active{background:#fff;color:#000;}#vtrev{font-size:100%;position:absolute;top:105px;left:56px;width:650px;height:341px;background:#ffffff;line-height:100%;margin:0;overflow:auto;display:none;}span.qpos{color:#808080;font-style:italic;}span.prmpt1{color:#000060;}span.prmpt2{color:#606060;}span.altwds{color:#c00000;}span.prs{color:#c00000;}span.scor{color:#0000c0;float:right;}span.welldone{color:#600060;}#score{color:#0000c0;font-size:150%;margin-left:2.0em;}#yes{color:#00c000;font-size:110%;margin:1.0em 0 0 1.5em;}\t#no{color:#c00000;font-size:110%;margin:1.0em 0 0 1.5em;}\t#typein{position:absolute;display:none;}#qtyp{font-size:150%;color:#0000c0;padding-top:0.5em;}#qans{font-size:150%;color:#c00000;}#typeans{font-size:130%;width:70%;height:1.5em;margin-top:0.5em;padding-left:0.2em;}#qalte{font-size:120%;margin:10px 0 0 0;color:#606060;}td.c1{width:15%;}td.c2{height:1.5em;}td.lat{color:#800000;padding-left:1.5em;text-indent:-1.0em;}td.pos{color:#008000;padding-left:1.5em;text-indent:-1.0em;font-style:italic;}td.eng{color:#000080;}</style>",
    b = ".abtn:hover{background-color:#eee;color:#a00;}.btn:hover{background-color:#dfd8d0;color:#a00;}</style>",
    c = "<img id=bgimg src='xxxx.png' alt='' /><div id=ctlbar><div class=btn2 id=hlpbtn>help</div><div class=btn2 id=shobtn>view</div><div class=btn2 id=bg2btn>background</div><div class=btn2 id=tc2btn>text</div><div class=btn2 id=spcbtn>space</div><div class=btn2 id=wrabtn>breaks</div><div class=btn2 id=lnobtn>numbers</div><div class=btn2 id=smabtn>a-</div><div class=btn2 id=bigbtn>a+</div></div><div id=act></div><div id=hdr></div><div id=hlp></div><div id=innr><div id=lat></div><div id=prs></div></div><div id=vtrev></div><div id=typein><table id=tab2><tr><td class=c1></td><td class=c2 id=qtyp></td></tr><tr><td class=c1></td><td class=c2 id=qans></td></tr><tr><td class=c1 id=typetick></td><td class=c2><input type=text id=typeans autocapitalize=off autocorrect=off autocomplete=off /><span id=score>0 / 0</span></td></tr><tr><td class=c1></td><td class=c2 id=qalte></td></tr></table></div><div id=chkbtn class=abtn>Word&nbsp;check</div><div id=bakbtn class=abtn>Back&nbsp;to&nbsp;story</div><div id=tstbtn class=abtn>Start&nbsp;test</div><div id=stopbtn class=abtn>Stop&nbsp;test</div><div id=frmbtn class=abtn>View</div>",
    d = 73,
    e = 65,
    f = 670,
    g = 30,
    h = 35,
    i = 316,
    j = 262,
    k = 22,
    l = [],
    m = -1,
    n = "",
    o = "",
    p = "",
    q = [],
    r = 0,
    s, t = [],
    u = 0,
    v = [],
    w = [],
    x = [],
    y = !0,
    z = !1,
    A, B = "<span class=showana id=anay1>show analysis: <span class=hili id=anay2>YES</span> <span class=loli id=anay3>NO</span></span>",
    C = "<span class=showana id=anan1>show analysis: <span class=loli id=anan2>YES</span> <span class=hili id=anan3>NO</span></span>",
    D = "",
    E, F, G = 25,
    H = "",
    I = !1,
    J = !0,
    K = !0,
    L = !1,
    M = !0,
    N = "",
    O = "",
    P = 0,
    Q = 100,
    R = ["#fff", "#fdfbac", "#66cdcc", "#cdffcc", "#ffcccb", "#ffffff", "#cccccc", "#d9d9ff", "#fbb167", "#ff4646", "#000000"],
    S = R.length,
    T = 0,
    U = ["#c00000", "#ffff00", "#0000ff", "#ff0000", "#ff0000", "#ff0000", "#0000ff", "#00ee00"],
    V = ["#1868c8", "#0000ff", "#00ee00", "#1868c8", "#0000ff", "#1868c8", "#ff0000", "#0000ff"],
    W = ["#000000", "#ffffff", "#ff0000", "#fdfbac", "#cdffcc", "#66cdcc", "#ffa500", "#ee82ee"],
    X = W.length,
    Y = 0,
    Z = 0,
    $ = "<div class=hlppar></div><div class=hlppar>‘view’ shows the Latin Companion frame again.</div><div class=hlppar>‘background’ cycles through the background colours.</div><div class=hlppar>‘text’ cycles through the text colours.</div><div class=hlppar>‘space’ makes the text spacing wider.</div><div class=hlppar>‘breaks’ hides line breaks and shows three more buttons.</div><div class=hlppar>‘numbers’ toggles the display of line numbers.</div><div class=hlppar>‘a-’ reduces the text size.</div><div class=hlppar>‘a+’ increases the text size.</div><div id=hlpend>Press anywhere to remove this help.</div>",
    _ = 0,
    ba = 0,
    bb = 0,
    bc = 0,
    bd = !1,
    be = 0,
    bf = {},
    bg = [],
    bh = [],
    bi = [],
    bj = [],
    bk = [],
    bl = {
        a: "adj",
        c: "conj",
        d: "adverb",
        i: "interj",
        n: "noun",
        p: "prep",
        r: "pronoun",
        v: "verb"
    },
    bw = {};
bw.order = [
    [0, 1, 2, 3, 4, 6, 7, 5, 8, 9],
    [0, 1, 2, 3, 4, 6, 7, 5, 8, 9],
    [0, 1, 2, 3, 4, 6, 7, 5, 8, 9],
    [0, 4, 6, 7, 5, 2, 3, 1, 8, 9],
    [0, 4, 3, 1, 2, 6, 7, 5, 8, 9]
], bw.xa = {
    "c--------": "conjunction",
    "d--------": "adverb",
    "d-------c": "comparative adverb",
    "d-------s": "superlative adverb",
    "i--------": "interjection",
    "i----p---": "interjection, plural",
    "i----s---": "interjection, singular",
    "ni-------": "indeclinable noun",
    "p--------": "preposition",
    "pa-------": "preposition: with the accusative case",
    "pb-------": "preposition: with the ablative case",
    "pc-------": "preposition: with the accusative or ablative case"
}, bw.xnuk = [{
    a: 15,
    c: 35,
    d: 22,
    i: 35,
    n: 3,
    p: 29,
    r: 19,
    v: 5
}, {
    d: 20,
    i: 25,
    g: 27,
    j: 27,
    n: 14,
    p: 21,
    s: 25
}, {
    f: 34,
    i: 7,
    p: 7,
    x: 7,
    y: 34,
    z: 17
}, {
    a: 30,
    d: 33,
    i: 13,
    p: 30
}, {
    a: 5,
    b: 5,
    c: 5
}, {
    p: 5,
    s: 6
}, {
    a: 3,
    b: 29,
    d: 10,
    g: 18,
    l: 35,
    n: 3,
    v: 20
}, {
    c: 19,
    f: 19,
    m: 19,
    n: 19
}, {
    c: 11,
    s: 9,
    x: 12
}, {
    q: 14,
    n: 12
}], bw.xnpuk = [{
    a: 15,
    c: 35,
    d: 22,
    i: 35,
    n: 3,
    p: 29,
    r: 19,
    v: 5
}, {
    d: 20,
    i: 25,
    g: 27,
    j: 27,
    n: 14,
    p: 21,
    s: 25
}, {
    f: 33,
    i: 7,
    p: 7,
    x: 7,
    y: 34,
    z: 17
}, {
    a: 23,
    d: 33,
    i: 13,
    p: 22
}, {
    a: 5,
    b: 5,
    c: 5
}, {
    p: 5,
    s: 6
}, {
    a: 3,
    b: 29,
    d: 10,
    g: 18,
    l: 35,
    n: 3,
    v: 20
}, {
    c: 19,
    f: 19,
    m: 19,
    n: 19
}, {
    c: 11,
    s: 9,
    x: 12
}, {
    q: 14,
    n: 12
}], bw.xnna = [{
    a: 15,
    c: 35,
    d: 22,
    i: 35,
    n: 3,
    p: 15,
    r: 16,
    v: 5
}, {
    d: 20,
    i: 25,
    g: 27,
    j: 27,
    n: 14,
    p: 21,
    s: 25
}, {
    f: 34,
    i: 7,
    p: 7,
    x: 7,
    y: 34,
    z: 17
}, {
    a: 30,
    d: 33,
    i: 13,
    p: 30
}, {
    a: 5,
    b: 5,
    c: 5
}, {
    p: 5,
    s: 6
}, {
    a: 3,
    b: 15,
    d: 10,
    g: 18,
    l: 35,
    n: 3,
    v: 20
}, {
    c: 16,
    f: 16,
    m: 16,
    n: 16
}, {
    c: 11,
    s: 9,
    x: 12
}, {
    q: 14,
    n: 12
}], bw.xnpna = [{
    a: 15,
    c: 35,
    d: 22,
    i: 35,
    n: 3,
    p: 15,
    r: 16,
    v: 5
}, {
    d: 20,
    i: 25,
    g: 27,
    j: 27,
    n: 14,
    p: 21,
    s: 25
}, {
    f: 33,
    i: 7,
    p: 7,
    x: 7,
    y: 34,
    z: 17
}, {
    a: 23,
    d: 33,
    i: 13,
    p: 22
}, {
    a: 5,
    b: 5,
    c: 5
}, {
    p: 5,
    s: 6
}, {
    a: 3,
    b: 15,
    d: 10,
    g: 18,
    l: 35,
    n: 3,
    v: 20
}, {
    c: 16,
    f: 16,
    m: 16,
    n: 16
}, {
    c: 11,
    s: 9,
    x: 12
}, {
    q: 14,
    n: 12
}], bw.xc = [{
    a: "adjective:",
    n: "noun:",
    r: "pronoun:",
    v: "verb:"
}, {
    d: "imperative",
    i: "indicative",
    g: "gerund",
    j: "gerundive",
    n: "infinitive",
    p: "participle",
    s: "subjunctive"
}, {
    f: "future",
    i: "imperfect",
    p: "present",
    x: "perfect",
    y: "future perfect",
    z: "pluperfect"
}, {
    a: "active",
    d: "active (deponent)",
    i: "active (irregular)",
    p: "passive"
}, {
    a: "1st person",
    b: "2nd person",
    c: "3rd person"
}, {
    p: "plural",
    s: "singular",
    p2: "plur.",
    s2: "sing."
}, {
    a: "accusative",
    b: "ablative",
    d: "dative",
    g: "genitive",
    l: "locative",
    n: "nominative",
    v: "vocative"
}, {
    c: "masc./fem.",
    f: "feminine",
    m: "masculine",
    n: "neuter",
    f2: "fem.",
    m2: "masc.",
    n2: "neut."
}, {
    c: "comparative",
    s: "superlative",
    x: "+ -cum = with"
}, {
    q: "(+ -que = and)",
    n: "(+ -ne asking a question)"
}], bw.xx1 = {
    a: "'I'",
    b: "'you'",
    c: "'he/she/it'",
    as: "'I'",
    bs: "'you' [singular]",
    cs: "'he/she/it'",
    ap: "'we'",
    bp: "'you' [plural]",
    cp: "'they'"
}, bw.xx2 = {
    as: "1st person singular (I)",
    bs: "2nd person singular (you sing.)",
    cs: "3rd person singular (he/she/it)",
    ap: "1st person plural (we)",
    bp: "2nd person plural (you plur.)",
    cp: "3rd person plural (they)"
}, bw.expand = function(a, b, c) {
    var d = +b,
        e = bw.xa,
        f = bw.xc,
        g = bw.xx1,
        h = bw.xx2,
        i = c === "u" ? bw.xnuk : bw.xnna,
        j = c === "u" ? bw.xnpuk : bw.xnpna,
        k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = "",
        E, F;
    r = a.charAt(0), p = i[0][r];
    if (d >= p) {
        B = a.substr(0, 9);
        if (e[B] !== undefined) C = a.substr(9, 1), D = e[B], C !== "-" && (D += " " + f[9][C]);
        else {
            k = a.split(""), s = k[1], t = k[2], u = k[3], v = k[4], w = k[5], x = k[6], y = k[7], z = k[8], A = k[9], F = !1, r === "v" && (F = !0, i[4][v] > d ? D = "verb" : s === "p" ? i[6][x] < d ? D = "verb: participle" : (D = "verb:", j[2][t] < d && (D += " " + f[2][t]), j[3][u] < d && (D += " " + f[3][u]), D += " " + f[1][s], l = [], i[6][x] < d && l.push(f[6][x]), i[7][y] < d && l.push(f[7][y]), i[5][w] < d && l.push(f[5][w]), l.length > 0 && (D += " (" + l.join(" ") + ")"), A !== "-" && (D += " " + f[9][A])) : s !== "i" && s !== "s" || y === "-" ? s === "n" && y !== "-" ? (D = "verb:", j[2][t] < d && (D += " " + f[2][t]), j[3][u] < d && (D += " " + f[3][u]), D += " " + f[1][s], l = [], i[6][x] < d && l.push(f[6][x]), i[7][y] < d && l.push(f[7][y]), i[5][w] < d && l.push(f[5][w]), l.length > 0 && (D += " (" + l.join(" ") + ")"), A !== "-" && (D += " " + f[9][A])) : s === "d" && d < 21 ? (D = "verb: ", d < 13 ? (E = v, d >= i[5][w] && (E += w), D += g[E]) : (E = v + w, D += h[E]), i[2][t] < d && (D += " " + f[2][t]), A !== "-" && (D += " " + f[9][A])) : F = !1 : (D = "verb: " + f[4][v] + " " + f[5][w], i[2][t] < d && (D += " " + f[2][t]), i[3][u] < d && (D += " " + f[3][u]), D += " " + f[1][s] + " (" + f[7][y] + ")", A !== "-" && (D += " " + f[9][A])));
            if (!F) {
                o = "anrv".indexOf(k[0]);
                if (o !== -1)
                    if ((r === "n" || r === "a") && i[6][x] > d) D = r === "n" ? "noun" : "adjective";
                    else {
                        r === "v" && s === "p" && o++, q = bw.order[o], n = 0, D = f[0][k[0]];
                        for (m = 1; m < 10; m++) n = q[m], k[n] !== "-" && i[n][k[n]] <= d && (D += " " + f[n][k[n]])
                    }
            }
        }
    }
    return D
}, bv(window, "resize", function() {
    bz()
}), bE()
