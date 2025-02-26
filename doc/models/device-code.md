
# Device Code

## Structure

`DeviceCode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique id for this device code. |
| `name` | `string \| undefined` | Optional | An optional user-defined name for the device code.<br>**Constraints**: *Maximum Length*: `128` |
| `code` | `string \| undefined` | Optional | The unique code that can be used to login. |
| `deviceId` | `string \| undefined` | Optional | The unique id of the device that used this code. Populated when the device is paired up. |
| `productType` | `string` | Required, Constant | **Default**: `'TERMINAL_API'` |
| `locationId` | `string \| undefined` | Optional | The location assigned to this code.<br>**Constraints**: *Maximum Length*: `50` |
| `status` | [`string \| undefined`](/doc/models/device-code-status.md) | Optional | DeviceCode.Status enum. |
| `pairBy` | `string \| undefined` | Optional | When this DeviceCode will expire and no longer login. Timestamp in RFC 3339 format. |
| `createdAt` | `string \| undefined` | Optional | When this DeviceCode was created. Timestamp in RFC 3339 format. |
| `statusChangedAt` | `string \| undefined` | Optional | When this DeviceCode's status was last changed. Timestamp in RFC 3339 format. |
| `pairedAt` | `string \| undefined` | Optional | When this DeviceCode was paired. Timestamp in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": null,
  "name": null,
  "code": null,
  "device_id": null,
  "product_type": "TERMINAL_API",
  "location_id": null,
  "status": null,
  "pair_by": null,
  "created_at": null,
  "status_changed_at": null,
  "paired_at": null
}
```

