export interface Role {
  title: string;
  period: string;
  location: string;
  highlights: string[];
  stack?: string;
}

export interface ExperienceEntry {
  company: string;
  totalDuration?: string;
  roles: Role[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Achievement {
  metric: string;
  label: string;
}

export const resumeData = {
  name: 'Rinat Fihtengolts',
  title: 'Head of Engineering | Senior Web3 Engineer | Cross-Chain Systems',
  location: 'Dubai, UAE; Moscow, Russia',

  contact: {
    telegram: 'https://t.me/rfihtengolts',
    phone: '+79655918115',
    email: 'rinatficht@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rfihtengolts',
    github: 'https://github.com/GarageInc',
    githubAlt: 'https://github.com/rfihtengolts',
  },

  summary:
    'Engineering leader with 12+ years of full-stack development and 7+ years specializing in blockchain systems. Built and shipped cross-chain DEX infrastructure processing $7.8M+ in swap volume, trading bots serving 50k+ users, and products scaled to 240k+ users. Led engineering teams of up to 7 across multiple Web3 protocols. Deep expertise in DeFi architecture, MEV systems, and cross-chain interoperability across Solana, Ethereum/L2, Cosmos, and 8+ chains. BSc in Computer & Information Security — applied to smart contract architecture and audit-ready systems.',

  highlights: [
    'Chains: Solana, Ethereum/L2, Cosmos, TON, Tron, BTC, Secret Network — 8+ chains in production',
    'Built cross-chain swap infrastructure processing $7.8M+ volume, audited by Hacken & CertiK (10/10)',
    'Algorithmic trader: CeFi HFT & market making, DeFi MEV extraction (Jito) & LP optimization',
    'Scaled @ShogunSwapBot to 50k+ users (Binance Labs / Polychain Capital backed)',
    'Shipped @TonchemyBot — 12k MAU, 240k registered users, on-chain NFT minting on TON',
  ],

  achievements: [
    { metric: '50k+', label: 'Users — Shogun Trading Bot' },
    { metric: '$7.8M+', label: 'Cross-chain Swap Volume' },
    { metric: '240k', label: 'Users — TonchemyBot' },
    { metric: '8+', label: 'Chains in Production' },
  ] as Achievement[],

  experience: [
    {
      company: 'Haqq Network',
      totalDuration: '2 years 10 months',
      roles: [
        {
          title: 'Head of Web3 Development / Team Lead',
          period: 'May 2024 — Present',
          location: 'Cosmos Network',
          highlights: [
            'Lead 7-person engineering org (5 developers, QA, DevOps) delivering core blockchain infrastructure for the Haqq Network ecosystem.',
            'Architected and shipped validator dashboard, on-chain DAO governance module, and token airdrop platforms used across the network.',
            'Engineered cross-chain swap dApp supporting L1/L2 native and ERC-20/721 tokens on the Optimism stack, integrating liquidity from Stride and Sushi.',
          ],
          stack: 'Node/NestJS/Next.js, Rust, React, PHP (Laravel), Go, Langchain, Llama, MCP',
        },
        {
          title: 'Senior Fullstack Engineer',
          period: 'Jun 2023 — May 2024',
          location: 'Dubai, UAE',
          highlights: [
            'Built Firoza.finance — world\'s first on-chain Shariah-compliant Mudarabah smart contract platform (JV with Liberty Finance). Investment pools with up to 20% APY, mandatory KYC, axlUSDC via Axelar bridge, ETL analytics. $2M pilot program, 2,600+ waitlist users.',
            'Shipped TonchemyBot (@TonchemyBot) — Telegram mini app on TON blockchain. Built smart contracts (Func) for NFT minting/burning and jetton mechanics. Scaled to 12k MAU / 240k registered users.',
            'Built Unspent.io — crypto portfolio tracker with auto-sync from 10+ CEXes and multi-chain wallets. DeFi dashboard (Aave/Uniswap/Compound), performance analytics, asset correlation. Funded via Gitcoin Grants.',
          ],
          stack: 'React, Next.js, TypeScript, Node.js, Tailwind, Wagmi, Ethers, Viem, Solana/web3.js, Anchor/Codama, Cosmos SDK, TON/Func, Turnkey, GCP/AWS',
        },
      ],
    },
    {
      company: 'Intensity Labs (Shogun Finance)',
      roles: [
        {
          title: 'Senior Blockchain Developer, Consulting',
          period: 'Jun 2024 — Jul 2025',
          location: 'Miami, FL, USA',
          highlights: [
            'Core developer of Solana/EVM multi-chain Telegram trading bot (@ShogunTradingBot, @ShogunSwapBot) for intent-centric DeFi protocol backed by Binance Labs ($6.9M seed, Polychain Capital). Scaled to 50,000+ users.',
            'Architected intent-based cross-chain swap system — solver agents find optimal execution paths across chains, eliminating manual bridging.',
            'Improved trade execution latency 3x through direct RPC optimization, bot co-location, and quotes management — directly improving fill rates for active traders.',
            'Built swap SDKs, fee calculations, gas refuel logic, and transaction indexer/parser for EVM/Solana.',
            'Integrated 8+ chains (Ethereum, BNB, Base, Solana, Sonic, Arbitrum, Berachain, Cosmos) with liquidity from Uniswap, Curve, Jupiter, Raydium.',
            'Implemented Jito/MEV protection and priority fee strategies for Solana memecoin trading.',
          ],
          stack: 'TypeScript, Solana/kit, Jupiter, Raydium, Paraswap, 1inch, deBridge, grammy, Turnkey, Jito',
        },
      ],
    },
    {
      company: 'SilentSwap (SquidGrow)',
      roles: [
        {
          title: 'Senior Blockchain Developer, Consulting',
          period: 'Sep 2025 — Present',
          location: 'Remote',
          highlights: [
            'Developed SDK (@silentswap/sdk) and core swap infrastructure for SilentSwap — privacy-focused, non-custodial, cross-chain DEX aggregator on Secret Network. Platform processed $7.8M+ in swap volume.',
            'Engineered private swap routing through Secret Network\'s encrypted smart contracts (Decentralized Confidential Computing), Shade Protocol liquidity, and Axelar bridge.',
            'Integrated Relay and deBridge for cross-chain bridging across 8 chains: Ethereum, BNB, Polygon, Arbitrum, Optimism, Avalanche, Base, Solana.',
            'Codebase audited by Hacken (10/10) and CertiK (10/10) — zero critical vulnerabilities.',
          ],
          stack: 'TypeScript, Secret Network, Shade Protocol, Axelar, deBridge, Relay, Solana',
        },
      ],
    },
    {
      company: 'TotalSig (Self-funded Startup)',
      roles: [
        {
          title: 'Co-founder & Blockchain Fullstack Developer',
          period: 'May 2023 — Oct 2023',
          location: 'Tallinn, Estonia',
          highlights: [
            'Architected and built a non-custodial, multi-signature browser wallet from scratch, supporting Bitcoin, Ethereum, Tron, BSC, and Doge.',
            'Engineered core wallet functionality using React and ManifestV3, enabling dApp interactions with multi-sig transactions for all EVM-based chains.',
            'Implemented cryptographic functions using secp256k1/ecdsa for secure cross-client signature approvals.',
          ],
          stack: 'React, Web3, ManifestV3, Node.js',
        },
      ],
    },
    {
      company: 'XDEFI Wallet',
      roles: [
        {
          title: 'Senior Frontend Developer, Blockchain, Web3 Wallets',
          period: 'Dec 2021 — May 2023',
          location: 'London, UK',
          highlights: [
            'Engineered and integrated support for multiple new blockchains (THORChain, Fantom) into the wallet, adding features for LP tokens and transaction signing.',
            'Reverse-engineered major DeFi protocols (Uniswap, SushiSwap, LayerZero, Wormhole) to build a proprietary in-wallet swap aggregator.',
            'Led the migration of the browser extension from Manifest V2 to V3.',
            'Developed a standalone library for integrating multiple wallet providers into dApps, simplifying the connection process for developers.',
          ],
        },
      ],
    },
    {
      company: 'Ankr',
      totalDuration: '1 year',
      roles: [
        {
          title: 'Team Lead',
          period: 'Oct 2021 — Apr 2022',
          location: '',
          highlights: [
            'Developed and deployed over 50 Solidity smart contracts for DEXes, LP pools, staking, and governance across 5+ EVM chains.',
            'Reverse-engineered Uniswap/Sushiswap/Quickswap/Traderjoe protocols to develop yield-generating strategies for ONX.finance.',
            'Led end-to-end development of a P2E NFT game on Moonbeam and Arbitrum chains.',
            'Developed blockchain explorer for 10+ blockchains. Managed a team of 3 developers.',
          ],
          stack: 'React, Next.js, web3.js, ethers.js, Solidity, The Graph, Subsquid',
        },
        {
          title: 'Senior Fullstack Developer',
          period: 'May 2021 — Oct 2021',
          location: 'San Francisco Bay Area',
          highlights: [
            'Core developer for cross-chain liquidity providers and liquidity pools for Onx.Finance.',
            'Built web3 interfaces and integrations with Sushi, Uniswap, Quickswap, TraderJoe, Lydia Finance pools.',
          ],
          stack: 'React, web3, ethers.js, Next.js, Solidity Smart Contracts',
        },
      ],
    },
    {
      company: 'Santiment',
      roles: [
        {
          title: 'Senior Blockchain Developer',
          period: 'Jun 2019 — May 2021',
          location: 'Switzerland',
          highlights: [
            'Integrated different metrics into UI (charts), signals/alerts, forms, and dashboards for the "Bloomberg for crypto traders" platform.',
            'Built signals via hundreds of metrics for crypto coins, support of different metrics on charts, feeds and dashboards.',
            'Worked with custom CEX interfaces: tracking deposits/withdrawals, order books (real-time), charts, KYC integrations.',
          ],
          stack: 'React, Python, PHP, GraphQL, SVG+Canvas charts, WebSockets',
        },
      ],
    },
    {
      company: 'Usedesk',
      roles: [
        {
          title: 'Fullstack PHP / React / Vue Developer',
          period: 'Sep 2018 — Mar 2020',
          location: 'Moscow, Russia',
          highlights: [
            'Built new chat/widget for clients, support and development of CRM system used by aviasales.ru, skyeng.ru, docdoc.ru and others.',
            'Added cobrowsing (synchronization and tracking), a new messenger chat on React, external and internal messenger APIs.',
            'Optimized page loading by replacing server web views with React/Vue. Built real-time socket-proxy service for chat brokers.',
          ],
          stack: 'PHP, React, Vue, WebSockets, REST APIs',
        },
      ],
    },
    {
      company: 'Studio Mobile',
      roles: [
        {
          title: 'Fullstack C#/.Net / React / Blockchain Developer',
          period: 'Oct 2018 — May 2019',
          location: 'Las Vegas, NV',
          highlights: [
            'Built crypto payment exchanges and trading platforms (qoden.com, gcox.com, bitkonan.com, sugarexchange.io).',
            'Implemented payment services, blockchain wallets, KYC verification system, and new token integrations.',
            'Customized trading mechanism (order matching), trading bots, CI/CD of numerous exchanges on AWS.',
          ],
          stack: 'C#/.NET, React, Solidity, AWS (RDS, S3), Grafana',
        },
      ],
    },
    {
      company: 'Earlier Career',
      totalDuration: '5 years',
      roles: [
        {
          title: 'Fullstack Developer & Founder',
          period: 'Feb 2013 — Nov 2018',
          location: 'Russia / USA',
          highlights: [
            'Think Ministry (Georgia, USA) — Rewrote CRM system from scratch on .NET/Angular. Legacy migration, SQL optimization, security testing.',
            'Ambaha IT-Solutions (St. Petersburg) — Built CRM/ERP systems, sports betting aggregator/validator. .NET, Angular, PostgreSQL, ClickHouse.',
            'Polis24 (Kazan) — Payment terminal UI/UX, microservices for terminal data processing. Python, C++, Scala.',
            'GarageInc (Founded) — Student software company. Built cryptography apps (elliptic curves), mobile apps, and CRM tools.',
          ],
          stack: '.NET, Angular, C#, Python, C++, Scala, PostgreSQL, Oracle',
        },
      ],
    },
  ] as ExperienceEntry[],

  skills: [
    {
      category: 'Blockchain & Web3',
      skills: [
        'Solana', 'Ethereum/L2', 'Cosmos SDK', 'Tron', 'BTC (forks)', 'TON',
        'Solidity', 'Rust', 'Func', 'Anchor/Codama',
        'DeFi Protocols', 'MEV/Jito', 'Cross-chain Bridges',
        'Secret Network', 'Uniswap', 'Jupiter', 'Raydium', '1inch', 'deBridge', 'Wormhole',
      ],
    },
    {
      category: 'Frontend',
      skills: [
        'React', 'Next.js', 'TypeScript', 'Svelte 5', 'Angular', 'Vue',
        'Tailwind CSS', 'wagmi', 'ethers.js', 'viem', 'web3.js',
        '@solana/web3.js', '@reown/appkit',
      ],
    },
    {
      category: 'Backend',
      skills: [
        'Node.js', 'NestJS', 'Rust', 'Go', 'PHP (Laravel)', 'Python',
        'C#/.NET', 'Scala', 'GraphQL', 'REST APIs', 'WebSockets',
      ],
    },
    {
      category: 'Infrastructure & Tools',
      skills: [
        'AWS', 'GCP', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB',
        'Redis', 'ClickHouse', 'The Graph', 'Subsquid', 'Grafana',
      ],
    },
    {
      category: 'Trading & DeFi',
      skills: [
        'Algorithmic Trading', 'Market Making', 'HFT', 'DEX Aggregators',
        'LP Pools', 'Staking', 'Governance', 'Order Matching',
        'CEX Integrations', 'Trading Bots',
      ],
    },
    {
      category: 'Security & Auditing',
      skills: [
        'Smart Contract Security', 'Audit Readiness (Hacken, CertiK)',
        'Cryptographic Protocols (secp256k1, ECDSA)', 'Information Security',
        'MEV Protection', 'Access Control Patterns',
      ],
    },
  ] as SkillGroup[],

  education: {
    institution: 'Kazan State University',
    degree: "Bachelor's degree, Computer and Information Systems Security / Information Assurance",
    period: '2012 — 2016',
  },

  languages: [
    { name: 'English', level: 'Full Professional' },
    { name: 'Russian', level: 'Native or Bilingual' },
  ] as Language[],
};
