import { BrowserRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Elements/Navbar';

test('should render correctly', () => {
    const tree = renderer.create(<BrowserRouter><Navbar/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

test('check create new action', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>,
    );

    const linkElement = screen.getByText(/Actions/i);
    expect(linkElement).toBeInTheDocument();
});

test('check actions panel', () => {
    render(
        <BrowserRouter>
            <Navbar />
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
            <Navbar />
        </BrowserRouter>,
    );
    const submit = screen.getByText(/Members/i);
    fireEvent.click(submit);
    const linkElement = screen.getByText(/All Members/i);
    expect(linkElement).toBeInTheDocument();
});