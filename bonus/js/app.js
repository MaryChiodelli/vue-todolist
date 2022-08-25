const todos = [
    {
        text: 'Fare la spesa',
        done: false
    },
    {
        text: 'Prendere il giornale',
        done: false
    },
    {
        text: 'Preparare il pranzo',
        done: true
    },
    {
        text: 'Tagliare il prato',
        done: false
    }
];

const app = new Vue({
    el: '#app',
    data: {
        todos: todos,
        newTodo: ''
    },
    computed: {
        doneTodos() {
            const filter = this.todos.filter((todo) => {
                return todo.done;
            });
            return filter;
        }
    },
    methods: {
        toggleDone(todo) {
            todo.done = !todo.done;
        },
        addTodo() {
            this.newTodo = this.newTodo.trim();

            if (!this.newTodo) {
                return;
            }

            this.todos.push(
                {
                    text: this.newTodo,
                    done: false
                }
            );
            
            this.newTodo = '';
        }
    }
});

console.log(app);