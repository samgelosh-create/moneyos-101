import type { Module } from "../types";

export const investingBasics: Module = {
  id: "investing",
  title: "Investing Basics",
  icon: "ti-chart-line",
  blurb: "The building blocks — concepts only, never specific picks.",
  lessons: [
    {
      id: "investing-stocks-bonds-funds",
      title: "Stocks, bonds, funds",
      minutes: 5,
      blocks: [
        { kind: "text", body: "Investing is putting money to work so it can grow, accepting some risk in exchange for the chance of return. Three building blocks cover most of it." },
        { kind: "list", items: [
          "A stock is a small piece of ownership in a company. Its value rises and falls with the company and the market.",
          "A bond is a loan you make to a government or company that pays you interest. Generally steadier than stocks, with lower expected return.",
          "A fund bundles many stocks or bonds together so one purchase spreads your money across hundreds of them.",
        ] },
        { kind: "callout", tone: "note", body: "This app teaches what these are and how they behave. It does not tell you which to buy — that's a decision for you, and if needed, a licensed professional." },
      ],
      takeaway: "Stocks are ownership, bonds are loans, funds bundle many together.",
      quiz: {
        prompt: "What is a bond?",
        options: ["Ownership in a company", "A loan you make that pays interest", "A type of savings account", "A bundle of stocks"],
        answer: 1,
        explain: "A bond is a loan to a government or company. You receive interest; it's generally steadier than a stock.",
      },
      xp: 50,
    },
    {
      id: "investing-risk-return",
      title: "Risk vs. return",
      minutes: 4,
      blocks: [
        { kind: "text", body: "The core trade-off in investing: higher potential return comes with higher risk of loss. Anything promising big returns with no risk is misunderstanding the deal or misleading you." },
        { kind: "text", body: "Your time horizon changes how much risk makes sense. Money you need next year shouldn't ride on the market. Money you won't touch for 20 years can weather the ups and downs that scare short-term investors." },
        { kind: "callout", tone: "watch", body: "'Guaranteed high returns' is the oldest line in financial fraud. Real investing pays you for taking real risk." },
      ],
      takeaway: "Higher return means higher risk; your time horizon decides how much you can take.",
      quiz: {
        prompt: "An investment promising high returns with zero risk is…",
        options: ["A great deal", "A red flag", "A government bond", "Required by law"],
        answer: 1,
        explain: "Return is the reward for risk. 'High return, no risk' is a red flag, often for fraud.",
      },
      xp: 50,
    },
    {
      id: "investing-diversification",
      title: "Diversification",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Diversification means not betting everything on one company or one bet. Spread money across many holdings and a single failure can't sink you. It's the closest thing investing has to a free lunch." },
        { kind: "example", title: "Why one stock is fragile", body: "Put everything in one company and you live or die by its fate. Hold a broad fund of hundreds of companies and any single one going to zero barely moves your total." },
        { kind: "callout", tone: "tip", body: "This is why broad, low-cost index funds are a common starting point in financial education — they're diversified by design. (Educational context, not a recommendation to buy any specific fund.)" },
      ],
      takeaway: "Spreading across many holdings protects you from any single failure.",
      quiz: {
        prompt: "What problem does diversification solve?",
        options: ["Low returns", "One holding failing wipes you out", "High taxes", "Slow trading"],
        answer: 1,
        explain: "Spreading money across many holdings means no single failure can sink your whole portfolio.",
      },
      xp: 50,
    },
  ],
};

export const dcaModule: Module = {
  id: "dca",
  title: "DCA & Compound Growth",
  icon: "ti-stairs-up",
  blurb: "Two quiet forces: steady investing and time.",
  lessons: [
    {
      id: "dca-what-it-is",
      title: "What DCA is",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Dollar-cost averaging (DCA) means investing a fixed amount on a regular schedule — say $200 every month — regardless of price. You automatically buy more shares when prices are low and fewer when they're high." },
        { kind: "example", title: "It smooths your average cost", body: "Invest $500 across five months at prices of $100, $90, $110, $95, $105. You end up with an average cost of about $99.50 per share — lower than the simple $100 average, because your fixed dollars bought more on the cheap months." },
        { kind: "callout", tone: "note", body: "DCA reduces the risk of investing everything at a bad moment. It doesn't guarantee a profit, and it isn't a recommendation to buy anything." },
      ],
      takeaway: "Investing a fixed amount on schedule buys more when prices dip, smoothing your cost.",
      quiz: {
        prompt: "What does dollar-cost averaging do?",
        options: ["Guarantees a profit", "Times the market perfectly", "Buys more shares when prices are low", "Avoids all risk"],
        answer: 2,
        explain: "Fixed dollars buy more shares when prices are low and fewer when high, smoothing your average cost over time.",
      },
      xp: 50,
    },
    {
      id: "dca-compounding",
      title: "Compounding over time",
      minutes: 5,
      blocks: [
        { kind: "text", body: "Compounding is earning returns on your returns. The growth from last year starts generating its own growth this year, and the effect snowballs the longer it runs." },
        { kind: "example", title: "Most of it isn't your money", body: "Put in $200 a month at a 7% average return for 30 years and you'd contribute about $72,000 — but end with roughly $252,000. The other ~$180,000 is growth on growth. Time did the heavy lifting." },
        { kind: "callout", tone: "tip", body: "Compounding rewards starting early far more than investing large amounts late. A small head start can beat a big late push." },
      ],
      takeaway: "Compounding earns returns on returns; starting early beats starting big.",
      quiz: {
        prompt: "Why does starting early matter so much for compounding?",
        options: ["Early money compounds for longer", "Young people get better rates", "Fees are lower when young", "It avoids taxes"],
        answer: 0,
        explain: "Compounding builds on itself, so the longer money is invested, the larger the growth-on-growth becomes.",
      },
      xp: 50,
    },
    {
      id: "dca-time-in-market",
      title: "Time in the market",
      minutes: 4,
      blocks: [
        { kind: "text", body: "There's an investing saying: time in the market beats timing the market. Trying to jump in and out at the perfect moment is extremely hard, and getting it wrong is costly — some of the market's best days come right after the worst ones." },
        { kind: "text", body: "DCA sidesteps the whole problem. By investing steadily, you stay invested through the dips without having to predict anything." },
        { kind: "callout", tone: "watch", body: "Pulling out during a scary drop locks in the loss and risks missing the rebound. A long horizon and a steady habit are the usual antidotes." },
      ],
      takeaway: "Staying invested steadily tends to beat trying to time the market.",
      quiz: {
        prompt: "What does 'time in the market beats timing the market' mean?",
        options: ["Trade as often as possible", "Staying invested beats predicting tops and bottoms", "Only invest at market lows", "Markets are predictable"],
        answer: 1,
        explain: "Perfectly timing entries and exits is nearly impossible. Staying invested steadily avoids the guessing game.",
      },
      xp: 50,
    },
  ],
};

