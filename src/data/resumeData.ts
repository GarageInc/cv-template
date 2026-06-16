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
  location: 'Dubai, UAE',

  contact: {
    telegram: 'https://t.me/rfihtengolts',
    phone: '+79655918115',
    email: 'rinatficht@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rfihtengolts',
    github: 'https://github.com/GarageInc',
  },

  summary: [
    'Staff Software Engineer with 11+ years of experience specializing in high-performance Web3 wallets, DeFi protocols, and consumer-grade Financial Technology.',
    'Expert in React, NodeJs, TypeScript, Solidity and Web3 architecture with a proven track record of scaling cross-platform products for Extension, Web, and Mobile.',
    'Accomplished in bridging complex blockchain infrastructure with intuitive UI/UX to drive mass adoption and Neobank-like usability.',
  ],

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
            'Lead a high-performance team of 5 developers plus QA and DevOps, scaling core Web3 product delivery end-to-end across the Haqq ecosystem (Cosmos Network + EVM / Optimism).',
            'Build and ship cross-chain swap dApps and intent-based Web3 platforms (L1/L2 native + ERC-20/721, third-party liquidity via Stride & Sushi), optimizing for consumer usability and financial efficiency.',
            'Architect DAO governance modules and staking validator dashboards that enable seamless user participation in decentralized financial networks.',
            'Scaled @ShogunTradingBot / @ShogunSwapBot performance 3x — handling high concurrency for 50,000+ active users — by replacing third-party APIs with direct RPC calls, location optimisation, and a quotes-management system.',
            'Integrated Jupiter, Raydium, Paraswap, 1inch, and deBridge across 8+ chains; built swap SDKs, fee/gas-refuel logic, and an EVM/Solana tx indexer/parser; migrated the Telegram layer to grammY.',
            'Build AI agents that parse on-chain & market data, decide, fetch context, and trigger actions (buy/sell/notify), looping on new triggers — agent pipelines, not scripts; added Jito/MEV protection and Turnkey social-login auth.',
          ],
          stack: 'Node/NestJS/Next.js, Rust, React, PHP (Laravel), Go, LangChain, Llama, MCP',
        },
        {
          title: 'Senior Fullstack Engineer',
          period: 'Jun 2023 — May 2024',
          location: 'Dubai, UAE',
          highlights: [
            'Architected and built a multi-signature Web3 wallet (totalsig.com) supporting Bitcoin, Ethereum, and Tron from scratch, prioritizing secure, intuitive consumer-grade UX (secp256k1/ECDSA cross-client signature approvals).',
            'Developed DeFi liquidity-pool integrations for Firoza.finance — multi-chain integration, KYC, and complex ETL transaction processing with stablecoin analytics.',
            'Implemented portfolio-tracking dApps across EVM/BTC/Cosmos, integrating CEX APIs (Binance, OKX) and OpenAI/GPT-4 for advanced financial forecasting and asset management.',
            'Built and scaled @TonchemyBot, a Telegram mini-app on TON, to ~240k registered users (~12k MAU); wrote Func smart contracts for minting/burning NFTs & jettons — high-growth, mobile-first Web3.',
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
            'Reverse-engineered top-tier DEX protocols including Uniswap, SushiSwap, LayerZero, and Wormhole to implement a unified in-wallet swap aggregator.',
            'Contributed to the mission-critical Manifest V2 → V3 migration for the browser-extension wallet, ensuring persistent high performance and security.',
            'Integrated cross-chain transaction signing and staking for major ecosystems like THORChain and Fantom, plus LP tokens, into the multichain wallet.',
            'Developed a standalone Web3 multi-wallet connector library to streamline dApp integrations and improve cross-platform development flexibility (HW connections, address generation, signing, indexers, nonce management).',
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
            'Deployed 50+ Solidity smart contracts supporting DEX liquidity, staking rewards, and decentralized governance across 5+ EVM chains.',
            'Designed high-yield DeFi strategies by analyzing SushiSwap and TraderJoe, enhancing capital efficiency for the ONX.finance ecosystem.',
            'Collaborated on end-to-end development of a P2E NFT game (Moonbeam/Arbitrum), managing cross-chain asset bridges and complex on-chain logic.',
            'Built multi-chain blockchain explorers, optimizing data-fetch logic to support real-time financial tracking across 10+ networks; managed a team of 3 developers.',
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
            'Built a custom fintech UI library delivering pixel-perfect, Neobank-like user experiences for complex data visualization on the "Bloomberg for crypto traders" platform.',
            'Integrated hundreds of on-chain metrics for stablecoins and digital assets into consumer-facing dashboards, signals, and alert systems.',
            'Developed high-frequency tracking for CEX deposits and withdrawals using real-time socket connections and advanced API development, with KYC integrations.',
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
            'Built real-time React-based messaging widgets and external/internal APIs for seamless CRM and customer-engagement integrations (used by aviasales.ru, skyeng.ru, docdoc.ru, and others).',
            'Added cobrowsing (synchronization and tracking) and a socket-proxy service for real-time chat brokers.',
            'Applied performance-optimization techniques to front-end components — replacing server web views with React/Vue — reducing page-load times for enterprise-scale customer platforms.',
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
