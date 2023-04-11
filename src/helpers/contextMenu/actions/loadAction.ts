// const load = (files) => {
//     console.log(files);
//     console.log(files.files);
//     file = files.files[0];

//     const reader = new FileReader();
//     reader.readAsText(file);

//     reader.onload = function () {
//         console.log(reader.result);
//     };
// };

export const loadAction = () => {
    const input = document.createElement("input");
    input.style.display = "none";
    input.type = "file";
    document.body.appendChild(input);
    input.click();
    setTimeout(() => {
        input.remove();
    }, 100);
};
