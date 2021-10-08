const paginate = (followers) => {
    const perPage = 9;
    const numberOfPages = Math.ceil(followers.length / perPage);
    const newFollowers = Array.from({length:numberOfPages},(_,index) => {
        const startPos = index * perPage;
        const page = followers.slice(startPos,startPos + perPage);
        return page;
    });
    return newFollowers;
}

export default paginate
