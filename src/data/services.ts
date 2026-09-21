export type Service = {
  tags: string[];
  title: string;
  body: string;
};

export const services: Service[] = [
  {
    tags: ["Welcome", "Post-purchase", "Win-back", "Abandoned cart"],
    title: "Lifecycle and automation",
    body: "The automations that carry a customer from first sign-up to repeat buyer: welcome series that convert, post-purchase flows that bring people back, and win-back journeys that recover anyone who's gone quiet.",
  },
  {
    tags: ["Customer", "Trade", "Editorial"],
    title: "Newsletters",
    body: "Customer and trade newsletters with a voice worth opening, built to hold attention and earn clicks rather than just announce this week's news and offers.",
  },
  {
    tags: ["Trustpilot", "Post-purchase", "Follow-ups"],
    title: "Reviews and social proof",
    body: "Automated review-collection flows into Trustpilot and similar, timed to peak satisfaction and followed up for anyone who doesn't open the first send, turning happy buyers into ratings that sell to the next customer.",
  },
  {
    tags: ["Intent-based", "Behavioural", "Data-led"],
    title: "Nurture and segmentation",
    body: "Audience segments built from real customer data, intent and behaviour, plus a campaign plan for launches and sales, so the right message reaches the right person at the right time.",
  },
];
