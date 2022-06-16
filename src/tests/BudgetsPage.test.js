import { BrowserRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import BudgetsPage from '../components/Pages/BudgetsPage';
import renderer from 'react-test-renderer';

test('should render correctly', () => {
    const tree = renderer.create(<BrowserRouter><BudgetsPage/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
test('test submit btn', () => {
    render(
        <BrowserRouter>
            <BudgetsPage />
        </BrowserRouter>,
    );
    const submit = screen.getByText(/Create a budget/i);
    fireEvent.click(submit);
});
test('test text', () => {
    render(
        <BrowserRouter>
            <BudgetsPage />
        </BrowserRouter>,
    );
    const elem = screen.getByText(/My budgets/i);
    expect(elem).toBeInTheDocument();
});