import { useState } from "react";
import {
  WbGrid,
  WbGridCol,
  WbGridRow,
  WbHeading,
  WbButton,
  WbInput,
} from "./prefixed-components";

function App() {
  const [headline, setHeadline] = useState("Prefixed Workbench in React");
  return (
    <div className="App">
      <WbGrid>
        <WbGridRow>
          <WbGridCol mq1={12}>
            <WbHeading className="wb-margin-vertical-s">{headline}</WbHeading>

            <WbInput
              value={headline}
              onWbinput={(e) => setHeadline(e.detail.value)}
              className="wb-margin-bottom-s"
            >
              <span slot="label">Headline</span>
            </WbInput>

            <WbButton variant="secondary" size="s">
              Hello World
            </WbButton>
          </WbGridCol>
        </WbGridRow>
      </WbGrid>
    </div>
  );
}

export default App;
