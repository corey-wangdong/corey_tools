import { , } from 'preact-router';
import ROUTER_LIST, { RouterObj } from './routerList';

const routerToElement = (list: RouterObj[]) => {
  return list.map((route) => {
    // const Element = lazy(() => import(`pages/${route.src}`));
    const Element = import(`pages/${route.src}`)
    return {
      path: route.path,
      element: <Element />,
      children: route?.children?.length ? routerToElement(route.children) : []
    };
  });
};

const Router = () => {
  return useRoutes(routerToElement(ROUTER_LIST));
};
export default Router;
