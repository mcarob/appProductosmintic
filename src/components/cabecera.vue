<template>
  <div>
    <div>
      <b-navbar type="dark" variant="success" toggleable="md">
        <b-container>
          <b-navbar-toggle target="nav-colapsable"></b-navbar-toggle>
          <b-navbar-brand>  BUSISNESS MANAGER APP</b-navbar-brand>

          <b-collapse is-nav id="nav-colapsable">
            <b-navbar-nav>
              <b-nav-item-dropdown text="CATEGORIAS" right>
                <b-dropdown-item :to="{ name: 'agregarCategoria' }">AGREGAR</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'program' }">LISTAR</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown text="PRODUCTOS " right>
                <b-dropdown-item :to="{ name: 'agregarProducto' }">AGREGAR</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'listarProductos' }">LISTAR</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown text="ClIENTES " right  disabled>
                <b-dropdown-item :to="{ name: '' }">AGREGAR</b-dropdown-item>
                <b-dropdown-item>BUSCAR</b-dropdown-item>
                <b-dropdown-item>LISTAR</b-dropdown-item>
              </b-nav-item-dropdown>
                 <b-nav-item-dropdown text="VENTAS " right  disabled>
                <b-dropdown-item :to="{ name: '' }">AGREGAR</b-dropdown-item>
                <b-dropdown-item>BUSCAR</b-dropdown-item>
                <b-dropdown-item>LISTAR</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
  </div>
</template>
