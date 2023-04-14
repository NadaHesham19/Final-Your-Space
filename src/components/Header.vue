<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#">
            <img
              class="img-fluid pb-1 ps-0"
              width="83.5"
              src="src\assets\imgs\Your Space-logos_white.png"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
    
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="./OurSpaces/ourspaces.html"
                  >Our Spaces</a
                >
              </li>
    
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Book Now</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Your Bookings</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  New Spaces
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="./addNewSpaces.html">Add New Space</a></li>
                  <li><hr class="dropdown-divider text-white" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Review Request</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./aboutus.html">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i
                    class="icon fa-regular fa-circle-user ms-5 ms-sm-0 me-3 text-white"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<style scoped>
.navbar,
.dropdown-menu {
  background-color: v-bind('nav') !important;
}
.dropdown-item {
  margin: 0 !important;
}
.dropdown-item:hover {
  background-color: v-bind('nav') !important;
  color: v-bind('active') !important;
}
.nav-link:hover,
.dropdown-menu:hover,
.nav-link:focus,
.dropdown-menu:focus,
.active {
  color: v-bind('active') !important;
}
.navbar a {
  color:v-bind('light');
  font-weight: 600;
  margin-left: 2rem;
}
.logo {
  margin-left: 15px !important;
}
.dropdown-toggle::after {
  display: none !important;
}
.icon {
  width: 25px;
  height: 25px;
}
.icon:hover {
  color: v-bind('active') !important;
}
.navbar .navbar-toggler {
  color: v-bind('light');
  font-size: 25px;
  border-color: v-bind('light');
}
</style>

<script>
export default{
    name : 'Header' ,
    data() {
    return {
        nav: '#12232e',
        lightblue: '#007cc7',
        darkblue: '#203647',
        background: '#f4f4f4',
        active: '#abb5be',
        light : 'white'
    };
  }
}
</script>