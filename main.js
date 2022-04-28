const app = Vue.createApp({
  data () {
    return {
      title: "Eventos de Comedia",
      tickets: 10,
      image: "http://www.fillmurray.com/200/200",
      details: ["Divertidos comics", "Mimo Artistico", "Sátira", "Sketches"],
      cart: 0,
      ticketTypes: [],
      hidden: false,
      message: '',
      error: false
    }
  },
  methods: {
    updateCart(number = 1) {
      this.cart += number
      this.tickets -= number
    },
    updateImage(id) {
      this.image = this.ticketTypes.filter(type => type.id === id)[0].image
    },
    buyTickets(numberOfTickets, nameOfTickets) {
      console.log(`Comprar ${numberOfTickets} tickets ${nameOfTickets}.`)
      this.cart = this.cart + numberOfTickets
    }
  },
  computed: {
    soldOut () {
      return this.tickets === 0;
    }
  },
  mounted() {
    axios.get('https://raw.githubusercontent.com/doingandlearning/vue-fundamentals/main/data.json')
    .then(response => this.ticketTypes = response)
    .catch(error => this.error = true)
  }
});