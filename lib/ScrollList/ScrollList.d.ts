/**
 * @name ScrollList
 * @author Lester
 * @date 2021-06-02 14:07
 */
import React from 'react';
interface ScrollListProps {
    onLoad: () => Promise<any>;
    onRefresh?: () => void;
    backgroundColor?: string;
    loaded: boolean;
}
declare const ScrollList: React.FC<ScrollListProps>;
export default ScrollList;