export const retirement: Module = {
  id: "retirement",
  title: "Retirement Accounts",
  icon: "ti-beach",
  blurb: "The accounts built to make long-term saving easier.",
  lessons: [
    {
      id: "retirement-401k-ira",
      title: "401(k) & IRA basics",
      minutes: 5,
      blocks: [
        { kind: "text", body: "Retirement accounts are regular investment accounts with tax advantages, designed to encourage long-term saving. The two most common in the US are the 401(k), offered through an employer, and the IRA, which you open yourself." },
        { kind: "list", items: [
          "Traditional: contributions may lower your taxable income now; you pay tax when you withdraw in retirement.",
          "Roth: you contribute money you've already paid tax on; qualified withdrawals later are tax-free.",
        ] },
        { kind: "callout", tone: "note", body: "Tax rules vary by country and change over time. This is general education — confirm current specifics with official sources or a tax professional." },
      ],
      takeaway: "401(k)s and IRAs are tax-advantaged accounts; traditional taxes you later, Roth taxes you now.",
      quiz: {
        prompt: "What's the key difference between Roth and traditional accounts?",
        options: ["Roth is only for the wealthy", "When you pay the tax — now (Roth) vs. later (traditional)", "Traditional can't be invested", "Roth has no contribution limit"],
        answer: 1,
        explain: "Roth taxes contributions now for tax-free withdrawals later; traditional defers the tax until withdrawal.",
      },
      xp: 50,
    },
    {
      id: "retirement-employer-match",
      title: "Employer match",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Many employers match part of what you put into a 401(k) — for example, matching your contributions dollar-for-dollar up to 4% of your salary. That match is part of your pay you only get if you contribute." },
        { kind: "example", title: "Why people call it free money", body: "Earn $60,000 with a 4% match and contributing 4% adds about $2,400 a year from your employer on top of your own $2,400. Not contributing enough to get the full match leaves that on the table." },
        { kind: "callout", tone: "tip", body: "A common first priority in financial education: contribute at least enough to capture the full employer match before anything else." },
      ],
      takeaway: "Contribute at least enough to get the full employer match — it's part of your pay.",
      quiz: {
        prompt: "Why prioritize getting the full employer match?",
        options: ["It's legally required", "It's extra pay you forfeit otherwise", "It lowers your rent", "It raises your credit score"],
        answer: 1,
        explain: "The match is compensation you only receive if you contribute. Skipping it leaves guaranteed money behind.",
      },
      xp: 50,
    },
    {
      id: "retirement-contribution-limits",
      title: "Contribution limits",
      minutes: 3,
      blocks: [
        { kind: "text", body: "Because these accounts come with tax breaks, governments cap how much you can put in each year. The limits differ by account type and change periodically, so it's worth checking the current year's numbers from an official source." },
        { kind: "text", body: "Most people don't hit the limits early on, so the practical advice is simpler: start with what you can, capture any match, and increase the percentage a little each time you get a raise." },
        { kind: "callout", tone: "watch", body: "Over-contributing can trigger penalties. If you're near the cap, check the official current-year limit rather than guessing." },
      ],
      takeaway: "Annual limits cap tax-advantaged contributions; check the current year's figures.",
      quiz: {
        prompt: "Why do retirement accounts have contribution limits?",
        options: ["To discourage saving", "They carry tax advantages governments cap", "Banks set them randomly", "To match your salary"],
        answer: 1,
        explain: "The tax breaks are valuable, so contributions are capped each year. The exact figures change, so check current sources.",
      },
      xp: 50,
    },
  ],
};
