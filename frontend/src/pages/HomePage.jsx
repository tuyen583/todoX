import AddTask from '@/components/AddTask'
import Header from '@/components/Header'
import StatsAndFilters from '@/components/StatsAndFilters'
import TaskList from '@/components/TaskList'
import TaskListPagination from '@/components/TaskListPagination'
import DateTimeFliter from '@/components/DateTimeFliter'
import Footer from '@/components/Footer'
import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Top */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #475569 100%)",
        }}
      />
      {/* Your Content/Components */}
      <div className="container pt-8 mx-auto  relative z-10">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          {/* Đầu Trang */}
          <Header />
          {/* Tạo Nhiệm Vụ  */}
          <AddTask />
          {/* Thống Kê và Bộ Lọc  */}
          <StatsAndFilters />
          {/* Danh Sách Nhiệm Vụ  */}
          <TaskList />
          {/* Phân Trang và Lọc theo Ngày  */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DateTimeFliter />
          </div>
          {/* Footer  */}
          <Footer />
        </div>
      </div>
    </div>
  )
};

export default HomePage;