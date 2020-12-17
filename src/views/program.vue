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
                    <th scope="col">Nombre Categoria</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="cat in categorias" :key="cat.cod_category" >
                    <th scope="row">{{ cat.cod_category}}</th>
                    <td>  {{cat.nom_category}} </td>

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
        let url="https://minticciclo3.herokuapp.com/categorias/todas";
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