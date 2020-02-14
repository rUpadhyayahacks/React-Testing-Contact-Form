import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './components/ContactForm';

test('first name, last name, email inputs are rendered', () => {
    const { getByLabelText} = render(<ContactForm />);
    getByLabelText(/first name/i);
    getByLabelText(/last name/i)
    getByLabelText(/email/i)

})

test('',()=> {
    const { getByLabelText, getByText, getByTestId } = render(<ContactForm />)
    const firstNameInput= getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/email/i)

    fireEvent.change(firstNameInput, { target: { value: 'max'}})
    fireEvent.change(lastNameInput, { target: { value: 'Test Last Name'}})
    fireEvent.change(emailInput, { target: { value: 'Test Email'}})
    
    expect(firstNameInput.value).toBe('max');
    expect(lastNameInput.value).toBe('Test Last Name');
    expect(emailInput.value).toBe('Test Email')

    fireEvent.click(getByTestId(/submit/i))

    // const nameText = getByTestId(/results/i)
    // expect(nameText).toBeInTheDocument()




})