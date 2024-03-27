import styles from "./style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs, Home, AdminLogin, AdminHome, AdminHero, AdminStatus, AdminService, AdminOurWorks, AdminTestimonial,ClientAdminForm,Slider,OurService,ContactUs,Slider2 } from "./components";


const App = () => (
<div className="App">
<Router>
<Routes>
  <Route exact path="/" element={<Home />}></Route>
</Routes>
<Routes>
  <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
</Routes>
<Routes>
  <Route path="/AdminLogin" element={<AdminLogin></AdminLogin>}></Route>
</Routes>
<Routes>
  <Route path="/AdminHome" element={<AdminHome></AdminHome>}></Route>
</Routes>
<Routes>
  <Route path="/AdminHero" element={<AdminHero></AdminHero>}></Route>
</Routes>
<Routes>
  <Route path="/AdminStatus" element={<AdminStatus></AdminStatus>}></Route>
</Routes>
<Routes>
  <Route path="/AdminService" element={<AdminService></AdminService>}></Route>
</Routes>
<Routes>
  <Route path="/AdminOurWorks" element={<AdminOurWorks></AdminOurWorks>}></Route>
</Routes>
<Routes>
  <Route path="/AdminTestimonial" element={<AdminTestimonial></AdminTestimonial>}></Route>
</Routes>
<Routes>
  <Route path="/ClientAdminForm" element={<ClientAdminForm></ClientAdminForm>}></Route>
</Routes>
<Routes>
  <Route path="/Slider" element={<Slider></Slider>}></Route>
</Routes>
<Routes>
  <Route path="/OurService" element={<OurService></OurService>}></Route>
</Routes>
<Routes>
  <Route path="/ContactUs" element={<ContactUs></ContactUs>}></Route>
</Routes>
<Routes>
  <Route path="/Slider2" element={<ContactUs></ContactUs>}></Route>
</Routes>
</Router>
</div>

);

export default App;
