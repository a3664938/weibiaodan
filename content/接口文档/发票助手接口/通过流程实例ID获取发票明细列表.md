# 通过流程实例ID获取发票明细列表

GetList

## 简要描述：

从表单获取发票明细列表

## 请求URL：

    /OpenApi/api/InvoiceFolder/GetList

## 请求方式：

POST

## Header参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------
| Content-Type  |  是 | string  |  请求类型 | application/json

## 参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------
| WorkFlowId  |  是 | string  | 流程实例Id |
| CategoryName  |  | string  | 发票标签名称 |
| ProductName  |   | string  | 商品名称(模糊匹配) |
| Platform  |  是 | string  | 默认:NPF |

## 参数示例：

    {
        "WorkFlowId": "324d1638337c42bca5e3587002c341b9",
        "CategoryName": "其他费用",
        "ProductName": "黑色金属",
        "Platform":"NPF"
    }

## 返回参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|isValid||bool|查询状态||
|errorMessages||string|错误信息||
|data||object|返回数据||

### data中的参数：

|  参数名 | 必选  | 类型  | 说明  | 枚举项  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|invoiceDetailId||string|发票Id||
|invoiceCode||string|发票代码||
|invoiceNumber||string|发票号码||
|invoiceDate||DateTime|开票日期||
|type||int|发票类型||
|taxRate||decimal|税率||
|tax||decimal|税额||
|amount||decimal|金额||
|price||decimal|单价||
|quantity||decimal|数量||
|unit||string|单位||
|valueAddedTax||string|价税合计||
|valueAddedTaxDes||string|价税合计（大写）||
|category||string|发票标签Id||
|categoryName||string|发票标签名称||
|productName||string|商品名称||
|formInstanceId||string|表单实例Id||
|attachment||string|附件||


## 返回示例：

    {
        "errors": {
            "isValid": true,
            "errorItems": []
        },
        "isValid": true,
        "errorProperty": "",
        "errorMessages": "",
        "errorType": 0,
        "data": [
            {
                "id": "11129ac8-7de1-4faa-9e31-6c3263f274a5",
                "invoiceDetailId": "9d7ec130-7fcb-4920-9342-ad93dd136f76",
                "invoiceCode": "1100174160",
                "invoiceNumber": "01278615",
                "invoiceDate": "2019-11-29 00:00:00",
                "type": 0,
                "taxRate": 0.13,
                "valueAddedTax": 26173.54,
                "valueAddedTaxDes": "贰万陆仟壹佰柒拾叁圆伍角肆分",
                "amount": 23162.42,
                "tax": 3011.12,
                "category": "3812e4a0-58c7-40fd-afe3-2b9168edd57d",
                "categoryName": "其他费用",
                "invoiceUse": 1,
                "isCertification": true,
                "inputType": 0,
                "productName": "*黑色金属冶炼压延品*螺纹钢",
                "price": 3460.18,
                "quantity": 6.69,
                "unit": "吨",
                "formInstanceId": "1320bbad-9672-ec93-60af-96d4f8674e71",
                "organizationId": "719f4fab-98d2-4a8b-8346-afa22d7ca51d",
                "companyId": "719f4fab-98d2-4a8b-8346-afa22d7ca51d",
                "status": 1,
                "sortIndex": 0,
                "attachment": "[\"67447539-0535-4dba-9243-769eb7c16061-2020-06-12-04-22-13-2213\"]"
            },
            {
                "id": "ed6b0223-221e-4c1d-9deb-ca3415482f97",
                "invoiceDetailId": "9d7ec130-7fcb-4920-9342-ad93dd136f76",
                "invoiceCode": "1100174160",
                "invoiceNumber": "01278615",
                "invoiceDate": "2019-11-29 00:00:00",
                "type": 0,
                "taxRate": 0.13,
                "valueAddedTax": 46440.0,
                "valueAddedTaxDes": "肆万陆仟肆佰肆拾圆",
                "amount": 41097.35,
                "tax": 5342.65,
                "category": "3812e4a0-58c7-40fd-afe3-2b9168edd57d",
                "categoryName": "其他费用",
                "invoiceUse": 1,
                "isCertification": true,
                "inputType": 0,
                "productName": "*黑色金属冶炼压延品*螺纹钢",
                "price": 3424.78,
                "quantity": 12.0,
                "unit": "吨",
                "formInstanceId": "1320bbad-9672-ec93-60af-96d4f8674e71",
                "organizationId": "719f4fab-98d2-4a8b-8346-afa22d7ca51d",
                "companyId": "719f4fab-98d2-4a8b-8346-afa22d7ca51d",
                "status": 1,
                "sortIndex": 0,
                "attachment": "[\"67447539-0535-4dba-9243-769eb7c16061-2020-06-12-04-22-13-2213\"]"
            }
        ]
    }
