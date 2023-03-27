import type { AccountModelsWrapper } from '../models/AccountModelsWrapper';
import type { AccountModelWrapper } from '../models/AccountModelWrapper';
export declare class AccountsService {
    /**
     * Gets all accounts.
     * __Sortable field names__: name, external_id, vanity_domain, enabled, source, activated, created_date,         modified_date
     * __Filterable field names__: name, external_id, vanity_domain, enabled, source, activated, created_date,         modified_date
     * __Searchable field names__: name, external_id, vanity_domain (to be used with filter _search_ operator)
     *
     * @param start offset (number of records to skip)
     * @param count limit (number of records to include in response)
     * @param sort comma separated field names (prefix field name with "-" to reverse order direction)
     * @param filter List of filters (each filter is a separate query param, and they are OR'ed)
     * @returns AccountModelsWrapper All available accounts are returned.
     * @throws ApiError
     */
    static getAccounts(start?: number, count?: number, sort?: string, filter?: Array<string>): Promise<AccountModelsWrapper>;
    /**
     * Gets single account by id.
     * @param accountId
     * @returns AccountModelWrapper Account is returned.
     * @throws ApiError
     */
    static getAccountById(accountId: string): Promise<AccountModelWrapper>;
}
