try {
  let a = prompt("input number a");
  let b = prompt("input number b");
  let c = prompt("input number c");
  let x;
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    throw new Error("введено не число");
  } else if (a == 0 && b != 0) {
    x = -c / b;
  } else if (b == 0 && a != 0) {
    x = Math.sqrt(-c / a);
  } else if (c == 0 && a != 0) {
    x = 0;
    x1 = b / a;
    alert(x1);
  } else {
    D = b * b - 4 * a * c;
    if (D < 0) {
      throw new Error("D не может быть <0");
    } else if (D == 0) {
      x = (-b / 2) * a;
    } else {
      x = (-b + Math.sqrt(D)) / (2 * a);
      x1 = (-b - Math.sqrt(D)) / (2 * a);
      alert(x1);
    }
  }
  alert(x);
} catch (e) {
  alert("Извините, возникла ошибка: " + e.message);
} finally {
  alert("Пока!");
}

