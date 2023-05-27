<template>
  <div>
    <label v-for="item in data">
      <el-menu-item :index="item.index" :key="item.index" @click="clickMenu(item)"

                    v-if="item.children===undefined">
        <i :class="'el-icon-'+item.icon" class="_position"></i>
        <span slot="title">test</span>
      </el-menu-item>
      <el-submenu :index="item.index" :key="item.index">
        <template slot="title">
          <i :class="'el-icon-'+item.icon" class="_position"></i>
          <span slot="title">test</span>
        </template>
        <item :data="item.children" />
      </el-submenu>
    </label>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>
