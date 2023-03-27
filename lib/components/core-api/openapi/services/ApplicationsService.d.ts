import type { ApplicationModelsWrapper } from '../models/ApplicationModelsWrapper';
import type { ApplicationModelWrapper } from '../models/ApplicationModelWrapper';
export declare class ApplicationsService {
    /**
     * Retrieves existing applications for accounts and product_instances
     * The results can be filtered by an account and/or a product_instance.
     * - To filter by an account. provide ***account_id*** query parameter.
     * - To filter by a product_instance, provide ***product_instance_id*** query parameter,
     *
     * For example:
     * ```
     * GET /applications?account_id=<UUID for account>&product_instance_id=<UUID for product_instance>
     * ```
     *
     * __Sortable field names__: product_instance_id, account_id, name, url, status, description, alternate_label,         created_date, modified_date
     *
     * __Filterable field names__: product_instance_id, account_id, name, url, status, description, alternate_label,         created_date, modified_date, needs_authentication, enabled
     *
     * __Searchable field names__: name, url, status, description, alternate_label         (to be used with filter _search_ operator)
     *
     * @param accountId UUID Account identifier to filter results by
     * @param productInstanceId UUID Product_Instance identifier to filter results by
     * @param start offset (number of records to skip)
     * @param count limit (number of records to include in response)
     * @param sort comma separated field names (prefix field name with "-" to reverse order direction)
     * @param filter List of filters (each filter is a separate query param, and they are OR'ed)
     * @returns ApplicationModelsWrapper applications are returned.
     * @throws ApiError
     */
    static retrieveApplications(accountId?: string, productInstanceId?: string, start?: number, count?: number, sort?: string, filter?: Array<string>): Promise<ApplicationModelsWrapper>;
    /**
     * Retrieves a application by id
     * @param applicationId
     * @returns ApplicationModelWrapper application is returned.
     * @throws ApiError
     */
    static retrieveApplicationById(applicationId: string): Promise<ApplicationModelWrapper>;
}
