<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary ">
    <div class="navbrand">
      <RouterLink to="/">Denkyembour</RouterLink>
    </div>
    <div class="container-fluid justify-content-center">
      <div class="justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About Author</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/project" class="nav-link" data-bs-toggle="dropdown">Project</router-link>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/project/">Preamble</a></li>
              <li><a class="dropdown-item" href="/project/#motivation">Motivation for
                  'Denkyembour'</a></li>
              <li><a class="dropdown-item" href="/project/#mission">Mission Statement</a></li>
              <li><a class="dropdown-item" href="/project/#goals">Objectives and Goals</a></li>
              <li><a class="dropdown-item" href="/project/#research">Areas of research and publication</a></li>
              <li><a class="dropdown-item" href="/project/#target">Target groups</a></li>
              <li><a class="dropdown-item" href="/project/#conclusion">Conclusion</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/about" class="nav-link" data-bs-toggle="dropdown">Research</router-link>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/research/#academic">Academic (Scholarship)</a></li>
              <li><a class="dropdown-item" href="/research/#doctrinal">Doctrinal (Theology and Doctrine)</a></li>
              <li><a class="dropdown-item" href="/research/#formative">Formative (Ongoing Pastoral Formation)</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/project" class="nav-link" data-bs-toggle="dropdown"
              @click="active">Publications</router-link>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/publication/#books">Books</a></li>
              <li><a class="dropdown-item" href="/publication/#articles">Articles</a></li>
              <li><a class="dropdown-item" href="/publication/#booklets">Booklets</a></li>
              <li><a class="dropdown-item" href="/publication/#leaflets">Leaflets/ Flyers</a></li>
              <li><a class="dropdown-item" href="/publication/#courses">Formation Courses</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
    }
  },
  methods: {
    active(event) {
      event.target.classList.toggle("active")
    }
  }
}
</script>
<style>
.navbar {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100vw;
}
</style>
