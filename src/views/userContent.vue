<!--访客信息-->
<script>
import axios from 'axios'
import {columns} from "element-plus/es/components/table-v2/src/common";
import {ElNotification} from "element-plus";

const success = () => {
    ElNotification({
        title: 'Success',
        message: '厉害捏,数据获取成功',
        type: 'success',
        position: 'bottom-right'
    })
}
export default {
    computed: {
        columns() {
            return columns
        }
    },
    data() {
        return {
            visitorMessage: '',
            visitorMessageUrl: 'http://localhost:8080/adminLookUserContent',
            totalVisits: 0
        }
    },
    methods: {
        getVisitorMessage() {
            axios.get(this.visitorMessageUrl, {}).then(response => {
                this.visitorMessage = response.data;
                this.totalVisits = response.data.length;
                console.log(response.data)
                success()
            }).catch(error => {
                console.log(error)
            })
        },
    },
    mounted() {
        this.getVisitorMessage()
    },
}
</script>

<template>
    <div id="content">
        <div id="visitor">
            <p>
                <el-button type="primary">访客信息</el-button>
            </p>
        </div>
        <div id="card">
            <el-button type="primary">总留言量:{{ totalVisits }}</el-button>
            <el-button type="success" @click="this.getVisitorMessage">刷新</el-button>
        </div>
        <el-table :data="visitorMessage" style="width: 100%">
            <el-table-column prop="ranking" label="序列" align="center"/>
            <el-table-column prop="date" label="日期" align="center"/>
            <el-table-column prop="time" label="时间" align="center"/>
            <el-table-column prop="content" label="留言内容" align="center"/>
        </el-table>
    </div>
</template>

<style scoped>
#content {
    width: 100%;
    height: auto;
}

li {
    font-size: 3vh;
    display: block;
    width: 100%;
}

#visitor {
    text-align: center;
}

el-button {
    padding: 1vh;
}

#card {
    float: right;
}
</style>
