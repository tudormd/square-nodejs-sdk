import { object, optional, Schema, string } from '../schema';

/**
 * Represents the tax ID associated with a customer profile. The corresponding `tax_ids` field is available only for customers of sellers in France, Ireland, or the United Kingdom.
 * For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids).
 */
export interface CustomerTaxIds {
  /** The EU VAT identification number for the customer. For example, `IE3426675K`. The ID can contain alphanumeric characters only. */
  euVat?: string;
}

export const customerTaxIdsSchema: Schema<CustomerTaxIds> = object({
  euVat: ['eu_vat', optional(string())],
});
