<template>
  <div>
    <button @click="callLambda">callLambda</button>
    <button @click="createTodo">createTodo</button>
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
    callLambda() {
      fetch("/.netlify/functions/hello")
        .then((response) => response.json())
        .then((json) => {
          this.lambdaMsg = json.msg;
        });
    },
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
