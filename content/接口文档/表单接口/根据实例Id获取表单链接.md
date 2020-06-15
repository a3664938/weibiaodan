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
| State  | 是  | string  | 读写权限字段(readOnly) |
| Paltform  | 是  | string  | 默认NPF  |

(WorkFlowId与FormInstanceId二选一，都传默认使用WorkFlowId)

##参数示例：

    {
    	"FormInstanceId":"01af4d49-3d9c-f0fe-17e9-0f9106a5bb02",
    	"State":"readOnly",
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
      "data": "http://cd.sysdsoft.cn:10003/#/formrelease?formTemplateType=1&formTemplateId=fcabd43f-4ee0-4b4a-c44e-fe3bda7c8a7c&state=readOnly&tabId=146def65-8200-43df-a4c6-c98747308ec1"
    }
