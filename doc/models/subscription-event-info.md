
# Subscription Event Info

Provides information about the subscription event.

## Structure

`SubscriptionEventInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `detail` | `string \| undefined` | Optional | A human-readable explanation for the event. |
| `code` | [`string \| undefined`](/doc/models/subscription-event-info-code.md) | Optional | Supported info codes of a subscription event. |

## Example (as JSON)

```json
{
  "detail": "detail6",
  "code": "CUSTOMER_DELETED"
}
```

