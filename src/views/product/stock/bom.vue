<template>
  <d-card :title="title">
    <d-table
      :loading="loading"
      :columns="columns"
      :data-source="data"
      :rowKey="rowKey"
      :isSearch="true"
    >
      <template #header>
        <a-button type="primary" @click="query">刷新</a-button>
      </template>
      <template #action="{ record }">
        <a-button type="primary" size="mini" @click="query(record)">物料轨迹</a-button>
      </template>
    </d-table>
  </d-card>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { list } from './config';

export default defineComponent({
  name: 'DProductMaterialData',
  components: {  },
  props: {
    data: Object,
  },
  setup() {
    const state = reactive({
      title: 'BOM',
      loading: false,
      data: [],
      dataTrace: [],
      rowKey: 'materialEntityId',
    });
    const api = '/bom';
    const columns = [...list, { title: '操作', dataIndex: 'action', align: 'center', width: '80px', slots: { customRender: 'action' } }];

    const query = () => {
      state.loading = true;
      product({ api, method: 'get' }).then((res) => {
        state.loading = false;
        state.data = res;
      })
        .catch();
    };
    const update = () => {
      query();
    };
    query();
    return {
      ...toRefs(state),
      columns,
      query,
      update,
    };
  },
});
</script>
<style lang="less" scoped></style>
