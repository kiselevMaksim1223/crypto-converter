# Crypto converter

This is a simple crypto converter. It allows you to convert 3 crypto currencies (BTC, ETH, USDT). I use [CoinApi](https://www.coinapi.io//) API to get data. For styles i use [Chakra UI](https://chakra-ui.com/).

## Technologies

- TypeScript
- React (Vite)
- Chakra UI
- Zustand
- Axios
- CoinApi

## Features

- Convert crypto currencies to other crypto currencies

## Deployment

Deployed with Vercel.
You can find it here: [crypto-converter](https://crypto-converter-rho.vercel.app/)

## Local Setup

### Prerequisites

Before running the application, make sure you have the following dependencies installed on your system:

- [Node.js](https://nodejs.org/) (npm will be installed alongside Node.js)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kiselevMaksim1223/crypto-converter

   ```

2. Navigate to the project directory:

   ```bash
   cd crypto-converter

   ```

3. Install the project dependencies:

   ```bash
   pnpm i

   ```

4. Also if you want to start app locally you need to get free API key from [CoinApi](https://www.coinapi.io/) and add it to "X-CoinAPI-Key" header in 'axios.ts' in `config` folder. Just use deployed version of the project to see how it works :).

## Running the Application

After installation, you can run the application:

Start the development server for the frontend:

```bash
pnpm dev

```

Access the application in your web browser at http://localhost:5173.
