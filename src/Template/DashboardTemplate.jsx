import Header from '../components/Header'
import CustomSidebar from '../components/CustomSidebar'
import { Outlet } from 'react-router-dom'

const DashboardTemplate = ({ sidebarData }) => {
    return (
        <div className='h-screen w-full flex flex-col gap-1 bg-pink-100'>
            <Header />
            <div className='flex gap-1 flex-1 mb-1 mx-1'>

                <div className='h-full rounded-md overflow-hidden'>
                    <CustomSidebar sidebarData={sidebarData} />
                </div>

                <div className='w-full px-4 py-2 bg-white rounded-md flex-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardTemplate
