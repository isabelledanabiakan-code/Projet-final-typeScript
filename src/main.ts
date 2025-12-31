
console.log("🔥 main.ts est bien exécuté");
alert("JS chargé");

import { Event } from "./models/Event";
import { User } from "./models/User";
import { Registration } from "./models/Registration";

document.addEventListener("DOMContentLoaded", () => {

  const events: Event[] = [];
  const users: User[] = [];
  const registrations: Registration[] = [];

  function afficherEvenements() {
    const container = document.getElementById("eventList");
    if (!container) return;

    container.innerHTML = "";

    events.forEach(event => {
      const div = document.createElement("div");
      div.style.border = "1px solid #ccc";
      div.style.padding = "10px";
      div.style.marginBottom = "10px";

      div.innerHTML = `
        <h3>${event.title}</h3>
        <p><strong>Description :</strong> ${event.description || "Aucune"}</p>
        <p><strong>Date :</strong> ${event.date.toLocaleDateString()}</p>
        <p><strong>Lieu :</strong> ${event.location}</p>
        <p><strong>Catégorie :</strong> ${event.category}</p>
        <p><strong>Capacité :</strong> ${event.capacity}</p>
        <p><strong>Places restantes :</strong> ${
          event.capacity -
          registrations.filter(r => r.event.id === event.id).length
        }</p>
      `;

      container.appendChild(div);
    });
  }

  function estDejaInscrit(email: string, eventId: number): boolean {
    return registrations.some(r =>
      r.user.email === email && r.event.id === eventId
    );
  }

  function estComplet(event: Event): boolean {
    return registrations.filter(r => r.event.id === event.id).length >= event.capacity;
  }

  function inscrire(user: User, event: Event) {
    if (event.date < new Date()) {
      alert("Événement déjà passé");
      return;
    }

    if (estComplet(event)) {
      alert("Événement complet");
      return;
    }

    if (estDejaInscrit(user.email, event.id)) {
      alert("Utilisateur déjà inscrit");
      return;
    }

    registrations.push(new Registration(user, event));
    alert("Inscription réussie");
    afficherEvenements();
  }

  // 👉 ÉVÉNEMENT TEST (DOIT S’AFFICHER)
  events.push(
    new Event(1, "Test", "Desc", new Date("2026-01-10"), "Salle A", "conférence", 10)
  );
  afficherEvenements();

  document.getElementById("addEvent")?.addEventListener("click", () => {
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const date = (document.getElementById("date") as HTMLInputElement).value;
    const location = (document.getElementById("location") as HTMLInputElement).value;
    const capacity = Number(
      (document.getElementById("capacity") as HTMLInputElement).value
    );
    const description = (document.getElementById("description") as HTMLInputElement).value;
    const category = (document.getElementById("category") as HTMLSelectElement).value;

    const event = new Event(
      events.length + 1,
      title,
      description,
      new Date(date),
      location,
      category,
      capacity
    );

    events.push(event);
    afficherEvenements();
  });

  document.getElementById("registerBtn")?.addEventListener("click", () => {
    const name = (document.getElementById("userName") as HTMLInputElement).value;
    const email = (document.getElementById("userEmail") as HTMLInputElement).value;
    const eventId = Number(
      (document.getElementById("eventId") as HTMLInputElement).value
    );

    const event = events.find(e => e.id === eventId);
    if (!event) {
      alert("Événement introuvable");
      return;
    }

    let user = users.find(u => u.email === email);
    if (!user) {
      user = new User(name, email);
      users.push(user);
    }

    inscrire(user, event);
  });

});




