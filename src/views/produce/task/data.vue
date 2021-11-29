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
      <template #targetMaterialIdList="{ text }">
        <p>{{ text }}</p>
      </template>
      <template #requiredDate="{ text }">
        <p>{{ getTime(text) }}</p>
      </template>
      <template #action="{ record }">
        <a-button type="primary" size="small" @click="deleteData(record)">删除</a-button>
      </template>
    </d-table>
  </d-card>
  <d-add
    v-model:visible="showModal"
    :form-data="formData"
    :is-modify="Boolean(formData && formData[rowKey])"
    :userArr="userArr"
    :materialArr="materialArr"
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
  name: 'DProduceTaskData',
  components: { DAdd },
  setup() {
    const router = useRouter();
    const state = reactive({
      title: '生产计划',
      loading: false,
      data: [],
      rowKey: '',
      showModal: false,
      formData: null,
      userArr: [],
      userObj: {},
      materialArr: [],
      materialObj: {},
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
        state.materialArr = [];
        state.materialObj = {};
        res.forEach((item) => {
          state.materialArr.push({ value: item.materialId, label: item.materialName });
          state.materialObj[item.materialId] = item.materialName;
        });
      })
        .catch();

      product({ api: '/user' }).then((res) => {
        state.userArr = [];
        state.userObj = {};
        res.forEach((item) => {
          state.userArr.push({ value: item.userId, label: `${item.userCode}(${item.userName})` });
          state.userObj[item.userId] = item.materialName;
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
        urgency: 0,
        status: 0,
        targetMaterialIdList: [],
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
      const { materialId } = record;
      router.push({
        path: '/produce/task/detail',
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
