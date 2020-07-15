#获取发票Token

GetToken

##简要描述：

获取发票Token

##请求URL：

    /InvoiceAssistantOpenApi/api/Login/GetToken

##请求方式：

POST

##Header参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------
| Content-Type  |  是 | string  |  请求类型 | application/json

##参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------
| UserName  | 是  | string  | 用户编码 |
| AppKey  | 是  | string  |  |
| AppSecret  | 是  | string  |  |
| platform  | 是  | string  | 实现平台 | FinanceShare/CRMG/ISME

##参数示例：

    {
        "UserName":"ptyh03",
        "AppKey":"【AppKey】",
        "AppSecret":"【AppSecret】",
        "Platform":"FinanceShare"
    }

##返回参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------
|success||bool|请求状态|
|msg||string|错误信息|
|data||string|Token|

##返回示例：

    {
        "success": true,
        "msg": null,
        "data": "【Token】"
    }
