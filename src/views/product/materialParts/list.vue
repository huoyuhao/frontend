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
        <a-button type="primary" size="mini" @click="queryTrace(record)">物料轨迹</a-button>
      </template>
    </d-table>
  </d-card>
  <a-modal
    v-model:visible="visibleModal"
    title="物料轨迹"
    width="1200px"
    cancelText="取消"
    okText="提交"
  >
    <d-table
      :loading="loading1"
      :columns="columnsTrace"
      :data-source="dataTrace"
      :rowKey="traceRowKey"
      :isSearch="true"
    >
      <template #header>
        <a-button type="primary" @click="query">刷新</a-button>
      </template>
    </d-table>
  </a-modal>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { list, trace } from './config';

export default defineComponent({
  name: 'DProductMaterialData',
  components: {  },
  setup() {
    const state = reactive({
      title: '物料件',
      loading: false,
      loading1: false,
      data: [],
      dataTrace: [],
      traceRowKey: 'materialEntityTraceId',
      rowKey: 'materialEntityId',
      visibleModal: false,
    });
    const api = '/material/entity';
    const columnsTrace = trace;
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
    const queryTrace = (item) => {
      const { materialEntityId } = item;
      state.loading1 = true;
      state.visibleModal = true;
      product({ api: `material/entity/trace?materialEntityId=${materialEntityId}`, method: 'get' }).then((res) => {
        state.loading1 = false;
        state.dataTrace = res;
        console.log(res);
      })
        .catch();
    };
    query();
    return {
      ...toRefs(state),
      columns,
      columnsTrace,
      query,
      update,
      queryTrace,
    };
  },
});
</script>
<style lang="less" scoped></style>
