<template>


<div id="app">
  <h1>Hello, {{name}}</h1>
</div>

<div id="element">
  <p>{{test}}</p>
</div>

<div id="app2">
  <h1>Hello
    <span v-text="name"></span>
  </h1>
</div>

<div id="app3">
  <h1>Hello
    <span v-html="name"></span>
  </h1>
</div>

<div id="app4">
  <h1>Hello
    <span v-show="visible" v-html="name"></span>
  </h1>
</div>
</template>


<script>

  var app = new Vue({
    el:'#app', //어떤 엘리먼트를 적용을 할지를 정합니다.
    data:{//data 는 해당 뷰에서 사용할 정보를 지닙니다.
      name:'Vue'
    }
  });


  var element = new Vue({
    el:'#element',
    data:{
      test:'여기는 테스트'
    }
  });

  var app2 = new Vue({
    el:'#app2', //어떤 엘리먼트를 적용을 할지를 정합니다.
    data:{//data 는 해당 뷰에서 사용할 정보를 지닙니다.
      name:'<i>디렉티브 v-text를 이용한 방법 </i>'
    }
  });

  var app3 = new Vue({
    el:'#app3', //어떤 엘리먼트를 적용을 할지를 정합니다.
    data:{//data 는 해당 뷰에서 사용할 정보를 지닙니다.
      name:'<i>디렉티브 v-text를 이용한 방법</i>'
    }
  });

  var app4 = new Vue({
    el:'#app4', //어떤 엘리먼트를 적용을 할지를 정합니다.
    data:{//data 는 해당 뷰에서 사용할 정보를 지닙니다.
      name:'<i>디렉티브 v-text를 이용한 방법</i>',
      visible:true
      //visible이라고 지은 변수명은 v-show디렉티브의 값이 된다.

    }
  });

</script>
