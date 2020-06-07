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
      intResultMethod: null,
      intResultMethodParam: null,
      kilometers : 0,
      meters: 0,
      
    }
  },
  computed: {
    sum: function () {
      return this.int1 + this.int2;
    }
  },
  methods: {
    sumProcess: function(){
      return this.intResultMethod = this.int1 + this.int2;
    },
    sumProcessParam: function(int3){
      return this.intResultMethodParam = this.int1 + this.int2 + int3;
    }
  },

});
