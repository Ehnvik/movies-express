export interface IMovie {
  id?: number,
  name: string,
  description: string,
  imageUrl: string
}


export const movies = [
  {
    id: 76,
    name: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    id: 77,
    name: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg",
  },
  {
    id: 78,
    name: "Le fabuleux destin d'Amélie Poulain",
    description:
      "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  },
  {
    id: 79,
    name: "Modern Times",
    description:
      "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    id: 80,
    name: "The Great Dictator",
    description:
      "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,676,1000_AL_.jpg",
  },
  {
    id: 81,
    name: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    description:
      "An insane general triggers a path to nuclear holocaust that a war room full of politicians and generals frantically tries to stop.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTkxYjUxNDYtZGY0My00NTc2LThiZmYtNmNmNmU0NGVkZWYwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
  },
  {
    id: 82,
    name: "Back to the Future",
    description:
      "Marty McFly, a 17h school student, is accidentally sent 30he past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,643,1000_AL_.jpg",
  },
  {
    id: 83,
    name: "City Lights",
    description:
      "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: 84,
    name: "La vita è bella",
    description:
      "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX670_AL_.jpg",
  },
  {
    id: 85,
    name: "Intouchables",
    description:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  },
  {
    id: 86,
    name: "Forrest Gump",
    description:
      "JFK, LBJ, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
  {
    id: 87,
    name: "Hababam Sinifi",
    description:
      "Lazy, uneducated students share a very close bond. They live together in the dormitory, where they plan their latest pranks. When a new headmaster arrives, the students naturally try to overthrow him. A comic war of nitwits follows.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjJlNWYwZWItYmNhYy00Yjc1LWFkMzYtZjgxZDBjZjZmODg0XkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_.jpg",
  },
  {
    id: 88,
    name: "Memento",
    description:
      "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,681,1000_AL_.jpg",
  },
  {
    id: 89,
    name: "The Departed",
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg",
  },
  {
    id: 90,
    name: "The Prestige",
    description:
      "After a tragic accident two stage magicians engage in a battle to create the ultimate illusion whilst sacrificing everything they have to outwit the other.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
  },
  {
    id: 91,
    name: "The Usual Suspects",
    description:
      "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,670,1000_AL_.jpg",
  },
  {
    id: 92,
    name: "Léon",
    description:
      "Mathilda, a 12l, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDAwYTlhMDEtNTg0OS00NDY2LWJjOWItNWY3YTZkM2UxYzUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,710,1000_AL_.jpg",
  },
  {
    id: 93,
    name: "Seven",
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,639,1000_AL_.jpg",
  },
  {
    id: 94,
    name: "The Silence of the Lambs",
    description:
      "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
  },
  {
    id: 95,
    name: "Vishwaroopam",
    description:
      "Vishwanathan, a Kathak dance teacher in New York, is in a rather happy marriage with Nirupama who is a nuclear oncologist. She hires a detective to keep a watch on her husband, who apparently ends up in a wrong place that reveals Vishwanathan's true identity.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMzA0YzEzN2QtOWNhYi00MWM3LWI0MmMtOWE0NTNlMWYzYjJkXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_SX636_CR0,0,636,999_AL_.jpg",
  },
  {
    id: 96,
    name: "Raiders of the Lost Ark",
    description:
      "Archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY1000_CR0,0,664,1000_AL_.jpg",
  },
  {
    id: 97,
    name: "Gladiator",
    description:
      "When a Roman General is betrayed, and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    id: 98,
    name: "Terminator 2: Judgment day",
    description:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten, John Connor, from a more advanced cyborg.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDhlMzcxMGMtMDI5Yi00NmQ5LTg4MDItMGM5OTgxZGExZjRkXkEyXkFqcGdeQXVyMjU3NTI0Mg@@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
  },
  {
    id: 99,
    name: "Baahubali 2: The Conclusion",
    description:
      "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYmE1MTg0MDMtZmFlMC00ZGM3LTlkYWItNzEzOWRmODlhNDQ2XkEyXkFqcGdeQXVyNzMxMzYyOTI@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  },
  {
    id: 100,
    name: "The Lord of the Rings: The Two Towers",
    description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,684,1000_AL_.jpg",
  },
  {
    id: 101,
    name: "Star Wars",
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,643,1000_AL_.jpg",
  },
  {
    id: 102,
    name: "Dangal",
    description:
      "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY1000_CR0,0,713,1000_AL_.jpg",
  },
  {
    id: 103,
    name: "Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
  },
  {
    id: 104,
    name: "Star Wars: Episode V - The Empire Strikes Back",
    description:
      "After the rebels are overpowered by the Empire on their newly established base, Luke Skywalker begins Jedi training with Master Yoda. His friends accept shelter from a questionable ally as Darth Vader hunts them in a plan to capture Luke.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg",
  },
  {
    id: 105,
    name: "Inception",
    description:
      "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    id: 106,
    name: "Alien",
    description:
      "After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious life-form, and they soon realize that its life cycle has merely begun.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,678,1000_AL_.jpg",
  },
  {
    id: 107,
    name: "Aliens",
    description:
      "The moon from Alien (1979) has been colonized, but contact is lost. This time, the rescue team has impressive firepower, but will it be enough?",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,643,1000_AL_.jpg",
  },
];

export const getAllMovies = () => {
  return movies;
}

export const getMovieById = (id:number) => {
  const movie = movies.find(m => m.id===id);
  return movie;
}

export const addMovie = (movie: IMovie) => {
  const lastMovie = movies.slice(-1)[0];
  let id = lastMovie.id;
  id=id ? id+1: 1;
  movies.push({
    id,
    name: movie.name,
    description: movie.description,
    imageUrl: movie.imageUrl
  })
}

export const updateMovie = (id: number, movie:IMovie) => {
  const i = movies.findIndex(m => m.id===id);
  movies[i].name = movie.name;
  movies[i].description = movie.description;
  movies[i].imageUrl = movie.imageUrl;

}

export const deleteMovieById = (id:number)=> {
  const i = movies.findIndex(m => m.id===id);
  movies.splice(i,1);
}