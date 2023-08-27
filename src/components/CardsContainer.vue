<script>

import axios from 'axios'
import CardGenerator from "./CardGenerator.vue"
import { store, fetchCards } from "../store.js"

export default {
    components: {
        CardGenerator,
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {
        fetchCards()
    },
}

</script>

<template>
    <div class="cards-container p-4 bg-white">
        <div class="cards-found-banner p-2 text-white bg-dark">Found 39 cards</div>
        <div class="row row-cols-5 g-4">
            <div class="col" v-for="card in store.cards" :key="store.cards.id">
                <CardGenerator
                :card="card"
                >
                </CardGenerator>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.card{
    background-color: #D48F38;
}

</style>