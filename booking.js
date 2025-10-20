  // Hardcoded available slots per date
  const availableSlots = {
    "2025-10-16": ["09:00", "10:00", "14:00"],
    "2025-10-17": ["11:00", "13:00"],
    "2025-10-18": [],
    "2025-10-19": [],
    "2025-10-20": ["09:00", "10:00", "14:00"],
    "2025-10-21": ["09:00", "10:00", "14:00"],
    "2025-10-22": ["09:00", "10:00", "14:00"],
    "2025-10-23": ["11:00", "13:00"],
    "2025-10-24": ["09:30", "15:00"],
    "2025-10-25": [],
    "2025-10-26": [],
    "2025-10-27": ["09:30", "15:00"],
    "2025-10-28": ["11:00", "13:00"],
  };

  const booked = JSON.parse(localStorage.getItem("bookedSlots")) || {};
  const calendar = document.getElementById("calendar");
  const emailForm = document.getElementById("email-form");
  const confirmation = document.getElementById("confirmation");
  const contactBtn = document.querySelector(".contact-btn");

  let selectedDate = null;
  let selectedTime = null;

  // 1️⃣ Render calendar days
  function renderCalendar() {
    calendar.innerHTML = "";
    Object.keys(availableSlots).forEach(date => {
      const div = document.createElement("div");
      div.classList.add("day");

      const hasSlots = availableSlots[date].length > 0;
      if (!hasSlots) div.classList.add("unavailable");

      div.textContent = new Date(date).toLocaleDateString("da-DK", {
        weekday: "short",
        day: "numeric",
        month: "short"
      });

      if (hasSlots) {
        div.addEventListener("click", () => showSlots(date, div));
      }
      calendar.appendChild(div);
    });
  }

  // 2️⃣ Show slots for a selected date
  function showSlots(date, dayElement) {
    contactBtn.style.display = "none";
    selectedDate = date;
    selectedTime = null;
    document.querySelectorAll(".day").forEach(d => d.classList.remove("active"));
    dayElement.classList.add("active");

    const existingSlots = document.querySelector(".slots");
    if (existingSlots) existingSlots.remove();

    const slotContainer = document.createElement("div");
    slotContainer.classList.add("slots");

    availableSlots[date].forEach(time => {
      const slot = document.createElement("div");
      if (booked[date]?.includes(time)) slot.classList.add("booked");
      slot.classList.add("slot");
      slot.textContent = time;
      slot.addEventListener("click", () => selectSlot(date, time, slot));
      slotContainer.appendChild(slot);
    });

    calendar.insertAdjacentElement("afterend", slotContainer);
  }

  // 3️⃣ Select a specific time slot
  function selectSlot(date, time, slot) {
    selectedDate = date;
    selectedTime = time;
    confirmation.textContent = "";
      document.querySelectorAll(".slot").forEach( d => d.classList.remove("active"));
    slot.classList.add("active");
    updateMailtoLink();
  }

  function updateMailtoLink() {
    let subject = "Anmodning om møde";
    let body = "Kære Refusionsportalen %0A%0A";
    if (selectedDate && selectedTime) {
      body += `Jeg vil gerne booke et møde den ${selectedDate} klokken ${selectedTime}.%0A%0A`;
    }
    body += "Tak!";

    const href = `mailto:bk@refusionsportalen.dk?subject=${encodeURIComponent(subject)}&body=${body}`;
    contactBtn.style.display = "inline-block";
    contactBtn.href = href;
  }

  renderCalendar();
