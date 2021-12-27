

  try {
     let x1 = prompt("input x1");
    let sign = prompt("input sign");
    let x2 = prompt("input x2");
    if (isNaN(x1)|| isNaN(x2) || isNaN(sign) ){
        throw new Error("Данные некорректны");
    }
    function calc() {
   
        document.write(x1 + sign + x2 + "=");
        let f;
        let functionStr = "f = function(x){return " + x1 + sign + x2 + "}";
        eval(functionStr);
        document.write(f());
      }
 } catch(ex) {
    alert("Извините, возникла ошибка: " + ex.message);
 } finally {
    alert( "Пока!");
 }