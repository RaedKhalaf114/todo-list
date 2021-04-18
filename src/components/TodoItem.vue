<template>
  <div class="row my-3 align-items-start justify-content-between">
    <h3 v-if="!isEdit">{{ todo.title }}</h3>
    <input v-if="isEdit" type="text" v-bind:value="todo.title" @change="onChangeTitle"/>
    <div>
      <button @click="changeViewMode" class="btn btn-primary mx-2">
        {{ isEdit ? 'Save' : 'Edit' }}
      </button>
      <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      isEdit: false,
      editedTitle: ''
    }
  },
  props: {
    todo: {}
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateTodo']),
    changeViewMode() {
      this.isEdit = !this.isEdit
      if (!this.isEdit) {
        const isChanged = this.todo.title !== this.editedTitle;
        if (isChanged) {
          this.updateTodo({
            id: this.todo.id,
            title: this.editedTitle
          })
        }
      }
      this.editedTitle = ''
    },
    onChangeTitle(e) {
      this.editedTitle = e.target.value;
    }
  }
}
</script>

<style scoped>

</style>