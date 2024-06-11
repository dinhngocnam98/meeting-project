<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="../assets/logo.png">
    </div>
    <div class="nav">
      <div class="item">
        <i class="ri-home-5-fill"></i>
      </div>
      <div class="item">
        <i class="ri-video-on-fill"></i>
      </div>
      <div class="item">
        <i class="ri-mic-2-fill"></i>
      </div>
      <div class="item active">
        <i class="ri-message-2-fill"></i>
      </div>
    </div>
    <img src="../assets/profile.png">
  </aside>
</template>

<script>
export default {
  name: "SideBarComponent"
}
</script>

<style scoped>
.sidebar{
  background: #f8fafc;
  width: 5%;
  height: 93%;
  position: fixed;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

.sidebar img{
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.sidebar .nav{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.sidebar .nav .item i{
  font-size: 25px;
  color: #b9bec6;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sidebar .nav .item.active i,
.sidebar .nav .item i:hover{
  color: #1263dd;
}

</style>
