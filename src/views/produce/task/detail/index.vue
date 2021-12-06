<template>
  <d-tab-view :list="list" :active="active"></d-tab-view>
</template>
<script>
import { defineComponent, watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'DProduceTaskDetailIndex',
  components: {
  },
  setup() {
    const route = useRoute();
    const list = [
      { key: 'detail', name: '生产计划详情', route: '/produce/task/detail/list', file: import('./detail.vue') },
    ];
    const active = ref('');
    watchEffect(() => {
      active.value = route.params?.type;
    });
    return {
      list,
      active,
    };
  },
});
</script>
<style lang="less" scoped></style>
