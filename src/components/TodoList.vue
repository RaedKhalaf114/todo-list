<template>
  <div>
    <template v-for="todo in allTodos">
      <TodoItem :key="todo.id" :todo="todo"/>
    </template>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import {mapGetters} from "vuex";

export default {
  components: {TodoItem},
  computed: {
    ...mapGetters(['allTodos'])
  }
}

</script>

<style scoped>
</style>