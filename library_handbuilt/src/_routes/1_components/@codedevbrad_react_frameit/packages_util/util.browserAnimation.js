
export const browserSpecificAnimation = ( curr , animation ) => {
    curr.style.transform = animation;
    curr.style.webkitTransform = animation;
    curr.style.msTransform = animation;
}
