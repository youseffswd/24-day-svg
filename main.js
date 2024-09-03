const buttons = document.querySelectorAll(
    ".style-scope.ytmusic-shelf-renderer[num-flex-columns='3']"
);

for (const btn of buttons) {
    btn.querySelector("#button-shape").click();
    await new Promise(resolve => setTimeout(resolve, 500));
    document
        .querySelector("ytmusic-menu-service-item-renderer:last-of-type")
        .click();
    await new Promise(resolve => setTimeout(resolve, 500));
}
