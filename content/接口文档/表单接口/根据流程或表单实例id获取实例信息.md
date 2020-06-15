#根据流程或表单实例id获取实例信息

GetByWorkFlowIdNoAuth

##简要描述：

根据流程或表单实例id获取实例信息

##请求URL：

/FormEngine/api/FormInstance/GetByWorkFlowIdNoAuth

##请求方式：

POST

##Header参数：

  参数名 | 必选  | 类型  | 说明  | 枚举项  
 ------------ | ------------ | ------------ | ------------ | ------------
 Content-Type  |  是 | string  |  请求类型 | application/json

##参数：

参数名       | 必选          | 类型         | 说明         | 枚举项  
------------ | ------------  | ------------ | ------------ | ------------
WorkFlowId   | 是            | string       | 流程实例Id  |   
FormInstanceId  | 是         | string        | 表单实例Id  |   

(二选一，都传默认使用WorkFlowId)

##参数示例：

    {
    	"WorkFlowId":"e7d0a08ce4ba428aa9185cc69d07d3d6",
    	"FormInstanceId":"f9f10b74-0eff-8148-3556-80e8d3ea3e5b"
    }


##返回示例：

    {
        "formTemplateVersionId": "146def65-8200-43df-a4c6-c98747308ec1",
        "workFlowId": "e7d0a08ce4ba428aa9185cc69d07d3d6",
        "templateId": "402880726f64e5f6016f787a765909a2",
        "moduleId": null,
        "formInstanceId": "f9f10b74-0eff-8148-3556-80e8d3ea3e5b",
        "formTemplateId": "fcabd43f-4ee0-4b4a-c44e-fe3bda7c8a7c",
        "workFlowStatus": 0
    }
