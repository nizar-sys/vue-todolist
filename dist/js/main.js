var todoApp = new Vue({
  el: "#todoApp",
  data: {
    message: "Welcome to Todo App",
    addTodoInput: "",
    lists: [],
    hasError: false,
  },
  computed: {
    filterLists: function () {
      return _.orderBy(this.lists, ["isComplete", false]);
    },
  },
  methods: {
    addTask: function () {
      if (!this.addTodoInput) {
        this.hasError = true;
        return;
      }

      this.hasError = false;

      this.lists.push({
        id: this.lists.length + 1,
        title: this.addTodoInput,
        isComplete: false,
      });

      this.addTodoInput = "";
    },

    updateTask: function (e, list) {
      e.preventDefault();
      list.title = e.target.innerText;
      e.target.blur();
    },

    completeTask: function (list) {
      list.isComplete = !list.isComplete;
    },
    removeTask: function (list) {
      let index = this.lists.indexOf(list);
      this.lists.splice(index, 1);
    },
  },
});

//generate dummy data for demo purpose
todoApp.lists = [
  {
    id: 1,
    title: "Ngoding",
    isComplete: false,
  },
  {
    id: 2,
    title: "Mamam",
    isComplete: false,
  },
  {
    id: 3,
    title: "Tidur",
    isComplete: false,
  },
];
