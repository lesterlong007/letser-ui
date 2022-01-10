import React, { InputHTMLAttributes } from 'react';

/**
 * @name SvgIcon
 * @author Lester
 * @date 2021-05-08 14:28
 */

interface IndexProps {
    className?: string;
    name: string;
    onClick?: React.MouseEventHandler;
}
declare const SvgIcon: React.FC<IndexProps>;

/**
 * @name CarouselText
 * @author Lester
 * @date 2021-05-12 16:10
 */

declare const CarouselText: React.FC;

/**
 * @name ScrollList
 * @author Lester
 * @date 2021-06-02 14:07
 */

interface ScrollListProps {
    onLoad: () => Promise<any>;
    onRefresh?: () => void;
    backgroundColor?: string;
    loaded: boolean;
}
declare const ScrollList: React.FC<ScrollListProps>;

/**
 * @name Input
 * @author Lester
 * @date 2021-06-03 15:08
 */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    clear?: boolean;
    search?: boolean;
    value?: string;
    onChange?: (val: any) => void;
}
declare const Input: React.FC<InputProps>;

/**
 * @name Tabs
 * @author Lester
 * @date 2021-06-10 14:52
 */

interface TabsProps {
    tabs: any[];
    activeIndex?: number;
    onTabClick?: (index: number) => void;
}
declare const Tabs: React.FC<TabsProps>;

export { CarouselText, SvgIcon as Icon, Input, ScrollList, Tabs };
