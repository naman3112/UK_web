import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { siteSugg } from "./routes";
import { CircularProgress } from "@material-ui/core";
// const Dashboard = lazy(() => import(`../site/ds/components/Lookup/index`))
import Dashboard from "../site/ds/components/Home/index";
// const Dashboard = lazy(() => import(`../../dashboard/index`));
import SiteHeader from "../../base/StickyHeader";
import SiteFooter from "../../base/StickyFooter";


const NotFound = lazy(() => import(`./NotFound`));

export function DynamicLoader(LazyComponent, props) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LazyComponent {...props}>{props?.children}</LazyComponent>
    </Suspense>
  );
}

function RouteSection() {
  return (
   
    <main className="content">
      <Switch>
        <Route exact path="/" render={() => DynamicLoader(Dashboard)} />
        
        {siteSugg.map((site, index) => {
          const { route, path } = site;
          const Component = lazy(() => import(`../${path}/index`));
          return (
            <Route
              exact
              path={`${route}`}
              render={() => DynamicLoader(Component)}
              key={`${index}-${path}`}
            />
          );
        })}
        <Route path="*" render={() => DynamicLoader(NotFound)} />
      </Switch>
    </main>
  
  );
}

export default function Routes() {
  return (
    <Router>
      <SiteHeader/>
      <RouteSection />
      <SiteFooter/>
    </Router>
  );
}
