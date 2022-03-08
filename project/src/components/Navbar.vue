<template>
  <nav class="main-nav">
    <router-link to="/">Current Projects</router-link>
    <router-link :to="{ name: 'AddProject' }">Add A New Project</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 22px;
}
a.router-link-active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
  color: rgb(116, 113, 113);
}

a:hover {
  color: rgb(116, 113, 113);
}
</style>
