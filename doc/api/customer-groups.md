# Customer Groups

```ts
const customerGroupsApi = client.customerGroupsApi;
```

## Class Name

`CustomerGroupsApi`

## Methods

* [List Customer Groups](/doc/api/customer-groups.md#list-customer-groups)
* [Create Customer Group](/doc/api/customer-groups.md#create-customer-group)
* [Delete Customer Group](/doc/api/customer-groups.md#delete-customer-group)
* [Retrieve Customer Group](/doc/api/customer-groups.md#retrieve-customer-group)
* [Update Customer Group](/doc/api/customer-groups.md#update-customer-group)


# List Customer Groups

Retrieves the list of customer groups of a business.

```ts
async listCustomerGroups(
  cursor?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCustomerGroupsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.<br>The limit is ignored if it is less than 1 or greater than 50. The default value is 50.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCustomerGroupsResponse`](/doc/models/list-customer-groups-response.md)

## Example Usage

```ts
const cursor = 'cursor6';
const limit = 172;
try {
  const { result, ...httpResponse } = await customerGroupsApi.listCustomerGroups(cursor, limit);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Customer Group

Creates a new customer group for a business.

The request must include the `name` value of the group.

```ts
async createCustomerGroup(
  body: CreateCustomerGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateCustomerGroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateCustomerGroupRequest`](/doc/models/create-customer-group-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateCustomerGroupResponse`](/doc/models/create-customer-group-response.md)

## Example Usage

```ts
const contentType = null;
const bodyGroup: CustomerGroup = {
  name: 'Loyal Customers',
};
bodyGroup.id = 'id4';
bodyGroup.createdAt = 'created_at2';
bodyGroup.updatedAt = 'updated_at0';

const body: CreateCustomerGroupRequest = {
  group: bodyGroup,
};
body.idempotencyKey = 'idempotency_key2';

try {
  const { result, ...httpResponse } = await customerGroupsApi.createCustomerGroup(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Customer Group

Deletes a customer group as identified by the `group_id` value.

```ts
async deleteCustomerGroup(
  groupId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteCustomerGroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The ID of the customer group to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteCustomerGroupResponse`](/doc/models/delete-customer-group-response.md)

## Example Usage

```ts
const groupId = 'group_id0';
try {
  const { result, ...httpResponse } = await customerGroupsApi.deleteCustomerGroup(groupId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Customer Group

Retrieves a specific customer group as identified by the `group_id` value.

```ts
async retrieveCustomerGroup(
  groupId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveCustomerGroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The ID of the customer group to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveCustomerGroupResponse`](/doc/models/retrieve-customer-group-response.md)

## Example Usage

```ts
const groupId = 'group_id0';
try {
  const { result, ...httpResponse } = await customerGroupsApi.retrieveCustomerGroup(groupId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Customer Group

Updates a customer group as identified by the `group_id` value.

```ts
async updateCustomerGroup(
  groupId: string,
  body: UpdateCustomerGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateCustomerGroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The ID of the customer group to update. |
| `body` | [`UpdateCustomerGroupRequest`](/doc/models/update-customer-group-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateCustomerGroupResponse`](/doc/models/update-customer-group-response.md)

## Example Usage

```ts
const groupId = 'group_id0';
const contentType = null;
const bodyGroup: CustomerGroup = {
  name: 'Loyal Customers',
};
bodyGroup.id = 'id4';
bodyGroup.createdAt = 'created_at2';
bodyGroup.updatedAt = 'updated_at0';

const body: UpdateCustomerGroupRequest = {
  group: bodyGroup,
};

try {
  const { result, ...httpResponse } = await customerGroupsApi.updateCustomerGroup(groupId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

