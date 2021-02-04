import React from 'react'
import {configure,shallow} from 'enzyme'
import Adaptor from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({adapter: new Adaptor()});

describe('Tesing <NavigationItems>',()=>{
    it('should render 2 <NavigationItem> if user is not authenticated',()=>{
        const wrapper = shallow(<NavigationItems/>)
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
      })

    it('should render 3 <NavigationItem> if user is authenticated',()=>{
        const wrapper = shallow(<NavigationItems isAuthenticated/>)
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
      })
      
})