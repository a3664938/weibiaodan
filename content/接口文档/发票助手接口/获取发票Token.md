#获取发票Token

Get

##简要描述：

获取发票Token

##请求URL：

    /InvoiceAssistantOpenApi/api/InvoiceAssistant/Get

##请求方式：

POST

##Header参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------
| Content-Type  |  是 | string  |  请求类型 | application/json

##参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------|
| userCode  | 是  | string  | 用户编码(加密) ||
| platform  | 是  | string  | 实现平台 | FinanceShare/CRMG/ISME|

##参数示例：

    {
      "userCode":"60F23B0ACB3ACEE18C3146C10E3600BF821E850687469733A8F1D9D7246E0552",
      "platform":"FinanceShare"
    }

##返回参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------|
|success||bool|请求状态|    |
|msg||string|错误信息|    |
|data||string|Token|    |

##返回示例：

    {
        "success": true,
        "msg": null,
        "data": "ea+7vagPJpZn3HRZIoCYw9S6/sbFhTpkcao1w5fdRuhi/ngkFJuwwFGNOF7CPUmErJza1wMkUnOnCQhrQE2F+jZ32oMj9BtaekJit8/jMz1TQErg/LpVm2WOrUKRMDS73hgoh6GFyDjP0PXgmdkj4WdbMu1DTdlfNaRiOh3fZyyfpmoHNuk+ov7QMysNu0P0+KD2i09Harai04psn5yT3IQgtSTobZtLz5FcFmANcBthXqL4TCo+4fpnIhCth2DKSinMY9S4y8Iv6kJf/ss3h5x3adVC0az0YwA/tY6Kc+4KWf0IptVN6MaJkQ3JjsHfehMmJSBXGPZSuG82CWAJPo7aAj5V4OYwzGz2US5jN6I92kVRrQEiRqDlpqjTiYIJ"
    }