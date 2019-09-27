import React from 'react';
import {mount} from 'enzyme';
import {Header} from './Header';

it('Test header component', () => {
    let currency = [
        {
            id: 0,
            code: 'CAD',
            name: 'Canadian Dollar',
            img: 'ca.png'
        },
        {
            id: 1,
            code: 'CNY',
            name: 'Yuan Renminbi',
            img: 'cn.png'
        }
    ];
    const wrapper = mount(<Header currency={currency}/> );
    it('Must render car list', () => {
        expect(wrapper.find('option').at(0).props().key=currency[0].id).toEqual(currency[0].id);
        
    });
});