import { Pagination as APagination } from 'ant-design-vue'
import { Ref } from 'vue'
import { TableProps } from './index.type'

export default (props: {
    pagination: Ref<{ page: number; pageSize: number }>
    total: any
    ownPaginProps: TableProps['ownPaginProps']
}) => {
    const { pagination, total, ownPaginProps = {} } = $(props)

    const Pagination = () => (
        <APagination
            v-model:current={pagination.page}
            v-model:pageSize={pagination.pageSize}
            v-model:total={total}
            show-quick-jumper={true}
            {...ownPaginProps}
        ></APagination>
    )

    return { Pagination }
}
