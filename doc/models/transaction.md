
# Transaction

Represents a transaction processed with Square, either with the
Connect API or with Square Point of Sale.

The `tenders` field of this object lists all methods of payment used to pay in
the transaction.

## Structure

`Transaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The transaction's unique ID, issued by Square payments servers.<br>**Constraints**: *Maximum Length*: `192` |
| `locationId` | `string \| undefined` | Optional | The ID of the transaction's associated location.<br>**Constraints**: *Maximum Length*: `50` |
| `createdAt` | `string \| undefined` | Optional | The timestamp for when the transaction was created, in RFC 3339 format.<br>**Constraints**: *Maximum Length*: `32` |
| `tenders` | [`Tender[] \| undefined`](/doc/models/tender.md) | Optional | The tenders used to pay in the transaction. |
| `refunds` | [`Refund[] \| undefined`](/doc/models/refund.md) | Optional | Refunds that have been applied to any tender in the transaction. |
| `referenceId` | `string \| undefined` | Optional | If the transaction was created with the [Charge]($e/Transactions/Charge)<br>endpoint, this value is the same as the value provided for the `reference_id`<br>parameter in the request to that endpoint. Otherwise, it is not set.<br>**Constraints**: *Maximum Length*: `40` |
| `product` | [`string \| undefined`](/doc/models/transaction-product.md) | Optional | Indicates the Square product used to process a transaction. |
| `clientId` | `string \| undefined` | Optional | If the transaction was created in the Square Point of Sale app, this value<br>is the ID generated for the transaction by Square Point of Sale.<br><br>This ID has no relationship to the transaction's canonical `id`, which is<br>generated by Square's backend servers. This value is generated for bookkeeping<br>purposes, in case the transaction cannot immediately be completed (for example,<br>if the transaction is processed in offline mode).<br><br>It is not currently possible with the Connect API to perform a transaction<br>lookup by this value.<br>**Constraints**: *Maximum Length*: `192` |
| `shippingAddress` | [`Address \| undefined`](/doc/models/address.md) | Optional | Represents a postal address in a country. The address format is based<br>on an [open-source library from Google](https://github.com/google/libaddressinput). For more information,<br>see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata).<br>This format has dedicated fields for four address components: postal code,<br>locality (city), administrative district (state, prefecture, or province), and<br>sublocality (town or village). These components have dedicated fields in the<br>`Address` object because software sometimes behaves differently based on them.<br>For example, sales tax software may charge different amounts of sales tax<br>based on the postal code, and some software is only available in<br>certain states due to compliance reasons.<br><br>For the remaining address components, the `Address` type provides the<br>`address_line_1` and `address_line_2` fields for free-form data entry.<br>These fields are free-form because the remaining address components have<br>too many variations around the world and typical software does not parse<br>these components. These fields enable users to enter anything they want.<br><br>Note that, in the current implementation, all other `Address` type fields are blank.<br>These include `address_line_3`, `sublocality_2`, `sublocality_3`,<br>`administrative_district_level_2`, `administrative_district_level_3`,<br>`first_name`, `last_name`, and `organization`.<br><br>When it comes to localization, the seller's language preferences<br>(see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences))<br>are ignored for addresses. Even though Square products (such as Square Point of Sale<br>and the Seller Dashboard) mostly use a seller's language preference in<br>communication, when it comes to addresses, they will use English for a US address,<br>Japanese for an address in Japan, and so on. |
| `orderId` | `string \| undefined` | Optional | The order_id is an identifier for the order associated with this transaction, if any.<br>**Constraints**: *Maximum Length*: `192` |

## Example (as JSON)

```json
{
  "id": "id0",
  "location_id": "location_id4",
  "created_at": "created_at2",
  "tenders": [
    {
      "id": "id2",
      "location_id": "location_id6",
      "transaction_id": "transaction_id0",
      "created_at": "created_at0",
      "note": "note8",
      "type": "OTHER"
    },
    {
      "id": "id3",
      "location_id": "location_id7",
      "transaction_id": "transaction_id1",
      "created_at": "created_at1",
      "note": "note9",
      "type": "CARD"
    },
    {
      "id": "id4",
      "location_id": "location_id8",
      "transaction_id": "transaction_id2",
      "created_at": "created_at2",
      "note": "note0",
      "type": "CASH"
    }
  ],
  "refunds": [
    {
      "id": "id4",
      "location_id": "location_id8",
      "transaction_id": "transaction_id2",
      "tender_id": "tender_id2",
      "created_at": "created_at2",
      "reason": "reason0",
      "amount_money": {
        "amount": 186,
        "currency": "YER"
      },
      "status": "PENDING",
      "processing_fee_money": {
        "amount": 112,
        "currency": "GEL"
      },
      "additional_recipients": [
        {
          "location_id": "location_id7",
          "description": "description3",
          "amount_money": {
            "amount": 83,
            "currency": "JOD"
          },
          "receivable_id": "receivable_id3"
        }
      ]
    },
    {
      "id": "id5",
      "location_id": "location_id9",
      "transaction_id": "transaction_id3",
      "tender_id": "tender_id3",
      "created_at": "created_at3",
      "reason": "reason9",
      "amount_money": {
        "amount": 187,
        "currency": "ZAR"
      },
      "status": "APPROVED",
      "processing_fee_money": {
        "amount": 113,
        "currency": "GHS"
      },
      "additional_recipients": [
        {
          "location_id": "location_id8",
          "description": "description4",
          "amount_money": {
            "amount": 84,
            "currency": "JPY"
          },
          "receivable_id": "receivable_id4"
        },
        {
          "location_id": "location_id9",
          "description": "description5",
          "amount_money": {
            "amount": 85,
            "currency": "KES"
          },
          "receivable_id": "receivable_id5"
        }
      ]
    },
    {
      "id": "id6",
      "location_id": "location_id0",
      "transaction_id": "transaction_id4",
      "tender_id": "tender_id4",
      "created_at": "created_at4",
      "reason": "reason8",
      "amount_money": {
        "amount": 188,
        "currency": "ZMK"
      },
      "status": "REJECTED",
      "processing_fee_money": {
        "amount": 114,
        "currency": "GIP"
      },
      "additional_recipients": [
        {
          "location_id": "location_id9",
          "description": "description5",
          "amount_money": {
            "amount": 85,
            "currency": "KES"
          },
          "receivable_id": "receivable_id5"
        },
        {
          "location_id": "location_id0",
          "description": "description6",
          "amount_money": {
            "amount": 86,
            "currency": "KGS"
          },
          "receivable_id": "receivable_id6"
        },
        {
          "location_id": "location_id1",
          "description": "description7",
          "amount_money": {
            "amount": 87,
            "currency": "KHR"
          },
          "receivable_id": "receivable_id7"
        }
      ]
    }
  ]
}
```

