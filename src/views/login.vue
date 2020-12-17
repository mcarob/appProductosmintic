<template>
  <div id="login">
    <div class="sidenav">
      <div class="login-main-text">
        <h2>
          Productos APP<br />
          Pagina de Ingreso
        </h2>
        <p>Ingreso App</p>
        <p>Usuario admin, Contraseña 1234</p>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <form v-on:submit.prevent="login">
            <div class="form-group">
              <label>Usuario</label>
              <input
                type="text"
                class="form-control"
                placeholder="Usuario"
                v-model="usuario"
                required
              />
            </div>
            <div class="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                class="form-control"
                placeholder="Contraseña"
                v-model="contrasena"
                required
              />
            </div>
            <button type="submit" class="btn btn-black">Registrarse</button>
          </form>
          <b-alert show variant="info" v-if="error">
            {{error_msg}}

          </b-alert>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios';
var md5 = require('md5');

export default {
  name: "App",
  components: {

  },
  data: function() {
    return {
      usuario: "",
      contrasena: "",
      error: false,
      error_msg: ""
    };
  },
  methods: {
    login() {
      let json = {
        "correo_usuario": this.usuario,
        "pass_usuario" : md5(this.contrasena)
      };
      axios.post('https://minticciclo3.herokuapp.com/usuarios/auth/',json)
      .then(data =>{
        if(data.status == "200"){
        //     console.log("el token resultante es -> ")
        //   console.log(data.data.result.token);
            localStorage.username=data.data.correo_usuario;
            localStorage.nombre=data.data.nom_usuario;
            this.$router.push('program');
             //this.$router.push('dashboard');
        }else{
          this.error= true;
          this.error_msg= data.data.detail;
          console.log("Datos incorrectos");
        }
      }).catch(salidamal=>{
        console.log(salidamal.message);
      })
    }
  }
};
</script>




<style src="../css/style1.css"></style>