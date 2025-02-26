
# Retrieve Subscription Response

Defines output parameters in a response from the
[RetrieveSubscription](/doc/api/subscriptions.md#retrieve-subscription) endpoint.

## Structure

`RetrieveSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscription` | [`Subscription \| undefined`](/doc/models/subscription.md) | Optional | Represents a subscription to a subscription plan by a subscriber.<br><br>For an overview of the `Subscription` type, see<br>[Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview). |

## Example (as JSON)

```json
{
  "subscription": {
    "charged_through_date": "2021-11-20",
    "created_at": "2021-10-20T21:53:10Z",
    "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
    "id": "8151fc89-da15-4eb9-a685-1a70883cebfc",
    "invoice_ids": [
      "grebK0Q_l8H4fqoMMVvt-Q",
      "rcX_i3sNmHTGKhI4W2mceA"
    ],
    "location_id": "S8GWD5R9QB376",
    "paid_until_date": "2021-11-20",
    "plan_id": "6JHXF3B2CW3YKHDV4XEM674H",
    "price_override_money": {
      "amount": 1000,
      "currency": "USD"
    },
    "source": {
      "name": "My App"
    },
    "start_date": "2021-10-20",
    "status": "ACTIVE",
    "timezone": "America/Los_Angeles"
  }
}
```

