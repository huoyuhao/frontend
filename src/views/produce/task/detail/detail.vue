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
      <template #date="{ text }">
        <p>{{ getTime(text) }}</p>
      </template>
      <template #action="{ record }">
        <a-dropdown placement="bottomCenter">
          <a @click.prevent>
            操作
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="start"><a @click="taskStatus(record, 'start')">启动</a></a-menu-item>
              <a-menu-item key="finish"><a @click="taskStatus(record, 'finish')">完成</a></a-menu-item>
              <a-menu-item key="delete"><a @click="deleteData(record)">删除</a></a-menu-item>
              <a-menu-item key="note"><a @click="note(record)">领料出库</a></a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
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
  <d-add-note
    v-model:visible="showNoteModal"
    :form-data="formNoteData"
    :is-modify="Boolean(formNoteData && formNoteData[rowKey])"
    :materialArr="materialArr"
    :materialObj="materialObj"
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
import { modalFun } from '/@/utils/operate/modal';
import DAdd from './add.vue';
import DAddNote from '../../../note/add-data.vue';

export default defineComponent({
  name: 'DProduceTaskDetail',
  components: { DAdd, DAddNote },
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
      materialObj: {},
      taskMaterial,
      showNoteModal: false,
      formNoteData: null,
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
    const note = (item) => {
      console.log(item);
      state.showNoteModal = true;
      state.formNoteData = {
        materialList: item.rawMaterialList,
        noteType: 0,
      };
    };
    const taskStatus = (record, type) => {
      const { confirmModal } = modalFun();
      confirmModal({ title: '修改工序状态提示', content: '此操作将修改工序状态, 是否继续?' }, () => {
        const { productiveSubTaskId } = record;
        product({ api: `/productive/sub/task/${type}?productiveSubTaskId=${productiveSubTaskId}`, method: 'put', data: { productiveSubTaskId } }).then(() => {
          message.success('修改工序状态成功');
          update();
        })
          .catch();
      });
    };
    query();
    return {
      ...toRefs(state),
      columns,
      query,
      update,
      add,
      note,
      deleteData,
      taskStatus,
      getTime,
      modify,
    };
  },
});
</script>
<style lang="less" scoped></style>
