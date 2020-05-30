const app = new Vue ({
  el: '#app',
  data: {
    mensaje: '"Sometamos o matemos"',
    contador: 0
  },

  computed: {
    invertido() {
      return this.mensaje.split('').reverse().join('');
    },

    color() {
      //ESTE OBJETO TIENE QUE DEVOLVER ALGUN DATO
      return {
        'bg-danger' : this.contador <= 33,
        'bg-warning' : this.contador > 33 && this.contador < 66,
        'bg-success' : this.contador >= 100,

      }
    }

  }
});
