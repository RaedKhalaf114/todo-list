<template>
  <div class="row my-3 align-items-start justify-content-between">
    <h3 v-if="!isEdit">{{ todo.title }}</h3>
    <input v-if="isEdit" type="text" @keyup.enter="changeViewMode" v-bind:value="todo.title" @change="onChangeTitle"/>
    <div>
      <button @click="changeViewMode" class="btn btn-primary mx-2">
        {{ isEdit ? 'Save' : 'Edit' }}
      </button>
      <button @click="onDeleteItem" class="btn btn-danger">Delete</button>
    </div>
    <confirm-modal confirm-action-text="Delete"
                   :on-confirm="() => deleteTodo(todo.id)"
                   confirmation-text="Are you sure you want to delete this Todo item ?"
                   :is-open="this.isConfirmModalOpen"/>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import ConfirmModal from "./ConfirmModal";

export default {
  components: {
    ConfirmModal
  },
  data() {
    return {
      isEdit: false,
      editedTitle: '',
      isConfirmModalOpen: false,
    }
  },
  props: {
    todo: {
      type: Object,
      required: true,

      validator: (todo) => {
        return !!todo.title
      }
    }
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateTodo']),
    changeViewMode() {
      this.isEdit = !this.isEdit
      this.reflectUpdates()
    },
    reflectUpdates() {
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
    onDeleteItem() {
      this.isConfirmModalOpen = true
    },
    onChangeTitle(e) {
      this.editedTitle = e.target.value;
    }
  }
}
</script>

<style scoped>

</style>