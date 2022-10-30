<template>
  <div class="body">
    <!-- <span>{{ tab_now }}/{{ tab_sub }}</span> -->
    <admin-each-tab
      v-for="(e, i) in tabList"
      v-bind:key="i"
      :label="e.label"
      :ds="e.ds"
      :vBox="e.vBox"
      :id="e.id"
      @click="clickTab"
      :fill="tab_now === e.id"
      @subClick="clickSubTab"
      :tab_sub="tab_sub"
      :sublist="e.subList"
    />
  </div>
</template>

<script>
import AdminEachTab from "./AdminEachTab.vue";
import { tabList } from "@/data/admin";
export default {
  data() {
    return {
      tab_now: "admin",
      tab_sub: null,
      tabList: tabList,
    };
  },
  methods: {
    clickTab(param) {
      console.log(param);
      this.tab_now = param;
      // this.$router.push(`/admin/${param}`);
      this.tab_sub = null;
    },
    clickSubTab(param) {
      console.log(param);
      this.tab_sub = param;
      this.$router.push(`/admin/${this.tab_now}/${param}`);
    },
    checkURL: function () {
      const route = this.$router.currentRoute.path.split("/");
      console.log(route);
    },
  },
  components: {
    AdminEachTab,
  },
  mounted() {
    this.checkURL();
  },
};
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
