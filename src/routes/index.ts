import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const Demo = lazy(() => import('../pages/Demo'));
const UserProfile = lazy(() => import('../pages/Users/Profile'));
const List1 = lazy(() => import('../pages/Users/List1'));
const ListUsers = lazy(() => import('../pages/Prog/Users'));
const ListRoles = lazy(() => import('../pages/Prog/Roles'));
const ListPermissions = lazy(() => import('../pages/Prog/Permissions'));
const UpdateUser = lazy(() => import('../pages/Users/update'));
const CreateUser = lazy(() => import('../pages/Users/create'));
const UpdatePermission = lazy(() => import('../pages/Permissions/update'));
const CreatePermission = lazy(() => import('../pages/Permissions/create'));
const UpdateRole = lazy(() => import('../pages/Roles/update'));
const CreateRole = lazy(() => import('../pages/Roles/create'));


const coreRoutes = [
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  {
    path: '/demo',
    title: 'Demo',
    component: Demo,

  },
  {
    path: '/profiles',
    title: 'Profile',
    component: UserProfile,

  },
  {
    path: '/List1',
    title: 'ListComponent',
    component: List1,
  },
  {
    path: '/users/list',
    title: 'List Users',
    component: ListUsers,
  },
  {
    path: '/roles/list',
    title: 'List Roles',
    component: ListRoles,
  },
  {
    path: '/permissions/list',
    title: 'List Permissions',
    component: ListPermissions,
  },
  {
    path: '/user/update/:id',
    title: 'Update User',
    component: UpdateUser,
  },
  {
    path: '/user/create',
    title: 'Create User',
    component: CreateUser,
  },
  {
    path: '/permission/update/:id',
    title: 'Update Permission',
    component: UpdatePermission,
  },
  {
    path: '/permission/create',
    title: 'Create Permission',
    component: CreatePermission,
  },
  {
    path: '/role/update/:id',
    title: 'Update Role',
    component: UpdateRole,
  },
  {
    path: '/role/create',
    title: 'Create Role',
    component: CreateRole,
  }

];

const routes = [...coreRoutes];
export default routes;
