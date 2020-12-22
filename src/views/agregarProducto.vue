<template>
  <div>
    <cabecera />
    <br />
    <br />
    <br />
    <br />
    <br />
    Bienvenido(a) {{ nombreUsuario }}, Vas a agregar un Producto <br /><br />
    <br />
    <br />
    <br />
    <div class="row">
      <div class="container" v-on:submit.prevent="registrarCategoria">
        <form>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Nombre del Producto</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                v-model="formulario.nom_producto"
                placeholder="Ingrese el nombre del producto"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Categoria del producto</label
            >
            <div class="col-sm-10">
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" v-model="formulario.cod_category">
                <option v-for="cat in categorias" v-bind:value="cat.cod_category" :key="cat.cod_category">
                  {{ cat.nom_category }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Precio de Compra del Producto</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                v-model="formulario.precio_compra"
                placeholder="Ingrese el Precio de compra"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Precio de Venta del Producto</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                v-model="formulario.precio_venta"
                placeholder="Ingrese el precio de Venta"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Detalle del Producto</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                v-model="formulario.detalle_producto"
                placeholder="Ingrese el detalle del producto"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Cantidad del Producto</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                v-model="formulario.cantidad_producto"
                placeholder="Ingrese la cantidad Producto"
                required
              />
            </div>
          </div>
          <button class="btn btn-primary" type="submit">
            Agregar Categoria
          </button>
        </form>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
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
      categorias: null,
      nombreUsuario: localStorage.nombre,
      formulario: {
        cod_producto: 0,
        nom_producto: "",
        cod_category: "",
        detalle_producto: "",
        cantidad_producto: "",
        precio_compra: "",
        precio_venta: "",
      },
    };
  },
  mounted: function () {
    let url = "https://minticciclo3.herokuapp.com/categorias/todas";
    axios.get(url).then((data) => {
      this.categorias = data.data;
      console.log(data);
    });
  },
  methods: {
    registrarCategoria() {
      console.log("este es el valor del formulario ");
      console.log(this.formulario);
      axios
        .put(
          "https://minticciclo3.herokuapp.com/categorias/registrarProduct/",
          this.formulario
        )
        .then((data) => {
          if (data.status == "200") {
            console.log(data.data);
            this.$router.push("listarProductos");
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