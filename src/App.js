import LayoutDashboard from "layout/LayoutDashboard";
import CampaignView from "modules/campain/CampaignView";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from 'react-modal';
import Payment from "modules/payment/Payment";

const SignUpPage = lazy(() => import("./pages/SignUpPage"))
const SignInPage = lazy(() => import("./pages/SignInPage"))
const DashboardPage = lazy(() => import("./pages/DashboardPage"))
const CampaignPage = lazy(() => import("./pages/CampaignPage"))
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"))
const PaymentPage = lazy(() => import("./pages/PaymentPage"))

// const customStyles = {
//   content: {
//aaaaaa
//   },
// };
Modal.setAppElement('#root');
Modal.defaultStyles = {}

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
          <Route path="/start-campaign" element={<StartCampaignPage></StartCampaignPage>}></Route>
          <Route path="/campaign/:slug" element={<CampaignView></CampaignView>}></Route>
        </Route>
        <Route>
          <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
          <Route path="/payment-back" element={<Payment></Payment>}></Route>

        </Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  )

}

export default App;
