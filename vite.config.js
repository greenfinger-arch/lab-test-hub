import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 핵심: './' 대신 '/'로 바꿉니다. 
  // 이렇게 하면 브라우저가 어디에 있든 항상 최상위 /assets 폴더를 바라봅니다.
  base: '/', 
})
