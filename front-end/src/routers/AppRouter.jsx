import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./../components/navBar";
import Home from "./../components/home";
import About from "./../components/about";
import Programs from "./../components/programs";
import Contact from "./../components/contact";
import NotFound from "./../components/notFound";
import LoginForm from "./../components/login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/programs" component={Programs} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={LoginForm} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
