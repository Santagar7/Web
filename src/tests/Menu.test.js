import { BrowserRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MenuPage from '../components/Pages/MenuPage';

test('should render correctly', () => {
    const tree = renderer.create(<BrowserRouter><MenuPage/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

test('check current balance', () => {
    render(
        <BrowserRouter>
            <MenuPage />
        </BrowserRouter>,
    );

    const linkElement = screen.getByText(/Current balance/i);
    expect(linkElement).toBeInTheDocument();
});

test('check actions panel', () => {
    render(
        <BrowserRouter>
            <MenuPage />
        </BrowserRouter>,
    );
    const submit = screen.getByText(/Actions/i);
    fireEvent.click(submit);
    const linkElement = screen.getByText(/Create new Action/i);
    expect(linkElement).toBeInTheDocument();
});

test('check members panel', () => {
    render(
        <BrowserRouter>
            <MenuPage />
        </BrowserRouter>,
    );
    const submit = screen.getByText(/Members/i);
    fireEvent.click(submit);
    const linkElement = screen.getByText(/All Members/i);
    expect(linkElement).toBeInTheDocument();
});