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

export const resumeData = {
  name: 'Rinat Fihtengolts',
  title: 'Senior Web3 Engineer | Fullstack Developer | Head of Engineering',
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
    '12+ years of full-stack development with a deep focus on blockchain since 2018. Ship fast and iterate — RDD (Results-Driven Development). Built APIs, SDKs, complex white-label CEXes/DEXes, trading bots and terminals, swap apps (Uniswap, Jupiter, Raydium, 1inch, deBridge, Wormhole integrations), cross-chain dApps, and trading systems — from scratch to production. Scaled products to 50k+ and 240k+ users. Led teams of up to 7 engineers across multiple Web3 projects.',

  highlights: [
    'Working with: Solana, Ethereum/L2, Cosmos, Tron, BTC (forks)',
    'Quant Algorithmic Trader (Digital Assets), Market Making — spot/perps, CeFi Low-latency/HFT, DeFi MEV & Liquidity Providing',
    'Developed Telegram trading bot @ShogunSwapBot, scaling to 50k+ users',
    'Developed Telegram mini app/game @TonchemyBot (12k MAU, ~240k registered users)',
  ],

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
            'Lead a team of 5 developers, a QA, and a DevOps engineer to build and launch core products on the Haqq blockchain network.',
            'Architected and delivered a validator dashboard, on-chain DAO governance module, and multiple airdrop platforms.',
            'Engineered a cross-chain swap dApp for L1/L2 native and ERC-20/721 tokens using the Optimism stack and integrated third-party liquidity from Stride and Sushi.',
          ],
          stack: 'Node/NestJS/Next.js, Rust, React, PHP (Laravel), Go, Langchain, Llama, MCP',
        },
        {
          title: 'Senior Fullstack Engineer',
          period: 'Jun 2023 — May 2024',
          location: 'Dubai, UAE',
          highlights: [
            'Built Firoza.finance — liquidity pools on Haqq chain with multi-chain integration, KYC system, ETL transaction processing/analytics.',
            'Developed TonchemyBot — Telegram gaming platform using React/Next/MongoDB/Redis, scaling to thousands of users.',
            'Built and launched Unspent.io — portfolio tracking dApp integrating CEX APIs (Binance, OKX) and OpenAI for portfolio forecasting.',
            'Developed smart contracts on TON for minting/burning NFTs/jettons, grew TonchemyBot to ~12k MAU with ~140k registered users.',
          ],
          stack: 'React, Next.js, TypeScript, Node.js, Tailwind, Wagmi, Ethers, Viem, Solana/web3.js, Anchor/Codama, Cosmos SDK, TON/Func, Turnkey, GCP/AWS',
        },
      ],
    },
    {
      company: 'Intensity Labs',
      roles: [
        {
          title: 'Senior Blockchain Developer, Consulting',
          period: 'Jun 2024 — Jul 2025',
          location: 'Miami, FL, USA',
          highlights: [
            'Developed a Solana/EVM multi-chain Telegram trading bot (@ShogunTradingBot, @ShogunSwapBot), scaling to 50,000+ users.',
            'Improved performance 3x by replacing third-party APIs with direct RPC calls, bot location optimisations, quotes management system.',
            'Built swap SDKs, fee calculations, gas refuel logic, transaction indexer/parser for EVM/Solana.',
            'Integrated 8+ chains: BNB, Base, Solana, Sonic, Ethereum, Berachain, etc.',
            'Implemented Jito/MEV protection and priority fees for Solana memes.',
            'Integrated Turnkey authentication (social logins). Developed web-app with intent-swaps.',
          ],
          stack: 'TypeScript, Solana/kit, Jupiter, Raydium, Paraswap, 1inch, deBridge, grammy, Turnkey, Jito',
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
      company: 'Think Ministry, Inc.',
      roles: [
        {
          title: 'Fullstack .Net/Angular Developer',
          period: 'Jun 2017 — Nov 2018',
          location: 'Georgia, USA',
          highlights: [
            'Rewrote from scratch a CRM-system (social network) for American churches: payments, meetings, rallies, donations.',
            'Migrated legacy web-forms and ASPX pages to Angular and modern .NET. SQL query optimizations and security testing.',
          ],
          stack: '.NET/.Core, Angular, MSSql, ORM',
        },
      ],
    },
    {
      company: 'Ambaha IT-Solutions',
      roles: [
        {
          title: 'Fullstack .NET / JS(Angular) / DevOps',
          period: 'Oct 2016 — Jun 2018',
          location: 'Saint Petersburg, Russia',
          highlights: [
            'Built CRM system for lsports.eu — collecting and analyzing tickets (Net MVC + Angular + WCF services).',
            'Written aggregator/validator of sports bets (signals). Backend with WCF services, queues, and REST APIs.',
            'Built ERP/CRM systems for managing field staff, customer acquisition, warehouse and store management.',
          ],
          stack: '.NET MVC, Angular, WCF, PostgreSQL, ClickHouse',
        },
      ],
    },
    {
      company: 'Polis24',
      roles: [
        {
          title: 'Software Engineer (FullStack)',
          period: 'Sep 2015 — Oct 2016',
          location: 'Kazan, Russia',
          highlights: [
            'Developed custom UI/UX for payment terminal (Actionscript, Python, C++, bash) for CTP policies and payments.',
            'Built microservices for data processing from payment terminals (Scala). Developed admin panels for technicians and operators.',
          ],
          stack: 'JavaScript, Python, C++, Scala, ActionScript',
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
            'Developed and supported budget reporting systems as web applications on ASP.NET MVC.',
            'Designed database structures, migrations, stored procedures with Oracle and PostgreSQL via NHibernate ORM.',
          ],
          stack: 'ASP.NET MVC, C#, ExtJS 3, jQuery, Oracle, PostgreSQL',
        },
      ],
    },
    {
      company: 'GarageInc',
      roles: [
        {
          title: 'Self Employed Software Engineer',
          period: 'Feb 2013 — Nov 2015',
          location: 'Kazan, Russia',
          highlights: [
            'Founded a small student company for software development — mobile apps, warehouse accounting systems, CRM tools.',
            'Built cryptography applications (elliptic curves, cryptographic protocols), search algorithm optimizations (bi/tri-grams, Levenshtein).',
            'TCP/IP and UDP stack projects: multi-threaded servers, site parsing/crawling tools.',
          ],
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
        'Uniswap', 'Jupiter', 'Raydium', '1inch', 'deBridge', 'Wormhole',
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
