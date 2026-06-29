import type { Module } from "../types";

export const taxes: Module = {
  id: "taxes",
  title: "Taxes Basics",
  icon: "ti-receipt-tax",
  blurb: "Enough to stop fearing tax season and read your own pay stub.",
  lessons: [
    {
      id: "taxes-brackets",
      title: "Brackets explained",
      minutes: 5,
      blocks: [
        { kind: "text", body: "Income tax is usually 'progressive,' meaning higher slices of income are taxed at higher rates. The crucial part people get wrong: a higher bracket applies only to the income inside that bracket, not all of your income." },
        { kind: "example", title: "A raise can't leave you worse off", body: "If the next bracket starts at $50,000, earning $51,000 means only that last $1,000 is taxed at the higher rate — not the whole $51,000. Moving up a bracket never reduces your take-home pay." },
        { kind: "callout", tone: "note", body: "Exact brackets and rates depend on your country and year. The concept is universal; the numbers are not." },
      ],
      takeaway: "Higher rates apply only to income within each bracket — a raise never lowers take-home.",
      quiz: {
        prompt: "You move into a higher tax bracket. What gets taxed at the higher rate?",
        options: ["All of your income", "Only the income inside that bracket", "Nothing changes", "Your savings"],
        answer: 1,
        explain: "Only the income within the higher bracket is taxed at that rate. Earning more always leaves you with more.",
      },
      xp: 50,
    },
    {
      id: "taxes-deductions-credits",
      title: "Deductions vs. credits",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Both reduce your tax bill, but differently. A deduction lowers the income you're taxed on. A credit lowers the tax itself, dollar for dollar — which makes credits generally more valuable." },
        { kind: "example", title: "The difference in dollars", body: "In a 22% bracket, a $1,000 deduction saves you about $220. A $1,000 credit saves you the full $1,000. Same headline number, very different impact." },
        { kind: "callout", tone: "tip", body: "When comparing tax breaks, a credit usually beats a deduction of the same size." },
      ],
      takeaway: "Deductions reduce taxable income; credits reduce tax directly and are usually worth more.",
      quiz: {
        prompt: "Which generally saves you more: a $1,000 credit or a $1,000 deduction?",
        options: ["The deduction", "The credit", "They're identical", "Neither helps"],
        answer: 1,
        explain: "A credit cuts your tax dollar-for-dollar; a deduction only cuts the income that's taxed. The credit wins.",
      },
      xp: 50,
    },
    {
      id: "taxes-w2-1099",
      title: "W-2 vs. 1099",
      minutes: 4,
      blocks: [
        { kind: "text", body: "How you're paid changes how taxes work. A W-2 employee has taxes withheld from each paycheck automatically. A 1099 contractor is paid in full and is responsible for setting aside and paying their own taxes." },
        { kind: "callout", tone: "watch", body: "Freelancers often get surprised by a big tax bill because nothing was withheld. A common habit is setting aside roughly 25–30% of freelance income for taxes as it comes in." },
        { kind: "text", body: "Contractors also typically owe self-employment tax and may make quarterly payments. The freedom of 1099 work comes with more tax homework." },
      ],
      takeaway: "W-2 withholds tax for you; 1099 means you set it aside yourself — often ~25–30%.",
      quiz: {
        prompt: "Why do 1099 contractors often face a surprise tax bill?",
        options: ["They earn more", "No tax is withheld automatically", "Contractors pay double", "Credits don't apply to them"],
        answer: 1,
        explain: "Nothing is withheld from contractor pay, so the tax comes due all at once unless they set money aside.",
      },
      xp: 50,
    },
  ],
};

