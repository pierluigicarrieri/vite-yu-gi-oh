<script>

import CardGenerator from "./CardGenerator.vue"
import axios from 'axios';

export default {
    components: {
        CardGenerator,
    },
    data() {
        return {
            cards: []
        }
    },
    methods: {
        fetchCards() {
            const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

            axios.get(url).then((response) => {
                this.cards = response.data.data;
                console.log(this.cards)
            });
        },
    },
    mounted() {
        this.fetchCards()
        ;
    },
}

</script>

<template>
    <div class="cards-container p-4 bg-white">
        <div class="cards-found-banner p-2 text-white bg-dark">Found 39 cards</div>
        <div class="row row-cols-5 g-4">
            <div class="col" v-for="card in cards" :key="cards.id">
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