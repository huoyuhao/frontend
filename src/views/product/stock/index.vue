<template>
  <d-tab-view :list="list" :active="active"></d-tab-view>
</template>
<script>
import { defineComponent, watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'DProductWarehouse',
  components: {
  },
  setup() {
    const route = useRoute();
    const list = [
      { key: 'entryFactory', name: '入厂', route: '/product/stock/entryFactory', file: import('./entry-factory.vue') },
      { key: 'outFactory', name: '出厂', route: '/product/stock/outFactory', file: import('./out-factory.vue') },
      { key: 'entryWarehouse', name: '生产入库', route: '/product/stock/entryWarehouse', file: import('./entry-warehouse.vue') },
      { key: 'outWarehouse', name: '出库', route: '/product/stock/outWarehouse', file: import('./out-warehouse.vue') },
      { key: 'exhaust', name: '标签初始化', route: '/product/stock/exhaust', file: import('./exhaust.vue') },
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
