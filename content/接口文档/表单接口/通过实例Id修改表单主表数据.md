## 通过实例Id修改表单主表数据

此接口支持在不传表名的情况下修改表单数据，支持字段别名
### 请求方式

Post

### 请求地址

````
/api/FormInstance/UpdateMainFormData
````

### 请求参数

| 参数名         | 必选 | 类型   | 说明         | 枚举项 |
| -------------- | ---- | ------ | ------------ | ------ |
| FormInstanceId |      | string | 表单实例Id   |        |
| WorkFlowId     |      | string | 表单实例Id   |        |
| UpdateItems    | 是   | Array  | 修改字段集合 |        |

FormInstanceId和WorkFlowId二选一，都传默认使用FormInstanceId
#### UpdateItems中的参数

| 参数名 | 必选 | 类型   | 说明     | 枚举项 |
| ------ | ---- | ------ | -------- | ------ |
| Code   |      | string | 字段编号 |        |
| Alias  |      | string | 字段别名 |        |
| Value  | 是   | string | 修改的值 |        |

在没有Code的情况下，会通过Alias修改

### 请求示例


````
{
    "FormInstanceId":"150b749a-c42f-be3d-7691-29c8684c6596",
    "UpdateItems":[
        {
            "Code":"fld20200821161193440443475",
            "Value":"000"
        },
        {
            "Alias":"CeshiAlias",
            "Value":"00000"
        }
    ]
}
````

### 返回参数

| 参数名        | 必选 | 类型   | 说明     | 枚举项 |
| ------------- | ---- | ------ | -------- | ------ |
| isValid       |      | bool   | 请求状态 |        |
| errorMessages |      | string | 错误信息 |        |

### 返回示例

````
{
    "errors": {
        "isValid": true,
        "errorItems": []
    },
    "systemErrorMessage": null,
    "isValid": true,
    "errorProperty": "",
    "errorMessages": "",
    "redirectUrl": null,
    "entityId": null,
    "companyId": null,
    "token": null,
    "userId": null,
    "code": null,
    "errorType": 0,
    "data": null
}
````