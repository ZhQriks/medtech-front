import * as React from "react";
import useBem from "../../app/hooks/useBem";
import SectionContainer from "../../components/layout/SectionContainer";
import "./NotFoundPage.tsx.scss";

export default function NotFoundPage() {
  const { bemBlock, bemElement } = useBem("NotFoundPage");
  return (
    <SectionContainer className={bemBlock()}>
      <div className={bemBlock()}>
        <h1 className={bemElement("headline")}>Page is Not Found </h1>
      </div>
    </SectionContainer>
  );
}
