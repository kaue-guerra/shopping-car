import './NewOffer.css';

import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
  } from 'antd';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';

export function NewOffer(){
    
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    
      const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };
    
      const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
          src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj as RcFile);
            reader.onload = () => resolve(reader.result as string);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
      };
    
    return (
        
        <div className='mainForm'>
            <h2 className='titlePage'>NOVA OFERTA</h2>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          layout="horizontal"
        >
          <Form.Item name="brand" label="Marca">
            <Input />
          </Form.Item>
          <Form.Item name="model" label="Modelo">
            <Input />
          </Form.Item>
          <Form.Item name="data" label="Ano" >
            <DatePicker picker="year" placeholder='Selecione o ano' />
          </Form.Item>
          <Form.Item name="price" label="Preço" >
            <InputNumber controls={false} placeholder="R$" step="0.01" min="0.01"/>
          </Form.Item>
          <Form.Item name="color" label="Cor">
            <Input />
          </Form.Item>
          <Form.Item name="km" label="KM Rodados">
            <InputNumber controls={false}/>
          </Form.Item>
          <Form.Item name="license-plate" label="Placa">
            <Input />
          </Form.Item>
          <Form.Item name="city" label="Cidade">
            <Input />
          </Form.Item>
          <ImgCrop rotate>
            <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
            >
                {fileList.length < 3 && '+ Upload'}
            </Upload>
          </ImgCrop>
          
          <Form.Item className='button-submit'>
            <Button type='primary' size='large'>Salvar</Button>
          </Form.Item>
        </Form>
        </div>
      );
}