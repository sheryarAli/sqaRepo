import { STATE_LOGIN, STATE_SIGNUP, IS_AUTHENTICATED } from './components/AuthForm';
import GAListener from './components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from './components/Layout';
import PageSpinner from './components/PageSpinner';
import AuthPage from './pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import { Session } from 'bc-react-session';

const AlertPage = React.lazy(() => import('./pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('./pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('./pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('./pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('./pages/ButtonPage'));
const CardPage = React.lazy(() => import('./pages/CardPage'));
const ChartPage = React.lazy(() => import('./pages/ChartPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('./pages/DropdownPage'));
const FormPage = React.lazy(() => import('./pages/FormPage'));
const ScdHoForm = React.lazy(() => import('./forms/ScdHoForm'));
const scdBranchForm = React.lazy(() => import('./forms/ScdBranchForm'));
const InputGroupPage = React.lazy(() => import('./pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('./pages/ModalPage'));
const ProgressPage = React.lazy(() => import('./pages/ProgressPage'));
const TablePage = React.lazy(() => import('./pages/TablePage'));
const TypographyPage = React.lazy(() => import('./pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('./pages/WidgetPage'));
const DigitalMigrationTrackingForm = React.lazy(() => import('./forms/DigitalMigrationTrackingForm'));
const MonthlyServieFormPage = React.lazy(() => import('./forms/MonthlyServiceMeetingForm'));
const ServiceQualityAnexFormPage = React.lazy(() => import('./forms/ServiceQualityAnexForm'));
const ServiceQualityAssessmentCheckListPage = React.lazy(() => import('./forms/ServiceQualityAssessmentChecklistForm'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const getSessionValid = () => {
  const session = Session.get();
  return session.isValid;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
      getSessionValid() ? (

        <Component {...props} />
      )
        : <Redirect to="/login" />
    )} />
  );
};
const LoginRoute = ({ component: Component, ...rest }) => {
  return (

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
      getSessionValid() ?
        <DashboardPage />
        : <Redirect to="/login" />
    )} />
  );
};


class App extends React.Component {



  render() {
    const session = Session.get();
    console.log('session' + session.isValid);

    return (
      <BrowserRouter basename={getBasename()}>

        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <MainLayout breakpoint={this.props.breakpoint}>

              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/login-modal" component={AuthModalPage} />
                <Route exact path="/buttons" component={ButtonPage} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/widgets" component={WidgetPage} />
                <Route exact path="/typography" component={TypographyPage} />
                <Route exact path="/alerts" component={AlertPage} />
                <Route exact path="/tables" component={TablePage} />
                <Route exact path="/badges" component={BadgePage} />
                <Route
                  exact
                  path="/button-groups"
                  component={ButtonGroupPage}
                />
                <Route exact path="/dropdowns" component={DropdownPage} />
                <Route exact path="/progress" component={ProgressPage} />
                <Route exact path="/modals" component={ModalPage} />
                <Route exact path="/forms" component={FormPage} />
                <Route exact path="/scdHoForm" component={ScdHoForm} />
                <Route exact path="/scdBranchForm" component={scdBranchForm} />
                <Route exact path="/digitalMigrationTrackingForm" component={DigitalMigrationTrackingForm} />
                <Route exact path="/serviceQualityAnexForm" component={ServiceQualityAnexFormPage} />
                <Route exact path="/monthlyServiceMeetingForm" component={MonthlyServieFormPage} />
                <Route exact path="/serviceQualityAssessmentChecklistForm" component={ServiceQualityAssessmentCheckListPage} />
                <Route exact path="/input-groups" component={InputGroupPage} />
                <Route exact path="/charts" component={ChartPage} />
                <PrivateRoute exact path="/" component={DashboardPage} />

              </React.Suspense>
            </MainLayout>
            <Redirect to="/login" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
