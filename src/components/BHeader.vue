<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container">
      <router-link class="navbar-brand" to="/">NoMash Library</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navBar"
        aria-controls="navBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navBar" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/fire-register">Register</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/fire-signin">Sign In</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/add-book">AddBook</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/get-all-books">Get All Books</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/count-books">Count Books</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/search-weather">Search Weather</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/logout">Logout</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
