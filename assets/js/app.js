var app = new Vue({
  el: "#app",
  data() {
    return {
      appTitle : "Coder Rooster Blog",
      appDesc : {
        status : true,
        parent : "Hi guys!",
        child : "<i>Raiso turu aku ^_^</i>", //use v-html='appDesc.child'
      },
      //data computed
      int1 : 5,
      int2 : 3,
      intResult: null,

    }
  },
  computed: {
    sum: function () {
      return this.int1 + this.int2;
    }
  },
  methods: {
    sumProcess: function(){
      return this.intResult = this.int2 + this.int2;
    }
  },

});
