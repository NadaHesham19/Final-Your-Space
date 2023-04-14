<template>
    <div class="footer">
        <div class="container">
          <div class="row pb-5 align-items-center">
            <div class="col-8">
              <img src="src\assets\imgs\logo.png" width="300px" height="300px" alt="" class="footerlogo"/>
            </div>
            <div class="col-4 contact">
              <h4 class="mb-2">Contact us</h4>
              <ul class="list-unstyled lh-lg">
                <li>
                  <i class="fa-solid fa-location-dot me-3" ></i> Nasr city , 7th
                  district
                </li>
                <li><i class="fa-brands fa-facebook me-3"></i>Your space</li>
                <li><i class="fa-brands fa-youtube me-3"></i>Yourspace</li>
                <li><i class="fa-solid fa-phone me-3"></i>+201275777096</li>
                <li>
                  <i class="fa-solid fa-envelope me-3"></i>Yourspace@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</template>

<style scoped>
.footer {
    background-color: v-bind('nav');
    color: v-bind('light');
    bottom: 0;
  }
  .slogan {
    font-family: "Inspiration", cursive;
    margin-left: 200px;
    font-size: 70px;
  }
  .contact {
    padding-top: 100px;
    padding-left: 150px !important;
  }
</style>

<script scoped>
export default{
    name : 'Footer' ,
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