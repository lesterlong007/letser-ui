/**
 * @name Tabs
 * @author Lester
 * @date 2021-06-10 14:52
 */
import React from 'react';
interface TabsProps {
    tabs: any[];
    activeIndex?: number;
    onTabClick?: (index: number) => void;
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
