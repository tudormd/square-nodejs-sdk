
# Invoice

Stores information about an invoice. You use the Invoices API to create and manage
invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/invoices-api/overview).

## Structure

`Invoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-assigned ID of the invoice. |
| `version` | `number \| undefined` | Optional | The Square-assigned version number, which is incremented each time an update is committed to the invoice. |
| `locationId` | `string \| undefined` | Optional | The ID of the location that this invoice is associated with.<br><br>If specified in a `CreateInvoice` request, the value must match the `location_id` of the associated order.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `orderId` | `string \| undefined` | Optional | The ID of the [order](/doc/models/order.md) for which the invoice is created.<br>This field is required when creating an invoice, and the order must be in the `OPEN` state.<br><br>To view the line items and other information for the associated order, call the<br>[RetrieveOrder](/doc/api/orders.md#retrieve-order) endpoint using the order ID.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `primaryRecipient` | [`InvoiceRecipient \| undefined`](/doc/models/invoice-recipient.md) | Optional | Represents a snapshot of customer data. This object stores customer data that is displayed on the invoice<br>and that Square uses to deliver the invoice.<br><br>When you provide a customer ID for a draft invoice, Square retrieves the associated customer profile and populates<br>the remaining `InvoiceRecipient` fields. You cannot update these fields after the invoice is published.<br>Square updates the customer ID in response to a merge operation, but does not update other fields. |
| `paymentRequests` | [`InvoicePaymentRequest[] \| undefined`](/doc/models/invoice-payment-request.md) | Optional | The payment schedule for the invoice, represented by one or more payment requests that<br>define payment settings, such as amount due and due date. An invoice supports the following payment request combinations:<br><br>- One balance<br>- One deposit with one balance<br>- 2–12 installments<br>- One deposit with 2–12 installments<br><br>This field is required when creating an invoice. It must contain at least one payment request.<br>All payment requests for the invoice must equal the total order amount. For more information, see<br>[Payment requests](https://developer.squareup.com/docs/invoices-api/overview#payment-requests).<br><br>Adding `INSTALLMENT` payment requests to an invoice requires an<br>[Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription). |
| `deliveryMethod` | [`string \| undefined`](/doc/models/invoice-delivery-method.md) | Optional | Indicates how Square delivers the [invoice](/doc/models/invoice.md) to the customer. |
| `invoiceNumber` | `string \| undefined` | Optional | A user-friendly invoice number that is displayed on the invoice. The value is unique within a location.<br>If not provided when creating an invoice, Square assigns a value.<br>It increments from 1 and is padded with zeros making it 7 characters long<br>(for example, 0000001 and 0000002).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `191` |
| `title` | `string \| undefined` | Optional | The title of the invoice, which is displayed on the invoice.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `description` | `string \| undefined` | Optional | The description of the invoice, which is displayed on the invoice.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `65536` |
| `scheduledAt` | `string \| undefined` | Optional | The timestamp when the invoice is scheduled for processing, in RFC 3339 format.<br>After the invoice is published, Square processes the invoice on the specified date,<br>according to the delivery method and payment request settings.<br><br>If the field is not set, Square processes the invoice immediately after it is published. |
| `publicUrl` | `string \| undefined` | Optional | The URL of the Square-hosted invoice page.<br>After you publish the invoice using the `PublishInvoice` endpoint, Square hosts the invoice<br>page and returns the page URL in the response. |
| `nextPaymentAmountMoney` | [`Money \| undefined`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `status` | [`string \| undefined`](/doc/models/invoice-status.md) | Optional | Indicates the status of an invoice. |
| `timezone` | `string \| undefined` | Optional | The time zone used to interpret calendar dates on the invoice, such as `due_date`.<br>When an invoice is created, this field is set to the `timezone` specified for the seller<br>location. The value cannot be changed.<br><br>For example, a payment `due_date` of 2021-03-09 with a `timezone` of America/Los\_Angeles<br>becomes overdue at midnight on March 9 in America/Los\_Angeles (which equals a UTC timestamp<br>of 2021-03-10T08:00:00Z). |
| `createdAt` | `string \| undefined` | Optional | The timestamp when the invoice was created, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp when the invoice was last updated, in RFC 3339 format. |
| `acceptedPaymentMethods` | [`InvoiceAcceptedPaymentMethods \| undefined`](/doc/models/invoice-accepted-payment-methods.md) | Optional | The payment methods that customers can use to pay an invoice on the Square-hosted invoice page. |
| `customFields` | [`InvoiceCustomField[] \| undefined`](/doc/models/invoice-custom-field.md) | Optional | Additional seller-defined fields that are displayed on the invoice. For more information, see<br>[Custom fields](https://developer.squareup.com/docs/invoices-api/overview#custom-fields).<br><br>Adding custom fields to an invoice requires an<br>[Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).<br><br>Max: 2 custom fields |
| `subscriptionId` | `string \| undefined` | Optional | The ID of the [subscription](/doc/models/subscription.md) associated with the invoice.<br>This field is present only on subscription billing invoices. |
| `saleOrServiceDate` | `string \| undefined` | Optional | The date of the sale or the date that the service is rendered, in `YYYY-MM-DD` format.<br>This field can be used to specify a past or future date which is displayed on the invoice. |
| `paymentConditions` | `string \| undefined` | Optional | **France only.** The payment terms and conditions that are displayed on the invoice. For more information,<br>see [Payment conditions](https://developer.squareup.com/docs/invoices-api/overview#payment-conditions).<br><br>For countries other than France, Square returns an `INVALID_REQUEST_ERROR` with a `BAD_REQUEST` code and<br>"Payment conditions are not supported for this location's country" detail if this field is included in `CreateInvoice` or `UpdateInvoice` requests.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2000` |

## Example (as JSON)

```json
{
  "id": "id0",
  "version": 172,
  "location_id": "location_id4",
  "order_id": "order_id6",
  "primary_recipient": {
    "customer_id": "customer_id2",
    "given_name": "given_name6",
    "family_name": "family_name8",
    "email_address": "email_address2",
    "address": {
      "address_line_1": "address_line_10",
      "address_line_2": "address_line_20",
      "address_line_3": "address_line_36",
      "locality": "locality0",
      "sublocality": "sublocality0"
    }
  }
}
```

