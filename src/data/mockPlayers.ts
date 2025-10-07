import { Player } from "@/types/player";
import player1 from "@/assets/players/player1.jpg";
import player2 from "@/assets/players/player2.jpg";
import player3 from "@/assets/players/player3.jpg";
import player4 from "@/assets/players/player4.jpg";
import player5 from "@/assets/players/player5.jpg";

export const mockPlayers: Player[] = [
  { 
    id: 1, 
    name: "Jan Kowalski", 
    position: "GK", 
    number: 1, 
    rating: 85,
    photo: player2,
    preferredFoot: "Prawa",
    age: 28,
    nationality: "Polska",
    trainingAttendance: 95,
    matchHistory: [
      { date: "2024-03-15", opponent: "KS Cracovia", result: "2-1", minutes: 90, goals: 0, assists: 0, rating: 8.5 },
      { date: "2024-03-08", opponent: "Lech Poznań", result: "1-1", minutes: 90, goals: 0, assists: 0, rating: 7.8 },
      { date: "2024-03-01", opponent: "Legia Warszawa", result: "0-2", minutes: 90, goals: 0, assists: 0, rating: 6.9 },
    ]
  },
  { 
    id: 2, 
    name: "Piotr Nowak", 
    position: "CB", 
    number: 4, 
    rating: 82,
    photo: player3,
    preferredFoot: "Prawa",
    age: 26,
    nationality: "Polska",
    trainingAttendance: 92,
    matchHistory: [
      { date: "2024-03-15", opponent: "KS Cracovia", result: "2-1", minutes: 90, goals: 1, assists: 0, rating: 8.2 },
      { date: "2024-03-08", opponent: "Lech Poznań", result: "1-1", minutes: 90, goals: 0, assists: 0, rating: 7.5 },
      { date: "2024-03-01", opponent: "Legia Warszawa", result: "0-2", minutes: 90, goals: 0, assists: 0, rating: 6.5 },
    ]
  },
  { 
    id: 3, 
    name: "Adam Wiśniewski", 
    position: "CB", 
    number: 5, 
    rating: 80,
    photo: player1,
    preferredFoot: "Lewa",
    age: 29,
    nationality: "Polska",
    trainingAttendance: 88,
    matchHistory: [
      { date: "2024-03-15", opponent: "KS Cracovia", result: "2-1", minutes: 90, goals: 0, assists: 1, rating: 7.9 },
      { date: "2024-03-08", opponent: "Lech Poznań", result: "1-1", minutes: 90, goals: 0, assists: 0, rating: 7.2 },
      { date: "2024-03-01", opponent: "Legia Warszawa", result: "0-2", minutes: 77, goals: 0, assists: 0, rating: 6.3 },
    ]
  },
  { 
    id: 4, 
    name: "Marek Lewandowski", 
    position: "LB", 
    number: 3, 
    rating: 78,
    photo: player4,
    preferredFoot: "Lewa",
    age: 24,
    nationality: "Polska",
    trainingAttendance: 90,
    matchHistory: [
      { date: "2024-03-15", opponent: "KS Cracovia", result: "2-1", minutes: 90, goals: 0, assists: 1, rating: 7.7 },
      { date: "2024-03-08", opponent: "Lech Poznań", result: "1-1", minutes: 83, goals: 0, assists: 0, rating: 7.0 },
      { date: "2024-03-01", opponent: "Legia Warszawa", result: "0-2", minutes: 90, goals: 0, assists: 0, rating: 6.4 },
    ]
  },
  { 
    id: 5, 
    name: "Tomasz Kamiński", 
    position: "RB", 
    number: 2, 
    rating: 79,
    photo: player5,
    preferredFoot: "Prawa",
    age: 25,
    nationality: "Polska",
    trainingAttendance: 93,
    matchHistory: [
      { date: "2024-03-15", opponent: "KS Cracovia", result: "2-1", minutes: 90, goals: 0, assists: 0, rating: 7.5 },
      { date: "2024-03-08", opponent: "Lech Poznań", result: "1-1", minutes: 90, goals: 0, assists: 1, rating: 7.8 },
      { date: "2024-03-01", opponent: "Legia Warszawa", result: "0-2", minutes: 90, goals: 0, assists: 0, rating: 6.6 },
    ]
  },
  { 
    id: 6, 
    name: "Krzysztof Zieliński", 
    position: "CM", 
    number: 8, 
    rating: 84,
    photo: player1,
    preferredFoot: "Obie",
    age: 27,
    nationality: "Polska",
    trainingAttendance: 96,
    matchHistory: [
      { date: "2024-03-15", opponent: "KS Cracovia", result: "2-1", minutes: 90, goals: 1, assists: 1, rating: 8.8 },
      { date: "2024-03-08", opponent: "Lech Poznań", result: "1-1", minutes: 90, goals: 0, assists: 1, rating: 8.0 },
      { date: "2024-03-01", opponent: "Legia Warszawa", result: "0-2", minutes: 90, goals: 0, assists: 0, rating: 7.0 },
    ]
  },
  { 
    id: 7, 
    name: "Michał Szymański", 
    position: "CM", 
    number: 6, 
    rating: 83,
    photo: player4,
    preferredFoot: "Prawa",
    age: 26,
    nationality: "Polska",
    trainingAttendance: 91,
    matchHistory: [
      { date: "2024-03-15", opponent: "KS Cracovia", result: "2-1", minutes: 90, goals: 0, assists: 0, rating: 7.6 },
      { date: "2024-03-08", opponent: "Lech Poznań", result: "1-1", minutes: 90, goals: 1, assists: 0, rating: 7.9 },
      { date: "2024-03-01", opponent: "Legia Warszawa", result: "0-2", minutes: 73, goals: 0, assists: 0, rating: 6.7 },
    ]
  },
  { 
    id: 8, 
    name: "Paweł Woźniak", 
    position: "LM", 
    number: 11, 
    rating: 81,
    photo: player3,
    preferredFoot: "Lewa",
    age: 23,
    nationality: "Polska",
    trainingAttendance: 89,
    matchHistory: [
      { date: "2024-03-15", opponent: "KS Cracovia", result: "2-1", minutes: 85, goals: 0, assists: 1, rating: 7.8 },
      { date: "2024-03-08", opponent: "Lech Poznań", result: "1-1", minutes: 90, goals: 0, assists: 0, rating: 7.2 },
      { date: "2024-03-01", opponent: "Legia Warszawa", result: "0-2", minutes: 90, goals: 0, assists: 0, rating: 6.5 },
    ]
  },
  { 
    id: 9, 
    name: "Łukasz Dąbrowski", 
    position: "RM", 
    number: 7, 
    rating: 82,
    photo: player5,
    preferredFoot: "Prawa",
    age: 24,
    nationality: "Polska",
    trainingAttendance: 94,
    matchHistory: [
      { date: "2024-03-15", opponent: "KS Cracovia", result: "2-1", minutes: 90, goals: 1, assists: 0, rating: 8.1 },
      { date: "2024-03-08", opponent: "Lech Poznań", result: "1-1", minutes: 90, goals: 0, assists: 0, rating: 7.3 },
      { date: "2024-03-01", opponent: "Legia Warszawa", result: "0-2", minutes: 80, goals: 0, assists: 0, rating: 6.8 },
    ]
  },
  { 
    id: 10, 
    name: "Robert Kozłowski", 
    position: "ST", 
    number: 9, 
    rating: 88,
    photo: player1,
    preferredFoot: "Prawa",
    age: 29,
    nationality: "Polska",
    trainingAttendance: 97,
    matchHistory: [
      { date: "2024-03-15", opponent: "KS Cracovia", result: "2-1", minutes: 90, goals: 2, assists: 0, rating: 9.2 },
      { date: "2024-03-08", opponent: "Lech Poznań", result: "1-1", minutes: 90, goals: 1, assists: 0, rating: 8.5 },
      { date: "2024-03-01", opponent: "Legia Warszawa", result: "0-2", minutes: 90, goals: 0, assists: 0, rating: 7.2 },
    ]
  },
  { 
    id: 11, 
    name: "Mateusz Jankowski", 
    position: "ST", 
    number: 10, 
    rating: 86,
    photo: player2,
    preferredFoot: "Lewa",
    age: 25,
    nationality: "Polska",
    trainingAttendance: 95,
    matchHistory: [
      { date: "2024-03-15", opponent: "KS Cracovia", result: "2-1", minutes: 90, goals: 0, assists: 2, rating: 8.6 },
      { date: "2024-03-08", opponent: "Lech Poznań", result: "1-1", minutes: 90, goals: 0, assists: 1, rating: 7.9 },
      { date: "2024-03-01", opponent: "Legia Warszawa", result: "0-2", minutes: 90, goals: 0, assists: 0, rating: 7.0 },
    ]
  },
  { 
    id: 12, 
    name: "Jakub Mazur", 
    position: "GK", 
    number: 12, 
    rating: 76,
    photo: player3,
    preferredFoot: "Prawa",
    age: 22,
    nationality: "Polska",
    trainingAttendance: 85,
    matchHistory: [
      { date: "2024-02-25", opponent: "Wisła Kraków", result: "1-0", minutes: 90, goals: 0, assists: 0, rating: 7.5 },
      { date: "2024-02-18", opponent: "Górnik Zabrze", result: "2-2", minutes: 90, goals: 0, assists: 0, rating: 6.8 },
    ]
  },
  { 
    id: 13, 
    name: "Daniel Wojciechowski", 
    position: "CB", 
    number: 13, 
    rating: 77,
    photo: player4,
    preferredFoot: "Prawa",
    age: 27,
    nationality: "Polska",
    trainingAttendance: 87,
    matchHistory: [
      { date: "2024-02-25", opponent: "Wisła Kraków", result: "1-0", minutes: 90, goals: 0, assists: 0, rating: 7.3 },
      { date: "2024-02-18", opponent: "Górnik Zabrze", result: "2-2", minutes: 62, goals: 0, assists: 0, rating: 6.9 },
    ]
  },
  { 
    id: 14, 
    name: "Bartosz Kwiatkowski", 
    position: "CM", 
    number: 14, 
    rating: 79,
    photo: player5,
    preferredFoot: "Lewa",
    age: 23,
    nationality: "Polska",
    trainingAttendance: 90,
    matchHistory: [
      { date: "2024-02-25", opponent: "Wisła Kraków", result: "1-0", minutes: 78, goals: 1, assists: 0, rating: 7.8 },
      { date: "2024-02-18", opponent: "Górnik Zabrze", result: "2-2", minutes: 90, goals: 0, assists: 1, rating: 7.4 },
    ]
  },
  { 
    id: 15, 
    name: "Marcin Krawczyk", 
    position: "ST", 
    number: 15, 
    rating: 80,
    photo: player1,
    preferredFoot: "Prawa",
    age: 24,
    nationality: "Polska",
    trainingAttendance: 88,
    matchHistory: [
      { date: "2024-02-25", opponent: "Wisła Kraków", result: "1-0", minutes: 25, goals: 0, assists: 0, rating: 6.5 },
      { date: "2024-02-18", opponent: "Górnik Zabrze", result: "2-2", minutes: 31, goals: 0, assists: 0, rating: 6.8 },
    ]
  },
];
