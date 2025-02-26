
# Payment Refund

Represents a refund of a payment made using Square. Contains information about
the original payment and the amount of money refunded.

## Structure

`PaymentRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The unique ID for this refund, generated by Square.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `status` | `string \| undefined` | Optional | The refund's status:<br><br>- `PENDING` - Awaiting approval.<br>- `COMPLETED` - Successfully completed.<br>- `REJECTED` - The refund was rejected.<br>- `FAILED` - An error occurred.<br>**Constraints**: *Maximum Length*: `50` |
| `locationId` | `string \| undefined` | Optional | The location ID associated with the payment this refund is attached to.<br>**Constraints**: *Maximum Length*: `50` |
| `amountMoney` | [`Money`](/doc/models/money.md) | Required | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `appFeeMoney` | [`Money \| undefined`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `processingFee` | [`ProcessingFee[] \| undefined`](/doc/models/processing-fee.md) | Optional | Processing fees and fee adjustments assessed by Square for this refund. |
| `paymentId` | `string \| undefined` | Optional | The ID of the payment associated with this refund.<br>**Constraints**: *Maximum Length*: `192` |
| `orderId` | `string \| undefined` | Optional | The ID of the order associated with the refund.<br>**Constraints**: *Maximum Length*: `192` |
| `reason` | `string \| undefined` | Optional | The reason for the refund.<br>**Constraints**: *Maximum Length*: `192` |
| `createdAt` | `string \| undefined` | Optional | The timestamp of when the refund was created, in RFC 3339 format.<br>**Constraints**: *Maximum Length*: `32` |
| `updatedAt` | `string \| undefined` | Optional | The timestamp of when the refund was last updated, in RFC 3339 format.<br>**Constraints**: *Maximum Length*: `32` |
| `teamMemberId` | `string \| undefined` | Optional | An optional ID of the team member associated with taking the payment.<br>**Constraints**: *Maximum Length*: `192` |

## Example (as JSON)

```json
{
  "id": "id0",
  "status": "status8",
  "location_id": "location_id4",
  "amount_money": {
    "amount": 186,
    "currency": "NGN"
  },
  "app_fee_money": {
    "amount": 106,
    "currency": "GBP"
  },
  "processing_fee": [
    {
      "effective_at": "effective_at6",
      "type": "type8",
      "amount_money": {
        "amount": 214,
        "currency": "BWP"
      }
    },
    {
      "effective_at": "effective_at7",
      "type": "type7",
      "amount_money": {
        "amount": 215,
        "currency": "BYR"
      }
    },
    {
      "effective_at": "effective_at8",
      "type": "type6",
      "amount_money": {
        "amount": 216,
        "currency": "BZD"
      }
    }
  ],
  "payment_id": "payment_id0"
}
```

