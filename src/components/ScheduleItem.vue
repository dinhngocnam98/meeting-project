<template>
  <div class="item">
    <h3>{{ schedule.title }}</h3>
    <p>Status: {{ schedule.status }}</p>
    <p>Time: {{schedule.time}}</p>
    <button class="button" @click="$emit('view', schedule.id)">View</button>
    <button class="button" @click="$emit('edit', schedule.id)">Edit</button>
    <button class="button" @click="$emit('delete', schedule.id)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    schedule: Object,
  },
};
</script>
<style>
.item {
padding-left: 25px;
}
.button {
  background-color: #dcdc48;
  color: #1263dd;
  width: 55px;
  margin-bottom: 10px;
  margin-right: 12px;
  border: unset;
  border-radius: 10px;
}
</style>
