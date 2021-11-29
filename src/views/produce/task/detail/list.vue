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
        <a-button type="primary" @click="update">刷新</a-button>
      </template>
      <template #materialEntityPositionType="{ text }">
        <p>{{ text === 0 ? '仓库' : '流水线'}}</p>
      </template>
      <template #action="{ record }">
        <a-button type="primary" size="small" @click="queryTrace(record)">物料轨迹</a-button>
      </template>
    </d-table>
  </d-card>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { detail, trace, actionObj } from './config';
import { getTime } from '/@/utils/fun/common';

export default defineComponent({
  name: 'DMaterialMaterialDetial',
  components: { },
  props: {
    data: Array,
    loading: Boolean,
  },
  emits: ['update'],
  setup(props, { emit }) {
    const state = reactive({
      title: '物料详情',
      loading1: false,
      dataTrace: [],
      traceRowKey: '',
      rowKey: '',
      visibleModal: false,
      actionObj,
    });

    const columnsTrace = [];
    trace.forEach((item) => {
      const { dataIndex, rowKey, hideTable } = item;
      if (rowKey) {
        state.traceRowKey = dataIndex;
      }
      if (!hideTable) {
        columnsTrace.push(item);
      }
    });

    const columns = [];
    detail.forEach((item) => {
      const { dataIndex, rowKey, hideTable } = item;
      if (rowKey) {
        state.rowKey = dataIndex;
      }
      if (!hideTable) {
        columns.push(item);
      }
    });

    columns.push({ title: '操作', dataIndex: 'action', align: 'center', width: '80px', slots: { customRender: 'action' } });

    const update = () => {
      emit('update');
    };
    const queryTrace = (item) => {
      const { materialEntityId } = item;
      state.loading1 = true;
      state.visibleModal = true;
      product({ api: `material/entity/trace?materialEntityId=${materialEntityId}`, method: 'get' }).then((res) => {
        state.loading1 = false;
        state.dataTrace = res;
      })
        .catch();
    };
    return {
      ...toRefs(state),
      columns,
      columnsTrace,
      update,
      queryTrace,
      getTime,
    };
  },
});
</script>
<style lang="less" scoped></style>