export const insurance: Module = {
  id: "insurance",
  title: "Insurance Basics",
  icon: "ti-shield",
  blurb: "Paying a little to avoid a catastrophe — and which to prioritize.",
  lessons: [
    {
      id: "insurance-types",
      title: "Types of coverage",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Insurance is a deal: you pay a steady, predictable amount so that a rare, expensive disaster doesn't fall entirely on you. It's protection against the events too big to self-fund." },
        { kind: "list", items: [
          "Health — covers medical costs that can otherwise be ruinous.",
          "Auto — required in most places if you drive.",
          "Renters/home — protects your housing and belongings.",
          "Life — replaces income for people who depend on you.",
          "Disability — replaces income if you can't work.",
        ] },
        { kind: "callout", tone: "note", body: "Insurance isn't meant to make you money. It's meant to keep one bad event from destroying your finances." },
      ],
      takeaway: "Insurance trades a small steady cost for protection against rare, large losses.",
      quiz: {
        prompt: "What is insurance fundamentally for?",
        options: ["Making a profit", "Covering rare, expensive disasters", "Replacing savings", "Avoiding taxes"],
        answer: 1,
        explain: "Insurance protects against losses too big to absorb yourself. It's protection, not an investment.",
      },
      xp: 50,
    },
    {
      id: "insurance-deductibles-premiums",
      title: "Deductibles & premiums",
      minutes: 4,
      blocks: [
        { kind: "text", body: "A premium is what you pay regularly to keep coverage. A deductible is what you pay out of pocket before insurance starts covering a claim. The two usually move in opposite directions." },
        { kind: "example", title: "The trade-off", body: "A higher deductible means a lower monthly premium, but more cost when something happens. The right balance depends on whether you could comfortably cover that deductible from savings if you had to." },
        { kind: "callout", tone: "tip", body: "This is one more reason an emergency fund matters — it lets you safely choose a higher deductible and a lower premium." },
      ],
      takeaway: "Higher deductible, lower premium — choose based on what your savings can absorb.",
      quiz: {
        prompt: "What is a deductible?",
        options: ["The monthly cost of coverage", "What you pay before insurance kicks in", "A tax break", "The insurer's profit"],
        answer: 1,
        explain: "The deductible is your out-of-pocket share before coverage starts; the premium is the recurring cost to stay insured.",
      },
      xp: 50,
    },
    {
      id: "insurance-priorities",
      title: "What to prioritize",
      minutes: 3,
      blocks: [
        { kind: "text", body: "You don't need every policy a salesperson offers. Prioritize coverage for things that would be financially catastrophic and that you can't simply pay for yourself." },
        { kind: "list", items: [
          "Cover the catastrophes first: health, and income protection if others depend on you.",
          "Carry what's legally required, like auto.",
          "Skip insurance on small, affordable losses — that's what savings are for.",
        ] },
        { kind: "callout", tone: "watch", body: "Insuring cheap, replaceable things (extended warranties on small gadgets) usually costs more over time than just covering the rare replacement yourself." },
      ],
      takeaway: "Insure the catastrophes you can't self-fund; skip coverage on small, affordable losses.",
      quiz: {
        prompt: "Which is usually NOT worth insuring?",
        options: ["Your health", "Income if others depend on you", "A cheap, replaceable gadget", "Your car (where required)"],
        answer: 2,
        explain: "Small, affordable losses are better self-funded. Insurance is for catastrophes you couldn't absorb.",
      },
      xp: 50,
    },
  ],
};

export const psychology: Module = {
  id: "psychology",
  title: "Financial Psychology",
  icon: "ti-brain",
  blurb: "The part of money that happens between your ears.",
  lessons: [
    {
      id: "psych-money-scripts",
      title: "Money scripts",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Money scripts are the often-unspoken beliefs about money you absorbed growing up — 'money is stressful,' 'rich people are greedy,' 'I'll never be good with money.' They run quietly in the background and shape decisions you think are rational." },
        { kind: "text", body: "Naming your scripts is the first step to choosing differently. A belief you can see is a belief you can question; one you can't see just drives." },
        { kind: "callout", tone: "tip", body: "Ask yourself what your parents taught you about money, on purpose or by example. The answer often explains your defaults today." },
      ],
      takeaway: "Hidden beliefs about money drive decisions until you name them.",
      quiz: {
        prompt: "What is a 'money script'?",
        options: ["A budgeting app", "An unspoken belief about money you absorbed", "A type of loan", "A tax form"],
        answer: 1,
        explain: "Money scripts are inherited beliefs about money. Naming them lets you question defaults you didn't choose.",
      },
      xp: 50,
    },
    {
      id: "psych-lifestyle-creep",
      title: "Lifestyle creep",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Lifestyle creep is when spending quietly rises to match rising income. The raise that should have built wealth instead funds a nicer apartment, more subscriptions, and pricier habits — and the savings rate never moves." },
        { kind: "example", title: "The fix is mechanical", body: "When income rises, send a chunk of the increase straight to savings or investing before you adjust your lifestyle. You never miss money that didn't reach your spending account." },
        { kind: "callout", tone: "watch", body: "Some upgrades are worth it. The danger is the unnoticed drift, where every raise vanishes and you can't say where it went." },
      ],
      takeaway: "When income rises, automatically save part of it before lifestyle absorbs it.",
      quiz: {
        prompt: "What's the cleanest defense against lifestyle creep?",
        options: ["Earn less", "Automatically save part of every raise", "Never get a raise", "Cancel all subscriptions"],
        answer: 1,
        explain: "Routing part of each raise to savings before you adjust spending captures the gain instead of letting it drift away.",
      },
      xp: 50,
    },
    {
      id: "psych-nudges",
      title: "Behavioral nudges",
      minutes: 4,
      blocks: [
        { kind: "text", body: "Willpower is unreliable, so good money systems lean on design instead. A nudge is a small change to your environment that makes the better choice the easy, default one." },
        { kind: "list", items: [
          "Automate savings the day you're paid, so it happens before you can spend it.",
          "Add friction to impulse buys — a 24-hour wait on anything over $100.",
          "Keep investing money in a separate account that's mildly annoying to reach.",
        ] },
        { kind: "callout", tone: "tip", body: "The best financial habit is the one that runs without you. Design your defaults so the lazy path is also the smart one." },
      ],
      takeaway: "Design defaults and automation so the easy choice is the smart one.",
      quiz: {
        prompt: "Why rely on automation and nudges instead of willpower?",
        options: ["Willpower is unlimited", "Defaults work even when motivation fades", "Banks require it", "It avoids taxes"],
        answer: 1,
        explain: "Motivation comes and goes; a good default keeps working regardless. Systems beat willpower over the long run.",
      },
      xp: 50,
    },
  ],
};
