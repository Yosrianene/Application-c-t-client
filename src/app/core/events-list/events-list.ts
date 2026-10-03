import { Component, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

interface Event {
  id: number;
  titre: string;
  description: string;
  date: Date;
  lieu: string;
  prix: number;
  imageUrl: string;
  nbPlaces: number;
  category: string;
  nbLikes: number;
}

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './events-list.html',
  styleUrl: './events-list.css'
})
export class EventsList {

  // Liste des événements sous forme de Signal
  events = signal<Event[]>([
    {
      id: 1,
      titre: 'Angular Workshops',
      description: 'Découvrez les nouveautés d Angular et développez vos compétences.',
      date: new Date('2026-10-15'),
      lieu: 'Tunis',
      prix: 50,
      imageUrl: 'imagesevent.jpg',
      nbPlaces: 30,
      category: 'Technologie',
      nbLikes: 0
    },

    {
      id: 2,
      titre: 'Music Festival 2026',
      description: 'Un festival musical avec plusieurs artistes et groupes.',
      date: new Date('2026-10-22'),
      lieu: 'Sousse',
      prix: 80,
      imageUrl: 'imagesevent.jpg',
      nbPlaces: 500,
      category: 'Musique',
      nbLikes: 0
    },

    {
      id: 3,
      titre: 'AI & Innovation Conference',
      description: 'Une conférence consacrée à l intelligence artificielle et à l innovation.',
      date: new Date('2026-11-18'),
      lieu: 'Hammamet',
      prix: 100,
      imageUrl: 'imagesevent.jpg',
      nbPlaces: 150,
      category: 'Technologie',
      nbLikes: 0
    },

    {
      id: 4,
      titre: 'Startup Meetup',
      description: 'Une rencontre entre entrepreneurs, étudiants et professionnels.',
      date: new Date('2026-11-05'),
      lieu: 'Tunis',
      prix: 30,
      imageUrl: 'imagesevent.jpg',
      nbPlaces: 100,
      category: 'Business',
      nbLikes: 0
    }
  ]);

  // Liste des favoris sous forme de Signal
  favoris = signal<number[]>([]);


  // Ajouter un Like
  likeEvent(event: Event): void {

    this.events.update(events =>
      events.map(e =>
        e.id === event.id
          ? { ...e, nbLikes: e.nbLikes + 1 }
          : e
      )
    );

  }


  // Ajouter aux favoris
  ajouterFavori(event: Event): void {

    this.favoris.update(favoris =>
      favoris.includes(event.id)
        ? favoris
        : [...favoris, event.id]
    );

  }


  // Retirer des favoris
  retirerFavori(event: Event): void {

    this.favoris.update(favoris =>
      favoris.filter(id => id !== event.id)
    );

  }


  // Vérifier si un événement est favori
  estFavori(event: Event): boolean {

    return this.favoris().includes(event.id);

  }


  // Retourner la liste complète des événements favoris
  getEvenementsFavoris(): Event[] {

    return this.events().filter(event =>
      this.favoris().includes(event.id)
    );

  }

}
