
# Catalog Subscription Plan

Describes a subscription plan. For more information, see
[Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).

## Structure

`CatalogSubscriptionPlan`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of the plan. |
| `phases` | [`SubscriptionPhase[]`](/doc/models/subscription-phase.md) | Required | A list of SubscriptionPhase containing the [SubscriptionPhase](/doc/models/subscription-phase.md) for this plan. |

## Example (as JSON)

```json
{
  "name": "name0",
  "phases": [
    {
      "uid": "uid5",
      "cadence": "EVERY_FOUR_MONTHS",
      "periods": 241,
      "recurring_price_money": {
        "amount": 193,
        "currency": "MOP"
      },
      "ordinal": 207
    },
    {
      "uid": "uid6",
      "cadence": "QUARTERLY",
      "periods": 242,
      "recurring_price_money": {
        "amount": 194,
        "currency": "MRO"
      },
      "ordinal": 208
    }
  ]
}
```

