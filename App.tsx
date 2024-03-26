import '@walletconnect/react-native-compat';
import {WagmiConfig} from 'wagmi';
import {mainnet, polygon, arbitrum, bsc} from 'viem/chains';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  W3mButton,
  Web3Modal,
} from '@web3modal/wagmi-react-native';
import {Text} from '@web3modal/ui-react-native';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '80ee0d6ffc68e40f77efa34683bdda6a';

// 2. Create config
const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};

const chains = [mainnet, polygon, arbitrum, bsc];

const wagmiConfig = defaultWagmiConfig({chains, projectId, metadata});

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

function App(): React.JSX.Element {
  return (
    <WagmiConfig config={wagmiConfig}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text} variant="large-600">
          Web3Modal RN Example
        </Text>
        <W3mButton />
        <Web3Modal />
      </SafeAreaView>
    </WagmiConfig>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
  },
});

export default App;
