<template>
  <div>
    <cabecera />

    <br />
    <br />
    <br />
    <br />
    <br />
    Bienvenida {{ nombreUsuario }}, Vas a agregar una Categoria <br /><br />
<br />
<br />
<br />

    <div class="container" v-on:submit.prevent="registrarCategoria">
      <form>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Nombre de la Categoria</label>
          <div class="col-sm-10">
             <input type="text" class="form-control" id="formGroupExampleInput" v-model="formulario.nom_category"
              placeholder="Ingrese el nombre de la categoria" required>
          </div>
        </div>
        <button class="btn btn-primary" type="submit">Agregar Categoria </button>
         
      </form>
    </div>

    <piePagina />
  </div>
</template>


<script>
import cabecera from "@/components/cabecera.vue";
import piePagina from "@/components/piePagina.vue";
import axios from "axios";
export default {
  name: "agregarCategoria",
  components: {
    cabecera,
    piePagina,
  },
  data: function () {
    return {
    nombreUsuario:localStorage.nombre,
    formulario : {
        "nom_category": ""
      }
    }
  },
  methods: {
    registrarCategoria() {
        console.log("este es el valor del formulario ");
        console.log(this.formulario);
      axios
        .put("https://minticciclo3.herokuapp.com/categorias/registrarCat/", this.formulario)
        .then((data) => {
          if (data.status == "200") {
              console.log(data.data);
            this.$router.push("program");
            //this.$router.push('dashboard');
          } 
        })
        .catch((salidamal) => {
          console.log(salidamal.message);
        });
    },
  },
};
</script>

<style scoped>
</style>