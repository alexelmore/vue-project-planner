<template>
  <form @submit.prevent="handleUpdate">
    <label>Project Title </label>
    <input required type="text" v-model="title" />
    <label>Project Details </label
    ><textarea required v-model="details"></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  name: "EditProject",
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      url: "http://localhost:3000/projects/" + this.id,
    };
  },
  // Use the mounted hook to query our json db, using a fetch request that makes a GET request using a url that includes the project id
  mounted() {
    fetch(this.url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      });
  },
  methods: {
    // Function that handles form submissions
    handleUpdate() {
      // Make a PATCH Fetch request to our json db with the updates
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, details: this.details }),
      })
        // Once a project is successfully edited, redirect user back to the home page
        .then(() => this.$router.push("/"))
        .catch((error) => console.log(error.message));
    },
  },
};
</script>

<style></style>
