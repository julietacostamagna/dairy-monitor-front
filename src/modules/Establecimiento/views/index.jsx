import React, { lazy } from 'react';
import AccordionUsage from '../components/accordion';
import Controls from '../components/Controls';
import CardCustom from '../../../components/CardCustom'

const ColdorderParameters = lazy(() => import('../components/ColdorderParameters'));
const ElectricalUPSParameters = lazy(() => import('../components/ElectricalUPSParameters'));

const index = () => {
    return (
        <CardCustom className={'w-full text-black dark:text-white relative p-3 rounded-md'}>
            <div className='w-full  md:p-5'>
                <h3 className='p-3 bg-primary text-white text-left w-full'><b>Establecimiento: Vanzetti</b></h3>
                <Controls />
                <AccordionUsage title={'Parámetros de frío y ordeñe'} body={ColdorderParameters} />
                <AccordionUsage title={'Parámetros eléctricos y de UPS'} body={ElectricalUPSParameters} />
            </div>
        </CardCustom>
    )
}

export default index