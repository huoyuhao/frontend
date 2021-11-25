import { watch, ref } from 'vue';
import { product } from '/@/api/product/index';

export const getMaterialDetail = (rfTagCodeList) => {
  console.log(rfTagCodeList);
  const materialDetail = ref([]);
  const loading = ref([]);
  const timer = ref(null);

  watch(() => {
    return rfTagCodeList.value;
  }, (value) => {
    console.log(value);
    clearTimeout(timer.value);
    timer.value = setTimeout(() => {
      queryMaterialDetail(value);
    }, 2000);
  });

  const queryMaterialDetail = (value) => {
    if (value.length === 0) return materialDetail.value = [];
    loading.value = true;
    product({ api: '/material/entity', method: 'post', data: { rfTagCodeList: value } }).then((res) => {
      loading.value = false;
      materialDetail.value = res;
    })
      .catch();
  };
  return {
    loading,
    materialDetail,
    queryMaterialDetail,
  };
};
