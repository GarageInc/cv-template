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
  title: 'AI RAG & Blockchain Engineer | LLM, LangChain, MCP | Rust · TypeScript · Solana/EVM/Cosmos/BTC/Monero/Tron | DeFi, Trading Bots, Smart Contracts · Hands-on dev',
  location: 'Moscow, Russia',

  contact: {
    telegram: 'https://t.me/rfihtengolts',
    phone: '+79655918115',
    email: 'rinatficht@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rfihtengolts',
    github: 'https://github.com/GarageInc',
  },

  summary:
    'Hands-on engineer with 12+ years in software and 8 years in Web3, building Web3/AI/trading agent systems on top of DeFi infrastructure — combining on-chain execution with LLM-driven decision layers. RAG: parse data, decide, fetch context, act (buy/sell/notify), and loop on triggers — agent pipelines, not scripts — working hands-on with LangChain, MCP, Ollama, Hugging Face, and OpenAI for data processing and autonomous agents. Shipped: Ankr, Haqq Network, XDEFI — hundreds of thousands of infrastructure users; @ShogunSwapBot / @ShogunTradingBot — Solana + EVM trading bot scaled to 50,000+ users with a 3x performance gain by replacing third-party APIs with direct RPC calls; SilentSwap — private cross-chain swaps, $6M+ volume; white-label CEX/DEX platforms, swap apps, SDKs, and cross-chain dApps — scratch to production. Chains: Solana, Ethereum/L2, Cosmos, Tron, Bitcoin (PSBT), Monero. Integrations: Uniswap, Jupiter, Raydium, 1inch, deBridge, Wormhole. Also a quant/algorithmic trader (spot, perps): CeFi low-latency, DeFi MEV and liquidity providing. Ship fast and always in support — Results-Driven Development.',

  highlights: [
    'Building production AI agents that parse on-chain & market data, decide, fetch context, and trigger actions (buy/sell/notify) — RAG + LangChain + MCP pipelines, not scripts',
    'Built and scaled @ShogunSwapBot / @ShogunTradingBot to 50k+ users with 3x faster execution by replacing third-party APIs with direct RPC calls',
    'Developed SilentSwap private cross-chain swap aggregator — $6M+ swap volume across 8+ chains',
    'Shipped @TonchemyBot Telegram mini-app on TON to 12k MAU / ~240k registered users, including NFT & jetton smart contracts',
    'Delivered APIs, SDKs, trading terminals, white-label CEX/DEX systems, and cross-chain dApps across 8+ chains — scratch to production',
  ],

  achievements: [
    { metric: '50k+', label: 'Users — Shogun Trading Bot' },
    { metric: '$6M+', label: 'Cross-chain Swap Volume' },
    { metric: '240k', label: 'Users — TonchemyBot' },
    { metric: '8+', label: 'Chains in Production' },
  ] as Achievement[],

  experience: [
    {
      company: 'Haqq Network',
      totalDuration: '3 years 1 month',
      roles: [
        {
          title: 'Team Lead / Hands-on Fullstack Engineer',
          period: 'May 2024 — Present',
          location: 'Dubai, UAE',
          highlights: [
            'Lead a team of 5 developers + QA + DevOps shipping core blockchain products end-to-end across a multi-chain swap platform (EVM L1/L2 + Solana) on Cosmos Network + EVM (Ethereum/Optimism).',
            'Build AI agents that parse on-chain & market data, make decisions, fetch context, and trigger actions (buy/sell/notify), looping on new triggers — agent pipelines, not scripts.',
            'Architected and delivered a validator dashboard, on-chain DAO governance module, and multiple token airdrop platforms.',
            'Engineered a cross-chain swap dApp for L1/L2 native and ERC-20/721 tokens on the Optimism stack; integrated third-party liquidity (Stride, Sushi).',
            'Built @ShogunTradingBot / @ShogunSwapBot — Solana/EVM Telegram trading bot scaled to 50,000+ users with 3x performance gains by replacing third-party APIs with direct RPC calls, location optimisation, and a quotes-management system.',
            'Integrated Jupiter, Raydium, Paraswap, 1inch, deBridge across 8+ chains (BNB, Base, Solana, Sonic, Ethereum, Berachain); built swap SDKs, fee calculation, gas-refuel logic, and an EVM/Solana tx indexer/parser; migrated the Telegram layer to grammY.',
            'Implemented Jito/MEV protection and priority fees for Solana; Turnkey social-login auth; intent-based swap web app from scratch.',
          ],
          stack: 'Node/NestJS/Next.js, Rust, React, PHP (Laravel), Go, LangChain, Llama, MCP',
        },
        {
          title: 'Senior Fullstack Engineer',
          period: 'Jun 2023 — May 2024',
          location: 'Dubai, UAE',
          highlights: [
            'Firoza.finance (liquidity pools) — lead developer: multi-chain integration, KYC, ETL transaction processing & analytics.',
            'Unspent.io — portfolio-tracking dApp across EVM/BTC/Cosmos; integrated CEX APIs (Binance, OKX) and OpenAI/GPT-4 for portfolio forecasting; Coinbase payments and watchlists via Codex/CoinGecko/CMC.',
            '@TonchemyBot — built a Telegram mini-app game from scratch on TON; wrote smart contracts (Func) for minting/burning NFTs & jettons; grew to ~12k MAU / ~240k registered users.',
            'totalsig.com — architected and built a non-custodial, multi-signature browser wallet (extension) from scratch supporting Bitcoin, Ethereum, Tron, BSC, and Doge; secp256k1/ECDSA for secure cross-client signature approvals.',
          ],
          stack: 'React, Next.js, TypeScript, Node.js, Wagmi/Ethers/Viem, Solana/web3.js, Anchor/Codama, Cosmos SDK, TON/Func, Turnkey, GCP/AWS, Jito, Rust, PHP',
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
      company: 'Ambaha IT-Solutions | .NET and QA teams',
      roles: [
        {
          title: 'Fullstack, .NET / JS (Angular) / DevOps',
          period: 'Sep 2016 — Jun 2018',
          location: 'St. Petersburg, Russia',
          highlights: [
            'Built a CRM system from scratch for collecting and analyzing tickets/signals (.NET MVC + Angular + WCF services) for lsports.eu.',
            'Wrote an aggregator/validator of sports bets, plus a web interface for building Boolean algebra in human language, with data sync via third-party APIs and rule-based validation.',
            'Built the backend as a set of WCF services with queues and REST services for processing incoming data.',
          ],
          stack: '.NET MVC, C#, Angular, WCF, REST, PostgreSQL',
        },
      ],
    },
    {
      company: 'Polis24',
      roles: [
        {
          title: 'Software Engineer (Fullstack)',
          period: 'Sep 2015 — Oct 2016',
          location: 'Kazan, Russia',
          highlights: [
            'Developed custom UI/UX for payment terminals (polis24.ru) handling CTP policy registration, payment acceptance, and policy issuance — hardware and user interaction.',
            'Built panels for technicians, operators, and administrators with financial-transaction reporting.',
            'Developed microservices (Scala) for data-processing servers receiving data from payment terminals.',
          ],
          stack: 'ActionScript, Python, C++, JavaScript, Scala, bash',
        },
      ],
    },
    {
      company: 'GarageInc',
      roles: [
        {
          title: 'Self-Employed Software Engineer',
          period: 'Feb 2013 — Nov 2015',
          location: 'Kazan, Russia',
          highlights: [
            'Founded a student software company solving a wide range of client problems — from CRMs and warehouse-accounting systems to mobile apps and a freelance exchange.',
            'Built crypto payment exchanges and trading platforms (qoden.com, gcox.com, bitkonan.com, sugarexchange.io): payment services, wallets, KYC, token integrations, trading bots, and multi-exchange CI.',
            'Implemented cryptography (elliptic curves, protocol emulation), search algorithms (bi/tri-grams, Levenshtein, Huffman), and TCP/IP/UDP-stack projects (chats, multi-threaded ws/ftp servers, crawlers).',
          ],
          stack: 'C#/.NET, Angular, JavaScript, C++, cryptography, PostgreSQL',
        },
      ],
    },
    {
      company: 'BARS GROUP',
      roles: [
        {
          title: 'ASP.NET + Ext.js Developer',
          period: 'Oct 2014 — Jun 2015',
          location: 'Kazan, Russia',
          highlights: [
            'Developed and supported budget-reporting web applications on the ASP.NET MVC framework, writing server-side C# modules following OOP/design principles.',
            'Refactored and optimized existing modules; integrated third-party systems via WCF services; extended the client side with jQuery and ExtJS 3.',
            'Designed database structures, migrations, queries, views, and stored procedures (Oracle, PostgreSQL) via NHibernate; configured CI and test-server deployments.',
          ],
          stack: 'ASP.NET MVC, C#, ExtJS 3, jQuery, WCF, Oracle, PostgreSQL, NHibernate',
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
        'Solana', 'Ethereum/L2', 'Cosmos SDK', 'Tron', 'BTC (PSBT)', 'Monero', 'TON',
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
