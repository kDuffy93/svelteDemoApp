<script>
  import { Router, Link, Route } from "svelte-routing";
  export let url = "";

  //import partials
  import Footer from "./components/partials/footer.svelte";
  import Header from "./components/partials/header.svelte";
  //import Pages
  import LandingPage from "./routes/landingPage/+page.svelte";
  import Login from "./routes/login/+page.svelte";
  import HeatMap from "./routes/heatMap/+page.svelte";
  import RentalData from "./routes/rentalData/+page.svelte";

let loginLinks = [{href : "/", linkText : "Go Back"}];

let heatMapLinks =[
                    {href : "/rentalData", linkText : "View Rental Data"},
                    {href : "/login", linkText : "Log in"},
                  ];
let rentalDataLinks = [
                        {href : "/heatMap", linkText : "View Heat Map"},
                        {href : "/login", linkText : "Log in"},
                      ];
let landingPageLinks = [{href : "/login", linkText : "Log In"}];
</script>

<Router {url}>
  <Route path="/">
    <Header navList={landingPageLinks} />
    <LandingPage/>
  </Route>
  <Route path="login">
    <Header title={"login"} navList={loginLinks} />
    <Login />
  </Route>
  <Route path="heatMap">
    <Header title={"heatMap"} navList={heatMapLinks} /> 
    <HeatMap />
  </Route>
  <Route path="rentalData">
    <Header title={"rentalData"} navList={rentalDataLinks} />
    <RentalData/>
  </Route>
  <Footer />
</Router>

<style>
</style>
