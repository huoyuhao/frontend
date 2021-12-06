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
      <template #productiveTaskName="{ record, text }">
        <a @click="routeLink(record)">{{ text }}</a>
      </template>
      <template #requiredDate="{ text }">
        <p>{{ getTime(text) }}</p>
      </template>
      <template #productiveTaskUrgency="{ text }">
        <p>{{ text === 1 ? '紧急' : '正常' }}</p>
      </template>
      <template #productiveTaskStatus="{ text }">
        <p>{{ text === 1 ? '异常' : '正常' }}</p>
      </template>
      <template #user="{ text }">
        <p>{{ userNameObj[text] || text }}</p>
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
import { defineComponent, reactive, toRefs, inject } from 'vue';
import { product } from '/@/api/product/index';
import { deleteFun } from '/@/utils/operate/index';
import { list, taskMaterial } from './config';
import { useRouter } from 'vue-router';
import { getTime } from '/@/utils/fun/common';
import DAdd from './add-data.vue';

export default defineComponent({
  name: 'DProduceTaskData',
  components: { DAdd },
  setup() {
    const userNameObj = inject('userNameObj');
    const router = useRouter();
    const state = reactive({
      title: '生产计划',
      loading: false,
      data: [],
      rowKey: '',
      showModal: false,
      formData: null,
      materialArr: [],
      taskMaterial,
    });
    const api = '/productive/task';

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
        productiveTaskUrgency: 0,
        productiveTaskStatus: 0,
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
    const routeLink = (record) => {
      const { productiveTaskId } = record;
      router.push({
        path: '/produce/task/detail/detail',
        query: { productiveTaskId },
      });
    };
    query();
    return {
      ...toRefs(state),
      userNameObj,
      columns,
      routeLink,
      query,
      update,
      add,
      deleteData,
      getTime,
      modify,
    };
  },
});
</script>
<style lang="less" scoped></style>
