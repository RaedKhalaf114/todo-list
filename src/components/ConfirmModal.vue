<template>
  <div v-show="isOpen" class="modal-container">
    <div class="modal-content">
      <div class="modal-header">
        Confirmation
      </div>
      <div class="modal-text">
        {{ confirmationText }}
      </div>
      <div class="modal-actions">
        <button class="btn btn-primary mx-3" @click="onConfirm">
          {{ confirmActionText }}
        </button>
        <button class="btn btn-danger" @click="onCancel">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    confirmationText: {
      type: String,
      default: "Are you sure you want to proceed ?"
    },
    confirmActionText: {
      type: String,
      default: "Remove"
    },
    onConfirm: {
      default: () => {}
    },
    onCancel: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.modal-container {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #00000052;
  width: 100vw;
  height: 100vh;
  right: 0;
  bottom: 0;
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -80%);
  padding: 20px;
}

.modal-text {
  padding: 20px;
}

.modal-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>