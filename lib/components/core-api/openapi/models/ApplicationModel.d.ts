export declare type ApplicationModel = {
    /**
     * UUID Account Identifier
     */
    account_id: string;
    /**
     * application alternate label (optional)
     */
    alternate_label?: string;
    /**
     * The account creation date in ISO format
     */
    created_date: string;
    /**
     * application description (optional)
     */
    description?: string;
    /**
     * Whether the application is currently enabled.
     */
    enabled: boolean;
    /**
     * UUID Application Identifier
     */
    id: string;
    /**
     * Whether the application requires authentication.  0 - Non-production instance, 1 - Production instance
     */
    instance_state?: ApplicationModel.instance_state;
    /**
     * A logo image for the application encoded as a base64 string.
     */
    logo?: string;
    /**
     * Name of the product that this application's logo is associated with.
     */
    logo_product_name?: string;
    /**
     * The date that the account was last modified on in ISO format
     */
    modified_date: string;
    /**
     * application name
     */
    name: string;
    /**
     * Whether the application requires authentication.
     */
    needs_authentication: boolean;
    /**
     * UUID Product_Instance Identifier
     */
    product_instance_id?: string;
    /**
     * application URL
     */
    url: string;
};
export declare namespace ApplicationModel {
    /**
     * Whether the application requires authentication.  0 - Non-production instance, 1 - Production instance
     */
    enum instance_state {
        '_0' = 0,
        '_1' = 1
    }
}
