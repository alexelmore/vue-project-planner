<template>
  <div class="home">
    <FilterNav :current="current" @status="current = $event" />

    <div v-if="filteredProjects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
    <div v-else>Loading Projects...</div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";
export default {
  name: "Home",
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  components: { SingleProject, FilterNav },
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
  methods: {
    // Function that listens for an emitted delete event from the SingleProject component and deletes a project from the projects array accordingly
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
    // Function that listens for an emitted complete event from the SingleProject component and updates the given project's completed property accordingly
    handleComplete(id) {
      let p = this.projects.find((project) => project.id === id);
      p.complete = !p.complete;
    },
  },
  computed: {
    // Computed function that depends on our projects and current data properties and filters the projects accordingly
    filteredProjects() {
      if (this.current === "ongoing") {
        return this.projects.filter((project) => project.complete !== true);
      } else if (this.current === "completed") {
        return this.projects.filter((project) => project.complete === true);
      }
      return this.projects;
    },
  },
};
</script>
