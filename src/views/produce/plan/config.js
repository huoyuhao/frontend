export const list = [
  { title: '唯一标识', dataIndex: 'StandardProcessId', rowKey: true, hideTable: true, hideForm: true },
  { title: '工序代码', dataIndex: 'StandardProcessCode', required: true },
  { title: '工序名称', dataIndex: 'StandardProcessName', required: true },
  { title: '助记码', dataIndex: 'StandardProcessMnemonic', required: true },
  { title: '目标物料', dataIndex: 'targetMaterialId', required: true, slots: { customRender: 'targetMaterialId' } },
  { title: 'bom单', dataIndex: 'bomId', required: true, slots: { customRender: 'bomId' } },
  { title: '合格率', dataIndex: 'pass', required: true },
  { title: '备注', dataIndex: 'description' },
];
