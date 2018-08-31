<template>
  <div class="home">
 
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toogle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div> <!-- end navbar-header-->

    

      </div>
      <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link tag="li" to="/Home" exact>
              <a>home bal bla</a> 
            </router-link> 
          </ul>
           <!-- <router-link tag="li" to="" 
          </ul>  -->
      </div><!-- end navbar -->
    </div> <!-- end container -->
  </div> <!-- end home -->
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
body {
  background-color: green;
}

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
