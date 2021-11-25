<template>
  <d-material-detail :data="data" :loading="loading" @update="update"></d-material-detail>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { useRoute } from 'vue-router';
import DMaterialDetail from './detail.vue';

export default defineComponent({
  name: 'DMaterialMaterialList',
  components: { DMaterialDetail },
  setup() {
    const route = useRoute();
    const state = reactive({
      loading: false,
      data: [],
    });
    const { materialId } = route.query;
    const api = `/material/entity?materialId=${materialId}`;

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
      query,
      update,
    };
  },
});
</script>
<style lang="less" scoped></style>
