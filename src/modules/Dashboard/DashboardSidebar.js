import { IconCampaign, IconDarkmode, IconDashboard, IconLogout, IconPayment, IconProfile, IconWithdraw } from 'components/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarLink = [
    {
        icon: <IconDashboard></IconDashboard>,
        title: 'Dashboard',
        url: '/'
    },
    {
        icon: <IconCampaign></IconCampaign>,
        title: 'Campaign',
        url: '/campaign'
    },
    {
        icon: <IconPayment></IconPayment>,
        title: 'Payment',
        url: '/payment'
    },
    {
        icon: <IconWithdraw></IconWithdraw>,
        title: 'Withdraw',
        url: '/withdraw'
    },
    {
        icon: <IconProfile></IconProfile>,
        title: 'Profile',
        url: '/Profile'
    },
    {
        icon: <IconLogout></IconLogout>,
        title: 'Logout',
        url: '/logout',
        onclick: () => { }
    },
    {
        icon: <IconDarkmode></IconDarkmode>,
        title: 'Light/Dark',
        url: '/#',
        onclick: () => { }
    },

]

const DashboardSidebar = () => {
    const navlinkClass = 'flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:bg-white last:shadow-sdprimary'
    return (
        <div className='w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,213,213,0.15)] px-[14px] py-10 flex flex-col last:mt-auto flex-shrink-0'>
            {sidebarLink.map((link) => (
                <NavLink
                    to={link.url}
                    key={link.title}
                    className={({ isActive }) => (isActive ? `${navlinkClass} text-primary bg-primary bg-opacity-20` : `${navlinkClass} text-icon-color`)}
                >
                    <span> {link.icon}</span>
                    <span className='md:hidden'> {link.title}</span>
                </NavLink>
            ))}
        </div>
    )
};

export default DashboardSidebar;