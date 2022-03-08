<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" />
      </div>
    </div>
    <div v-else>Loading Projects...</div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
export default {
  name: "Home",
  data() {
    return {
      projects: [],
    };
  },
  components: { SingleProject },
  // Mounted hook for sending out Get Fetch request to json DB as soon as component is mounted to the DOM.
  mounted() {
    // Setup url and GET fetch request going to our json db file
    const url = `http://localhost:3000/projects`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Init our projects property with the returned data from our Fetch request
        this.projects = data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};
</script>
