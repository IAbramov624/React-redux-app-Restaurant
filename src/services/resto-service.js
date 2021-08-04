export default class RestoService {
    async getMenuItems() {
        const url = "http://localhost:3000/menu";
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }
}

//     getMenuItems = async () => {
//         const res = await this.getResource()
//         return res.map(this._transformItem);
//     }

//     _transformItem = (item) => {
//         let {title, price, url, category, id} = item;

//         return {
//             title: title,
// 			price: price,
// 			url: url,
// 			category: category,
// 			id: id
//         }
//     }
// }