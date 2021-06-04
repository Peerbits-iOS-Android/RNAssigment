
export const SOMTHING = 0


export interface BaseItemProps<T> {
    item: T
}

export interface BaseItemPropsNew<T, U, V> {
    item: T,
    selectedIndex: U,
    index: V,
    onPress: () => void,
}

export interface BaseItemPropsWithList<T, U, V, X> {
    item: T,
    selectedIndex: U,
    index: V,
    list?: X,
    onPress: () => void,
}

export interface BaseViewPagerPropsNew<T, V> {
    item: T,
    index: V,
}