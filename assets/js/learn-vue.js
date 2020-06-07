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
      //Directive v-model
      inputText1: '',
      inputText2: '',
      inputRadio: '',
      inputCheckbox:[],
      selectInput:'',
      //Directive v-bind
      sourceImg: 'https://secureservercdn.net/198.71.233.204/40d.160.myftpupload.com/wp-content/uploads/2018/01/StepstoSuccesslogo-186x180.png',
      sourceUrl: 'https://google.com/',
      sourceCssSingle:'coral',
      sourceCssMulti:'color:blue; font-size:1.3em;',
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
  watch: {
    kilometers: function (val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function (val) {
      this.kilometers = val / 1000;
      this.meters = val;
    }
  },

});
