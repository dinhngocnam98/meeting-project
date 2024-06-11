<template>
  <div>
    <h2 style="padding: 10px">Subscribed to the list</h2>
    <ul>
      <li class="list-item" v-for="schedule in schedules" :key="schedule.id">
        <ScheduleItem
            :schedule="schedule"
            @view="viewSchedule"
            @edit="editSchedule"
            @delete="deleteSchedule"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ScheduleItem from './ScheduleItem.vue';

export default {
  components: {
    ScheduleItem,
  },
  data() {
    return {
      schedules: [
        { id: 1, title: 'Meeting A', status: 'Wait for approval', time: '15:30, 21-07-2024' },
        { id: 2, title: 'Meeting B', status: 'Approved', time: '15:30, 21-07-2024' },
        { id: 3, title: 'Meeting C', status: 'Approved', time: '15:30, 21-07-2024' },
        { id: 5, title: 'Meeting D', status: 'Approved', time: '15:30, 21-07-2024' },
      ],
    };
  },
  methods: {
    viewSchedule(id) {
      alert('View Meeting: ' + id);
    },
    editSchedule(id) {
      alert('Edit Meeting: ' + id);
    },
    deleteSchedule(id) {
      if (confirm('Are you sure you want to delete this calendar?')) {
        this.schedules = this.schedules.filter(schedule => schedule.id !== id);
      }
    },
  },
};
</script>
<style>
.list-item {
  background-color: #f3eded;
  margin-bottom: 20px;
  list-style: none;
  border-radius: 16px;
  border: 2px white;
}
</style>
