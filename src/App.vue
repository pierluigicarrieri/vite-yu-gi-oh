<script>

  import YugiohHeader from "./components/YugiohHeader.vue"

  export default {
    components: {
      YugiohHeader,
    }
}

</script>

<template>

  <YugiohHeader></YugiohHeader>

  <main class="">
    <div class="container">
      <div class="dropdown py-3">
        <a class="btn btn-light dropdown-toggle text-start" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Alien
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Predator</a></li>
          <li><a class="dropdown-item" href="#">The Thing</a></li>
          <li><a class="dropdown-item" href="#">Hellraiser</a></li>
        </ul>
      </div>
    </div>
  </main>

</template>

<style lang="scss">
  
  main {
    background-color: #D48F38;
    height: 1000px;

    .btn{
      min-width: 120px;
      ;
    }

    .dropdown-toggle::after {
    margin-left: 100px;
    }

  }

</style>
