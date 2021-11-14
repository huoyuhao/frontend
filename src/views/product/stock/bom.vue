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
      <template #expandedRowRender="{ record }">
        <d-table
          :columns="bomMaterial"
          :data-source="record.rawMaterialList"
          :rowKey="'rawMaterialId'"
        >
        </d-table>
      </template>
      <template #action="{ record }">
        <a-menu-item key="delete"><a @click="deleteData(record)">删除</a></a-menu-item>
      </template>
    </d-table>
  </d-card>
  <d-add
    v-model:visible="showModal"
    :form-data="formData"
    :is-modify="Boolean(formData[rowKey])"
    :materialArr="data && data.materialArr"
    @update="update"
  />
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { bom, bomMaterial } from './config';
import { deleteFun } from '/@/utils/operate/index';
import DAdd from './add-bom.vue';

export default defineComponent({
  name: 'DProductMaterialBom',
  components: { DAdd },
  setup() {
    const state = reactive({
      title: 'BOM',
      loading: false,
      data: [],
      rowKey: '',
      bomMaterial: [],
      showModal: false,
      formData: {},
    });
    const api = '/bom';
    const columns = [];
    bom.forEach((item) => {
      const { dataIndex, rowKey, hideTable } = item;
      if (rowKey) {
        state.rowKey = dataIndex;
      }
      if (!hideTable) {
        columns.push(item);
      }
    });
    columns.push({ title: '操作', dataIndex: 'action', align: 'center', width: '80px', slots: { customRender: 'action' } });
    state.bomMaterial = bomMaterial;
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
    query();
    return {
      ...toRefs(state),
      columns,
      query,
      update,
      add,
      deleteData,
    };
  },
});
</script>
<style lang="less" scoped></style>
