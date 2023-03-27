export declare type AccountModel = {
    /**
     * Flag representing if the account has been activated and can create users, clients, and identity providers
     */
    activated?: boolean;
    /**
     * Flag representing if the account allows user self-registration
     */
    allow_self_registration: boolean;
    /**
     * The account creation date in ISO format
     */
    created_date: string;
    /**
     * Flag representing if the account is enabled or not
     */
    enabled: boolean;
    /**
     * External account identifier provided
     */
    external_id: string;
    /**
     * A dictionary of features and their enabled status on the account
     */
    features?: any;
    /**
     * UUID Account Identifier
     */
    id: string;
    /**
     * Custom data for the account
     */
    metadata?: any;
    /**
     * The date that the account was last modified on in ISO format
     */
    modified_date: string;
    /**
     * Account name (unique)
     */
    name: string;
    /**
     * Account vanity domain (unique)
     */
    vanity_domain?: string;
    /**
     * Whitelisted domains for the account
     */
    whitelist_domains?: Array<string>;
};
