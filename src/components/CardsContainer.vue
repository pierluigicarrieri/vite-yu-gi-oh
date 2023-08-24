<script>

import axios from 'axios';

export default {
    data() {
        return {
            cards: [1,3,4]
        }
    },
    methods: {
        fetchCards() {
            const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

            axios.get(url).then((response) => {
                this.cards = response.data.data;
            });

        }
    },
    mounted() {
        this.fetchCards()
    },
}

</script>

<template>
    <div class="cards-container p-4 bg-white">
        <div class="cards-found-banner p-2 text-white bg-dark">Found 39 cards</div>
    </div>
</template>

<style lang="scss" scoped>

</style>