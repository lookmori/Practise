import { result } from 'lodash';

export default () => {
  function SelectFile(e) {
    console.log(e, 'ee');
    const { files } = e.target; //当前选中文件对象 files 是FileList 对象 ，文件以数组形式存在
    console.log(files, 'es');
    console.log(createChunkFiles(files[0]));
    const formD = new FormData();
    formD.append('file', files[0]);
    fetch('http://127.0.0.1:3001/file/uploadFile', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer,
      body: formD,
    }).then((result) => {
      console.log(result, 'res');
    });
  }

  //切片函数
  function createChunkFiles(file) {
    let current = 0; //当前文件分片位置
    const chunkSize = 1 * 1024 * 1024; //分片大小
    let chunk = [];
    while (current < file.size) {
      let a = file.slice(current, current + chunkSize);
      chunk.push(a);
      current += chunkSize;
    }
    return chunk; //将切片后的文件返回回去
  }

  return (
    <>
      <input type="file" id="selectFile" style={{ opacity: 0 }} onChange={SelectFile} />
      <label
        htmlFor="selectFile"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 100,
          boxSizing: 'borderBox',
          height: 40,
          borderRadius: 5,
          backgroundColor: '#3A5BA0',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        选择文件
      </label>
    </>
  );
};
