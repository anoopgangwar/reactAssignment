const initialState  = {
	"totalView" : "12",
	"vendors" : [
		{
			"name" : "Delhi Box",
			"speciality" : "Steet Food, Fast Food, North Indian",
			"location" : "Shop no 9, Lajpat Nagar, New Delhi",
            "image": "../../img/image5.PNG"
		},
        {
			"name" : "United Coffee House Rewind",
			"speciality" : "Desserts,European,Mediterranean,North Indian,Multicuisine,Asian",
			"location" : "DLF Mall, Noida",
            "image": "../../img/image1.png"
		},
        {
			"name" : "SodaBottleOpenerWala",
			"speciality" : "Parsi",
			"location" : "DLF Mall of India, Sector 18, Noida",
            "image": "../../img/image2.PNG"
		},
        {
			"name" : "Cafe Delhi Heights",
			"speciality" : "Casual Eclectic",
			"location" : "DLF Mall of India, Sector 18, Noida",
            "image": "../../img/image3.PNG"
		},
        {
			"name" : "Mamagoto",
			"speciality" : "Pan Asian",
			"location" : "DLF Mall of India, Sector 18, Noida",
            "image": "../../img/image4.PNG"
		}
	]
}


const reducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type == 'MENU_CLICKED'){
        newState.totalView++;
    }
    return newState;
};

export default reducer;