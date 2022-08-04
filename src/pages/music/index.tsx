import music from '@/models/music';
import { saveMusic } from '@/services/music';
import { PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  ProColumns,
  ProFormDatePicker,
  ProFormText,
} from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'umi';
const TableList: React.FC = connect(({ music }) => ({ music }))(function ({
  dispatch,
  music: { list },
}: any) {
  useEffect(() => {
    dispatch({
      type: 'music/getMusicList',
      payload: {},
    });
  }, []);
  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '歌名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
      render: (_: any, record: any) => [<>{record.date.substring(0, 10)}</>],
    },
    {
      title: '操作',
      dataIndex: 'option',
      key: 'option',
      render: (_: any, record: any) => [
        <a
          href="#"
          onClick={() => {
            deleteMusic(record.id);
          }}
          style={{ color: 'red', marginRight: 10 }}
        >
          删除
        </a>,
        <ModalForm<{
          musicName: string;
          musicAuthor: string;
          musicPublishDate: Date;
        }>
          title="新增音乐"
          trigger={<a href="#">编辑</a>}
          autoFocusFirstInput
          modalProps={{
            onCancel: () => console.log('run'),
          }}
          submitTimeout={2000}
          onFinish={async (values) => {
            addAndUpdateMusic(values, 2);
            return true;
          }}
        >
          <ProFormText width="md" name="musicName" initialValue={record.name} label="歌曲名称" />
          <ProFormText
            width="md"
            name="musicAuthor"
            initialValue={record.author}
            label="歌曲作者"
          />
          <ProFormDatePicker
            width="md"
            name="musicPublishDate"
            initialValue={record.date}
            label="歌曲发行时间"
          />
        </ModalForm>,
      ],
    },
  ];

  const addAndUpdateMusic = async (values: any, type: number) => {
    const body = {
      name: values.musicName,
      author: values.musicAuthor,
      date: values.musicPublishDate,
    };
    console.log(body, 'body');

    type == 1
      ? dispatch({ type: 'music/saveMusic', payload: body })
      : dispatch({ type: 'music/updateMusic', payload: body });
  };

  const deleteMusic = async (id: string) => {
    dispatch({
      type: 'music/deleteMusic',
      payload: id,
    });
  };

  return (
    <PageContainer>
      <ProTable
        options={false}
        search={false}
        toolBarRender={() => [
          <ModalForm<{
            musicName: string;
            musicAuthor: string;
            musicPublishDate: Date;
          }>
            title="新增音乐"
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新增音乐
              </Button>
            }
            autoFocusFirstInput
            modalProps={{
              onCancel: () => console.log('run'),
            }}
            submitTimeout={2000}
            onFinish={async (values) => {
              addAndUpdateMusic(values, 1);
              return true;
            }}
          >
            <ProFormText width="md" name="musicName" label="歌曲名称" />
            <ProFormText width="md" name="musicAuthor" label="歌曲作者" />
            <ProFormDatePicker width="md" name="musicPublishDate" label="歌曲发行时间" />
          </ModalForm>,
        ]}
        dataSource={list}
        columns={columns}
      />
    </PageContainer>
  );
});

export default TableList;
