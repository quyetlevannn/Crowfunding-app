import Gap from 'components/common/Gap';
import Heading from 'components/common/Heading';
import CampaignFeature from 'modules/campain/CampaignFeature';
import CampaignGrid from 'modules/campain/CampaignGrid';
import CampaignItem from 'modules/campain/CampaignItem';
import React, { Fragment } from 'react';
import { v4 } from 'uuid'

const DashboardPage = () => {
    return (
        <Fragment>
            <Heading number={4}>Your campaign</Heading>
            <CampaignFeature></CampaignFeature>
            <Gap></Gap>
            <Heading>Popular campaign</Heading>
            <CampaignGrid>
                {Array(4).fill(0).map(item => (
                    <CampaignItem key={v4()}></CampaignItem>
                ))}
            </CampaignGrid>
            <Gap></Gap>
            <Heading number={4}>Recent campaign</Heading>
            <CampaignGrid>
                {Array(4).fill(0).map(item => (
                    <CampaignItem key={v4()}></CampaignItem>
                ))}
            </CampaignGrid>
        </Fragment>
    );
};

export default DashboardPage;