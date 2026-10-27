import { Player, Match, NewsItem, Tournament, Sponsor, GalleryItem, Leadership } from './types';

// Generic Silhouette Avatar for "Black face men avatar" look
const AVATAR_URL = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

// Management & Coaching
export const LEADERSHIP: Leadership[] = [
  { id: 'l1', name: 'Reshat', role: 'President', image: AVATAR_URL },
  { id: 'l2', name: 'Araf Lam', role: 'Head Coach', image: AVATAR_URL },
  { id: 'l3', name: 'Rishat', role: 'Executive', image: AVATAR_URL },
  { id: 'l4', name: 'Dipok', role: 'Executive', image: AVATAR_URL },
  { id: 'l5', name: 'Samim', role: 'Executive', image: AVATAR_URL },
  { id: 'l6', name: 'Murad', role: 'Executive', image: AVATAR_URL },
  { id: 'l7', name: 'Shuvo', role: 'Executive', image: AVATAR_URL },
];

// Updated Squad with detailed profile info
export const PLAYERS: Player[] = [
  { 
    id: '1', name: 'LAM', fullName: 'Arafat Lam', born: '12/04/1998', age: 25, nicknames: 'Captain Cool', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium fast',
    role: 'All-Rounder', matches: 45, runs: 1250, wickets: 32, strikeRate: 135.5, economyRate: 6.2, image: AVATAR_URL 
  },
  { 
    id: '2', name: 'RESHAT', fullName: 'Reshat Ahmed', born: '05/08/1997', age: 26, nicknames: 'The Wall', battingStyle: 'Right-hand bat', bowlingStyle: 'N/A',
    role: 'Batsman', matches: 40, runs: 1400, wickets: 0, strikeRate: 128.0, economyRate: 0, image: AVATAR_URL 
  },
  { 
    id: '3', name: 'RISHAT', fullName: 'Rishat Hossain', born: '15/02/1999', age: 24, nicknames: 'Spin Wizard', battingStyle: 'Right-hand bat', bowlingStyle: 'Legbreak googly',
    role: 'Bowler', matches: 38, runs: 150, wickets: 55, strikeRate: 85.0, economyRate: 5.4, image: AVATAR_URL 
  },
  { 
    id: '4', name: 'DIP', fullName: 'Dip Roy', born: '22/11/1998', age: 25, nicknames: 'Flash', battingStyle: 'Right-hand bat', bowlingStyle: 'N/A',
    role: 'Wicket-Keeper', matches: 42, runs: 980, wickets: 0, strikeRate: 115.2, economyRate: 0, image: AVATAR_URL 
  },
  { 
    id: '5', name: 'MARJAN', fullName: 'Marjan Islam', born: '10/06/2000', age: 23, nicknames: 'MJ', battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm offbreak',
    role: 'Batsman', matches: 25, runs: 600, wickets: 2, strikeRate: 110.5, economyRate: 7.5, image: AVATAR_URL 
  },
  { 
    id: '6', name: 'DIPOK', fullName: 'Dipok Chandra', born: '14/01/1996', age: 27, nicknames: 'Professor', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium',
    role: 'All-Rounder', matches: 50, runs: 1100, wickets: 40, strikeRate: 130.0, economyRate: 6.0, image: AVATAR_URL 
  },
  { 
    id: '7', name: 'MERAJ', fullName: 'Meraj Khan', born: '30/09/2001', age: 22, nicknames: 'Express', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast',
    role: 'Bowler', matches: 30, runs: 80, wickets: 35, strikeRate: 70.0, economyRate: 5.8, image: AVATAR_URL 
  },
  { 
    id: '8', name: 'SHAHINUR', fullName: 'Shahinur Rahman', born: '18/03/1998', age: 25, nicknames: 'Shaan', battingStyle: 'Right-hand bat', bowlingStyle: 'N/A',
    role: 'Batsman', matches: 20, runs: 450, wickets: 0, strikeRate: 105.0, economyRate: 0, image: AVATAR_URL 
  },
  { 
    id: '9', name: 'APON', fullName: 'Apon Das', born: '25/12/1999', age: 24, nicknames: 'Turner', battingStyle: 'Right-hand bat', bowlingStyle: 'Slow left-arm orthodox',
    role: 'Bowler', matches: 35, runs: 120, wickets: 42, strikeRate: 90.0, economyRate: 5.2, image: AVATAR_URL 
  },
  { 
    id: '10', name: 'UZZAL', fullName: 'Uzzal Hossain', born: '08/07/1997', age: 26, nicknames: 'UZ', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium',
    role: 'All-Rounder', matches: 28, runs: 500, wickets: 15, strikeRate: 118.0, economyRate: 6.5, image: AVATAR_URL 
  },
  { 
    id: '11', name: 'NOMAN', fullName: 'Abdullah Noman', born: '02/05/2000', age: 23, nicknames: 'Gloves', battingStyle: 'Right-hand bat', bowlingStyle: 'N/A',
    role: 'Wicket-Keeper', matches: 15, runs: 300, wickets: 0, strikeRate: 100.0, economyRate: 0, image: AVATAR_URL 
  },
  { 
    id: '12', name: 'ADITTO', fullName: 'Aditto Paul', born: '19/09/1998', age: 25, nicknames: 'Adi', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm offbreak',
    role: 'Batsman', matches: 22, runs: 550, wickets: 5, strikeRate: 112.5, economyRate: 8.0, image: AVATAR_URL 
  },
  { 
    id: '13', name: 'SHAKIL', fullName: 'Shakil Ahmed', born: '11/11/2001', age: 22, nicknames: 'Shark', battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm fast',
    role: 'Bowler', matches: 18, runs: 50, wickets: 25, strikeRate: 60.0, economyRate: 5.9, image: AVATAR_URL 
  },
  { 
    id: '14', name: 'MUNNA', fullName: 'Munna Mia', born: '05/04/1999', age: 24, nicknames: 'Magic', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium',
    role: 'All-Rounder', matches: 12, runs: 200, wickets: 8, strikeRate: 125.0, economyRate: 7.0, image: AVATAR_URL 
  },
  { 
    id: '15', name: 'SOJIB', fullName: 'Sojib Khan', born: '28/02/2000', age: 23, nicknames: 'Soj', battingStyle: 'Right-hand bat', bowlingStyle: 'N/A',
    role: 'Batsman', matches: 10, runs: 180, wickets: 0, strikeRate: 95.0, economyRate: 0, image: AVATAR_URL 
  },
  { 
    id: '16', name: 'RONY', fullName: 'Rony Talukdar', born: '15/08/2002', age: 21, nicknames: 'Rocket', battingStyle: 'Right-hand bat', bowlingStyle: 'N/A',
    role: 'Batsman', matches: 8, runs: 150, wickets: 0, strikeRate: 98.0, economyRate: 0, image: AVATAR_URL 
  },
  { 
    id: '17', name: 'SADEK', fullName: 'Sadek Hossain', born: '03/01/2001', age: 22, nicknames: 'Sid', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast medium',
    role: 'Bowler', matches: 12, runs: 40, wickets: 18, strikeRate: 45.0, economyRate: 6.1, image: AVATAR_URL 
  },
  { 
    id: '18', name: 'SABBIR', fullName: 'Sabbir Rahman', born: '12/12/1999', age: 24, nicknames: 'Sabs', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm offbreak',
    role: 'All-Rounder', matches: 5, runs: 85, wickets: 4, strikeRate: 105.0, economyRate: 7.2, image: AVATAR_URL 
  },
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    date: 'Oct 12, 2023',
    title: 'Victory at Panchagarh District League',
    description: 'RBCC secured a dominant win against the Northern Giants at the Panchagarh Stadium. Man of the match was Lam for his all-round performance.',
    image: 'https://images.unsplash.com/photo-1593341646782-e0b495cffd32?q=80&w=800&auto=format&fit=crop',
    content: `In a thrilling encounter at the Panchagarh Stadium, Royal Bengal Cricket Club (RBCC) registered a comprehensive victory over the Northern Giants. Winning the toss and electing to bat first, RBCC posted a challenging total of 185/6 in their allotted 20 overs.

    The innings was anchored by our star all-rounder Lam, who smashed a quickfire 65 off just 35 balls, including 4 massive sixes. He was well supported by Reshat, who contributed a steady 40 at the top of the order.
    
    In reply, the Northern Giants struggled against the pace and spin combination of RBCC. Rishat was the pick of the bowlers, claiming 3 wickets for just 22 runs. The fielding unit was sharp, affecting two crucial run-outs that swung the momentum in our favor.
    
    "This win is a testament to the hard work the boys have put in during practice," said Coach Araf Lam after the match. "We are looking forward to maintaining this winning streak."`
  },
  {
    id: '2',
    date: 'Sep 28, 2023',
    title: 'Atwari Gold Cup Selection',
    description: 'Three of our promising talents have been selected for the upcoming Atwari Gold Cup regional trials. A proud moment for the club.',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=800&auto=format&fit=crop',
    content: `It is a moment of immense pride for the Royal Bengal Cricket Club as three of our emerging players - Rony, Sadek, and Sabbir - have been selected for the prestigious Atwari Gold Cup regional trials.

    The selection process was rigorous, involving over 50 players from various clubs in the district. Our players stood out due to their technical proficiency and match awareness. Rony impressed the selectors with his consistent batting technique, while Sadek's swing bowling was the talk of the trials.
    
    "These selections prove that our youth development program is heading in the right direction," stated Club President Reshat. "We wish them all the best and are confident they will make RBCC proud on the bigger stage."
    
    The trials are scheduled to begin next week at the central grounds, and the entire club is rooting for their success.`
  },
  {
    id: '3',
    date: 'Sep 15, 2023',
    title: 'Winter Training Camp at Home Ground',
    description: 'Our annual winter training camp begins this week at the Atwari grounds. Focus will be on fitness and fielding drills.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop',
    content: `As the season approaches, RBCC is kicking off its Annual Winter Training Camp at the home grounds in Atwari. This year's camp will focus heavily on physical fitness, agility, and modern fielding techniques.

    Head Coach Araf Lam has designed a specialized 4-week program that includes high-intensity interval training (HIIT) specifically tailored for cricketers. "Modern cricket demands exceptional fitness levels. It's not just about skills anymore; it's about endurance and agility," Coach Lam explained.
    
    The camp will also feature guest sessions from senior district players who will share insights on mental preparation and game strategy. All squad members are expected to report at 6:00 AM sharp starting this Monday.
    
    Fans are welcome to watch the open net sessions on Friday evenings.`
  }
];

