// import { useWallet } from '@solana/wallet-adapter-react';
// import { use } from 'react';
import {useConnection, useWallet } from '@solana/wallet-adapter-react'; 

export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdropToUser() {
        await connection.requestAirdrop(wallet.publicKey, 10000000000000);
        alert("Airdrop Successful");
    }
  return (
    <div>
      <input type="text" placeholder="Amount"></input>
      <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  )
}