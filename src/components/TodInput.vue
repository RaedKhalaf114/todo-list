<template>
  <div class="row">
    <input v-model="todoText" @keyup.enter="addTodoI" class="col  mx-2 form-control" type="text">
    <button @click="addTodoI" class="btn btn-primary">Add</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { v1 } from 'uuid'

export default {
  data() {
    return {
      todoText: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    addTodoI() {
      this.addTodo({
        title: this.todoText,
        id: v1()
      })
      this.todoText = ""
    }
  }
}
</script>

<style scoped>

</style>
