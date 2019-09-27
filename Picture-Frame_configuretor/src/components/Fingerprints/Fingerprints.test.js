import React from 'react';
import {mount} from 'enzyme';
import {Fingerprints} from './Fingerprints';



describe('Test component Fingerprints', () =>{
    var fingersPrintData = [
        {
            id: 1,
            url: 'BahamaBlue.jpg',
            color: '#315edd'
        },
        {
            id: 2,
            url: 'BambooLeaves.jpg',
            color: '#96ac64'
        }
    ];
    const wrapper = mount(<Fingerprints fingerPrints={fingersPrintData}/> );
    it('Must render Fingerprints', () => {
       
    });
    it('Must render Fingerprints', () => {
        expect(wrapper.find('img').at(0).props().src).toEqual(require('../../style/marks/' + fingersPrintData[0].url));
        expect(wrapper.find('img').at(1).props().src).toEqual(require('../../style/marks/' + fingersPrintData[1].url));
    });

});