<template>
  <div id="app">
    <SideBarComponent />
    <div class="main">

      <div class="header">
        <h1 style="color: #1263dd">Smart Meeting</h1>
      </div>
      <div class="register">
        <div class="host">
          <router-view />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import SideBarComponent from "@/components/SideBarComponent";

export default {
  name: 'App',
  components: {
    SideBarComponent,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

img{
  object-fit: cover;
  cursor: pointer;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}

body{
  padding: 20px;
  display: flex;
  gap: 20px;
}



.main{
  margin-left: 96px;
  background: #f8fafc;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  height: 93vh;
  width: 90vw;
}

.main .header{
  margin-bottom: 20px;
}

.main .header h3{
  font-size: 24px;
  font-weight: 600;
}

</style>
