import { onMounted, ref, toRaw, watch } from 'vue'

const useAutoSize = (props) => {
    const { scroll } = $(props)
    const y = ref<number | string>(null)
    const x = ref(scroll?.x)
    const setY = () => {
        if (scroll?.y !== 'auto') {
            y.value = scroll?.y
            return
        }
    }

    onMounted(() => {
        setY()
    })
    return {
        x,
        y,
    }
}
export default useAutoSize
