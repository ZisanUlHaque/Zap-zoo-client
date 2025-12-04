import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MyPercel from "../pages/Dashboard/MyPercel";
import Payment from "../pages/Dashboard/Payment";
import PaymentSuccess from "../pages/Dashboard/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/PaymentCancelled";

import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders";
import UsersManagement from "../pages/Dashboard/UsersManagement";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../pages/Dashboard/AssignRiders";
import RiderRoute from "./RiderRoute";
import AssignDeliveries from "../pages/Dashboard/AssignDeliveries";
import CompletedDelivaries from "../pages/Dashboard/CompletedDelivaries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: 'parcel-track/:trackingId',
        Component: ParcelTrack
      }
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyPercel,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: 'payment-history',
        Component: PaymentHistory
      },

      //rider only route
      {
        path: 'assign-deliveries',
        element: <RiderRoute><AssignDeliveries></AssignDeliveries></RiderRoute>
      },
      {
        path: 'completed-deliveries',
        element: <RiderRoute><CompletedDelivaries></CompletedDelivaries></RiderRoute>
      },

      //admin only route
      {
        path: 'approve-riders',
        element: <AdminRoute><ApproveRiders></ApproveRiders> </AdminRoute>
      },
      {
        path: 'users-management',
        element: <AdminRoute><UsersManagement></UsersManagement> </AdminRoute>
      },
      {
        path: 'assign-riders',
        element: <AdminRoute><AssignRiders></AssignRiders> </AdminRoute>
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled
      }
    ],
  },
]);
