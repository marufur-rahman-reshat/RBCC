export interface Player {
  id: string;
  name: string;
  fullName?: string;
  born?: string;
  age?: number;
  nicknames?: string;
  battingStyle?: string;
  bowlingStyle?: string;
  role: 'Batsman' | 'Bowler' | 'All-Rounder' | 'Wicket-Keeper';
  matches: number;
  runs: number;
  wickets: number;
  strikeRate: number;
  economyRate: number;
  image: string;
}

export interface Leadership {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Match {
  id: string;
  date: string;
  opponent: string;
  venue: string;
  status: 'Completed' | 'Upcoming' | 'Live' | 'Ongoing';
  result?: string;
  scores?: string;
  tournament: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  content?: string;
}

export interface Tournament {
  id: string;
  name: string;
  year: string;
  result: string;
  image: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

export type GalleryCategory = 'Stadium Moments' | 'Team Moments' | 'Match Highlights' | 'Cricket Equipment' | 'Practice Sessions';

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  image: string;
  caption?: string;
}
