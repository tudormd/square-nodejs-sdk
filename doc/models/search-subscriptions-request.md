
# Search Subscriptions Request

Defines input parameters in a request to the
[SearchSubscriptions](/doc/api/subscriptions.md#search-subscriptions) endpoint.

## Structure

`SearchSubscriptionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | When the total number of resulting subscriptions exceeds the limit of a paged response,<br>specify the cursor returned from a preceding response here to fetch the next set of results.<br>If the cursor is unset, the response contains the last page of the results.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `limit` | `number \| undefined` | Optional | The upper limit on the number of subscriptions to return<br>in a paged response.<br>**Constraints**: `>= 1` |
| `query` | [`SearchSubscriptionsQuery \| undefined`](/doc/models/search-subscriptions-query.md) | Optional | Represents a query, consisting of specified query expressions, used to search for subscriptions. |
| `include` | `string[] \| undefined` | Optional | An option to include related information in the response.<br><br>The supported values are:<br><br>- `actions`: to include scheduled actions on the targeted subscriptions. |

## Example (as JSON)

```json
{
  "query": {
    "filter": {
      "customer_ids": [
        "CHFGVKYY8RSV93M5KCYTG4PN0G"
      ],
      "location_ids": [
        "S8GWD5R9QB376"
      ],
      "source_names": [
        "My App"
      ]
    }
  }
}
```

