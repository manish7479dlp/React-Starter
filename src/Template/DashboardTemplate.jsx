import Header from '../components/Header'
import CustomSidebar from '../components/CustomSidebar'
import { Outlet } from 'react-router-dom'

const DashboardTemplate = ({ sidebarData }) => {
    return (
        <div className='h-screen w-full flex flex-col gap-1.5 bg-[#feefd2]'>
            <Header />
            <div className='flex gap-1.5 flex-1 mb-2 mx-1.5'>

                < div className='h-full rounded-md overflow-hidden' >
                    <CustomSidebar sidebarData={sidebarData} />
                </div >

                <div className='w-full px-4 py-1.5 bg-white rounded-md flex-1'>
                    <Outlet />
                </div>
            </div >
        </div >
    )
}

export default DashboardTemplate
