# Gift Card Activities

```ts
const giftCardActivitiesApi = client.giftCardActivitiesApi;
```

## Class Name

`GiftCardActivitiesApi`

## Methods

* [List Gift Card Activities](/doc/api/gift-card-activities.md#list-gift-card-activities)
* [Create Gift Card Activity](/doc/api/gift-card-activities.md#create-gift-card-activity)


# List Gift Card Activities

Lists gift card activities. By default, you get gift card activities for all
gift cards in the seller's account. You can optionally specify query parameters to
filter the list. For example, you can get a list of gift card activities for a gift card,
for all gift cards in a specific region, or for activities within a time window.

```ts
async listGiftCardActivities(
  giftCardId?: string,
  type?: string,
  locationId?: string,
  beginTime?: string,
  endTime?: string,
  limit?: number,
  cursor?: string,
  sortOrder?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListGiftCardActivitiesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `giftCardId` | `string \| undefined` | Query, Optional | If a gift card ID is provided, the endpoint returns activities related<br>to the specified gift card. Otherwise, the endpoint returns all gift card activities for<br>the seller. |
| `type` | `string \| undefined` | Query, Optional | If a [type](/doc/models/gift-card-activity-type.md) is provided, the endpoint returns gift card activities of the specified type.<br>Otherwise, the endpoint returns all types of gift card activities. |
| `locationId` | `string \| undefined` | Query, Optional | If a location ID is provided, the endpoint returns gift card activities for the specified location.<br>Otherwise, the endpoint returns gift card activities for all locations. |
| `beginTime` | `string \| undefined` | Query, Optional | The timestamp for the beginning of the reporting period, in RFC 3339 format.<br>This start time is inclusive. The default value is the current time minus one year. |
| `endTime` | `string \| undefined` | Query, Optional | The timestamp for the end of the reporting period, in RFC 3339 format.<br>This end time is inclusive. The default value is the current time. |
| `limit` | `number \| undefined` | Query, Optional | If a limit is provided, the endpoint returns the specified number<br>of results (or fewer) per page. The maximum value is 100. The default value is 50.<br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>If a cursor is not provided, the endpoint returns the first page of the results.<br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `sortOrder` | `string \| undefined` | Query, Optional | The order in which the endpoint returns the activities, based on `created_at`.<br><br>- `ASC` - Oldest to newest.<br>- `DESC` - Newest to oldest (default). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListGiftCardActivitiesResponse`](/doc/models/list-gift-card-activities-response.md)

## Example Usage

```ts
const giftCardId = 'gift_card_id8';
const type = 'type0';
const locationId = 'location_id4';
const beginTime = 'begin_time2';
const endTime = 'end_time2';
const limit = 172;
const cursor = 'cursor6';
const sortOrder = 'sort_order0';
try {
  const { result, ...httpResponse } = await giftCardActivitiesApi.listGiftCardActivities(giftCardId, type, locationId, beginTime, endTime, limit, cursor, sortOrder);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Gift Card Activity

Creates a gift card activity. For more information, see
[GiftCardActivity](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#giftcardactivity) and
[Using activated gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#using-activated-gift-cards).

```ts
async createGiftCardActivity(
  body: CreateGiftCardActivityRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateGiftCardActivityResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateGiftCardActivityRequest`](/doc/models/create-gift-card-activity-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateGiftCardActivityResponse`](/doc/models/create-gift-card-activity-response.md)

## Example Usage

```ts
const contentType = null;
const bodyGiftCardActivityGiftCardBalanceMoney: Money = {};
bodyGiftCardActivityGiftCardBalanceMoney.amount = 88;
bodyGiftCardActivityGiftCardBalanceMoney.currency = 'ANG';

const bodyGiftCardActivityActivateActivityDetailsAmountMoney: Money = {};
bodyGiftCardActivityActivateActivityDetailsAmountMoney.amount = 10;
bodyGiftCardActivityActivateActivityDetailsAmountMoney.currency = 'MXV';

const bodyGiftCardActivityActivateActivityDetailsBuyerPaymentInstrumentIds: string[] = ['buyer_payment_instrument_ids4', 'buyer_payment_instrument_ids5', 'buyer_payment_instrument_ids6'];
const bodyGiftCardActivityActivateActivityDetails: GiftCardActivityActivate = {};
bodyGiftCardActivityActivateActivityDetails.amountMoney = bodyGiftCardActivityActivateActivityDetailsAmountMoney;
bodyGiftCardActivityActivateActivityDetails.orderId = 'jJNGHm4gLI6XkFbwtiSLqK72KkAZY';
bodyGiftCardActivityActivateActivityDetails.lineItemUid = 'eIWl7X0nMuO9Ewbh0ChIx';
bodyGiftCardActivityActivateActivityDetails.referenceId = 'reference_id4';
bodyGiftCardActivityActivateActivityDetails.buyerPaymentInstrumentIds = bodyGiftCardActivityActivateActivityDetailsBuyerPaymentInstrumentIds;

const bodyGiftCardActivity: GiftCardActivity = {
  type: 'ACTIVATE',
  locationId: '81FN9BNFZTKS4',
};
bodyGiftCardActivity.id = 'id2';
bodyGiftCardActivity.createdAt = 'created_at0';
bodyGiftCardActivity.giftCardId = 'gftc:6d55a72470d940c6ba09c0ab8ad08d20';
bodyGiftCardActivity.giftCardGan = 'gift_card_gan8';
bodyGiftCardActivity.giftCardBalanceMoney = bodyGiftCardActivityGiftCardBalanceMoney;
bodyGiftCardActivity.activateActivityDetails = bodyGiftCardActivityActivateActivityDetails;

const body: CreateGiftCardActivityRequest = {
  idempotencyKey: 'U16kfr-kA70er-q4Rsym-7U7NnY',
  giftCardActivity: bodyGiftCardActivity,
};

try {
  const { result, ...httpResponse } = await giftCardActivitiesApi.createGiftCardActivity(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

