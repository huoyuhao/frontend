<template>
  <d-tab-view :list="list" :active="active"></d-tab-view>
</template>
<script>
import { defineComponent, watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'DMaterialWarehouse',
  components: {
  },
  setup() {
    const route = useRoute();
    const list = [
      { key: 'data', name: '仓库', route: '/material/warehouse/data', file: import('./data.vue') },
      { key: 'type', name: '仓库类型', route: '/material/warehouse/type', file: import('./type.vue') },
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
