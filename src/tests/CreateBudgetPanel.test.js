import { BrowserRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateBudgetPanel from '../components/Elements/CreateBudgetPanel';
import renderer from 'react-test-renderer';

test('should render correctly', () => {
    const tree = renderer.create(<BrowserRouter><CreateBudgetPanel/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
test('test login data', () => {
    render(
        <BrowserRouter>
            <CreateBudgetPanel />
        </BrowserRouter>,
    );
    const inputName = screen.getByTestId('name');
    fireEvent.change(inputName, { target: { value: 'steve' } });
    expect(inputName.value).toBe('steve');
});

test('test submit btn', () => {
    render(
        <BrowserRouter>
            <CreateBudgetPanel />
        </BrowserRouter>,
    );
    const submit = screen.getByText(/Submit/i);
    fireEvent.click(submit);
});
test('test cancel btn', () => {
    render(
        <BrowserRouter>
            <CreateBudgetPanel />
        </BrowserRouter>,
    );
    const submit = screen.getByText(/Cancel/i);
    fireEvent.click(submit);
});