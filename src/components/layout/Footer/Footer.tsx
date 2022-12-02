import useBem from "../../../app/hooks/useBem";
import ContentContainer from "../ContentContainer";

import "./Footer.scss";

export default function Footer() {
  const { bemBlock, bemElement } = useBem("Footer");

  return (
    <footer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <div className={bemElement("routes-container")}>
          <h2>
            <a className={bemElement("link")}>Made with love in 2022</a>
          </h2>
        </div>
      </ContentContainer>
    </footer>
  );
}
