import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            {
                id: 1,
                title: "One"
            },
            {
                id: 2,
                title: "Two"
            },
            {
                id: 3,
                title: "Three"
            },
        ]
    },
    getters: {
        allTodos: (state) => state.todos
    },
    mutations: {
        add_todo(state, todo) {
            state.todos.push(todo)
        },
        delete_todo(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        update_todo(state, newTodo) {
            state.todos = state.todos.map(todo => todo.id === newTodo.id ? newTodo : todo)
        }
    },
    actions: {
        addTodo({commit}, todo) {
            commit('add_todo', todo);
        },
        deleteTodo({commit}, id) {
            commit('delete_todo', id)
        },
        updateTodo({commit}, newTodo) {
            commit('update_todo', newTodo)
        }
    },
    modules: {}
})
