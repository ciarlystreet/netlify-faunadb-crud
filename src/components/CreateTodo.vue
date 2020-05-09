<template>
  <div>
    <button @click="createTodo">Create</button>
  </div>
</template>

<script>
import todoFaunaApi from "@/utils/todo-fauna-api";
export default {
  name: "CreateTodo",
  mounted() {
    console.log(process.env);
  },
  methods: {
    createTodo() {
      // Todo data
      const myTodo = {
        title: "My todo title",
        completed: false,
      };

      // create it!
      todoFaunaApi
        .create(myTodo)
        .then((response) => {
          console.log("API response", response);
          // set app state
        })
        .catch((error) => {
          console.log("API error", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
