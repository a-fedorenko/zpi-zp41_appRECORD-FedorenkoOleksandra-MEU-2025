const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    createPromis();
});

function createPromis() {
    const delay = form.elements['delay'].value;
    const state = form.elements['state'].value;

    const res = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') resolve(delay);
            if (state === 'rejected') reject(delay);
        }, delay);
    });

    res.then((delay) => iziToast.info({
        title: 'Hello',
        message: `Fulfilled promise in ${delay}ms`
    })).catch((delay) => iziToast.error({
        title: 'Hello',
        message: `Rejected promise in ${delay}ms`
    }));
}