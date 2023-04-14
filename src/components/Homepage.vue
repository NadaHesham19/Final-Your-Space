<template>
   <div class="body">
        <img src="src\assets\imgs\HomePage.jpg" alt="homepage" class="homepage w-100">
        <div class="services">Check Our Services</div>
        <div class="bodycontainer">
          <div class="cards ourspaces">
            <div class="left">
              <img src="src\assets\imgs\Card1.jpg" alt="spaces" class="image">  
            </div>
            <div class="right">
              <div class="text">Now you can check our available spaces</div>
              <a href="./OurSpaces/ourspaces.html">
                <button class="b1" onclick="clicked_button()" >Our Spaces</button>
              </a>
            </div>
          </div>
          <div class="cards yourbookings">
            <div class="left">
              <img src="src\assets\imgs\Card2.jpg" alt="bookings" class="image">  
            </div>
            <div class="right">
              <div class="text">You can check your previous bookings<br>Just press:</div>
              <a href="./myBookings.html"><button class="b1">Your Bookings</button></a>
            </div>
          </div>
          <div class="cards addnewspaces">
            <div class="left">
              <img src="src\assets\imgs\Card3.jpg" alt="newspaces" class="image">  
            </div>
            <div class="right">
              <div class="text">And also you can help us<br> add new<br> spaces</div>
              <a href="./addNewSpaces.html"><button class="b1">Add new spaces</button></a>
            </div>
          </div>
        </div>
      </div>
      
</template>

<style scoped>
body{
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;    
  background-color: v-bind('background');
}
.homepage{
  height:645.25px;
  width: 100%;
}
.services{
    font-family: 'Roboto';
    font-size: 45px;
    text-align: center;
    display: flex;
    justify-content: center;
    padding:50px;
    color: v-bind('darkblue');
}

.bodycontainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
}

.cards{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 900px;
    height: 450px;
    border-radius: 30px;
    background-color: v-bind('darkblue');
    margin-bottom: 50px;
      
}

.image{
    width:450px;
    height: 450px;
    border-radius: 30px;
    margin-right:450px;
}

.right{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    margin-left: -350px;
    margin-right: 60px; 
}

.text{
  color: v-bind('light');
  font-size: 50px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-top: 20px;
  margin-left:-50px;
}



.b1{
    border-radius: 25px;
    color: v-bind('light');
    background-color:v-bind('lightblue');
    border: none;
    text-align: center;
    width:220px;
    height: 64.3px;
    margin-top: 40px;
    margin-left:-180px;
    font-family: 'Roboto';
    font-size: 20px;
}

.b1:hover ,
.b1:active{
  color: v-bind('darkblue') !important;
  font-weight: 700 !important;
  cursor: pointer;

}
</style>

<script>
  export default{
    name: "Homepage",
    data() {
        return {
            nav: "#12232e",
            lightblue: "#007cc7",
            darkblue: "#203647",
            background: "#f4f4f4",
            active: "#abb5be",
            light: "white"
        };
    },
   methods:{
    clicked_button(){
      window.location = 'src\components\Aboutus.vue';
    }
   }  
    
}
</script>