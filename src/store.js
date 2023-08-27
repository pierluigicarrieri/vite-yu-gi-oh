import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    archetypes : [],
    cards: [],
    selectPlaceholder: "Archetype"
})

export function fetchCards(nextUrl) {
    const url = nextUrl ?? "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

    axios.get(url).then((response) => {
        store.cards = response.data.data;
        console.log(store.cards)
    });
}

export function createSelect() {
    const url = "https://db.ygoprodeck.com/api/v7/archetypes.php";

    axios.get(url).then((response) => {
        store.archetypes = response.data;
        console.log(store.archetypes)
    });
}