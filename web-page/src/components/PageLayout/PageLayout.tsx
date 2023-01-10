import { PageHeader, PageFooter } from "components";
import React from "react";
import { Outlet } from "react-router-dom";
import { PageContainer } from "./PageLayout.style";

export const PageLayout: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </PageContainer>
  );
};
