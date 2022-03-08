<template>
  <div class="project">
    <div class="actions">
      <h3 @click="toggleDetails">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-icons">
          edit
        </span>
        <span @click="deleteProject" class="material-icons">
          delete
        </span>
        <span @click="toggleComplete" class="material-icons">
          done
        </span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  props: ["project"],
  data() {
    return {
      showDetails: false,
      url: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    // Function to toggle showDetails data property
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    // Function that deletes a project
    deleteProject() {
      // Send a delete request to our json db
      // After deleting a job, emit a custom event to the Home Component, notifying it that a job has been deleting
      fetch(this.url, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((error) => console.log(error.message));
    },
    // Function for updating a project's completed property
    toggleComplete() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => this.$emit("complete", this.project.id))
        .catch((error) => console.log(error.message));
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
/* completed projects */
.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00ce89;
}
</style>
