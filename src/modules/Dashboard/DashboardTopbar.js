import React from 'react';
import DashboardSearch from './DashboardSearch';
import DashboardFund from './DashboardFund';
import Button from 'components/button/Button';
import { Link } from 'react-router-dom';

const DashboardTopbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center flex-1 gap-x-10'>
                <Link to='/' className='inline-block'>
                    <img src='/logo_3.png' alt='crow-app' />
                </Link>
                <div className='w-full w-max-[500px]'>
                    <DashboardSearch></DashboardSearch>
                </div>
            </div>

            <div className='flex items-center justify-end flex-1 gap-x-10'>
                <DashboardFund></DashboardFund>
                <Button className='px-5' type='button' href='/start-campaign' kind='secondary'>
                    Start a campaign
                </Button>
                <img src='/logo_3.png' alt='crow-app' className='object-cover rounded-full' />
            </div>
        </div>
    );
};

export default DashboardTopbar;