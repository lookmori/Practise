import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProColumns, ProFormDatePicker, ProFormText } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Modal } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'umi';
const { confirm } = Modal;
const TableList: React.FC = connect(({ movie }: any) => ({ movie }))(function ({
  dispatch,
  movie: { movie },
}: any) {
  useEffect(() => {
    dispatch({
      type: 'movie/getMovieList',
      payload: {},
    });
  }, []);
  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '电影名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '导演',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '发布日期',
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
      name: values.movieName,
      author: values.movieAuthor,
      date: values.moviePublishDate,
    };
    dispatch({ type: 'movie/saveMovies', payload: body });
  };

  // 删除
  const deleteMovie = async (id: string) => {
    confirm({
      title: '确定删除吗？',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        dispatch({
          type: 'movie/deleteMovie',
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
        toolBarRender={() => [
          <ModalForm<{
            movieName: string;
            movieAuthor: string;
            moviePublishDate: Date;
          }>
            title="新增电影"
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新增电影
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
            <ProFormText width="md" name="movieName" label="电影名称" />
            <ProFormText width="md" name="movieAuthor" label="导演" />
            <ProFormDatePicker width="md" name="moviePublishDate" label="电影发行时间" />
          </ModalForm>,
        ]}
        dataSource={movie}
        columns={columns}
      />
    </PageContainer>
  );
});

export default TableList;
