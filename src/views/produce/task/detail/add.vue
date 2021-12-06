<template>
  <a-modal
    v-model:visible="visibleModal"
    :title="isModify ? '修改' : '新增'"
    width="800px"
    cancelText="取消"
    okText="提交"
    @ok="submit"
    @cancel="close"
  >
    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
      <template v-for="item in detail">
        <a-form-item v-if="item.dataIndex === 'targetMaterialId'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-select
            v-model:value="formItem[item.dataIndex]"
            placeholder="请选择"
            show-search
            option-filter-prop="label"
            :options="materialArr"
          />
        </a-form-item>
        <a-form-item v-else-if="item.dataIndex === 'standardProcessId'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-select
            v-model:value="formItem[item.dataIndex]"
            placeholder="请选择"
            show-search
            option-filter-prop="label"
            :options="processArr"
          />
        </a-form-item>
        <a-form-item v-else-if="['scheduledStartTime', 'scheduledEndTime'].includes(item.dataIndex)" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-date-picker
            v-model:value="formItem[item.dataIndex]"
            type="date"
            placeholder="请选择"
            style="width: 100%"
          />
        </a-form-item>
        <a-form-item v-else-if="item.dataIndex === 'targetMaterialNum'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-input-number v-model:value="formItem[item.dataIndex]" :placeholder="`请输入${item.title}`" />
        </a-form-item>
        <template v-else-if="item.dataIndex === 'rawMaterialList'">
          <a-form-item
            v-for="(element, index) in formItem.rawMaterialList"
            :key="element + item + index"
            :label="item.title"
            :disabled="true"
            :name="['domains1', index, 'value']"
          >
            <a-row align="middle">
              <a-col span="8">
                <a-select
                  v-model:value="element.rawMaterialId"
                  placeholder="请选择"
                  show-search
                  option-filter-prop="label"
                  :options="materialArr"
                />
              </a-col>
              <a-col span="11" offset="2">
                <a-input-number v-model:value="element.rawMaterialNum" placeholder="请输入原材料数量" />
              </a-col>
            </a-row>
          </a-form-item>
        </template>
        <a-form-item v-else-if="!item.hideForm" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-input v-model:value="formItem[item.dataIndex]" />
        </a-form-item>
      </template>
    </a-form>
  </a-modal>
</template>
<script>
import { defineComponent, reactive, toRefs, ref, watch } from 'vue';
import { addFun } from '/@/utils/operate/index';
import { detail } from './config';
import { Form } from 'ant-design-vue';
import { product } from '/@/api/product/index';

export default defineComponent({
  name: 'DAddTaskData',
  components: {
  },
  props: {
    visible: {
      required: true,
      type: Boolean,
      default: false,
    },
    formData: {
      type: Object,
      default() {
        return null;
      },
    },
    isModify: {
      required: true,
      type: Boolean,
      default: false,
    },
    materialArr: Array,
  },
  setup(props, { emit }) {
    const api = '/productive/sub/task';
    const formItem = reactive({});
    const ruleValidate = reactive({});

    detail.forEach((item) => {
      const { title, dataIndex } = item;
      if (item.required) {
        ruleValidate[dataIndex] = [{ required: true, message: `${title}不能为空！` }];
      }
      formItem[dataIndex] = '';
    });
    const { useForm } = Form;
    const { resetFields, validate, validateInfos } = useForm(formItem, ruleValidate);

    const { visibleModal, close, submit } = addFun(toRefs(props), emit, { resetFields, validate }, { formItem, api });

    const processObj = ref(null);
    const processArr = ref([]);
    const queryProcess = () => {
      product({ api: '/standard/process', method: 'get' }).then((res) => {
        processArr.value = [];
        processObj.value = {};
        res.forEach((item) => {
          processArr.value.push({ value: item.standardProcessId, label: item.standardProcessName });
          processObj[item.standardProcessId] = item.rawMaterialList;
        });
      })
        .catch();
    };
    watch(
      () => {
        return [formItem.standardProcessId, formItem.targetMaterialNum];
      },
      () => {
        if (formItem.standardProcessId) {
          if (!formItem.targetMaterialNum) return ;
          formItem.rawMaterialList = processObj[formItem.standardProcessId].map((item) => {
            return { rawMaterialId: item.rawMaterialId, rawMaterialNum: item.rawMaterialNum * formItem.targetMaterialNum };
          });
        }
      },
    );
    queryProcess();
    return {
      processArr,
      detail,
      formItem,
      visibleModal,
      validateInfos,
      close,
      submit,
    };
  },
});
</script>
<style lang="less" scoped></style>
