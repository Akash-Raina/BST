export const pagination = (index:number, size:number)=>{
    const pageIndex = index;
    const limit = size;
    const offset = (pageIndex - 1) * limit

    return {
        pageIndex, limit, offset
    }
}