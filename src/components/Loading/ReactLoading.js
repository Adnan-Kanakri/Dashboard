// import styled from '@emotion/styled/types/base';
import React from 'react';
import ReactLoading from 'react-loading';
import styled from "./ReactLoading.module.css";

const Example = () => (

    <ReactLoading type={'bubbles'} color={"red"} height={500} width={500} className={styled.centerLoading} />

);

export default Example;