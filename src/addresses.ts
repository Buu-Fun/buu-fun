export enum NetworkNames {
    Local = 'local',
    Sepolia = 'sepolia',
    Base = 'base',
  }
  
  export const Addresses = {
    [NetworkNames.Local]: {
      asset: '0x0184BA6C36fD143862Aa857111B3415A5231438F',
      staking: '0xD7eA4914381eAEc2B7dE8D557f1EDdc7fD581e43',
      rewards: '0x989Cea8A1726209427D02F915A7348d4850A3cc5',
      usdc: '0x86CB1D9CAD8a0Ba947dd8dCF7dd1B45F592e9718',
      uniswapV3Pool: 'TBD',
      weth: 'TBD',
      usdcPool: 'TBD',
      implementations: {
        staking: '0xd0A0EFD9144cd66c838862B2c9959a7608695822',
        rewards: '0x0c7F0232EE16c80E676ff7843425B5d79a0fC3Eb',
      },
    },
    [NetworkNames.Sepolia]: {
      asset: '0x4c4236Cc1CAFfC09AB830c85C4B2ECFD72239e8A',
      staking: '0xc92575554bcA1B46988B7Df2F3331dDA80449055',
      rewards: '0xC2B209c308CF9162DF8775525203B4d009Dfc702',
      usdc: '0xb51e0c23c64c91D65651e591561Ad8DdeB3C9443',
      uniswapV3Pool: '0x4F79C1b2C6A82D556BD8e1A33c5CA2D81384B6d0',
      weth: '0xfff9976782d46cc05630d1f6ebab18b2324d6b14',
      usdcPool: '0x3238868BA23b6B7e4441b718347471cF00C24D58',
      implementations: {
        staking: '0x49A01c519F2816d6130D5bE4a653f0ddE51CB546',
        rewards: '0x49d7D25351D9253f25bF2cB260525776910Fe1BA',
      },
    },
    [NetworkNames.Base]: {
      asset: '0xb933D4FF5A0e7bFE6AB7Da72b5DCE2259030252f',
      staking: '0x3fad7e7679bE231B54D5e9DDd6c110850AA8EAC6',
      rewards: '0xD4C00BF73263385A18DFd7E10FC43a5A2D6a6eB7',
      usdc: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      uniswapV3Pool: '0xD9e3A1a442479E9719Fc12D3c61Ed44db559B029',
      weth: '0x4200000000000000000000000000000000000006',
      usdcPool: '0x88A43bbDF9D098eEC7bCEda4e2494615dfD9bB9C',
      implementations: {
        staking: '0x989Cea8A1726209427D02F915A7348d4850A3cc5',
        rewards: '0x3fF81c8D7cbFE280b1993137A281f3c71a0b5BA8',
      },
    },
  } as {
    [network: string]: {
      asset: string;
      staking: string;
      rewards: string;
      usdc: string;
      weth: string;
      usdcPool: string;
      uniswapV3Pool: string;
      implementations: {
        staking: string;
        rewards: string;
      };
    };
  };
  
  export const getAddresses = (chainId: number | NetworkNames | undefined) => {
    if (typeof chainId === 'number') {
      switch (chainId) {
        case 11155111:
          return Addresses[NetworkNames.Sepolia];
        case 1337:
          return Addresses[NetworkNames.Local];
        case 8453:
        default:
          return Addresses[NetworkNames.Base];
      }
    }
  
    switch (chainId) {
      case NetworkNames.Sepolia:
        return Addresses[NetworkNames.Sepolia];
      case NetworkNames.Local:
        return Addresses[NetworkNames.Local];
      case NetworkNames.Base:
      default:
        return Addresses[NetworkNames.Base];
    }
  };
  