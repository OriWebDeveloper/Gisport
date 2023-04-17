let boton1 = document.getElementById("menu-item1");
let boton2 = document.getElementById("menu-item2");
let boton3 = document.getElementById("menu-item3");
let boton4 = document.getElementById("menu-item4");

document.getElementById('menu-item1').addEventListener("click", function () {

    if (boton2.classList.contains("active")) {
        boton2.classList.remove("active");
    }

    if (!boton1.classList.contains("active")) {
        boton1.classList.toggle("active");
    }

    if (boton3.classList.contains("active")) {
        boton3.classList.remove("active");
    }
    if (boton4.classList.contains("active")) {
        boton4.classList.remove("active");
    }

});

document.getElementById('menu-item2').addEventListener("click", function () {

    if (boton1.classList.contains("active")) {
        boton1.classList.remove("active");
    }

    if (!boton2.classList.contains("active")) {
        boton2.classList.toggle("active");
    }
    if (boton3.classList.contains("active")) {
        boton3.classList.remove("active");
    }
    if (boton4.classList.contains("active")) {
        boton4.classList.remove("active");
    }
});

document.getElementById('menu-item3').addEventListener("click", function () {

    if (boton2.classList.contains("active")) {
        boton2.classList.remove("active");
    }

    if (!boton3.classList.contains("active")) {
        boton3.classList.toggle("active");
    }

    if (boton4.classList.contains("active")) {
        boton4.classList.remove("active");
    }

    if (boton1.classList.contains("active")) {
        boton1.classList.remove("active");
    }
});

document.getElementById('menu-item4').addEventListener("click", function () {

    if (boton3.classList.contains("active")) {
        boton3.classList.remove("active");
    }

    if (!boton4.classList.contains("active")) {
        boton4.classList.toggle("active");
    }

    if (boton1.classList.contains("active")) {
        boton1.classList.remove("active");
    }

    if (boton2.classList.contains("active")) {
        boton2.classList.remove("active");
    }

});

document.querySelector('#scrollable').addEventListener('wheel', preventScroll, { passive: false });

function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
}



document.getElementById('sport-1').addEventListener("click", function () {
    location.replace('PaginesSports/Futbol.html');
});

document.getElementById('sport-2').addEventListener("click", function () {
    location.replace('PaginesSports/Tennis.html');
});

document.getElementById('sport-3').addEventListener("click", function () {
    location.replace('PaginesSports/Rugby.html');
});

document.getElementById('sport-4').addEventListener("click", function () {
    location.replace('PaginesSports/Golf.html');
});

document.getElementById('sport-5').addEventListener("click", function () {
    location.replace('PaginesSports/Natacio.html');
});

/*chat*/
/*Start of LiveChat (www.livechat.com) code*/
window.__lc = window.__lc || {};
window.__lc.license = 15336585;
; (function (n, t, c) { function i(n) { return e._h ? e._h.apply(null, n) : e._q.push(n) } var e = { _q: [], _h: null, _v: "2.0", on: function () { i(["on", c.call(arguments)]) }, once: function () { i(["once", c.call(arguments)]) }, off: function () { i(["off", c.call(arguments)]) }, get: function () { if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load."); return i(["get", c.call(arguments)]) }, call: function () { i(["call", c.call(arguments)]) }, init: function () { var n = t.createElement("script"); n.async = !0, n.type = "text/javascript", n.src = "https://cdn.livechatinc.com/tracking.js", t.head.appendChild(n) } }; !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e }(window, document, [].slice))
/*End of LiveChat code*/
