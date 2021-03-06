import React from 'react'
import { shallow } from 'enzyme'

import Congrats from './Congrats'
import { findByTestAttr, checkProps } from './test/testUtils'

const defaultProps = { success: false }

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Congrats {...setupProps} />)
}

test("renders without error", () => {
    const wrapper = setup({ success: false })
    const component = findByTestAttr(wrapper, "component-congrats")
    expect(component.length).toBe(1)
})

test("renders no text when 'success prop is false", () => {
    const wrapper = setup({ success: false })

    const text = findByTestAttr(wrapper, "success-message")
    expect(text.length).toBe(0)
})

test("renders non-empty congrats message when success prop is true", () => {
    const wrapper = setup({ success: true })

    const text = findByTestAttr(wrapper, "success-message")
    expect(text.length).toBe(1)
})

test("does not throw warning with expected props", () => {
    const expectedProps = { success: false }

    checkProps(Congrats, expectedProps)
})