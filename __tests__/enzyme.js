import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Dashboard from '../client/Components/Dashboard';

Enzyme.configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Dashboard', () => {
    let wrapper;
    let handleFetch;
    let setCountryTo;
    const props = {
    };

    beforeAll(() => {
      handleFetch = jest.fn();
      setCountryTo = jest.fn();
      wrapper = shallow(<Dashboard />);
    });

    xit('should match previous snapshot for Dashboard component', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    xit('should contain a button with text of `Search`', () => {
      expect(wrapper.find('button')).at(0).text().toBe('Search');
    });

    xit('should contain six select/dropdown elements', () => {
      expect(wrapper.find('select')).toHaveLength(6);
    });

    xit('should contain one input field', () => {
      expect(wrapper.find('input')).toHaveLength(1);
    });

    xit('should contain input field with default value of `2022-05-11`', () => {
      expect(wrapper.find('input')).text().toBe('2022-05-11');
    });

    xit('should display one table', () => {
      expect(wrapper.find('table')).toHaveLength(1);
    });

    xit('should contain 2 buttons that have a class of `tableRowButtons', () => {
      expect(wrapper.exists('button.tableRowButtons')).toHaveLength(2);
    });

    xit('should send request to flights api on click', () => {
      wrapper.find('button').at(0).simulate('click');
      expect(handleFetch).toHaveBeenCalled();
    });
  });

  describe('Dashboard test effect hooks', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(<Dashboard />);
    });

    xit('should set country from selected option', () => {
      wrapper.find('select').at(0).simulate('change', {
        target: {
          value: 'countryFrom'
        },
      });
    });
    xit('should set city from selected option', () => {
      wrapper.find('select').at(1).simulate('change', {
        target: {
          value: 'cityFrom'
        },
      });
    });
    xit('should set country to selected option', () => {
      wrapper.find('select').at(2).simulate('change', {
        target: {
          value: 'countryTo'
        },
      });
    });
    xit('should set city to selected option', () => {
      wrapper.find('select').at(3).simulate('change', {
        target: {
          value: 'cityTo'
        },
      });
    });
  });
});
