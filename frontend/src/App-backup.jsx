import { useState } from "react";
import "./App.css";
import { Dapp } from "./components/Dapp";
import { MetaMaskProvider } from "@metamask/sdk-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MetaMaskProvider
        debug={false}
        sdkOptions={{
          dappMetadata: {
            name: "Example React Dapp",
            url: window.location.host,
          },
          // Other options
        }}
      >
        {/* <App /> */}
      </MetaMaskProvider>
      ;{/* <Dapp /> */}
    </>
  );
}

export default App;
