import React from 'react';
import CampImage from './parts/CampImage';
import CampCategory from './parts/CampCategory';
import CampTitle from './parts/CampTitle';
import CampDesc from './parts/CampDesc';
import CampMeta from './parts/CampMeta';

const CampaignFeature = () => {
    return (
        <div className='flex items-center gap-x-[40px] w-full max-w-[1300px]'>
            <CampImage className='h-[300px] flex-1'></CampImage>
            <div className='flex-1 max-w-[600px]'>
                <CampCategory text='Architecture' className='text-sm'></CampCategory>
                <CampTitle className='mb-4 text-2xl font-bold'>
                    Remake - We Make architecture exhibition
                </CampTitle>
                <CampDesc className='w-full max-w-full mb-6 text-xl'>
                    Remake - We Make: an exhibition about architecture's socialagency in the face of urbanisation.
                </CampDesc>
                <div className='w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6'>
                    <div className='w-3/5 h-full rounded-full bg-primary '></div>
                </div>
                <div className='flex items-start justify-between gap-x-5'>
                    <CampMeta size='big'></CampMeta>
                    <CampMeta size='big'></CampMeta>
                    <CampMeta size='big'></CampMeta>
                </div>
            </div>
        </div>
    );
};

export default CampaignFeature;