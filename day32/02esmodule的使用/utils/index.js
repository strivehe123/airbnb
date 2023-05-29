import { parseLync } from './parse'
import { foramtmath } from './format_math'
import { formatData } from './formatD'

export {
    parseLync,
    foramtmath,
    formatData
}
// 优化方式一
export { formatData }
from './formatD'
export { foramtmath }
from './format_math'
export { parseLync }
from './parse'

// 优化方式二
export * from './formatD'
export * from './format_math'
export * from './parse'