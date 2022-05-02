/**
 * @author heart
 * @description 用于制作页面跳转的类
 * @Date 2022-05-01
 */
import './app.less'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Home = React.lazy(() => import('./pages/home/index'))
const TestUseState = React.lazy(() => import('./pages/state/index'))
const PageNotFound = React.lazy(() => import('./pages/404/index'))

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* index 和RouteIndex功能相似 */}
        <Route path='/' element={<Home />} />
        <Route path='/test_use_state' element={<TestUseState />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
