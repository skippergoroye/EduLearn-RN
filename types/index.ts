export interface Category {
    id: string;
    name:  string;
    icon:  string;
}




export interface Course {
    id: number;
    title: string;
    subtitle:  string;
    image_480x270: string;
    is_paid: string;
    price: boolean;
    num_reviews: number;
}



export interface SearchResponse {
    result: Course[];
}