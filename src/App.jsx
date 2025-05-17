import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Dashboard from "./pages/dashboard"; // ✅ adjust if located elsewhere

import AppLayout from "./layouts/app-layout";
import ProtectedRoute from "./components/protected-route";
import { ThemeProvider } from "./components/theme-provider";

import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/post-job";
import JobListing from "./pages/jobListing";
import MyJobs from "./pages/my-jobs";
import SavedJobs from "./pages/saved-jobs";
import JobPage from "./pages/job";
import SelfAssessment from "./pages/self-assessment";
import Skills from "./pages/skills";
import ResumeTools from "./pages/resume-tools";
import JobTools from "./pages/job-tools";
import Networking from "./pages/networking";
import CareerOnboarding from "./pages/career-onboarding";
import InternationalSupport from "./pages/international-support";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },      
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/self-assessment",
        element: (
          <ProtectedRoute>
            <SelfAssessment />
          </ProtectedRoute>
        ),
      },
      {
        path: "/skills",
        element: (
          <ProtectedRoute>
            <Skills />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job-tools",
        element: (
          <ProtectedRoute>
            <JobTools />
          </ProtectedRoute>
        ),
      },
      {
        path: "/networking",
        element: (
          <ProtectedRoute>
            <Networking />
          </ProtectedRoute>
        ),
      },
      {
        path: "/career-onboarding",
        element: (
          <ProtectedRoute>
            <CareerOnboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/international-support",
        element: (
          <ProtectedRoute>
            <InternationalSupport />
          </ProtectedRoute>
        ),
      },
      {
        path: "/resume-tools",
        element: (
          <ProtectedRoute>
            <ResumeTools />
          </ProtectedRoute>
        ),
      },      
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
