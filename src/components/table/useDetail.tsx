import { Descriptions, Modal, ModalProps, Skeleton } from 'ant-design-vue'
import {
    DescriptionsItem,
    DescriptionsItemProp,
    DescriptionsProps,
} from 'ant-design-vue/es/descriptions'
import Big from 'big.js'
import dayjs from 'dayjs'
import { get, isFunction } from 'es-toolkit/compat'
import numeral from 'numeral'
import { computed, Reactive, reactive, Ref, ref, VNode } from 'vue'
import { JSX } from 'vue/jsx-runtime'
import { TableTextConfig } from './index.type'
import { TableColumnProps } from './useColumns'

export interface TableUseDetailProps {
    columns?: TableColumnProps[]
    detailDescItemEmptyText?: VNode | string
    detailDescItemProps?: TableDescItemsProps
    detailDescItemTimeFormat?: string
    tableTextConfig?: TableTextConfig
    detailModalProps?: ModalProps
    detailDescProps?: DescriptionsProps
    [key: string]: any
}
export interface TableDescItemsProps extends DescriptionsItemProp {
    hidden?: boolean
    render?: (_: any, record: any, column: TableColumnProps, index: number) => VNode | JSX.Element
}

export interface TableUseDetailReturnOptions {
    openDetailModal: () => void
    DetailModal: () => JSX.Element
    detailsDataSource: Reactive<{ values: any }>
    detailModalLoading: Ref<boolean>
    [key: string]: any
}
export default (props: TableUseDetailProps): TableUseDetailReturnOptions => {
    const {
        columns,
        detailDescItemEmptyText,
        detailDescItemProps,
        detailDescItemTimeFormat,
        detailModalProps,
        tableTextConfig,
        detailDescProps,
    } = $(props)
    const detailModalOpen = ref(false)
    const detailModalLoading = ref(false)
    const detailsDataSource = reactive({
        values: {},
    })

    const descItems = computed(() => {
        return columns
            ?.map?.((col, index) => {
                const {
                    type,
                    title,
                    dataIndex,
                    emptyText,
                    numberFormat,
                    timeFormat,
                    numberComputed,
                    descItemProps,
                    customRender,
                } = col
                const { label, render, hidden, ...o } = descItemProps || {}
                return {
                    ...detailDescItemProps,
                    label: title || label,
                    key: JSON.stringify(dataIndex),
                    chidlren: renderChildren({
                        type,
                        render,
                        dataSource: detailsDataSource?.values,
                        dataIndex,
                        column: col,
                        index,
                        customRender,
                        detailDescItemEmptyText,
                        detailDescItemTimeFormat,
                        timeFormat,
                        numberFormat,
                        numberComputed,
                        emptyText,
                    }),
                    hidden,
                    ...o,
                }
            })
            ?.filter?.(({ hidden }) => !hidden)
    })

    const openDetailModal = () => {
        detailModalOpen.value = true
    }
    const DetailModal = () => {
        return (
            <Modal
                v-model:open={detailModalOpen.value}
                title={tableTextConfig?.modalTitle?.details}
                footer={null}
                width="65%"
                destroyOnClose
                maskClosable={false}
                {...detailModalProps}
            >
                <Skeleton active loading={detailModalLoading.value}>
                    <Descriptions bordered {...detailDescProps}>
                        {descItems?.value?.map?.(({ label, key, chidlren, hidden, ...props }) => {
                            return (
                                <DescriptionsItem key={key} label={label} {...props}>
                                    {chidlren}
                                </DescriptionsItem>
                            )
                        })}
                    </Descriptions>
                </Skeleton>
            </Modal>
        )
    }
    return {
        openDetailModal,
        DetailModal,
        detailsDataSource,
        detailModalLoading,
    }
}

const renderChildren = ({
    type,
    render,
    dataSource,
    dataIndex,
    column,
    index,
    customRender,
    detailDescItemEmptyText,
    detailDescItemTimeFormat,
    timeFormat,
    numberFormat,
    numberComputed,
    emptyText,
}) => {
    if (isFunction(render)) {
        return render?.(get(dataSource, dataIndex), dataSource, column, index)
    }

    if (isFunction(customRender)) {
        return customRender?.({
            text: get(dataSource, dataIndex),
            value: null,
            record: dataSource,
            index,
            renderIndex: null,
            column,
        })
    }

    if (type === 'date' && get(dataSource, dataIndex)) {
        return dayjs(get(dataSource, dataIndex))?.format?.(
            timeFormat || detailDescItemTimeFormat || 'YYYY-MM-DD HH:mm:ss'
        )
    }

    if (type === 'number') {
        const val = Number(get(dataSource, dataIndex))
        return isFunction(numberFormat)
            ? numberFormat?.(numeral(val), get(dataSource, dataIndex))
            : numeral?.(
                  isFunction(numberComputed) ? numberComputed?.(new Big(val), Big) : val
              )?.format?.((numberFormat as unknown as string) || '0[.]00') ||
                  emptyText ||
                  detailDescItemEmptyText
    }

    return get(dataSource, dataIndex) || emptyText || detailDescItemEmptyText
}
