import React from 'react'
import SideNav from '../ui/dashboard/sidenav';

type DashboardLayoutProps = {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='border border-red-500 w-full flex-none md:w-64'>
        <SideNav />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  )
}

export default DashboardLayout;