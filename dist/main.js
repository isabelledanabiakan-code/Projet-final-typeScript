/*import { Event } from "./models/Event";

const events: Event[]=[];

const testEvent = new Event(
    1,
    "Test Event",
    "Description test",
    new Date("2025-01-10"),
    "Salle A",
    "conférence",
    50
);

events.push(testEvent);

console.log(events);*/
/*import { Event } from "./models/Event";
import { User } from "./models/User";
import { Registration } from "./models/Registration";

const events: Event[] = [];
const users: User[]=[];
const registrations: Registration[]= [];

/*function afficherEvenements() {
  const container = document.getElementById("eventList");
  if (!container) return;

  container.innerHTML = "";

  events.forEach(event => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.location}</p>
      <p>${event.date.toDateString()}</p>
    `;
    container.appendChild(div);
  });
}*/
/*function afficherEvenements() {
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
}


events.push(
  new Event(1, "Test", "Desc", new Date("2025-01-10"), "Salle A", "conférence", 10)
);
document.getElementById("addEvent")?.addEventListener("click",()=> {
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const date = (document.getElementById("date") as HTMLInputElement).value;
    const location = (document.getElementById("location")as HTMLInputElement).value;
    const capacity = Number( (document.getElementById("capacity")as HTMLInputElement).value);
    const description =(document.getElementById("description")as HTMLInputElement).value;
    const category = (document.getElementById("category")as HTMLSelectElement).value;
    
    const event = new Event (
        events.length +1 ,
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
});*/
console.log("🔥 main.ts est bien exécuté");
alert("JS chargé");
/*import { Event } from "./models/Event.js";
import { User } from "./models/User.js";
import { Registration } from "./models/Registration.js";
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b;
    const events = [];
    const users = [];
    const registrations = [];
    
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
        <h3>
  ${event.title}
  <span class="badge ${event.category}">
    ${event.category.toUpperCase()}
  </span>
</h3>

        <p><strong>Description :</strong> ${event.description || "Aucune"}</p>
        <p><strong>Date :</strong> ${event.date.toLocaleDateString()}</p>
        <p><strong>Lieu :</strong> ${event.location}</p>
        <p><strong>Catégorie :</strong> ${event.category}</p>
        <p><strong>Capacité :</strong> ${event.capacity}</p>
        <p><strong>Places restantes :</strong> ${event.capacity -
                registrations.filter(r => r.event.id === event.id).length}</p>
      `;
            container.appendChild(div);
        });
    }*/

        /*function afficherEvenements() {
  const container = document.getElementById("eventList");
  if (!container) return;

  container.innerHTML = "";

  if (events.length === 0) {
    container.innerHTML = "<p>Aucun événement disponible.</p>";
    return;
  }

  events.forEach(event => {
    const div = document.createElement("div");
    div.className = "event-card";

    div.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Description :</strong> ${event.description}</p>
      <p><strong>Date :</strong> ${event.date.toLocaleDateString()}</p>
      <p><strong>Lieu :</strong> ${event.location}</p>
      <p><strong>Catégorie :</strong> ${event.category}</p>
      <p><strong>Capacité :</strong> ${event.capacity}</p>
    `;

    container.appendChild(div);
  });
}*/

