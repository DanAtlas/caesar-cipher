function caesar_code(a, d) {
  var c = document.getElementById("write-text"),
      g = document.getElementById("answer-text"),
      b = "abcdefghijklmnopqrstuvwxyz",
      e = "",
      d = d % b.length || 0,
      c = c.value.toLowerCase(),
      f = b.substr(d) + b.substr(0, d);
  1 == a && (a = b, b = f, f = a);
  for (i = 0; i < c.length; i++) a = b.lastIndexOf(c.charAt(i)), a = f.charAt(a) || c.charAt(i), e += a;
  g.value = e
}