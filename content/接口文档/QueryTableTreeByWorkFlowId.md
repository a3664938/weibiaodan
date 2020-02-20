#根据流程Id获取对应实例下全部数据(树形)

QueryTableTreeByWorkFlowId

##简要描述：

根据流程Id获取对应实例下全部数据

##请求URL：

    [FormEngine]/Api/FormInstance/QueryTableTreeByWorkFlowId

##请求方式：

POST

##Header参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  是 | string  |  请求类型 | application/json  |

##参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| EntityId  | 是  | string  | 流程Id  |   |

##参数示例：

    {"EntityId":"ec76b10f0c5f44f39bc3f2e02d5e9275"}

##返回参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|formInstanceId||string|表单实例Id|
|formTemplateId||string|表单模板Id|
|voucherTemplateId||string|(预留暂不用)|
|formData||object|表单数据|
|isValid||bool|查询状态|

##返回示例：

    {
      "formInstanceId": "d40d241a-b2e4-d813-d59d-8a01507ff9db",
      "formTemplateId": "fcabd43f-4ee0-4b4a-c44e-fe3bda7c8a7c",
      "voucherTemplateId": null,
      "formData": {
          "UTb201912251002151044565960": [
              {
                  "fld201912251002431009464447": 0.0,
                  "fld20191225143636684453953": "否",
                  "fld201912251002431925994164": "2020-02-12 16:59:51",
                  "fld20191225100243634507039": 0.0,
                  "fld202001131558241656367819": null,
                  "fld201912251002431112990249": "b7f1aae0-e949-4a9f-8f90-18003e618be6,
                  "fld201912251002431365847127": 0.0,
                  "fld201912251002431548418545": "83503819-cbfa-2e96-96c8-c43a28b917ad",
                  "fld20200113155824355479152": null,
                  "fld201912251002431336653408": 0.0,
                  "fld20191225100243103496640": null,
                  "fld201912251002431398274992": "铁物,
                  "fld201912251002431808263502": "中国铁路物资集团有限公司",
                  "children": [
                     {
                         "UTb201912251013391838295433": [
                             {
                                 "fld20200106102332683264964": "是",
                                 "fld20191225101369601913634": "物贸财务部",
                                 "fld201912251018851547227422": 34.0,
                                 "fld201912251013691019465766": "刘世佳",
                             }
                         ]
                     }
                 ]
              }
          ]
      },
      "id": null,
      "sortIndex": 0,
      "userId": null,
      "createUserId": null,
      "companyId": null,
      "userName": null,
      "createUserName": null,
      "email": null,
      "orgId": null,
      "token": null,
      "isValid": true,
      "errorMessages": null,
      "remark": null,
      "operationStatus": 0
    }