/*function afficherEvenements() {
  const container = document.getElementById("eventList");
  const filter = (document.getElementById("filterCategory") as HTMLSelectElement)?.value;

  if (!container) return;
  container.innerHTML = "";

  let filteredEvents = events;

  if (filter) {
    filteredEvents = events.filter(e => e.category === filter);
  }

  if (filteredEvents.length === 0) {
    container.innerHTML = "<p>Aucun événement disponible.</p>";
    return;
  }

  filteredEvents.forEach(event => {
    const div = document.createElement("div");
    div.className = "event-card";

    div.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <p>${event.date.toLocaleDateString()}</p>
      <p>${event.location}</p>
      <p>${event.category}</p>
    `;

    container.appendChild(div);
  });
}*/

 

    /*function estDejaInscrit(email, eventId) {
        return registrations.some(r => r.user.email === email && r.event.id === eventId);
    }
    function estComplet(event) {
        return registrations.filter(r => r.event.id === event.id).length >= event.capacity;
    }
    function inscrire(user, event) {
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
    //events.push(new Event(1, "Test", "Desc", new Date("2026-01-10"), "Salle A", "conférence", 10)); !!!
    afficherEvenements();
    (_a = document.getElementById("addEvent")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const title = document.getElementById("title").value;
        const date = document.getElementById("date").value;
        const location = document.getElementById("location").value;
        const capacity = Number(document.getElementById("capacity").value);
        const description = document.getElementById("description").value;
        const category = document.getElementById("category").value;
        const event = new Event(events.length + 1, title, description, new Date(date), location, category, capacity);
        events.push(event);
        afficherEvenements();
    });
    (_b = document.getElementById("registerBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        const name = document.getElementById("userName").value;
        const email = document.getElementById("userEmail").value;
        const eventId = Number(document.getElementById("eventId").value);
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
afficherEvenements();*/
import { Event } from "./models/Event.js";
import { User } from "./models/User.js";
import { Registration } from "./models/Registration.js";

document.addEventListener("DOMContentLoaded", () => {

  const events = [];
  const users = [];
  const registrations = [];

  // ================= AFFICHER EVENEMENTS =================
  function afficherEvenements() {
    const container = document.getElementById("eventList");
    if (!container) return;

    const filterCategory = document.getElementById("filterCategory").value;
    const filterDate = document.getElementById("filterDate").value;

    container.innerHTML = "";

    events
      .filter(event => {
        let ok = true;

        if (filterCategory && event.category !== filterCategory) {
          ok = false;
        }

        if (filterDate) {
          const d = event.date.toISOString().split("T")[0];
          if (d !== filterDate) ok = false;
        }

        return ok;
      })
      .forEach(event => {
        const div = document.createElement("div");

        div.innerHTML = `
          <h3>${event.title}</h3>
          <p>Date : ${event.date.toLocaleDateString()}</p>
          <p>Catégorie : ${event.category}</p>
          <button data-id="${event.id}">Voir détails</button>
        `;

        container.appendChild(div);
      });

    activerBoutonsDetails();
  }

  // ================= DETAILS EVENEMENT =================
  function activerBoutonsDetails() {
    document.querySelectorAll("#eventList button").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        afficherDetails(id);
      });
    });
  }

  function afficherDetails(id) {
    const event = events.find(e => e.id === id);
    if (!event) return;

    const details = document.getElementById("eventDetails");

    details.innerHTML = `
      <h3>${event.title}</h3>
      <p>Description : ${event.description}</p>
      <p>Date : ${event.date.toLocaleDateString()}</p>
      <p>Lieu : ${event.location}</p>
      <p>Catégorie : ${event.category}</p>
      <p>Capacité : ${event.capacity}</p>
      <p>Places restantes :
        ${event.capacity -
          registrations.filter(r => r.event.id === event.id).length}
      </p>
    `;
  }

  // ================= INSCRIPTION =================
  function estDejaInscrit(email, eventId) {
    return registrations.some(
      r => r.user.email === email && r.event.id === eventId
    );
  }

  function estComplet(event) {
    return registrations.filter(r => r.event.id === event.id).length >= event.capacity;
  }

  function inscrire(user, event) {
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

  // ================= AJOUT EVENEMENT =================
  document.getElementById("addEvent").addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const capacity = Number(document.getElementById("capacity").value);
    const category = document.getElementById("category").value;

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

  // ================= INSCRIPTION CLICK =================
  document.getElementById("registerBtn").addEventListener("click", () => {
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const eventId = Number(document.getElementById("eventId").value);

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

  // ================= FILTRES =================
  document.getElementById("filterCategory")
    .addEventListener("change", afficherEvenements);

  document.getElementById("filterDate")
    .addEventListener("change", afficherEvenements);

});

