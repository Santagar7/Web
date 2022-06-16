import { BrowserRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../components/Pages/LoginPage';
import renderer from 'react-test-renderer';

test('should render correctly', () => {
    const tree = renderer.create(<BrowserRouter><LoginPage/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
test('test login data', () => {
    render(
        <BrowserRouter>
            <LoginPage />
        </BrowserRouter>,
    );
    const inputName = screen.getByTestId('name');
    fireEvent.change(inputName, { target: { value: 'steve' } });
    expect(inputName.value).toBe('steve');

    const inputPass = screen.getByTestId('password');
    fireEvent.change(inputPass, { target: { value: 'steve' } });
    expect(inputName.value).toBe('steve');
});

test('test submit btn', () => {
    render(
        <BrowserRouter>
            <LoginPage />
        </BrowserRouter>,
    );
    const submit = screen.getByTestId('submit');
    fireEvent.click(submit);
});