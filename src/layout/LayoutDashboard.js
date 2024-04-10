import { Button } from 'components/button';
import OverLay from 'components/common/OverLay';
import DashboardSidebar from 'modules/Dashboard/DashboardSidebar';
import DashboardTopbar from 'modules/Dashboard/DashboardTopbar';
import CampaignPerk from 'modules/campain/CampaignPerk';
import React from 'react';
import ReactModal from 'react-modal';
import { Outlet } from 'react-router-dom';

const LayoutDashboard = ({ children }) => {
    return (
        <div className='min-h-screen p-10 bg-lite'>
            <ReactModal
                isOpen={false}
                overlayClassName='modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center '
                className='modal-content w-full max-w-[550px] bg-white rounded-2xl outline-none p-10 relative  max-h-[90vh] overflow-y-auto scroll-hidden'>
                <button className='absolute z-10 flex items-center justify-center cursor-pointer w-11 h-11 right-[10px] top-[10px] text-text1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className='font-bold text-[25px] mb-10 text-center'>Back this project</h2>
                <p className='mb-10 text-sm'>Enter the contribute amount</p>
                <input
                    type='text'
                    placeholder='$10'
                    name='amount'
                    className='w-full px-5 py-2 mb-5 text-lg font-medium border rounded border-stone-300'
                ></input>
                <p className='my-5 text-sm text-text3 '>Contribution are not associatied with perks</p>
                <Button className='p-3 text-white bg-primary'>Continue</Button>
                <div className='mt-[60px]'></div>
                <CampaignPerk showBtn></CampaignPerk>
            </ReactModal>
            <OverLay></OverLay>
            <DashboardTopbar></DashboardTopbar>
            <div className='flex items-start mt-10 gap-x-10'>
                <DashboardSidebar></DashboardSidebar>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default LayoutDashboard;