import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Airdrop } from './Airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  //creating my own rpc url through Alchemy
  return (
    <div>
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/3kUlu3VqPb6xr1h2FnHug"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
        <div>
          Hi Fam!
        </div>
        <Airdrop>
        </Airdrop>
      </WalletModalProvider>
    </WalletProvider>
        </ConnectionProvider>
        </div>
  )
}

export default App
