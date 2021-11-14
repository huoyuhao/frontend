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
      <template #materialCode="{ record, text }">
        <a @click="routeLink(record)">{{ text }}</a>
      </template>
      <template #action="{ record }">
        <a-dropdown placement="bottomCenter">
          <a @click.prevent>
            操作
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <!-- <a-menu-item key="modify"><a @click="modify(record)">修改</a></a-menu-item> -->
              <a-menu-item key="delete"><a @click="deleteData(record)">删除</a></a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
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
      console.log(record);
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
