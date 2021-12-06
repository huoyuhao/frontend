export const detail = [
  { title: '唯一标识', dataIndex: 'materialEntityId', rowKey: true, hideTable: true },
  { title: 'RF标签码', dataIndex: 'rfTagCode' },
  { title: '物料名称', dataIndex: 'materialName', filter: true },
  { title: '元素数量', dataIndex: 'materialEntityElementNumber' },
  { title: '物料状态', dataIndex: 'materialEntityStatus', filter: true },
  { title: '物料位置', dataIndex: 'materialEntityPositionType', slots: { customRender: 'materialEntityPositionType' }, filter: true },
  { title: '仓库ID', dataIndex: 'materialEntityPosition', filter: true },
  { title: '经办人', dataIndex: 'ownerId', slots: { customRender: 'user' } },
  { title: '仓库管理员', dataIndex: 'warehouseKeeperId', slots: { customRender: 'user' } },
  { title: '描述', dataIndex: 'description' },
];
export const trace = [
  { title: '唯一标识', dataIndex: 'materialEntityTraceId', rowKey: true, hideTable: true },
  { title: 'RF标签码', dataIndex: 'rfTagCode' },
  { title: '操作类型', dataIndex: 'materialEntityAction', slots: { customRender: 'materialEntityAction' } },
  { title: '物料位置', dataIndex: 'materialEntityPositionType', slots: { customRender: 'materialEntityPositionType' }, filter: true },
  { title: '仓库ID', dataIndex: 'materialEntityPosition', filter: true },
  { title: '经办人', dataIndex: 'ownerId', slots: { customRender: 'user' } },
  { title: '仓库管理员', dataIndex: 'warehouseKeeperId', slots: { customRender: 'user' } },
  { title: '时间', dataIndex: 'createTime', slots: { customRender: 'createTime' } },
  { title: '描述', dataIndex: 'description' },
];

export const record = [
  { title: '唯一标识', dataIndex: 'storeRecordId', rowKey: true, hideTable: true },
  { title: '操作类型', dataIndex: 'materialEntityAction', slots: { customRender: 'materialEntityAction' } },
  { title: '物料位置', dataIndex: 'materialEntityPositionType', slots: { customRender: 'materialEntityPositionType' }, filter: true },
  { title: '仓库ID', dataIndex: 'materialEntityPosition' },
  { title: '物料件数量', dataIndex: 'materialEntityNum', slots: { customRender: 'materialEntityNum' } },
  { title: '元素数量', dataIndex: 'materialEntityElementNumber' },
  { title: '经办人', dataIndex: 'ownerId', slots: { customRender: 'user' } },
  { title: '仓库管理员', dataIndex: 'warehouseKeeperId', slots: { customRender: 'user' } },
  // { title: 'RF标签', dataIndex: 'rfTagCodeList', slots: { customRender: 'rfTagCodeList' } },
  { title: '时间', dataIndex: 'createTime', slots: { customRender: 'createTime' } },
  { title: '描述', dataIndex: 'description' },
];

export const actionObj = {
  0: '入厂',
  1: '出库',
  2: '入库',
  3: '出厂',
  4: '用尽',
  5: '生产中',
  6: '重定位',
};
