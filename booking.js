  const slots = [
    "09:00", "10:00", "11:00",
    "13:00", "14:00", "15:00"
  ];

  const container = document.getElementById("time-slots");
  let booked = JSON.parse(localStorage.getItem("bookedSlots")) || [];

  function renderSlots() {
    container.innerHTML = "";
    slots.forEach(time => {
      const div = document.createElement("div");
      div.classList.add("slot");
      div.textContent = time;

      if (booked.includes(time)) {
        div.classList.add("booked");
      }

      div.addEventListener("click", () => bookSlot(time));
      container.appendChild(div);
    });
  }

  function bookSlot(time) {
    if (booked.includes(time)) {
      alert(`The ${time} slot is already booked.`);
      return;
    }
    booked.push(time);
    localStorage.setItem("bookedSlots", JSON.stringify(booked));
    alert(`You booked the ${time} slot!`);
    renderSlots();
  }

  renderSlots();
