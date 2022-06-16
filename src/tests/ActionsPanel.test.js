import { BrowserRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ActionsPanel from '../components/Elements/ActionsPanel';

test('should render correctly', () => {
    const tree = renderer.create(<BrowserRouter><ActionsPanel/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

test('check create new action', () => {
    render(
        <BrowserRouter>
            <ActionsPanel />
        </BrowserRouter>,
    );

    const linkElement = screen.getByText(/Create new Action/i);
    expect(linkElement).toBeInTheDocument();
});

test('check actions panel', () => {
    render(
        <BrowserRouter>
            <ActionsPanel />
        </BrowserRouter>,
    );

    const linkElement = screen.getByText(/Create new Action/i);
    expect(linkElement).toBeInTheDocument();

    const submit = screen.getByText(/Save/i);
    fireEvent.click(submit);

});
