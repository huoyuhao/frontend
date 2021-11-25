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
      <template #materialEntityPositionType="{ text }">
        <p>{{ text === 0 ? '仓库' : '流水线'}}</p>
      </template>
      <template #materialEntityAction="{ text }">
        <p>{{ actionObj[text] || text }}</p>
      </template>
      <template #materialEntityNum="{ record, text }">
        <a @click="showRfDetail(record)">{{ text }}件</a>
      </template>
      <template #createTime="{ text }">
        <p>{{ getTime(text) }}</p>
      </template>
      <template #rfTagCodeList="{ text }">
        <p>{{ text && text.length > 0 && text.join(',') }}</p>
      </template>
    </d-table>
  </d-card>
  <a-modal
    v-model:visible="visibleModal"
    title="RF标签详情"
    width="800px"
    cancelText="取消"
    okText="提交"
    @ok="visibleModal=!visibleModal"
  >
    <a-row v-for="item in detail" :key="item" class="d-mb10">
      <a-col>{{ item }}</a-col>
    </a-row>
  </a-modal>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { record, actionObj } from './config';
import { useRoute } from 'vue-router';
import { getTime } from '/@/utils/fun/common';
export default defineComponent({
  name: 'DMaterialMaterialDetailRecord',
  components: { },
  setup() {
    const route = useRoute();
    const state = reactive({
      title: '出入库记录',
      loading: false,
      data: [],
      rowKey: '',
      actionObj,
      detail: [],
      visibleModal: false,
    });
    const { materialId } = route.query;
    const api = `material/storeRecord?materialId=${materialId}`;

    const columns = [];
    record.forEach((item) => {
      const { dataIndex, rowKey, hideTable } = item;
      if (rowKey) {
        state.rowKey = dataIndex;
      }
      if (!hideTable) {
        columns.push(item);
      }
    });
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
    const showRfDetail = (item) => {
      state.detail = item.rfTagCodeList || [];
      state.visibleModal = true;
    };
    query();
    return {
      ...toRefs(state),
      columns,
      query,
      update,
      getTime,
      showRfDetail,
    };
  },
});
</script>
<style lang="less" scoped></style>
