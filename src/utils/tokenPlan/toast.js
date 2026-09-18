import { ElMessage } from 'element-plus'

export function showToast(msg) {
  if (!msg) return
  ElMessage({ message: String(msg), type: 'info', duration: 2800 })
}
