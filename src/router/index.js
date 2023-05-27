import {createWebHashHistory} from "vue-router";
import {createRouter} from "vue-router";
import userContent from '@/views/userContent.vue'
import visitorMessage from '@/views/visitorMessage.vue'

const routes = [
    {
        path: '', component: userContent
    },
    {
        path: '/userContent',component: userContent
    },
    {
        path: '/visitorMessage',component: visitorMessage
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
