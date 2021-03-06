import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./Config";
import Main from "./Pages/Main/Main";
import Survey from "./Pages/Survey/Survey";
import SurveyEnd from "./Pages/Survey/SurveySection/SurveyEnd/SurveyEnd";
import Result from "./Pages/Survey/Result/Result";
import ProductView from "./Pages/ProductView/ProductView";
import Review from "./Pages/Review/Review";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import MyPillyShort from "./Pages/MyPilly/MyPillyShort";
import PointMallDetail from "./Pages/MyPilly/Components/PointMallDetail";
import Story from "./Pages/Story/Story";
import ProductLists1 from "./Pages/ProductView/ProductLists1";
import ReviewPost from "./Pages/Review/ReviewPost";
import ProductPillyBox from "./Pages/ProductView/ProductPillyBox";
import SocialSignUp from "./Pages/SignUp/SocialSignUp";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/survey" component={Survey} />
          <Route exact path="/end" component={SurveyEnd} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/mypilly" component={MyPillyShort} />
          <Route exact path="/mypilly/:id" component={PointMallDetail} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/product" component={ProductView} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/review/:id" component={ReviewPost} />
          <Route exact path="/product/:id" component={ProductLists1} />
          <Route
            exact
            path="/product/pillybox/:id"
            component={ProductPillyBox}
          />
          <Route exact path="/social/signUp" component={SocialSignUp} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
