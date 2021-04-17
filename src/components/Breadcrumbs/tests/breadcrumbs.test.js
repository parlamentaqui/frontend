import renderer from 'react-test-renderer';
import Breadcrumbs from '..';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router';

test(`breadcrumb is rendered as it should`, () => {
    const history = createMemoryHistory();
    history.push('/deputados')
    const component = renderer.create(
        <Router history={history}>
            <Breadcrumbs />
        </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});