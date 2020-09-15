<template>
  <router-link
    class="book-link"
    :to="{ name: 'book-show', params: { id: '1' } }"
  >
    <div class="book-card -shadow">
      <h3 class="title">Title: {{ book.title }}</h3>
      <h4>Author: {{ book.author }}</h4>
      <h4>Genre: {{ book.genre }}</h4>
      <span>isbn: {{ book.isbn }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  data: function() {
    return {
      book: {
        id: 1,
        title: "Cryptonomicon",
        author: "Neal Stephenson",
        genre: "fiction",
        isbn: "000-1234-56789",
      },
    };
  },
};
</script>

<style scoped>
.book-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.book-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.book-card > .title {
  margin: 0;
}

.book-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
