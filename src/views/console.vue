<template>
  <el-container class="layout-container">
    <el-aside>
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <message/>
              </el-icon>
              后台信息表
            </template>
            <el-menu-item-group>
              <template #title>哎呦,你干嘛!!!</template>
              <el-menu-item index="1-1">
                <router-link to="/visitorMessage">访客信息</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/userContent">用户留言</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <router-view>
      </router-view>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import {Message} from '@element-plus/icons-vue'
</script>

<style scoped>
.layout-container{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.layout-container-demo  {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo  {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo {
  border-right: none;
}

.layout-container-demo {
  padding: 0;
}

.layout-container-demo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
.layout-container{

}
a{
  text-decoration: none;
  font-family: 楷体,serif;
  color: black;
}
</style>
