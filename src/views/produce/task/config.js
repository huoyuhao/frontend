export const list = [
  { title: '唯一标识', dataIndex: 'productiveTaskId', rowKey: true, hideTable: true, hideForm: true },
  { title: '计划名称', dataIndex: 'productiveTaskName', required: true, slots: { customRender: 'productiveTaskName' } },
  { title: '关联单号', dataIndex: 'relatedNumber', required: true },
  { title: '完⼯⽇期', dataIndex: 'requiredDate', required: true, slots: { customRender: 'requiredDate' }  },
  { title: '客户简称', dataIndex: 'customName', required: true },
  { title: '⽬标物料', dataIndex: 'targetMaterialIdList', slots: { customRender: 'targetMaterialIdList' } },
  { title: '紧急程度', dataIndex: 'urgency', required: true },
  { title: '状况', dataIndex: 'status', required: true },
  { title: '负责⼈', dataIndex: 'ownerId', required: true },
  { title: '审核⼈', dataIndex: 'auditorId', required: true },
  { title: '备注', dataIndex: 'description' },
];
