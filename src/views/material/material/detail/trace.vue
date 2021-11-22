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
    </d-table>
  </d-card>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { trace } from './config';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'DMaterialMaterialDetialTrace',
  components: { },
  setup() {
    const route = useRoute();
    const state = reactive({
      title: '出入库记录',
      loading: false,
      data: [],
      rowKey: 'materialEntityTraceId',
    });
    const { materialId } = route.query;
    const api = `material/entity/trace?materialId=${materialId}`;
    const columns = [...trace];

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
