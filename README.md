# Disco GM Discord bot 📝✨

<!-- ### Check out the live demo 👉 [NextJS wagmi](https://nextjs-wagmi.vercel.app/) -->

## Overview
Programmatic Issuance via Discord slash command. 

**Usage**: /gm <username>

To add to your Discord server, visit: 
https://discord.com/oauth2/authorize?client_id=1127994720891719710&scope=applications.commands



## Local Development

### 1. Clone this app
```
git clone https://github.com/discoxyz/disco-gm-discord-bot
```

### 2. Install Dependencies
```bash
yarn install
```

### 3. Grab Disco API Key

Self-service API keys are now available to ALL profiles. Steps to generating a key are [here](https://docs.disco.xyz/v2/for-developers/get-started-with-discos-api).

Add this to .env.local:
```bash
DISCO_API_KEY=<insert api key>
```

### 4. Start the local development environment

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the form fill demo.

### 5. Connect Your Wallet and Fill the Form

Click the "Connect Wallet" button to connect your wallet. Once connected, click the "Fetch Data" button to fetch the data from the Disco API and automatically fill the form fields.
Connect Wallet, and Click Issue GM Credential! Go to [app.disco.xyz](app.disco.xyz) to see the credential in your inbox, almost instantaneously.


<br/>
## Resources

- [Learn about Disco](https://docs.disco.xyz) - all things Disco!
- [Disco API reference](https://docs.disco.xyz/v2/for-developers/get-started-with-discos-api/) - Disco API Reference
- [Disco Bounties and References ](https://docs.disco.xyz/v2/for-developers/bounties-and-examples) - Bounties and Reference Apps
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

<!-- UP NEXT!! ## Deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSeth-McKilla%2Fnextjs-wagmi&env=NEXT_PUBLIC_INFURA_ID)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. --> 