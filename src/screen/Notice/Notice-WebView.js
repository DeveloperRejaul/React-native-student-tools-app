import React from 'react';
import WebCom from '../../components/web-view/WebCom.js';

export default function NoticeWebView({navigation, route}) {
  return (
    <WebCom
      goBack={() => navigation.goBack()}
      link={route.params.link}
      text={route.params.name}
    />
  );
}
