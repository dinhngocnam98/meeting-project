import { createRouter, createWebHistory } from 'vue-router';
import ScheduleList from './components/ScheduleList.vue';
import MeetingFeedback from './components/MeetingFeedback.vue';

const routes = [
    {
        path: '/',
        name: 'ScheduleList',
        component: ScheduleList,
    },
    {
        path: '/feedback',
        name: 'MeetingFeedback',
        component: MeetingFeedback,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
