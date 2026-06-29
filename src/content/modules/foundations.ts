import type { Module } from "../types";

export const moneyBasics: Module = {
  id: "basics",
  title: "Money Basics",
  icon: "ti-coin",
  blurb: "What money is for, and the three jobs every dollar can do.",
  lessons: [
    {
      id: "basics-what-money-does",
      title: "What money actually does",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Money is a tool for moving value across time and space. You trade your hours for it now so you can buy groceries later, or in a different city, without hauling around the thing you actually made." },
        { kind: "text", body: "Every dollar you hold can do one of three things: it can be spent now, saved for later, or put to work earning more. Most money trouble comes from one job quietly eating the other two — usually spending eating saving." },
        { kind: "example", title: "The same $50, three ways", body: "Spent: dinner out tonight. Saved: sitting in checking for next month's bill. Invested: in a fund that might be worth $55 or $48 next year. None is wrong. The skill is deciding on purpose instead of by accident." },
        { kind: "callout", tone: "note", body: "Wealth isn't your paycheck. It's what's left after the spending stops — the money still working for you." },
      ],
      takeaway: "Every dollar can be spent, saved, or invested. Choose on purpose.",
      quiz: {
        prompt: "Which best describes 'wealth'?",
        options: ["Your monthly income", "What you've kept and put to work", "Your credit limit", "Your spending power this week"],
        answer: 1,
        explain: "Income is the flow in. Wealth is what survives after spending — the money still working for you.",
      },
      xp: 50,
    },
    {
      id: "basics-income-vs-wealth",
      title: "Income vs. wealth",
      minutes: 4,
      blocks: [
        { kind: "text", body: "A high income feels like wealth but isn't the same thing. Income is what comes in each month. Wealth is the gap between what comes in and what goes out, compounded over years." },
        { kind: "text", body: "Two people earn $6,000 a month. One spends $6,000. The other spends $4,800 and keeps $1,200. After five years the second person has a cushion, options, and less stress — on the exact same salary." },
        { kind: "callout", tone: "watch", body: "Raises often vanish because spending rises to meet them. This is 'lifestyle creep,' and it's why some high earners still live paycheck to paycheck." },
      ],
      takeaway: "Wealth is built from the gap between income and spending, not from income alone.",
      quiz: {
        prompt: "Two people earn the same. Why might only one build wealth?",
        options: ["One had a higher credit score", "One kept a gap between earning and spending", "One paid more in taxes", "One had a bigger paycheck"],
        answer: 1,
        explain: "Same income, different gap. The saved-and-invested gap is what turns into wealth over time.",
      },
      xp: 50,
    },
    {
      id: "basics-needs-vs-wants",
      title: "Needs vs. wants",
      minutes: 3,
      blocks: [
        { kind: "text", body: "A need keeps your life running: rent, basic food, utilities, transport to work, minimum debt payments. A want makes life nicer: takeout, upgrades, the newer phone. The line is personal, but it exists." },
        { kind: "text", body: "You don't have to cut wants. You just have to see them clearly, because wants are where almost all of your flexibility lives. You can't easily cut rent this month; you can absolutely cut three dinners out." },
        { kind: "example", title: "The reframe", body: "Instead of 'can I afford this?', ask 'is this the best use of this $40 right now?' Same money, sharper question." },
      ],
      takeaway: "Needs keep life running; wants are where your flexibility lives.",
      quiz: {
        prompt: "Why does the needs/wants split matter for budgeting?",
        options: ["Wants are always bad", "Wants hold most of your spending flexibility", "Needs can be cancelled easily", "It sets your credit score"],
        answer: 1,
        explain: "You can rarely cut needs quickly, but wants flex. That's where a budget finds room.",
      },
      xp: 50,
    },
  ],
};

