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
        <a-button type="primary" @click="taskStatus('start')">启动</a-button>
        <a-button type="primary" @click="taskStatus('finish')">完成</a-button>
      </template>
      <template #date="{ text }">
        <p>{{ getTime(text) }}</p>
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
    @update="update"
  />
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { deleteFun } from '/@/utils/operate/index';
import { detail, taskMaterial } from './config';
import { getTime } from '/@/utils/fun/common';
import { useRoute } from 'vue-router';
import { message } from 'ant-design-vue';
import DAdd from './add.vue';

export default defineComponent({
  name: 'DProduceTaskDetail',
  components: { DAdd },
  setup() {
    const route = useRoute();
    const state = reactive({
      title: '生产计划工序',
      loading: false,
      data: [],
      rowKey: '',
      showModal: false,
      formData: null,
      materialArr: [],
      taskMaterial,
    });
    const { productiveTaskId } = route.query;
    const api = `/productive/sub/task?productiveTaskId=${productiveTaskId}`;

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

    const query = () => {
      state.loading = true;
      product({ api, method: 'get' }).then((res) => {
        state.loading = false;
        state.data = res;
      })
        .catch();
      // 获取物料数据
      product({ api: '/material', method: 'get' }).then((res) => {
        state.materialArr =  res.map((item) => {
          return { value: item.materialId, label: item.materialName };
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
        productiveTaskId,
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
    const taskStatus = (type) => {
      product({ api: `/productive/sub/task/${type}?productiveTaskId=${productiveTaskId}`, method: 'put' }).then(() => {
        message.success('修改工序状态成功');
      })
        .catch();
    };
    query();
    return {
      ...toRefs(state),
      columns,
      query,
      update,
      add,
      deleteData,
      taskStatus,
      getTime,
      modify,
    };
  },
});
</script>
<style lang="less" scoped></style>
