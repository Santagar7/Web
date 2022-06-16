import { BrowserRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SignUpPage from '../components/Pages/SignUpPage';


test('should render correctly', () => {
    const tree = renderer.create(<BrowserRouter><SignUpPage/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
test('test register data', () => {
    render(
        <BrowserRouter>
            <SignUpPage />
        </BrowserRouter>,
    );
    const inputName = screen.getByTestId('name');
    fireEvent.change(inputName, { target: { value: 'steve' } });
    expect(inputName.value).toBe('steve');

    const inputPass = screen.getByTestId('password');
    fireEvent.change(inputPass, { target: { value: 'steve' } });
    expect(inputName.value).toBe('steve');

    const inputRepeatPass = screen.getByTestId('repeat_password');
    fireEvent.change(inputRepeatPass, { target: { value: 'steve12' } });
    expect(inputRepeatPass.value).toBe('steve12');

    const inputEmail = screen.getByTestId('email');
    fireEvent.change(inputEmail, { target: { value: 'email@gmail.com' } });
    expect(inputEmail.value).toBe('email@gmail.com');
});

test('Invalid Email', () => {
    render(
        <BrowserRouter>
            <SignUpPage />
        </BrowserRouter>,
    );
    const submit = screen.getByTestId('submit');
    fireEvent.click(submit);
    const linkElement = screen.getByText(/Invalid Email/i);
    expect(linkElement).toBeInTheDocument();
});
test('Passwords should match', () => {
    render(
        <BrowserRouter>
            <SignUpPage />
        </BrowserRouter>,
    );
    
    const inputEmail = screen.getByTestId('email');
    fireEvent.change(inputEmail, { target: { value: 'user@gmail.com' } });
    expect(inputEmail.value).toBe('user@gmail.com');

    const inputPass = screen.getByTestId('password');
    fireEvent.change(inputPass, { target: { value: 'steve' } });
    expect(inputPass.value).toBe('steve');

    const inputRepeatPass = screen.getByTestId('repeat_password');
    fireEvent.change(inputRepeatPass, { target: { value: 'steve12' } });
    expect(inputRepeatPass.value).toBe('steve12');

    const submit = screen.getByTestId('submit');
    fireEvent.click(submit);

    const linkElement = screen.getByText(/Passwords should match/i);
    expect(linkElement).toBeInTheDocument();
});
test('Password is too short', () => {
    render(
        <BrowserRouter>
            <SignUpPage />
        </BrowserRouter>,
    );
    
    const inputEmail = screen.getByTestId('email');
    fireEvent.change(inputEmail, { target: { value: 'user@gmail.com' } });
    expect(inputEmail.value).toBe('user@gmail.com');

    const inputPass = screen.getByTestId('password');
    fireEvent.change(inputPass, { target: { value: '123' } });
    expect(inputPass.value).toBe('123');

    const inputRepeatPass = screen.getByTestId('repeat_password');
    fireEvent.change(inputRepeatPass, { target: { value: '123' } });
    expect(inputRepeatPass.value).toBe('123');

    const submit = screen.getByTestId('submit');
    fireEvent.click(submit);

    const linkElement = screen.getByText(/Password is too short/i);
    expect(linkElement).toBeInTheDocument();
});

test('Password not safe enough', () => {
    render(
        <BrowserRouter>
            <SignUpPage />
        </BrowserRouter>,
    );
    
    const inputEmail = screen.getByTestId('email');
    fireEvent.change(inputEmail, { target: { value: 'user@gmail.com' } });
    expect(inputEmail.value).toBe('user@gmail.com');

    const inputPass = screen.getByTestId('password');
    fireEvent.change(inputPass, { target: { value: 'stevesteve' } });
    expect(inputPass.value).toBe('stevesteve');

    const inputRepeatPass = screen.getByTestId('repeat_password');
    fireEvent.change(inputRepeatPass, { target: { value: 'stevesteve' } });
    expect(inputRepeatPass.value).toBe('stevesteve');

    const submit = screen.getByTestId('submit');
    fireEvent.click(submit);

    const linkElement = screen.getByText(/Password not safe enough/i);
    expect(linkElement).toBeInTheDocument();
});