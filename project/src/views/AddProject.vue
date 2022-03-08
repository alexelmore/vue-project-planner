<template>
  <form @submit.prevent="handleSubmit">
    <label>Project Title </label>
    <input required type="text" v-model="title" />
    <label>Project Details </label
    ><textarea required v-model="details"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  name: "AddProject",
  data() {
    return {
      title: "",
      details: "",
      url: "http://localhost:3000/projects",
    };
  },
  methods: {
    // Function that handles form submission
    handleSubmit() {
      // Setup for a POST fetch request, adding a new project to our json db
      // Once a new project is successfully added, redirect user back to the home page
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };
      fetch(this.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      })
        .then(() => this.$router.push("/"))
        .catch((error) => console.log(error.message));
    },
  },
};
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #00ce89;
}
label {
  display: block;
  color: rgb(116, 113, 113);
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
form button:hover {
  cursor: pointer;
  opacity: 0.5;
}
</style>
