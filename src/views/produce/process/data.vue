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
      <template #action="{ record }">
        <a-button type="primary" size="small" @click="deleteData(record)">删除</a-button>
      </template>
      <template #expandedRowRender="{ record }">
        <d-table
          :columns="taskMaterial"
          :data-source="record.rawMaterialList"
          :rowKey="'rawMaterialId'"
        >
        </d-table>
      </template>
    </d-table>
  </d-card>
  <d-add
    v-model:visible="showModal"
    :form-data="formData"
    :is-modify="Boolean(formData && formData[rowKey])"
    :materialArr="materialArr"
    :materialObj="materialObj"
    @update="update"
  />
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { deleteFun } from '/@/utils/operate/index';
import { list, taskMaterial } from './config';
import DAdd from './add-data.vue';

export default defineComponent({
  name: 'DProduceProcessData',
  components: { DAdd },
  setup() {
    const state = reactive({
      title: '生产工序',
      loading: false,
      data: [],
      rowKey: '',
      showModal: false,
      formData: null,
      materialArr: [],
      materialObj: {},
      taskMaterial,
    });
    const api = '/standard/process';

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
      // 获取物料数据
      product({ api: '/material', method: 'get' }).then((res) => {
        state.materialArr = [];
        state.materialObj = {};
        res.forEach((item) => {
          state.materialArr.push({ value: item.materialId, label: item.materialName });
          state.materialObj[item.materialId] = item?.materialUnit?.materialUnitName || '';
        });
      })
        .catch();
    };
    const update = () => {
      query();
    };
    const add = () => {
      state.showModal = true;
      state.formData = {
        rawMaterialList: [],
      };
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
    query();
    return {
      ...toRefs(state),
      columns,
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
