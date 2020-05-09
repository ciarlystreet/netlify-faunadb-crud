<template>
  <div>
    <button @click="create">Create</button>
  </div>
</template>

<script>
import { create as createTodo } from "@/utils/todo-fauna-api";
export default {
  name: "CreateTodo",
  methods: {
    create() {
      // Todo data
      const myTodo = {
        title: "My todo title",
        completed: false,
      };

      // create it!
      createTodo(myTodo)
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
