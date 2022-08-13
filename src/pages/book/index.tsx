import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProColumns, ProFormDatePicker, ProFormText } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Modal } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'umi';
const { confirm } = Modal;
const TableList: React.FC = connect(({ book }: any) => ({ book }))(function ({
  dispatch,
  book: { books },
}: any) {
  useEffect(() => {
    dispatch({
      type: 'book/getBookList',
      payload: {},
    });
  }, []);
  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '书名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '出版日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '操作',
      dataIndex: 'option',
      key: 'option',
      render: (_: any, record: any) => [
        <a
          href="#"
          onClick={() => {
            deleteMovie(record.id);
          }}
          style={{ color: 'red' }}
        >
          删除
        </a>,
      ],
    },
  ];

  //添加
  const addMovie = async (values: any) => {
    const body = {
      name: values.bookName,
      author: values.bookAuthor,
      date: values.bookPublishDate,
    };
    dispatch({ type: 'book/addBookOne', payload: body });
  };

  // 删除
  const deleteMovie = async (id: string) => {
    confirm({
      title: '确定删除吗？',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        dispatch({
          type: 'book/deleteBookOne',
          payload: id,
        });
      },
      onCancel: () => {
        return true;
      },
    });
  };

  return (
    <PageContainer>
      <ProTable
        options={false}
        rowKey="id"
        search={false}
        locale={{ emptyText: () => `暂无数据` }}
        toolBarRender={() => [
          <ModalForm<{
            bookName: string;
            bookAuthor: string;
            bookPublishDate: Date;
          }>
            title="添加图书"
            trigger={
              <Button type="primary">
                <PlusOutlined />
                添加图书
              </Button>
            }
            autoFocusFirstInput
            modalProps={{
              onCancel: () => console.log('run'),
            }}
            submitTimeout={2000}
            onFinish={async (values) => {
              addMovie(values);
              return true;
            }}
          >
            <ProFormText width="md" name="bookName" label="图书名称" />
            <ProFormText width="md" name="bookAuthor" label="作者" />
            <ProFormDatePicker width="md" name="bookPublishDate" label="出版日期" />
          </ModalForm>,
        ]}
        dataSource={books}
        columns={columns}
      />
    </PageContainer>
  );
});

export default TableList;
