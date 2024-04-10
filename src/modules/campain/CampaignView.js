import React, { Fragment } from 'react';
import CampImage from './parts/CampImage';
import CampCategory from './parts/CampCategory';
import CampTitle from './parts/CampTitle';
import CampDesc from './parts/CampDesc';
import CampMeta from './parts/CampMeta';
import { Button } from 'components/button';
import CampViewAuthor from './parts/CampViewAuthor';
import CampaignSupport from './CampaignSupport';
import CampaignPerk from './CampaignPerk';
import CampaignGrid from './CampaignGrid';
import CampaignItem from './CampaignItem';

const CampaignView = () => {
    return (
        <Fragment>
            <div className='h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center flex items-center justify-center text-white text-[35px] font-bold mb-16 gradient-banner'
                style={{}}>
                <h1>Education</h1>
            </div>

            <div className='flex items-start gap-x-10 w-full max-w-[1266px]'>
                <div className='flex-1'>
                    <CampImage className='h-[400px] mb-8'></CampImage>
                    <div className='flex justify-center gap-x-5'>
                        {Array(4).fill(0).map((item, index) => (
                            <img
                                className='w-[100px] h-[70px] rounded-lg object-cover'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7uXo_e9khxymAEyKiVeQsizVVZZ3_uEARXg&usqp=CAU'
                                alt=''
                            />
                        ))}
                    </div>
                </div>
                <div className='flex-1 max-w-[500px]'>
                    <CampCategory text='Architecture' className='text-sm'></CampCategory>
                    <CampTitle className='mb-4 text-2xl font-bold'>
                        Remake - We Make architecture exhibition
                    </CampTitle>
                    <CampDesc className='w-full max-w-full mb-6 text-xl'>
                        Remake - We Make: an exhibition about architecture's socialagency in the face of urbanisation.
                    </CampDesc>
                    <CampViewAuthor></CampViewAuthor>

                    <div className='w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6'>
                        <div className='w-3/5 h-full rounded-full bg-primary '></div>
                    </div>
                    <div className='flex items-start justify-between mb-4 gap-x-5'>
                        <CampMeta size='big'></CampMeta>
                        <CampMeta size='big'></CampMeta>
                        <CampMeta size='big'></CampMeta>
                    </div>
                    <Button className='w-full text-white bg-primary'>Back this project</Button>
                </div>
            </div>

            <div className='flex items-center justify-between w-full gap-x-10 mt-[100px] bg-white p-5 border-b border-b-slate-200 mb-8'>
                <div className='flex items-center text-sm font-medium gap-x-14 text-text3'>
                    <span className='cursor-pointer text-secondary'>Campaign</span>
                </div>
                <Button className='text-white bg-primary'>Back this project</Button>
            </div>

            <div className='grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]'>
                <div>
                    <h2 className='mb-5 text-lg font-semibold uppercase'>Story</h2>
                    <div className='w-full bg-stone-100'></div>
                </div>
                <div>
                    <CampaignSupport></CampaignSupport>
                    <div className='mb-[60px]'>
                        <div className='flex flex-col gap-y-[30px]'>
                            <CampaignPerk></CampaignPerk>
                            <CampaignPerk></CampaignPerk>

                        </div>
                    </div>
                </div>
            </div>
            <h2 className='mb-10 text-xl font-semibold'>You also may be interested in</h2>
            <CampaignGrid>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
            </CampaignGrid>
        </Fragment>
    );
};

export default CampaignView;