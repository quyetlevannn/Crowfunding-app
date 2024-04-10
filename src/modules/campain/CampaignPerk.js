import { defaultImage } from 'constants/global';
import React from 'react';
import CampTitle from './parts/CampTitle';
import { Button } from 'components/button';

const CampaignPerk = ({ showBtn = false }) => {
    return (
        <div>
            <div className='shadow-1 bg-stone-100 rounded-xl'>
                <img
                    src={defaultImage}
                    alt=''
                    className='h-[232px] object-cover rounded-xl w-full'
                />
                <div className='p-5'>
                    <span className='inline-block px-3 py-1 mb-5 text-xs font-medium text-white rounded-sm bg-secondary'>
                        Featured
                    </span>
                    <CampTitle className='mb-2 text-xl font-semibold'>Special One Camera</CampTitle>
                    <div className='flex items-center mb-4 gap-x-3'>
                        <span className='text-xl font-bold text-text1'>$2,724 USD</span>
                        <span className='text-sm font-medium line-through text-error'> $1,504 USD</span>
                        <span className='text-sm font-medium text-error'>(12% OFF)</span>
                    </div>
                    <div className='flex flex-col mb-8 gap-y-1'>
                        <strong>Estimated Shipping</strong>
                        <span className='text-text2'>October 2022</span>
                    </div>
                    <p className='mb-3 text-sm text-text2 gap-x-5'>
                        <strong>05</strong> claimed
                    </p>
                    <p className='text-sm text-text2'>Ships worldwide</p>
                </div>
            </div>
            {showBtn && (<div className='mt-6'>
                <Button className='w-full text-white bg-secondary'>Get this perk</Button>
            </div>
            )}
        </div>
    );
};

export default CampaignPerk;