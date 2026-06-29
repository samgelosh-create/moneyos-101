import type { Module } from "../types";

export const creditCards: Module = {
  id: "credit-cards",
  title: "Credit Cards",
  icon: "ti-credit-card",
  blurb: "A useful tool or an expensive trap, depending on one habit.",
  lessons: [
    {
      id: "cc-how-interest-accrues",
      title: "How interest accrues",
      minutes: 5,
      blocks: [
        { kind: "text", body: "A credit card is a short-term loan you take every time you swipe. If you pay the full balance by the due date, that loan is free. If you don't, the unpaid part starts charging interest — often around 20–25% a year." },
        { kind: "text", body: "That rate is the APR, charged on the balance you carry. Carry $5,000 at 22% and you're paying roughly $90 a month just in interest, before you've paid down a cent of what you bought." },
        { kind: "example", title: "Minimum payments are a trap by design", body: "Paying only the minimum on that $5,000 can stretch payoff past a decade and cost more in interest than the original purchases. The minimum is the lender's best case, not yours." },
      ],
      takeaway: "Pay in full and credit is free; carry a balance and ~22% APR works against you.",
      quiz: {
        prompt: "When does a credit card start charging you interest?",
        options: ["Every purchase", "When you carry a balance past the due date", "Only over your limit", "When you check your score"],
        answer: 1,
        explain: "Pay the full statement balance by the due date and you owe no interest. Interest only hits the part you carry.",
      },
      xp: 50,
    },
    {
      id: "cc-statement-vs-due",
      title: "Statement vs. due date",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Two dates matter. The statement date closes your billing cycle and totals what you owe. The due date, usually about three weeks later, is your deadline to pay without interest." },
        { kind: "text", body: "The gap between them is the grace period. Pay the full statement balance by the due date every cycle and you ride for free, indefinitely." },
        { kind: "callout", tone: "tip", body: "Set autopay for the full statement balance, not the minimum. It removes the single most expensive mistake from your life." },
      ],
      takeaway: "Pay the full statement balance by the due date to keep the grace period.",
      quiz: {
        prompt: "What should autopay be set to?",
        options: ["The minimum payment", "The full statement balance", "A fixed $50", "Nothing"],
        answer: 1,
        explain: "Full statement balance keeps you in the grace period and at zero interest. The minimum keeps you in debt.",
      },
      xp: 50,
    },
    {
      id: "cc-avoiding-the-trap",
      title: "Avoiding the trap",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Cards become dangerous when the balance feels like 'available money' rather than borrowed money. Rewards and points are real, but they're worth nothing if you pay interest to earn them." },
        { kind: "list", items: [
          "Treat the card like a debit card: only charge what's already in your budget.",
          "Check the balance weekly so it never surprises you.",
          "If you're carrying a balance, paying it off beats almost any rewards card.",
        ] },
        { kind: "callout", tone: "watch", body: "2% cash back is worthless against 22% interest. Earn rewards only on money you'd have spent anyway and pay in full." },
      ],
      takeaway: "Only charge what's in your budget; rewards never beat the interest you'd pay.",
      quiz: {
        prompt: "When are credit card rewards actually worth it?",
        options: ["Always", "Only if you carry a balance", "When you pay in full on planned spending", "When you hit the limit"],
        answer: 2,
        explain: "Rewards only come out ahead when you pay in full. Interest on a carried balance dwarfs any cash-back rate.",
      },
      xp: 50,
    },
  ],
};

