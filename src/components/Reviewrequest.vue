<template>
   <div class="container">
    <div class="title">
        <div class="t">Request</div>
        <div class="t">Name</div>
        <div class="t">Status</div>
    </div>
    <hr>
    <div class="details">
        <div class="request det">
            <div class="r">The bunker</div>
            <div class="r">Meccano</div>
            <div class="r">Fabriano</div>
        </div>
        <div class="name det">
            <div class="r">Nadine Wafaa</div>
            <div class="r">Farah Marwan</div>
            <div class="r">Nada Hesham</div>
        </div>
        <div class="status ">
            <button class="b accept" disabled>Accepted</button>
            <button class="b decline" disabled>Declined</button>
            <button class="b pend" disabled>Pending</button>
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
    .container{
        display: grid;
        grid-template-rows: auto auto auto;
        background-color: v-bind('darkblue');
        padding: 10px;
        border-radius: 30px;
        height:fit-content;
        width:700px;
        margin-top:50px;
        margin-bottom: 50px;
        padding:20px;
        text-align: center;
        

    }

    .title{
        display: grid;
        grid-template-columns: auto auto auto;
        text-align: center;
    }
    .t{
        font-weight: bold;
        color: v-bind('light');
        padding-top:20px;
        text-align: center;

    }

    hr{
        color: v-bind('light');
        margin-bottom:30px;
    }

    .details{
        display:grid;
        grid-template-columns: auto auto auto;
        text-align: center;

    }

    .det{
        display: grid;
        grid-template-rows:auto auto auto ;
        grid-gap:50px;
        text-align: center;
    }
    .r{
        color:v-bind('light');
        text-align: center;
    }

    .status{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        
    }

    .b{
        color: v-bind('light');
        text-align: center;
        width:fit-content;
        height: fit-content;
        margin-top:50px;
    }

    .accept{
        background-color: green;
        text-align: center;
        margin-top:-5px;
        
    }
    .decline{
        background-color: red;

    }
    .pend{
        background-color: #C4C72B;
    }


</style>

<script>
    export default{
    name: "Reviewrequest",
    data() {
        return {
            nav: "#12232e",
            lightblue: "#007cc7",
            darkblue: "#203647",
            background: "#f4f4f4",
            active: "#abb5be",
            light: "white"
        };
    }
 
    
}
</script>