import { reactive } from 'vue'

export default () => {
    const pagination = reactive({
        page: 1,
        pageSize: 10,
    })

    return {
        pagination,
    }
}
