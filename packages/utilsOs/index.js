import {ref, onBeforeMount, onBeforeUnmount, getCurrentInstance} from 'vue'

/**
 * 系统
 */
export const utilsOs = () => {
    let usedCount = 0, darks, lights, managable = true

    const osTheme = ref(null)
    const supportMatchMedia = typeof window !== 'undefined' && window.matchMedia !== undefined

    //获取系统主题
    const useOsTheme = () => {
        if (process.env.NODE_ENV !== 'test' && !supportMatchMedia) {
            return osTheme.value
        }
        if (process.env.NODE_ENV === 'test' && window.matchMedia === undefined) {
            return osTheme.value
        }
        if (usedCount === 0) init()
        if (managable && (managable = hasInstance())) {
            onBeforeMount(() => {
                usedCount += 1
            })
            onBeforeUnmount(() => {
                usedCount -= 1
                if (usedCount === 0) clean()
            })
        }
        return osTheme.value
    }

    const handleDarkMqlChange = (e) => {
        if (e.matches) {
            osTheme.value = 'dark'
        }
    }

    const handleLightMqlChange = (e) => {
        if (e.matches) {
            osTheme.value = 'light'
        }
    }

    const init = () => {
        darks = window.matchMedia('(prefers-color-scheme: dark)')
        lights = window.matchMedia('(prefers-color-scheme: light)')
        if (darks.matches) {
            osTheme.value = 'dark'
        } else if (lights.matches) {
            osTheme.value = 'light'
        } else {
            osTheme.value = null
        }
        if (darks.addEventListener) {
            darks.addEventListener('change', handleDarkMqlChange)
            lights.addEventListener('change', handleLightMqlChange)
        } else if (darks.addListener) {
            darks.addListener(handleDarkMqlChange)
            lights.addListener(handleLightMqlChange)
        }
    }

    const clean = () => {
        if ('removeEventListener' in darks) {
            darks.removeEventListener('change', handleDarkMqlChange)
            lights?.removeEventListener('change', handleLightMqlChange)
        } else if ('removeListener' in darks) {
            darks?.removeListener(handleDarkMqlChange)
            lights?.removeListener(handleLightMqlChange)
        }

        darks = undefined
        lights = undefined
    }

    const hasInstance = () => {
        return getCurrentInstance() !== null
    }

    //导出
    return {useOsTheme, hasInstance}
}
