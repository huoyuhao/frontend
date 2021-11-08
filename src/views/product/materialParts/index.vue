<template>
  <d-tab-view :list="list" :active="active" :data="{ materialArr }"></d-tab-view>
</template>
<script>
import { defineComponent, watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
import { product } from '/@/api/product/index';
export default defineComponent({
  name: 'DProductWarehouse',
  components: {
  },
  setup() {
    const route = useRoute();
    const list = [
      { key: 'list', name: '物料件', route: '/product/materialParts/list', file: import('./list.vue') },
      { key: 'entryFactory', name: '入厂', route: '/product/materialParts/entryFactory', file: import('./entry-factory.vue') },
      { key: 'outFactory', name: '出厂', route: '/product/materialParts/outFactory', file: import('./out-factory.vue') },
      { key: 'entryWarehouse', name: '入库', route: '/product/materialParts/entryWarehouse', file: import('./entry-warehouse.vue') },
      { key: 'outWarehouse', name: '出库', route: '/product/materialParts/outWarehouse', file: import('./out-warehouse.vue') },
      { key: 'exhaust', name: '用尽', route: '/product/materialParts/exhaust', file: import('./exhaust.vue') },
      { key: 'bom', name: 'BOM', route: '/product/materialParts/bom', file: import('./bom.vue') },
    ];
    const active = ref('');
    watchEffect(() => {
      active.value = route.params?.type;
    });
    const materialArr = ref([]);
    const query = async () => {
      product({ api: '/material', method: 'get' }).then((res) => {
        materialArr.value = res.map((item) => {
          return { value: item.materialId, label: item.materialName };
        });
      })
        .catch();
    };
    query();
    return {
      list,
      active,
      materialArr,
    };
  },
});
</script>
<style lang="less" scoped></style>
