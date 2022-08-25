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
        todos: todos
    }
});

console.log(app);