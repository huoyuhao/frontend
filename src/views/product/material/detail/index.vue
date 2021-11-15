<template>
  <d-tab-view :list="list" :active="active"></d-tab-view>
</template>
<script>
import { defineComponent, watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'DProductMaterialDetailIndex',
  components: {
  },
  setup() {
    const route = useRoute();
    const list = [
      { key: 'list', name: '物料详情', route: '/product/material/detail/list', file: import('./list.vue') },
      { key: 'trace', name: '物料轨迹', route: '/product/material/detail/trace', file: import('./trace.vue') },
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
