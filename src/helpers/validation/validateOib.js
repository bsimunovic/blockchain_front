export function validateOib(pin) {
  if (typeof pin !== "string") return;
  pin = pin.toString();
  if (pin.length !== 11) return false;

  var b = parseInt(pin, 10);
  if (isNaN(b)) return false;

  var a = 10;
  for (var i = 0; i < 10; i++) {
    a = a + parseInt(pin.substr(i, 1), 10);
    a = a % 10;
    if (a === 0) a = 10;
    a *= 2;
    a = a % 11;
  }
  var kontrolni = 11 - a;
  if (kontrolni === 10) kontrolni = 0;

  return kontrolni === parseInt(pin.substr(10, 1));
}
