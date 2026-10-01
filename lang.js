(function () {
  var q = new URLSearchParams(location.search).get("lang");
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = q || saved || "en";
  if (lang !== "ru") lang = "en";

  function apply(l) {
    document.documentElement.lang = l;
    document.querySelectorAll(".lang .plank").forEach(function (b) {
      b.classList.toggle("on", b.dataset.set === l);
    });
    var t = document.querySelector("meta[name='title-" + l + "']");
    if (t) document.title = t.content;
    try { localStorage.setItem("lang", l); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang .plank").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.dataset.set); });
    });
    apply(lang);
  });
  document.documentElement.lang = lang;
})();
