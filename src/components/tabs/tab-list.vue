<template>
  <ul class="d-tab">
    <li
      v-for="(item, index) in data"
      :key="item.key + index"
      :class="['d-tab-item', `d-tab-${size}`, { active: item.key === activeKey }]"
      @click="clickTab(item)"
    >
      {{ item.name }}
    </li>
    <li v-if="!hideAdd" :class="['d-tab-item', `d-tab-${size}`]" @click="addTab">
      <PlusOutlined />
    </li>
  </ul>
</template>

<script>
import { defineComponent, toRefs } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'DTabList',
  components: { PlusOutlined },
  props: {
    data: {
      type: Array,
    },
    activeKey: {
      type: String,
    },
    size: {
      type: String,
      default: 'default',
    },
    hideAdd: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const clickTab = (item) => {
      emit('change', item);
    };
    const addTab = () => {
      emit('add-tab');
    };
    return {
      ...toRefs(props),
      clickTab,
      addTab,
    };
  },
});
</script>
<style lang="less" scoped>
.d-tab {
  display: flex;
  margin-left: 2px;
  .d-tab-item {
    margin-right: 10px;
    min-width: 110px;
    line-height: 38px;
    padding: 0 10px;
    box-sizing: border-box;
    color: #555;
    border: 1px #dbdbdb solid;
    border-bottom: 0;
    text-align: center;
    border-radius: 4px 4px 0 0;
    background-color: #efefef;
    &.d-tab-small {
      margin-right: 6px;
      min-width: 80px;
      line-height: 30px;
      padding: 0 8px;
      font-size: 12px;
    }
    &:hover {
      color: @color;
    }
    &.active {
      border: 0;
      color: #fff;
      background-color: @color;
    }
  }
}
</style>
