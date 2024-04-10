/* Умови виконання ДЗ

створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price */

var services = {
    "стрижка": parseInt('60 грн'),
    "гоління": parseInt('80  грн'),
    "Миття голови": parseInt('100 грн'),
    price: function () {
        let sum = 0;
        for (let i in this) {
            if (typeof this[i] !== 'function')
                sum += this[i];
        }
 return sum;       
}

    };

    services.minPrice = function() {
        let min = Infinity;
        for (let i in this) {
          if (typeof this[i] === 'number' && this[i] < min )
            min = this[i];
        }
        return min;
      };
      
    services.maxPrice = function() {
        let max = 0;
        for (let i in this) {
          if (typeof this[i] === 'number' && this[i] > max)
            max = this[i];
        }
        return max;
      };
      

      console.log("Total price of all services:", services.price() + ` грн`);
      console.log("Minimum price among services:", services.minPrice() + ` грн`);
      console.log("Maximum price among services:", services.maxPrice() + ` грн`);

      services[`Розбити скло`] = parseInt('200 грн');
      
      console.log("Total price of all services:", services.price() + ` грн` );
      console.log("Minimum price among services:", services.minPrice() + ` грн`);
      console.log("Maximum price among services:", services.maxPrice() + ` грн`);
      


    