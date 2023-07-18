(() => {
    const startTime = Date.now();
    window.addEventListener("load", () => {
        const endTime = Date.now();
        document.getElementById("load_test").innerText = `Current DOM page load time is ${endTime - startTime} ms`;
    });
})();