export default {
  state: {
    books: [
      {
        title: "The OutSider",
        description: "Novel",
        promo: false,
        imgSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        id: "6ss6dv9s52-8w59ssacr"
      },
      {
        title: "Institute",
        description: "Novel",
        promo: true,
        imgSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        id: "see8s5c5-8ws_8959ssacr"
      },
      {
        title: "It",
        description: "Novel",
        promo: true,
        imgSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        id: "thtsfr_4s5s-s7e69rb5dv"
      }
    ]
  },
  mutations: {
    create(state, payload) {
      state.books.push(payload);
    }
  },
  actions: {
    createBook({ commit }, payload) {
      payload.id = "sl5svdv8sdvs5v55";
      commit("create", payload);
    }
  },
  getters: {
    books(state) {
      return state.books;
    },
    promo(state) {
      return state.books.filter(b => b.promo);
    },
    myBooks(state) {
      return state.books;
    },
    getById(state) {
      return bookId => state.books.find(i => i.id === bookId);
    }
  }
};
