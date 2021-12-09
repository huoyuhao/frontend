export const detail = [
  { title: '唯一标识', dataIndex: 'productiveSubTaskId', rowKey: true, hideTable: true, hideForm: true },
  { title: '⼯序名称', dataIndex: 'productiveSubTaskName', required: true },
  // { title: '⽣产计划', dataIndex: 'productiveTaskId', hideForm: true, hideTable: true, required: true },
  { title: '⽬标物料', dataIndex: 'targetMaterialId', hideTable: true, required: true },
  { title: '⽬标物料', dataIndex: 'targetMaterialName', hideForm: true },
  { title: '目标物料数量', dataIndex: 'targetMaterialNum' },
  { title: '标准⼯序', dataIndex: 'standardProcessId', required: true },
  { title: '⼯序状态', dataIndex: 'productiveSubTaskStatus', hideForm: true },
  { title: '原材料', dataIndex: 'rawMaterialList', hideTable: true, slots: { customRender: 'rawMaterialList' } },
  { title: '计划开始时间', dataIndex: 'scheduledStartTime', required: true, slots: { customRender: 'date' }  },
  { title: '计划结束时间', dataIndex: 'scheduledEndTime', required: true, slots: { customRender: 'date' }  },
  { title: '描述', dataIndex: 'description' },
];

export const taskMaterial = [
  { title: '物料ID', dataIndex: 'rawMaterialId', rowKey: true },
  { title: '物料代码', dataIndex: 'rawMaterialCode' },
  { title: '物料名称', dataIndex: 'rawMaterialName' },
  { title: '物料数量', dataIndex: 'rawMaterialNum' },
];

// 正常，⽣产中，撤销，暂停，完成
