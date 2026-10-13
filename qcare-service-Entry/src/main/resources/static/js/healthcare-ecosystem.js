
document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".ecosystem-product");
    const popup = document.getElementById("productMessage");
    const popupTitle = document.getElementById("productMessageTitle");
    const popupText = document.getElementById("productMessageText");
    const closeButton = document.getElementById("closeProductMessage");

    if (!products.length || !popup || !popupTitle || !popupText) {
        return;
    }

    const messages = {
        medimate: {
            title: "MEDIMATE — Hospital Management",
            text: "I specialize in hospital management, bringing appointments, consultations, and medicine management together to help healthcare teams coordinate patient care."
        },
        mediplus: {
            title: "MEDIPLUS — Emergency & Patient Safety",
            text: "I specialize in emergency coordination, SOS support, patient safety, and live tracking to help people and healthcare teams respond more effectively."
        },
        mediq: {
            title: "MEDIQ — Smart Queues & Tokens",
            text: "I specialize in smart queues and digital token management, helping patients monitor their turn, receive timely updates, and reduce unnecessary waiting."
        }
    };

    function closePopup() {
        popup.hidden = true;

        products.forEach(product => {
            product.classList.remove("is-active");
            product.setAttribute("aria-expanded", "false");
        });
    }

    products.forEach(product => {
        product.addEventListener("click", () => {
            const key = product.dataset.product;
            const message = messages[key];

            if (!message) return;

            // Clicking the active product closes its popup.
            if (
                product.classList.contains("is-active") &&
                !popup.hidden
            ) {
                closePopup();
                return;
            }

            products.forEach(item => {
                item.classList.remove("is-active");
                item.setAttribute("aria-expanded", "false");
            });

            product.classList.add("is-active");
            product.setAttribute("aria-expanded", "true");

            popupTitle.textContent = message.title;
            popupText.textContent = message.text;
            popup.hidden = false;
        });
    });

    closeButton?.addEventListener("click", closePopup);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !popup.hidden) {
            closePopup();
        }
    });
});
