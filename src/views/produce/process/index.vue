<template>
  <d-tab-view :list="list" :active="active"></d-tab-view>
</template>
<script>
import { defineComponent, watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'DProduceProcessIndex',
  components: {
  },
  setup() {
    const route = useRoute();
    const list = [
      { key: 'data', name: '工序列表', route: '/produce/task/data', file: import('./data.vue') },
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