export const MATCHES: Match[] = [
  { id: '1', date: '2023-11-05', opponent: 'Panchagarh XI', venue: 'Panchagarh Stadium', status: 'Ongoing', tournament: 'District League' },
  { id: '2', date: '2023-11-12', opponent: 'Thakurgaon Strikers', venue: 'Atwari Ground', status: 'Upcoming', tournament: 'District League' },
  { id: '3', date: '2023-11-19', opponent: 'Dinajpur Riders', venue: 'Home Ground', status: 'Upcoming', tournament: 'Friendly' },
  { id: '4', date: '2023-11-26', opponent: 'Rangpur Rangers', venue: 'City Oval', status: 'Upcoming', tournament: 'Divisional Cup' },
  { id: '5', date: '2023-10-29', opponent: 'Boda Challengers', venue: 'Home Ground', status: 'Completed', result: 'Won by 2 wickets', scores: 'BC: 150/8 | RBCC: 151/8', tournament: 'District League' },
  { id: '6', date: '2023-10-22', opponent: 'Debiganj Titans', venue: 'North Stadium', status: 'Completed', result: 'Lost by 15 runs', scores: 'DT: 180/5 | RBCC: 165/9', tournament: 'Friendly' },
  { id: '7', date: '2023-10-15', opponent: 'Tetulia Warriors', venue: 'Home Ground', status: 'Completed', result: 'Won by 40 runs', scores: 'RBCC: 210/4 | TW: 170/10', tournament: 'Friendly' },
];

