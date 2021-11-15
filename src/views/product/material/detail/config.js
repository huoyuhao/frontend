export const detail = [
  { title: '唯一标识', dataIndex: 'materialEntityId', rowKey: true },
  { title: '物料名称', dataIndex: 'materialName', filter: true },
  { title: '物料类型ID', dataIndex: 'materialTypeId', filter: true },
  { title: '元素数量', dataIndex: 'materialEntityElementNumber' },
  { title: 'RF标签码', dataIndex: 'rfTagCode' },
  { title: '物料状态', dataIndex: 'materialEntityStatus', filter: true },
  { title: '物料位置', dataIndex: 'materialEntityPosition', sort: 'string', filter: true },
];

export const trace = [
  { title: '唯一标识', dataIndex: 'materialEntityTraceId', rowKey: true },
  { title: 'RF标签码', dataIndex: 'currentRFTagCode' },
  { title: '物料ID', dataIndex: 'materialEntityId' },
  { title: '物料件追踪的相关操作', dataIndex: 'operation' },
  { title: '仓库ID', dataIndex: 'warehouseId' },
  { title: '流水线ID', dataIndex: 'assemblyLineId' },
  { title: '时间', dataIndex: 'createTime' },
];
