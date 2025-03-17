// 合并全局默认props

import { isArray } from 'es-toolkit/compat'
import { toValue, type PropType, type Reactive, type Ref } from 'vue'
import type { VueTypeValidableDef, VueTypeDef } from 'vue-types'
const initDefaultProps = <T>(
    types: T,
    defaultProps: {
        [K in keyof T]?: T[K] extends VueTypeValidableDef<infer U>
            ? U
            : T[K] extends VueTypeDef<infer U>
            ? U
            : T[K] extends { type: PropType<infer U> }
            ? U
            : any
    }
): T => {
    const propTypes: T = { ...types }
    Object.keys(defaultProps).forEach((k) => {
        const prop = propTypes[k] as VueTypeValidableDef
        if (prop) {
            if (prop.type || prop.default) {
                prop.default = defaultProps[k]
            } else if (prop.def) {
                prop.def(defaultProps[k])
            } else {
                propTypes[k] = { type: prop, default: defaultProps[k] }
            }
        } else {
            throw new Error(`not have ${k} prop`)
        }
    })
    return propTypes
}

export const deepFreeze = <T>(obj: T): T => {
    // 先冻结自身
    Object.freeze(obj)
    // 遍历所有属性
    Object.getOwnPropertyNames(obj).forEach((key) => {
        const prop = obj[key]
        // 如果属性是对象或函数且没有冻结，则递归冻结
        if (
            prop !== null &&
            (typeof prop === 'object' || typeof prop === 'function') &&
            !Object.isFrozen(prop)
        ) {
            deepFreeze(prop)
        }
    })
    return obj
}

export const idleSetRef = <T>(
    target: Ref<T[]> | Reactive<[]>,
    source: T[],
    stepNum: number = 5
) => {
    let index = 0

    const transTarget = toValue(target)

    if (!isArray(transTarget)) throw new Error('target 值必须是array')
    if (transTarget?.length > 0) {
        transTarget.splice(0, transTarget?.length)
    }
    const transSource = toValue(source)

    function pushChunk(deadline: IdleDeadline) {
        while (index < transSource?.length && deadline?.timeRemaining() > 0) {
            const arr = source.slice(index, index + stepNum)

            arr.forEach((item) => {
                transTarget.push(item)
            })
            index += stepNum
        }

        if (index < source.length) {
            requestIdleCallback(pushChunk)
        }
    }

    requestIdleCallback(pushChunk)
}
export default initDefaultProps
