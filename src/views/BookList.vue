<template>
  <div>
    <div v-for="character in characters" :key="character.id">
      <h5>Character - {{ character.name }}</h5>
      <img :src="character.image" alt="charactername">
      <p>Origin - {{ character.origin.name }} </p>
      <p>Species - {{ character.species }}</p>
      <p>Status - {{ character.status }}</p>
      <hr>
    </div>
  </div>
</template>

<script>
//import Book from "@/components/Book.vue";
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      characters: [],
    };
  },
  components: {
    // Book,
  },
  created() {
    console.log("I AM HERE");
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        console.log(response.data.results);
        this.characters = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("NOW I AM HERE");
  },
};
</script>
