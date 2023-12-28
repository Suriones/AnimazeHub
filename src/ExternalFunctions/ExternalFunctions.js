export const time = () => {
    const date = new Date();
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours().toString().length === 1 ? "0" + date.getHours() : + date.getHours()}:${date.getMinutes().toString().length === 1 ? "0" + date.getMinutes() : date.getMinutes()}`;
}