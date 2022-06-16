import App from './../components/App';
import renderer from 'react-test-renderer';

test('should render correctly', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});