export const budgeting: Module = {
  id: "budgeting",
  title: "Budgeting",
  icon: "ti-calculator",
  blurb: "A budget that survives contact with real life.",
  lessons: [
    {
      id: "budgeting-50-30-20",
      title: "The 50/30/20 frame",
      minutes: 5,
      blocks: [
        { kind: "text", body: "A budget is just a plan for money before it disappears. The 50/30/20 frame is a starting split of your take-home pay: 50% to needs, 30% to wants, 20% to saving and extra debt payoff." },
        { kind: "example", title: "On $4,000 take-home", body: "$2,000 needs, $1,200 wants, $800 toward savings and debt. If your rent alone eats most of the 50%, that's a signal — not a personal failing — to adjust the frame or the housing." },
        { kind: "callout", tone: "tip", body: "It's a frame, not a rule. High-cost cities often run closer to 60/20/20. Start here, then bend it to your life." },
        { kind: "text", body: "The 20% is the part that builds your future. Treat it like a bill you owe yourself, ideally moved automatically the day you get paid." },
      ],
      takeaway: "50% needs, 30% wants, 20% future — a starting frame, not a law.",
      quiz: {
        prompt: "In 50/30/20, what does the 20% cover?",
        options: ["Rent and utilities", "Entertainment", "Saving and extra debt payoff", "Taxes"],
        answer: 2,
        explain: "The 20% is the future-building slice: emergency fund, investing, and paying debt faster than the minimum.",
      },
      xp: 50,
    },
    {
      id: "budgeting-tracking",
      title: "Tracking without spreadsheets",
      minutes: 4,
      blocks: [
        { kind: "text", body: "You don't need to log every coffee forever. You need to know your numbers well enough to make decisions. Most people only need to track closely for one or two months to learn where the money actually goes." },
        { kind: "list", items: [
          "Pull one month of transactions from your bank app.",
          "Sort into needs, wants, and savings — rough is fine.",
          "Find the one or two categories that surprised you. That's your budget.",
        ] },
        { kind: "callout", tone: "note", body: "The goal isn't a perfect ledger. It's catching the leaks you didn't know were there." },
      ],
      takeaway: "Track closely for a month to find your leaks, then automate the rest.",
      quiz: {
        prompt: "What's the main point of tracking spending?",
        options: ["To feel guilty", "To find surprising categories and decide", "To match the budget exactly", "To impress your bank"],
        answer: 1,
        explain: "Tracking surfaces the leaks. Once you see them, you can decide — that's the whole job.",
      },
      xp: 50,
    },
    {
      id: "budgeting-zero-based",
      title: "Zero-based budgets",
      minutes: 4,
      blocks: [
        { kind: "text", body: "A zero-based budget gives every dollar a job before the month starts, until income minus assignments equals zero. 'Zero' doesn't mean spend it all — saving and investing are jobs too." },
        { kind: "text", body: "It's more hands-on than 50/30/20 and works well if percentages feel too loose or your income is irregular. You're forced to decide in advance instead of hoping it works out." },
        { kind: "example", title: "Why it helps irregular income", body: "On a $3,500 month you assign all $3,500. On a $5,200 month you assign the extra $1,700 on purpose — to a buffer, debt, or savings — instead of letting it evaporate." },
      ],
      takeaway: "Give every dollar a job up front; 'zero left unassigned' includes saving.",
      quiz: {
        prompt: "In a zero-based budget, 'zero' means…",
        options: ["You spent everything", "Every dollar is assigned a job", "You have no savings", "Your account hits zero"],
        answer: 1,
        explain: "Every dollar is assigned — including dollars assigned to savings and investing. Nothing is left undecided.",
      },
      xp: 50,
    },
  ],
};

export const emergencyFunds: Module = {
  id: "emergency",
  title: "Emergency Funds",
  icon: "ti-umbrella",
  blurb: "The cushion that keeps a bad week from becoming a debt spiral.",
  lessons: [
    {
      id: "emergency-why",
      title: "Why 3–6 months",
      minutes: 4,
      blocks: [
        { kind: "text", body: "An emergency fund is cash set aside for the unexpected: a job loss, a car repair, a medical bill. Its real job is to stop a surprise from turning into high-interest debt." },
        { kind: "text", body: "The common target is three to six months of essential expenses — not your full spending, just the needs. Three months is a reasonable floor; six suits anyone with variable income or a single household earner." },
        { kind: "callout", tone: "tip", body: "Calculate it from your essential expenses, not your salary. You'd cut the wants in a real emergency anyway." },
      ],
      takeaway: "Aim for 3–6 months of essential expenses to keep surprises off a credit card.",
      quiz: {
        prompt: "An emergency fund should cover how much?",
        options: ["3–6 months of total spending", "3–6 months of essential expenses", "One month of salary", "Your largest bill"],
        answer: 1,
        explain: "Size it on essentials. In a real emergency you'd trim the wants, so they don't belong in the target.",
      },
      xp: 50,
    },
    {
      id: "emergency-where",
      title: "Where to keep it",
      minutes: 3,
      blocks: [
        { kind: "text", body: "An emergency fund needs two things: it has to be safe, and you have to be able to reach it fast. That rules out investing it in the stock market, where it could be down exactly when you need it." },
        { kind: "text", body: "A high-yield savings account, separate from your everyday checking, is the usual home. Separate enough that you won't spend it by accident; liquid enough to move in a day or two." },
        { kind: "callout", tone: "watch", body: "An emergency fund is insurance, not an investment. Reaching for higher returns defeats its purpose." },
      ],
      takeaway: "Keep it safe and liquid — a separate savings account, not investments.",
      quiz: {
        prompt: "Why not invest your emergency fund in stocks?",
        options: ["Stocks are illegal to sell quickly", "It might be down right when you need it", "Savings accounts pay more", "You can't withdraw from stocks"],
        answer: 1,
        explain: "The fund must be there in full when a surprise hits. Market values swing, so the cash stays safe and liquid.",
      },
      xp: 50,
    },
    {
      id: "emergency-building",
      title: "Building it slowly",
      minutes: 3,
      blocks: [
        { kind: "text", body: "A six-month fund sounds impossible until you break it down. Start with a $1,000 starter cushion — that alone handles most small emergencies and stops the bleeding into debt." },
        { kind: "text", body: "Then automate a small transfer each payday. $50 a week is $2,600 a year without thinking about it. Boring and automatic beats heroic and inconsistent." },
        { kind: "example", title: "The starter goal", body: "If saving six months feels paralyzing, ignore it. Aim for $1,000 first. Most financial emergencies are smaller than people fear." },
      ],
      takeaway: "Start with $1,000, then automate small weekly transfers.",
      quiz: {
        prompt: "What's a sensible first emergency-fund goal?",
        options: ["Six months at once", "A $1,000 starter cushion", "Nothing until debt is gone", "One year of salary"],
        answer: 1,
        explain: "A $1,000 starter handles most small emergencies and builds momentum before you tackle the full 3–6 months.",
      },
      xp: 50,
    },
  ],
};
