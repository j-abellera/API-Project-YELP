const apiKey = 'ydPe1Aqn2z5w_P_LITULF2r8XMIlS1IIzS-zGdK8vfptvX9tuSe0bXJX0lgDKYEk8a5hd3jbqo1a4m9GgicqS2_FLTng36x1biKgoc-4VeDoLNeg7uTr8aN3N9N-Y3Yx';

export const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {headers: {
                Authorization: `Bearer ${apiKey}`
            }}).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if(jsonResponse.businesses) {
                    const responseArray = []
                    const json = jsonResponse.businesses;
                    // console.log(json)
                    json.map(business => {
                        const { id, image_url, name, price, location, categories, rating, url, review_count } = business;
                        const businessInfo = {id: id, image_url: image_url, name: name, price: price, location: location, categories: categories, rating: rating, url: url, review_count: review_count};
                        responseArray.push(businessInfo);
                    });
                    // console.log(responseArray)
                    return responseArray;
                }
            })
        
    }
};
