<template>
  <div id="app">
    <!-- ahora insertamos aquí el contenido del router view -->
  <div>
        <nav class="navbar navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar">Home</span>
                        <span class="icon-bar">History</span>
                        <span class="icon-bar">About</span>
                        <span>Contact</span>
                    </button>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <router-link tag="li" to="/" exact>
                            <a>Home</a>
                        </router-link>
                        <router-link tag="li" to="/About">
                            <a>Acerca de...</a>
                        </router-link>
                        <router-link tag="li" to="/contact">
                            <a>Contacto</a>
                        </router-link>                       
                    </ul>
                </div>
            </div>
        </nav>
    </div>

        <router-view></router-view>
  </div> <!-- end app -->
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
