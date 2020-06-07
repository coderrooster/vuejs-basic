var learn = new Vue({
  el: "#app-learn",
  data() {
    return {
      appTitle : "Learn Vue.js",
      appDesc : {
        status : true,
        parent : "Hi guys!",
        child : "<i>lets start learn vue.js :D</i>", //use v-html='appDesc.child'
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
