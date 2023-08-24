<script>
    export default {
        props: {
            card: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<template>
    <div class="card h-100 text-white">
        <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-between">
            <h6 class="card-title text-center text-white">{{ card.name }}</h6>
            <p class="card-text text-center text-dark">{{ card.archetype }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>