const App = {
  data: () => {
    return {
      burgerState: false,
      active: "",
      eaglePhoto: [
        "images/eagle1.jpg",
        "images/eagle2.jpeg",
        "images/eagle3.jpg",
      ],
      indexPhoto: 0,
    };
  },
  methods: {},
  computed: {},
  watch: {
    burgerState(state) {
      this.$refs.header__menu.style.top = state ? "0" : "-100%";
      active = state ? "active" : "none";
      document.body.style.overflow = state ? "hidden" : "";
    },
    indexPhoto(index) {
      indexPhoto = index;
      this.$refs.mainImage.src = this.eaglePhoto[indexPhoto];
    },
  },
};

let func = App.methods.nextPhoto;

Vue.createApp(App).mount("#app");
