function timestamp (date = "") {
    return date ? Date(date).getTime() : Date.now();

}
export default timestamp