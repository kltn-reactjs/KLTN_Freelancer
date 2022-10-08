import PostJob from "../images/post-a-project.png";
import work from "../images/work.png";
import paySafe from "../images/pay-safely.png";
import help from "../images/about-me.png";
import Browser from '../images/browse-portfolios.png'
import bids from '../images/bids-alt.png'
import quality from '../images/rank-higher.png'
import track from '../images/track-progress.png'

export const data: { id: number; logo: any; text: string; info: string }[] = [
    {
      id: 1,
      logo: PostJob,
      text: "Post a job",
      info: "It's free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.",
    },
    {
      id: 2,
      logo: work,
      text: "Choose freelancers",
      info: "No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!",
    },
    {
      id: 3,
      logo: paySafe,
      text: "Pay safely",
      info: "Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.",
    },
    {
      id: 4,
      logo: help,
      text: "We're here to help",
      info: "Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.",
    },
  ];

  export const dataGreat: { id: number; logo: any; text: string; info: string }[] = [
    {
      id: 1,
      logo: Browser,
      text: "Browse portfolios",
      info: "Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.",
    },
    {
      id: 2,
      logo: bids,
      text: "Fast bids",
      info: "Receive obligation free quotes from our talented freelancers fast. 80% of projects get bid on within 60 seconds.",
    },
    {
      id: 3,
      logo: quality,
      text: "Quality work",
      info: "Freelancer.com has by far the largest pool of quality freelancers globally- over 50 million to choose from.",
    },
    {
      id: 4,
      logo: track,
      text: "Track progress",
      info: "Keep up-to-date and on-the-go with our time tracker, and mobile app. Always know what freelancers are up to.",
    },
  ];