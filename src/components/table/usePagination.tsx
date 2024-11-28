import { Pagination } from 'ant-design-vue'

export default ({ pagination, total }) => {
    console.log(pagination)
    return () => (
        <Pagination
            v-model:current={pagination.page}
            pageSize={pagination.pageSize}
            total={total.value}
            show-quick-jumper
        ></Pagination>
    )
}
