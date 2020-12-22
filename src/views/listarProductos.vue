<template>
    <div>
        <cabecera/>

        <br>
Bienvenida {{nombreUsuario}}

<br>
<div class="container">
<h4 >En este sprint se va a poder hacer las siguientes acciones  </h4>
<ul>
  <li>Listar las categorias </li>
  <li>Agregar Categorias (menu-> Categorias -> Agregar)</li>
</ul>  
</div>


<br>

        <div class="container">

            <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Nombre Producto</th>
                    <th scope="col">Nombre Categoria</th>
                    <th scope="col">Detalle Producto</th>
                    <th scope="col">Cantidad Disponible</th>
                    <th scope="col">Precio Compra </th>
                    <th scope="col">Precio de Venta</th>

                </tr>

            </thead>
            <tbody>
                <tr v-for="pro in categorias" :key="pro.cod_producto" >
                    <th scope="row">{{ pro.cod_producto}}</th>
                    <td>  {{pro.nom_producto}} </td>
                    <td>  {{pro.nom_category}} </td>
                    <td>  {{pro.detalle_producto}} </td>
                    <td>  {{pro.cantidad_producto}} </td>
                    <td>  {{pro.precio_compra}} </td>
                    <td>  {{pro.precio_venta}} </td>

                </tr>


            </tbody>
            </table>
        </div>


    </div>
</template>


<script>
import cabecera from "@/components/cabecera.vue";
import piePagina from "@/components/piePagina.vue";
import axios from 'axios'
export default {
    name: "program",
    data(){
        return {
            categorias:null,
            correoUsuario: localStorage.username,
            nombreUsuario:localStorage.nombre
        }
    },
    components:{
        cabecera,
        piePagina
    },
    mounted:function(){
        let url="https://minticciclo3.herokuapp.com/productos/todas";
        axios.get(url).then(
            data=>{
                this.categorias=data.data;
                console.log(data);
            });
    }

};
</script>

<style scoped>
</style>