export const TOURNAMENTS: Tournament[] = [
  { id: '1', name: 'RBCC Cricket Tournament', year: 'Session 1 (2016)', result: 'Champions', image: 'https://images.unsplash.com/photo-1565787116812-32a74c20f781?q=80&w=800&auto=format&fit=crop' },
  { id: '2', name: 'RBCC Cricket Tournament', year: 'Session 2 (2017)', result: 'Runner Up', image: 'https://images.unsplash.com/photo-1593766624387-578d38761765?q=80&w=800&auto=format&fit=crop' },
  { id: '3', name: 'RBCC Cricket Tournament', year: 'Session 3 (2018)', result: 'Semi-Finalists', image: 'https://images.unsplash.com/photo-1590141151680-e3046f734493?q=80&w=800&auto=format&fit=crop' },
];

export const SPONSORS: Sponsor[] = [
  { id: '1', name: 'Pro Sports', logo: 'https://cdn-icons-png.flaticon.com/512/1533/1533913.png' },
  { id: '2', name: 'Cricket Gear Co', logo: 'https://cdn-icons-png.flaticon.com/512/889/889505.png' },
  { id: '3', name: 'Local Builders', logo: 'https://cdn-icons-png.flaticon.com/512/1040/1040243.png' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Stadium Moments
  { id: '1', category: 'Stadium Moments', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?fit=crop&w=800&q=80' },
  { id: '2', category: 'Stadium Moments', image: 'https://images.unsplash.com/photo-1587329310686-91a755b38d37?fit=crop&w=800&q=80' },
  // Team Moments
  { id: '3', category: 'Team Moments', image: 'https://images.unsplash.com/photo-1526615735835-530c611a3d93?fit=crop&w=800&q=80' },
  { id: '4', category: 'Team Moments', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?fit=crop&w=800&q=80' },
  // Match Highlights
  { id: '5', category: 'Match Highlights', image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?fit=crop&w=800&q=80' },
  { id: '6', category: 'Match Highlights', image: 'https://images.unsplash.com/photo-1595210329066-79b898d97379?fit=crop&w=800&q=80' },
  // Equipment
  { id: '7', category: 'Cricket Equipment', image: 'https://images.unsplash.com/photo-1593341646294-84c49f874251?fit=crop&w=800&q=80' },
  { id: '8', category: 'Cricket Equipment', image: 'https://images.unsplash.com/photo-1593766821364-754d922cb335?fit=crop&w=800&q=80' },
  // Practice
  { id: '9', category: 'Practice Sessions', image: 'https://images.unsplash.com/photo-1562077772-3bd305261997?fit=crop&w=800&q=80' },
];