export const debtPayoff: Module = {
  id: "debt",
  title: "Debt Payoff",
  icon: "ti-trending-down",
  blurb: "Two proven orders for paying off debt, and how to actually finish.",
  lessons: [
    {
      id: "debt-snowball-vs-avalanche",
      title: "Snowball vs. avalanche",
      minutes: 5,
      blocks: [
        { kind: "text", body: "When you have several debts, you pay the minimum on all of them and throw every extra dollar at one. The question is which one. There are two well-known answers." },
        { kind: "list", items: [
          "Avalanche: attack the highest interest rate first. Costs the least money overall.",
          "Snowball: attack the smallest balance first. Costs slightly more but gives you a quick win.",
        ] },
        { kind: "example", title: "Same debts, different first target", body: "Card A $1,200 at 24%, Card B $3,500 at 19%, Loan C $800 at 11%. Avalanche starts with A (highest rate). Snowball starts with C (smallest balance) for an early payoff you can feel." },
        { kind: "callout", tone: "note", body: "Avalanche wins on math. Snowball wins on motivation. The best method is the one you'll stick with." },
      ],
      takeaway: "Avalanche saves the most money; snowball builds momentum. Pick what you'll finish.",
      quiz: {
        prompt: "Which strategy costs the least in interest?",
        options: ["Snowball", "Avalanche", "Paying minimums only", "They're identical"],
        answer: 1,
        explain: "Avalanche targets the highest APR first, so it minimizes total interest. Snowball trades a little money for motivation.",
      },
      xp: 50,
    },
    {
      id: "debt-refinancing",
      title: "Refinancing basics",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Refinancing means replacing a debt with a new one at a lower rate. A balance-transfer card or a personal loan can move high-interest credit card debt to something cheaper, so more of each payment kills the balance instead of feeding interest." },
        { kind: "callout", tone: "watch", body: "Watch the fees and the fine print. A 0% balance-transfer offer often charges a 3–5% transfer fee and the rate jumps after the intro window. Run the numbers before moving." },
        { kind: "text", body: "Refinancing only helps if you stop adding new debt to the old card. Otherwise you've just made room to dig the hole deeper." },
      ],
      takeaway: "Refinancing can cut your rate — mind the fees and don't reload the old balance.",
      quiz: {
        prompt: "What's the main risk with a 0% balance transfer?",
        options: ["It's always a scam", "Transfer fees and a rate jump after the intro period", "You lose your credit card", "Interest is charged immediately"],
        answer: 1,
        explain: "Transfer fees (3–5%) and the post-intro rate can erase the savings if you don't pay it down in the window.",
      },
      xp: 50,
    },
    {
      id: "debt-staying-motivated",
      title: "Staying motivated",
      minutes: 3,
      blocks: [
        { kind: "text", body: "Paying off debt is a long game, and willpower fades. The fix is to make progress visible and automatic so it doesn't rely on how you feel that week." },
        { kind: "list", items: [
          "Automate the extra payment so it happens before you can spend it.",
          "Track the shrinking balance somewhere you'll see it.",
          "Celebrate each debt cleared — momentum is a real asset.",
        ] },
        { kind: "callout", tone: "tip", body: "This is exactly why some people choose snowball: clearing a whole debt early is a motivation payout the math alone can't give." },
      ],
      takeaway: "Make progress automatic and visible so it doesn't depend on willpower.",
      quiz: {
        prompt: "Why do some people choose the snowball method?",
        options: ["It's mathematically optimal", "The early payoff wins keep them going", "It avoids all interest", "It's required by lenders"],
        answer: 1,
        explain: "Snowball's quick first win is a motivation payout. For many people, finishing beats being optimal.",
      },
      xp: 50,
    },
  ],
};

export const creditScore: Module = {
  id: "credit-score",
  title: "Credit Score",
  icon: "ti-gauge",
  blurb: "What the number is, what moves it, and how to check it safely.",
  lessons: [
    {
      id: "score-what-moves-it",
      title: "What moves the number",
      minutes: 5,
      blocks: [
        { kind: "text", body: "A credit score is a lender's shorthand for 'how reliably does this person repay?' It runs roughly 300–850, and a handful of factors do most of the work." },
        { kind: "list", items: [
          "Payment history — paying on time is the single biggest factor.",
          "Amounts owed — especially how much of your credit limit you're using.",
          "Length of history — older accounts help.",
          "New credit and credit mix — smaller effects.",
        ] },
        { kind: "callout", tone: "tip", body: "One missed payment can cost more points than years of good behavior earned. Autopay the minimum on everything as a safety net, even when you pay more by hand." },
      ],
      takeaway: "On-time payments and low balances drive most of your score.",
      quiz: {
        prompt: "What's the single biggest factor in a credit score?",
        options: ["Your income", "Paying on time", "Number of cards", "Your age"],
        answer: 1,
        explain: "Payment history carries the most weight. Income isn't even in the score directly.",
      },
      xp: 50,
    },
    {
      id: "score-utilization",
      title: "Utilization",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Utilization is how much of your available credit you're using. If your limits total $10,000 and your balances total $3,000, your utilization is 30%. Lower is better, and under 30% is a common rule of thumb." },
        { kind: "example", title: "A quiet way to raise your score", body: "Paying your balance before the statement closes — not just by the due date — reports a lower balance to the bureaus. Same spending, lower reported utilization, often a higher score." },
        { kind: "callout", tone: "watch", body: "Closing an old card can raise your utilization by cutting your total limit. Sometimes the better move is to keep it open and barely used." },
      ],
      takeaway: "Keep balances low relative to limits — under ~30% utilization.",
      quiz: {
        prompt: "Your limits total $10,000 and balances total $3,000. Your utilization is…",
        options: ["3%", "30%", "70%", "300%"],
        answer: 1,
        explain: "$3,000 of $10,000 is 30%. Keeping that ratio low helps your score.",
      },
      xp: 50,
    },
    {
      id: "score-checking-safely",
      title: "Checking it safely",
      minutes: 3,
      blocks: [
        { kind: "text", body: "Checking your own score is a 'soft inquiry' and never hurts it. Many banks and free services show it for nothing. The myth that looking lowers your score confuses it with lenders' 'hard inquiries' when you apply for new credit." },
        { kind: "text", body: "You're also entitled to free credit reports from the major bureaus. Read them for errors — mistakes are common and can drag your score down for no reason." },
        { kind: "callout", tone: "note", body: "Soft inquiry = you checking, no impact. Hard inquiry = a lender checking for an application, a small temporary dip." },
      ],
      takeaway: "Checking your own score is free and harmless; review your reports for errors.",
      quiz: {
        prompt: "Does checking your own credit score lower it?",
        options: ["Yes, every time", "No — it's a soft inquiry", "Only once a year", "Only if it's below 700"],
        answer: 1,
        explain: "Checking yourself is a soft inquiry with no impact. Only hard inquiries from applications cause a small dip.",
      },
      xp: 50,
    },
  ],
};
