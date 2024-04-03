document.querySelectorAll('.counter').forEach(counter => {
    let count = 0;
    const target = +counter.getAttribute('data-target');
    const increment = target / 200;

    const updateCounter = () => {
        if (count < target) {
            count = Math.min(count + increment, target);
            counter.innerText = formatCount(count);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = formatCount(target);
        }
    };

    const formatCount = (count) => {
        if (count >= 1e6) {
            return (count / 1e6).toFixed(1) + "M";
        } else if (count >= 1e3) {
            return (count / 1e3).toFixed(1) + "K";
        } else {
            return count;
        }
    };

    updateCounter();
});
