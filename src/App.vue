<script>

  import YugiohHeader from "./components/YugiohHeader.vue"
  import CardsContainer from "./components/CardsContainer.vue"
  import { store, createSelect } from "./store.js"

  export default {
    components: {
      YugiohHeader,
      CardsContainer
    },
    data () {
      return {
        store,
      }
    },
    mounted() {
      createSelect()
    }
}

</script>

<template>

  <YugiohHeader></YugiohHeader>

  <main>
    <div class="container">
      <div class="dropdown py-3">
        <a class="btn btn-light dropdown-toggle text-start" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Archetype
        </a>
        <ul class="dropdown-menu ">
          <li  v-for="archetype in store.archetypes">
            <a class="dropdown-item" href="#">{{ archetype.archetype_name }}</a>
          </li>
        </ul>
      </div>
      <CardsContainer></CardsContainer>
    </div>
  </main>

</template>

<style lang="scss">
  
  main {
    background-color: #D48F38;

    .btn{
      min-width: 120px;
      ;
    }

    .dropdown-menu {
      max-height: 40vh;
      overflow: auto;
      opacity: 0.8;
    }

    .dropdown-toggle::after {
    margin-left: 100px;
    }

  }

</style>
