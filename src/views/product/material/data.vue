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
        <a-button type="primary" @click="add">新增</a-button>
      </template>
      <template #materialName="{ record, text }">
        <a @click="routeLink(record)">{{ text }}</a>
      </template>
      <template #materialType="{ text }">
        <p>{{ text && text.materialTypeName }}</p>
      </template>
      <template #materialUnit="{ text }">
        <p>{{ text && text.materialUnitName }}</p>
      </template>
      <template #action="{ record }">
        <a-button type="primary" size="small" @click="deleteData(record)">删除</a-button>
      </template>
    </d-table>
  </d-card>
  <d-add
    v-model:visible="showModal"
    :form-data="formData"
    :is-modify="Boolean(formData[rowKey])"
    @update="update"
  />
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { deleteFun } from '/@/utils/operate/index';
import { list } from './config';
import { useRouter } from 'vue-router';
import DAdd from './add-data.vue';

export default defineComponent({
  name: 'DProductMaterialData',
  components: { DAdd },
  setup() {
    const router = useRouter();
    const state = reactive({
      title: '物料',
      loading: false,
      data: [],
      rowKey: '',
      showModal: false,
      formData: {},
    });
    const api = '/material';

    const columns = [];
    list.forEach((item) => {
      const { dataIndex, rowKey, hideTable } = item;
      if (rowKey) {
        state.rowKey = dataIndex;
      }
      if (!hideTable) {
        columns.push(item);
      }
    });
    columns.push({ title: '操作', dataIndex: 'action', align: 'center', width: '80px', slots: { customRender: 'action' } });

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
    const add = () => {
      state.showModal = true;
      state.formData = {};
    };
    const { deleteModal } = deleteFun();
    const deleteData = (item) => {
      const key = item[state.rowKey];
      const deleteDate = {
        method: 'delete',
        api,
        data: { [state.rowKey]: key },
      };
      deleteModal(deleteDate, () => {
        update();
      });
    };
    const modify = (item) => {
      state.showModal = true;
      state.formData = item;
    };
    const routeLink = (record) => {
      const { materialId } = record;
      router.push({
        path: '/product/material/detail',
        query: { materialId },
      });
    };
    query();
    return {
      ...toRefs(state),
      columns,
      routeLink,
      query,
      update,
      add,
      deleteData,
      modify,
    };
  },
});
</script>
<style lang="less" scoped></style>
