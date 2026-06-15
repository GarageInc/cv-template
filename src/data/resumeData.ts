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
  title: 'AI & Blockchain Engineer · Team Lead | LLM Agents — RAG, LangChain, MCP | Cross-Chain DeFi · Rust · TypeScript · Solana/EVM/Cosmos/BTC',
  location: 'Dubai, UAE',

  contact: {
    telegram: 'https://t.me/rfihtengolts',
    phone: '+79655918115',
    email: 'rinatficht@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rfihtengolts',
    github: 'https://github.com/GarageInc',
  },

  summary:
    'Hands-on engineer with 12+ years in software and 8 years in Web3, now building AI agent systems on top of DeFi infrastructure — pairing on-chain execution with LLM-driven decision layers. I design RAG pipelines that parse on-chain and market data, decide, fetch context, and act (buy/sell/notify), looping on new triggers — agent pipelines, not scripts — using LangChain, MCP, Ollama, Hugging Face, and OpenAI. I know DeFi and trading apps from inside the ecosystem, as both user and builder: APIs, SDKs, white-label CEXes/DEXes, trading bots and terminals, swap apps (Uniswap, Jupiter, Raydium, 1inch, deBridge, Wormhole), and cross-chain dApps — from scratch to production. Chains: Solana, Ethereum/L2, Cosmos, Tron, Bitcoin (PSBT), Monero. Also a quant/algorithmic trader (spot/perps): CeFi low-latency/HFT, DeFi MEV and liquidity providing. Ship fast, iterate, and stay in support — Results-Driven Development.',

  highlights: [
    'Building production AI agents that parse on-chain & market data, decide, fetch context, and trigger actions (buy/sell/notify) — RAG + LangChain + MCP pipelines, not scripts',
    'Built and scaled @ShogunSwapBot / @ShogunTradingBot to 50k+ users with 3x faster execution by replacing third-party APIs with direct RPC calls',
    'Developed SilentSwap private cross-chain DEX aggregator — $7.8M+ swap volume, audited 10/10 by Hacken & CertiK',
    'Shipped @TonchemyBot Telegram mini-app on TON to 12k MAU / ~240k registered users, including NFT & jetton smart contracts',
    'Delivered APIs, SDKs, trading terminals, white-label CEX/DEX systems, and cross-chain dApps across 8+ chains — scratch to production',
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
      roles: [
        {
          title: 'Team Lead / Hands-on Fullstack Engineer',
          period: 'Jul 2025 — Present',
          location: 'Dubai, UAE',
          highlights: [
            'Lead a 7-person engineering org (5 developers, QA, DevOps) delivering core blockchain infrastructure for the Haqq Network ecosystem (Cosmos Network + EVM / Optimism).',
            'Build AI agents that parse on-chain & market data, make decisions, fetch context, and trigger actions (buy/sell/notify), looping on new triggers — RAG + LangChain + MCP pipelines, not scripts.',
            'Architected and delivered a validator dashboard, on-chain DAO governance module, and multiple token airdrop platforms used across the network.',
            'Engineered a cross-chain swap dApp supporting L1/L2 native and ERC-20/721 tokens on the Optimism stack, integrating third-party liquidity (Stride, Sushi).',
          ],
          stack: 'Node/NestJS/Next.js, Rust, React, PHP (Laravel), Go, LangChain, Llama, MCP, Ollama, OpenAI',
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
      company: 'Intensity Labs (Shogun Finance)',
      roles: [
        {
          title: 'Senior Blockchain Developer, Consulting (Contract)',
          period: 'Jun 2024 — Jul 2025',
          location: 'Miami, FL, USA',
          highlights: [
            'Built @ShogunTradingBot / @ShogunSwapBot — Solana/EVM Telegram trading bot for an intent-centric DeFi protocol backed by Binance Labs ($6.9M seed, Polychain Capital). Scaled to 50,000+ users.',
            'Improved performance 3x by replacing third-party APIs with direct RPC calls, location optimisation, and a quotes-management system — directly improving fill rates for active traders.',
            'Integrated Jupiter, Raydium, Paraswap, 1inch, deBridge across 8+ chains (BNB, Base, Solana, Sonic, Ethereum, Arbitrum, Berachain, Cosmos).',
            'Built swap SDKs, fee calculation, gas-refuel logic, and an EVM/Solana tx indexer/parser; migrated the Telegram layer to grammY.',
            'Implemented Jito/MEV protection and priority fees for Solana; Turnkey social-login auth; intent-based swap web app from scratch.',
          ],
          stack: 'TypeScript, Solana/kit, Jupiter, Raydium, Paraswap, 1inch, deBridge, grammY, Turnkey, Jito',
        },
      ],
    },
    {
      company: 'Haqq',
      roles: [
        {
          title: 'Senior Fullstack Engineer',
          period: 'Jun 2023 — May 2024',
          location: 'Dubai, UAE',
          highlights: [
            'Built Firoza.finance (liquidity pools) as lead developer — multi-chain integration, KYC, ETL transaction processing & analytics. World\'s-first on-chain Shariah-compliant Mudarabah smart contract platform; $2M pilot program, 2,600+ waitlist users.',
            'Shipped @TonchemyBot — a Telegram mini-app game built from scratch on TON; wrote smart contracts (Func) for minting/burning NFTs & jettons; grew to ~12k MAU / ~240k registered users.',
            'Built Unspent.io — portfolio-tracking dApp across EVM/BTC/Cosmos; integrated CEX APIs (Binance, OKX) and OpenAI/GPT-4 for portfolio forecasting; Coinbase payments and watchlists via CoinGecko/CMC.',
          ],
          stack: 'React, Next.js, TypeScript, Node.js, Wagmi/Ethers/Viem, Solana/web3.js, Anchor/Codama, Cosmos SDK, TON/Func, Turnkey, GCP/AWS',
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
            'Architected and built a non-custodial, multi-signature browser wallet (extension) from scratch, supporting Bitcoin, Ethereum, Tron, BSC, and Doge.',
            'Engineered core wallet functionality using React and Manifest V3, enabling dApp interactions with multi-sig transactions for all EVM-based chains.',
            'Implemented cryptographic functions using secp256k1/ECDSA for secure cross-client signature approvals.',
          ],
          stack: 'React, Web3, Manifest V3, Node.js',
        },
      ],
    },
    {
      company: 'XDEFI Wallet',
      roles: [
        {
          title: 'Senior Frontend Developer, Blockchain, Web3 Wallets',
          period: 'Apr 2022 — May 2023',
          location: 'Greater London, UK',
          highlights: [
            'Integrated multiple new chains (THORChain, Fantom), LP tokens, and transaction signing into the multichain wallet / browser extension.',
            'Reverse-engineered Uniswap, SushiSwap, LayerZero, and Wormhole to build an in-wallet swap aggregator.',
            'Led the Manifest V2 → V3 migration for the extension.',
            'Built a standalone multi-wallet connector library for dApps (HW connections, address generation, signing, indexers, nonce management).',
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
      category: 'AI & LLM Engineering',
      skills: [
        'AI Agents', 'RAG', 'LangChain', 'MCP', 'Ollama', 'Hugging Face',
        'OpenAI / GPT-4', 'Llama', 'LLM Decision Layers', 'Agent Pipelines',
        'Vector Search', 'Prompt Engineering',
      ],
    },
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
