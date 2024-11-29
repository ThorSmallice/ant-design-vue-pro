import { Pagination } from 'ant-design-vue'

export default ({ pagination, total, props }) => {
    return () => (
        <Pagination
            v-model:current={pagination.page}
            v-model:pageSize={pagination.pageSize}
            total={total.value}
            show-quick-jumper
            {...props}
        ></Pagination>
    )
}
