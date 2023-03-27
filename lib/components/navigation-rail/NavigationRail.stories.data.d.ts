import { RailItem } from './NavigationRail';
export interface BadgeCount {
    activity: number;
    conditions: number;
    properties: number;
    scheduling: number;
}
export declare const mockRailItems: Array<RailItem>;
export declare const getBadgeRailItems: ({ activity, conditions, properties, scheduling, }: BadgeCount) => RailItem[];
