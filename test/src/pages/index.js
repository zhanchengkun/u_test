import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Upload } from "antd";

function IndexPage() {
  return (
    <div className={styles.normal}>

      在 Mac 、IOS 下均需要双击才行，单击无效。
      <br /> android 单击可以。 
      <br />
      <Upload><button>点击上传</button>
      </Upload>
     UA: {navigator.userAgent}
     <br/>
     eg:Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
