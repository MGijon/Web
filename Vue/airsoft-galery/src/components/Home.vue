<template>
  <div class="hello">
  <!--  <h1>{{ msg }}</h1>
    <h2>lalalalaa</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Cbla bla bla bla</a></li>
      
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div> -->

    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toogle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div> <!-- end navbar-header-->

      <div class="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
       <!--     <router-link tag="li" to="/" exact>
              <a>home</a> 
            </router-link> -->
           <!-- <router-link tag="li" to="" -->
          </ul> 
      </div> <!-- end navbar -->
    </div> <!-- end container -->
  </div> <!-- end hello -->
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to bla bla bla' 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
