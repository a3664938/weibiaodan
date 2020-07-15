#根据实例Id获取表单链接

GetFormPageUrl

##简要描述：

根据实例Id获取表单链接

##请求URL：

/OpenApi/api/FormInstance/GetFormPageUrl

##请求方式：

POST

##Header参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------
| Content-Type  |  是 | string  |  请求类型 | application/json

##参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------
| WorkFlowId  |  | string  | 流程实例Id  |
| FormInstanceId  |   | string  | 表单实例Id  |
| UserId  |  是 | string  | 用户Id|
| UserOrgDutyId  | 是  | string  | 机构职责Id|
| DutyId | 是  | string  | 职责Id|
| State  |   | string  | 读写权限字段(readOnly) |
| Paltform  | 是  | string  | 默认NPF  |

(WorkFlowId与FormInstanceId二选一，都传默认使用WorkFlowId)

##参数示例：

    {
      "WorkFlowId":"c53e6105cb7a462086fe92214ba0c409",
      "UserId":"744f91cf-927c-4078-a23f-251a2dcea690",
      "UserOrgDutyId":"736923f0-b0c8-485c-94e3-00dbffa05776",
      "DutyId":"3e628127-1212-4609-8209-7bca0b6987f1",
      "Platform":"NPF"
    }


##返回示例：

    {
      "errors": {
          "isValid": true,
          "errorItems": []
      },
      "isValid": true,
      "errorProperty": "",
      "errorMessages": "",
      "errorType": 0,
      "data": "http://localhost:8888/#/formrelease?feopapi1=userOrgDutyId,userId,platform&feopapi2=userOrgDutyId,userId&platform=NPF&userId=744f91cf-927c-4078-a23f-251a2dcea690&dutyId=3e628127-1212-4609-8209-7bca0b6987f1&userOrgDutyId=736923f0-b0c8-485c-94e3-00dbffa05776&formTemplateType=1&sourceType=preview&formTemplateId=fcabd43f-4ee0-4b4a-c44e-fe3bda7c8a7c&wfInstanceId=c53e6105cb7a462086fe92214ba0c409&tabId=4d62ead2-71dd-4e00-ba3e-9cfb4e4b16e3&inst=060dfb58-7b11-4783-436a-40729d28bbe4"
    }
