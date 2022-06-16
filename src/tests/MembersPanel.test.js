import { BrowserRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MembersPanel from '../components/Elements/MembersPanel';

test('should render correctly', () => {
    const tree = renderer.create(<BrowserRouter><MembersPanel/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

test('check create new action', () => {
    render(
        <BrowserRouter>
            <MembersPanel />
        </BrowserRouter>,
    );

    const linkElement = screen.getByText(/All Members/i);
    expect(linkElement).toBeInTheDocument();
});

test('check actions panel', () => {
    render(
        <BrowserRouter>
            <MembersPanel />
        </BrowserRouter>,
    );

    const linkElement = screen.getByText(/Cancel/i);
    expect(linkElement).toBeInTheDocument();

    const submit = screen.getByText(/Add member/i);
    fireEvent.click(submit);

});
