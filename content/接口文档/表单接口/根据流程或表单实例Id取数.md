#获取对应流程实例或表单实例下全部数据

ExtractData

##简要描述：

 表单取数
 根据流程Id或表单实例Id获取对应实例下全部数据(树形)

##请求URL：

    /FormEngine/Api/FormInstance/ExtractData

##请求方式：

POST

##Header参数：

  参数名 | 必选  | 类型  | 说明  | 枚举项  
 ------------ | ------------ | ------------ | ------------ | ------------ 
 Content-Type  |  是 | string  |  请求类型 | application/json  

##参数：

  参数名 | 必选  | 类型  | 说明  | 枚举项  
 ------------ | ------------ | ------------ | ------------ | ------------ 
 WorkFlowId  | 是  | string  | 流程实例Id  |   
 FormInstanceId  | 是  | string  | 表单实例Id  |   

##参数示例：

    {"WorkFlowId":"1229e4ed314b4266abe81fa5013533ac"}

##返回参数：

  参数名 | 必选  | 类型  | 说明  | 枚举项  
 ------------ | ------------ | ------------ | ------------ | ------------ 
isValid||bool|查询状态|
errorMessages||string|错误信息|
data||string|返回数据|

###返回数据中的参数：

  参数名 | 必选  | 类型  | 说明  | 枚举项  
 ------------ | ------------ | ------------ | ------------ | ------------ 
formInstanceId||string|表单实例Id|
formId||string|表单模板Id|
voucherTemplateId||string|(预留暂不用)|
formData||object|表单数据|

##返回示例：

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
      "data": {
          "formInstanceId": "6c6b134d-23e5-db94-7200-0dfff5645aa2",
          "formId": "ece01c23-161d-6c2c-85ad-73dc4ff299f0",
          "voucherTemplateId": null,
          "formData": {
              "UTb202005261153901837349383": [
                  {
                      "fld202005261153121609807339": "75566f44-f993-7aca-03c5-0016347f1cde",
                      "fld20200526115312575877109": null,
                      "fld202005261153121826387311": "平台用户01测试",
                      "fld20200526115312387627280": "c288c159-87cb-4fd9-8a59-fef32b8303c8",
                      "children": [
                          {
                              "UTb202005261153901593298095": [
                                  {
                                      "fld202005261153121831272148": "eb067f48-0cf0-acc4-88e0-434080234e83",
                                      "fld202005261153121954500764": "75566f44-f993-7aca-03c5-0016347f1cde",
                                      "fld202005261153121760690763": null,
                                      "fld202005261153121059587693": "平台用户02测试",
                                      "fld202005261153121057848532": "320bdab2-3b5a-4605-b533-008c64275583"
                                  },
                                  {
                                      "fld202005261153121831272148": "591d504b-5c80-f599-9a56-32965b736a03",
                                      "fld202005261153121954500764": "75566f44-f993-7aca-03c5-0016347f1cde",
                                      "fld202005261153121760690763": null,
                                      "fld202005261153121059587693": "平台用户01测试",
                                      "fld202005261153121057848532": "c288c159-87cb-4fd9-8a59-fef32b8303c8"
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }
      }
    }
